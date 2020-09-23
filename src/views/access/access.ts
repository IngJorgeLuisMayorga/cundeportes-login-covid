/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator';

import UIPictureImageComponent from '@/components/images/picture.image.vue'; // @ is an alias to /src
import UICCInputComponent from '@/components/inputs/cc.input.vue'; // @ is an alias to /src
import UIParkInputComponent from '@/components/inputs/park.input.vue'; // @ is an alias to /src
import UICategoryInputComponent from '@/components/inputs/category.input.vue'; // @ is an alias to /src

import UISubmitButtonComponent from '@/components/buttons/submit.button.vue'; // @ is an alias to /src

import { getUserByCedula } from '@/helpers/getUserByCedula.helper';
import { getBookById } from '@/helpers/getBookById.helper';

import moment, { weekdays } from  'moment';
import IFireBasePark from '@/models/firebase/IFireBasePark.model';
import { getParksFromDB } from '@/helpers/getParksFromDB.helper';
import IFirebaseHourWeekday from '@/models/firebase/IFirebaseHourWeekday.interface';
import { checkBooking } from '@/helpers/checkBooking.helper';


@Component({
  components: {

    'ui-cc-input': UICCInputComponent,
    'ui-park-input': UIParkInputComponent,
    'ui-category-input': UICategoryInputComponent,

    'ui-picture': UIPictureImageComponent,
    'ui-submit': UISubmitButtonComponent ,
  },
})
export default class Home extends Vue {
  
  public cover = require('@/assets/cover-banner-2.jpg');
  public cedula = '';
  public category = '';

  public parks: IFireBasePark[] = [] ;
  public park: null | IFireBasePark = null ;

  public hours: IFirebaseHourWeekday[] = [] ;
  public hour: IFirebaseHourWeekday | null = null;

  private async mounted(){
    this.parks = await getParksFromDB();
  }

  public onCedulaType($cedula: string): void {
      this.cedula = $cedula;
  }

  public updateHours(){
    const date = new Date();
    const dateDaysOfTheWeek = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday',]
    const dateDayOfTheWeek = 4;//date.getDay() + 0;
    const park = this.park;
    if(park){
    const weekdaysArray = (park.weekdays[dateDaysOfTheWeek[dateDayOfTheWeek]] as IFirebaseHourWeekday[]);
    if(weekdaysArray){
      console.log(weekdaysArray)
      console.log(this.category)
        const hours = weekdaysArray
        .filter(weekday => {
          if((weekday.aviableFor).length === 2){
            return weekday.aviableFor[1].includes(this.category as any);
          } else {
            return weekday.aviableFor.includes(this.category as any)
          }
        }).filter((hour:IFirebaseHourWeekday)  => {
          const currentHour = 10//new Date().getHours();
          const hoursAsNumbers = {
            hour600am_730am: 6,
            hour800am_930am: 8,
            hour1000am_1130am: 10,
            hour1200am_0130pm: 12,
            hour800am_900am: 8,
            hour1000am_1100am: 10,
            hour0300pm_0400pm: 15,
            hour0500pm_0600pm: 17,
          }
          return hoursAsNumbers[hour.hour] > currentHour
        })

        
        this.hours = hours;
      }
    }
  
  }
  public setHour(hour){
    this.hour = hour
  }
  public onParkChange($park: IFireBasePark): void {
      this.park = $park;
      this.updateHours();
  }

  public getHourLabel($hour: any): any{
    return {
      hour600am_730am: '6:00 am - 7:30 am',
      hour800am_930am: '8:00 am - 9:30 am',
      hour1000am_1130am: '10:00 am - 11:30 am',
      hour1200am_0130pm: '12:00 am - 1:30 pm',
      hour0300pm_0400pm: '3:00 pm - 4:00 pm',
      hour0500pm_0600pm: '5:00 pm - 6:00 pm',
      hour800am_900am: '8:00 am - 9:00 am',
      hour1000am_1100am: '10:00 am - 11:00 am',
    }[$hour]
  }

  public onCategoryChange($category: string): void {
      this.category = $category;
      this.updateHours();
  }

  public async doSubmit() {

    try {

        // check if cc,type,date,hour has a reservation in user and park
        const cc = this.cedula;
        const client = this.category;
        const park = this.park;
        const date = new Date();
        const hour = this.hour;
        const hours = this.hours;

        const isChecked = await checkBooking(cc,client,park,date,hour);
        if(isChecked){

          // go to check
          const user = await getUserByCedula(cc + '');
          sessionStorage.setItem('user',JSON.stringify(user))
          sessionStorage.setItem('check_cc',JSON.stringify(cc))
          sessionStorage.setItem('check_client',JSON.stringify(client))
          sessionStorage.setItem('check_date',JSON.stringify(date))
          sessionStorage.setItem('check_hour',JSON.stringify(hour))
          sessionStorage.setItem('check_hours',JSON.stringify(hours))

          this.$router.push({ name: 'Check' });

        } else {
          // swal alarm
        }


    } catch(error) {
      this.$swal('Error @ doSubmit()')
      console.error(error);
    }

  }

}