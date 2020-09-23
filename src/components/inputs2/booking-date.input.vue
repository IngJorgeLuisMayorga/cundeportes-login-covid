<template>
  <div class="input booking-date-input">
    <div class="input-wrapper">
      <md-datepicker 
        v-model="date" 
        :md-disabled-dates="disabledDates" 
        @md-closed="onChange($event)">
        <label>Fecha de ingreso al parque</label>
      </md-datepicker>
    </div>
  </div>
</template>
<script lang="ts">
/* eslint-disable */

import { Component, Prop, Vue } from "vue-property-decorator";
import IScheduleDate from '@/models/IDates.model';
import IFirebaseHourWeekday from '@/models/firebase/IFirebaseHourWeekday.interface';
import IFirebaseHourSchedule from '@/models/firebase/IFirebaseHourSchedule.interface';
import IFireBaseUser from '@/models/firebase/IFireBaseUser.model';
import moment from 'moment';
import IFireBasePark from '@/models/firebase/IFireBasePark.model';

export interface IFirebaseHourWeekdays {
    monday: IFirebaseHourWeekday[];
    tuesday: IFirebaseHourWeekday[];
    wednesday: IFirebaseHourWeekday[];
    thursday: IFirebaseHourWeekday[];
    friday: IFirebaseHourWeekday[];
    saturday: IFirebaseHourWeekday[];
    sunday: IFirebaseHourWeekday[];
}
@Component({
  data: () => ({
    disabledDates: (date: any) => {

        const day = date.getDay() + 0;
        const month = date.getMonth() + 1;
        const dayOfTheWeek = date.getDay() + 0;

        const weekdays = ((window as any).noVacancyWeekdays) as IFirebaseHourWeekdays;
        const publicType = ((window as any).noVacancyPublicType) as string;
        const capacity = ((window as any).noVacancyCapacity) as number;
        const schedules = ((window as any).noVacancySchedules) as IFirebaseHourSchedule[];
        const user = (window as any).noVacancyUser as IFireBaseUser;
        
        const bookings = user.bookings;
        const park = (window as any).noVacancyPark as IFireBasePark;

        const isMondayAviable = weekdays.monday.length > 0 && weekdays.monday.filter(weekday => weekday.aviableFor.includes(publicType as any)).length > 0;
        const isTusdayAviable = weekdays.tuesday.length > 0 && weekdays.tuesday.filter(weekday => weekday.aviableFor.includes(publicType as any)).length > 0;
        const isWednesdayAviable = weekdays.wednesday.length > 0 && weekdays.wednesday.filter(weekday => weekday.aviableFor.includes(publicType as any)).length > 0;
        const isThursdayAviable = weekdays.thursday.length > 0 && weekdays.thursday.filter(weekday => weekday.aviableFor.includes(publicType as any)).length > 0;
        const isFridayAviable = weekdays.friday.length > 0 && weekdays.friday.filter(weekday => weekday.aviableFor.includes(publicType as any)).length > 0;
        const isSaturdayAviable = weekdays.saturday.length > 0 && weekdays.saturday.filter(weekday => weekday.aviableFor.includes(publicType as any)).length > 0;
        const isSundayAviable = weekdays.sunday.length > 0 && weekdays.sunday.filter(weekday => weekday.aviableFor.includes(publicType as any)).length > 0;


        // DIAS DISPONIBLES
        if(dayOfTheWeek === 1 && !isMondayAviable) return true;
        if(dayOfTheWeek === 2 && !isTusdayAviable) return true;
        if(dayOfTheWeek === 3 && !isWednesdayAviable) return true;
        if(dayOfTheWeek === 4 && !isThursdayAviable) return true;
        if(dayOfTheWeek === 5 && !isFridayAviable) return true;
        if(dayOfTheWeek === 6 && !isSaturdayAviable) return true;
        if(dayOfTheWeek === 0 && !isSundayAviable) return true;


        // CUPO LLENO EN ESE HORARIO 
  
      
       
        // NO REPETIR DIAS
         let isBookedBefored = false;
        if(bookings){
          for(let k = 0; k < bookings.length; k++){
            const _date = (typeof (bookings[k].date as any).toDate == 'function') ? (bookings[k].date as any).toDate() : (bookings[k].date as any);
            const bookingsDate = moment(_date);
            const currentDate = moment(date)
            if(bookingsDate.isSame(currentDate,'day') && bookingsDate.isSame(currentDate,'month')){
              if(bookings[k].park === park.id){
                  isBookedBefored = true;
              }
            }
          }
        }
        

        // PICO Y CEDULA
        const dateIsPar = (date as Date).getDate() % 2 == 0;
        const ccIsPar = parseInt(user.cc + '', 10) % 2 == 0;
        if(!ccIsPar && !dateIsPar) return true;
        if(ccIsPar && dateIsPar) return true;



        return false || isBookedBefored;
    },
  }),
})
export default class BookingDateInputComponent extends Vue {
  
  @Prop() private placeholder!: Date;
  @Prop() private publicType!: string;
  @Prop() private weekdays!: any[];
  @Prop() private disabled!: boolean;

  public date: any = null;

  construtor() { 
    this.date = null;
  }

  public async mounted(){
    (this as any).$material.locale.days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    (this as any).$material.locale.shortDays =  ['Dom', 'Lun', 'Mar', 'Mier', 'Juev', 'Vier', 'Sab'];
    (this as any).$material.locale.shorterDays = ['D', 'L', 'M', 'I', 'J', 'V', 'S'];
    (this as any).$material.locale.months = ['Enero', 'Martes', 'Miercoles', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    this.date = this.placeholder;
  }
  

  /* eslint-disable */
  public onChange($event: any): void {
      setTimeout(() => {
         this.$emit("onChange", this.date);
      },500)
  }
}
</script>
<style  lang="less">
.input.booking-date-input {
  .input-wrapper {
    display: block;
    width: 100%;
  }
}
</style>
