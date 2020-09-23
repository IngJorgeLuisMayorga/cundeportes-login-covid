
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator';

import UIPictureImageComponent from '@/components/images/picture.image.vue'; // @ is an alias to /src
import UICCInputComponent from '@/components/inputs/cc.input.vue'; // @ is an alias to /src
import UIBookingDateInputComponent from '@/components/inputs2/booking-date.input.vue'; // @ is an alias to /src
import UIParkInputComponent from '@/components/inputs/park.input.vue'; // @ is an alias to /src
import UICategoryInputComponent from '@/components/inputs/category.input.vue'; // @ is an alias to /src
import UISubmitButtonComponent from '@/components/buttons/submit.button.vue'; // @ is an alias to /src
import UISportInputComponent from '@/components/inputs/booking-sport.input.vue'; // @ is an alias to /src
import UIGroupInputComponent from "@/components/inputs/group.input.vue";
import UIBookingSportInputComponent from "@/components/inputs/booking-sport.input.vue";
import UIBookingTypeInputComponent from "@/components/inputs/booking-type.input.vue";
import UIUserCCNumberInputComponent from "@/components/inputs/user-cc-number.input.vue";
import UIUserCCTypeInputComponent from "@/components/inputs/user-cc-type.input.vue";
import UIUserNamesInputComponent from "@/components/inputs/user-names.input.vue";
import UIUserBirthDateInputComponent from "@/components/inputs/user-birthday.input.vue";
import UIContactEmailInputComponent from "@/components/inputs/contact-email.input.vue";
import UIContactPhoneInputComponent from "@/components/inputs/contact-phone.input.vue";
import UIContactCityInputComponent from "@/components/inputs/contact-city.input.vue";
import UIContactAddressInputComponent from "@/components/inputs/contact-address.input.vue";
import UIHealthTemperatureInputComponent from "@/components/inputs/health-temperature.input.vue";
import UIHealthEPSInputComponent from "@/components/inputs/health-eps.input.vue";
import UIHealthSymptonsInputComponent from "@/components/inputs/health-symtoms.input.vue";
import UIHealthHadCovidInputComponent from "@/components/inputs/health-hadCovid.input.vue";
import SmallDateLabelComponent from "@/components/labels/small-date.label.vue";

import IFireBasePark from '@/models/firebase/IFireBasePark.model';
import IFireBaseUser from '@/models/firebase/IFireBaseUser.model';
import IFirebaseHourWeekday from '@/models/firebase/IFirebaseHourWeekday.interface';
import IFireBaseBooking from '@/models/firebase/IFireBaseBooking.interface';

import moment from 'moment';
import { doBook } from '@/helpers/doBook.helper';
import { doConfirmBook } from '@/helpers/doConfirmBook.help';
@Component({
  components: {
    'ui-cc-input': UICCInputComponent,
    'ui-park-input': UIParkInputComponent,
    'ui-booking-date-input': UIBookingDateInputComponent,
    'ui-booking-sport-input': UISportInputComponent,
    'ui-category-input': UICategoryInputComponent,
    'ui-picture': UIPictureImageComponent,
    'ui-submit': UISubmitButtonComponent ,
    "ui-input-group": UIGroupInputComponent,
    "ui-booking-type-input": UIBookingTypeInputComponent,
    "ui-user-cc-number-input": UIUserCCNumberInputComponent,
    "ui-user-cc-type-input": UIUserCCTypeInputComponent,
    "ui-user-names-input": UIUserNamesInputComponent,
    "ui-user-birthday-input": UIUserBirthDateInputComponent,
    "ui-contact-email-input": UIContactEmailInputComponent,
    "ui-contact-address-input": UIContactAddressInputComponent,
    "ui-contact-phone-input": UIContactPhoneInputComponent,
    "ui-contact-city-input": UIContactCityInputComponent,
    "ui-health-eps-input": UIHealthEPSInputComponent,
    "ui-health-temperature-input": UIHealthTemperatureInputComponent,
    "ui-health-symptoms-input": UIHealthSymptonsInputComponent,
    "ui-health-had-covid-input": UIHealthHadCovidInputComponent,
    "ui-cc-type-input": UICCInputComponent,
    "ui-label-date": SmallDateLabelComponent,
  },
})
export default class Home extends Vue {
  
  public cover = require('@/assets/cover-banner-2.jpg');
  public cedula = '';
  public publicType = '';
  public category = '';
  public parkName = '';

  public parks: IFireBasePark[] = [] ;
  public hours: IFirebaseHourWeekday[] = [] ;
  public hour: IFirebaseHourWeekday | null = null;
  public park: null | IFireBasePark = null ;
  public user: IFireBaseUser | null  = null;
  public sport: string = '';

  public contactEmail = "";
  public contactPhone = "";
  public contactAddress = "";
  public contactCity = "";

  public userNames = "";
  public userAge = 0;
  public userCCNumber = "";
  public userCCType = "";
  public userCovid = {};
  public userTemperature = 0;
  public userEPS = "";
  public userBookings: IFireBaseBooking[] = [];

  public bookingType = "";
  public bookingSport = "";
  public bookingDate: Date = new Date();

  public cc;
  public client;
  public date;

  public isUserShow = false;
  public setToogleUserShow(){
    console.log(' OPE ')
    this.isUserShow = ! this.isUserShow;
  }

  private async mounted(){

        const user = JSON.parse(sessionStorage.getItem('user')   || '{}');
        const park = JSON.parse(sessionStorage.getItem('park')   || '{}');
        const parks = JSON.parse(sessionStorage.getItem('parks')   || '{}');
        const cc = JSON.parse(sessionStorage.getItem('check_cc')   || '{}');
        const client =  JSON.parse(sessionStorage.getItem('check_client')   || '{}');
        const date  = JSON.parse(sessionStorage.getItem('check_date')   || '{}');
        const hours = JSON.parse(sessionStorage.getItem('check_hours')   || '{}');
        const hour = JSON.parse(sessionStorage.getItem('check_hour')   || '{}');
        
        this.cc = cc;
        this.client = client;
        this.date = date;
        this.hours = hours;
        this.hour = hour;
        this.parks = parks;
        this.park = park;
        
        this.user = user;
        (window as any).noVacancyUser = this.user;



        this.parkName = this.park?.name || '';
        this.publicType = this.$route.params.category;
    
        this.setPark();

        if (this.user) {
          if (!this.userNames) this.userNames = this.user.name || this.user['names'];
          if (!this.userCCType) this.userCCType = this.user.type;
          if (!this.userCCNumber) this.userCCNumber = this.user.cc + "";
          if (!this.userEPS) this.userEPS = this.user.eps;
          if (!this.userAge) this.userAge = this.user.age;
          if (!this.contactEmail) this.contactEmail = this.user.email;
          if (!this.contactPhone) this.contactPhone = this.user.phone;
          if (!this.contactAddress) this.contactAddress = this.user.address;
          if (!this.contactCity) this.contactCity = this.user.city;
          if (!this.userBookings) this.userBookings = this.user.bookings;
        }

  }
  public async doSubmit() {
        if(this.user && this.hour){ 
          await doConfirmBook({
            cc: this.userCCNumber,
            type: this.userCCType,
            name: this.userNames,
            email: this.contactEmail,
            phone: this.contactPhone,
            city: this.contactCity,
            address: this.contactAddress,
            age: this.userAge,
            eps: this.userEPS,
            bookings: this.userBookings,
            publicType: this.publicType,
            park: this.park,
            date: this.bookingDate,
            hour: this.hour.hour,
          sport: this.bookingSport || 'Practica Libre',
            temperature: this.userTemperature,
            covid_contact: (this.userCovid as any).contact,
            covid_symptoms: (this.userCovid as any).symptoms,
            companions: [],
        });
      }
  }
  public getHourLabel($hour){
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
  public setHour($hour){
    this.hour = $hour;
  }
  public setPark(){
    this.park = this.parks.filter(park => park.name === this.parkName)[0];
    if(this.park && this.park.weekdays){
      (window as any).noVacancyWeekdays = this.park.weekdays;
      (window as any).noVacancyCapacity = this.park.capacity;
      (window as any).noVacancyPublicType = this.publicType;
      (window as any).noVacancySchedules = this.park.schedules;
      (window as any).noVacancyPark = this.park;
    }
  }
  public getParkLogoByParkName(parkName: string){
    return this.parks.filter(park => park.name === parkName)[0].logo;
  }
  public getParkCapacityByParkName(parkName: string){
    return this.parks.filter(park => park.name === parkName)[0].capacity;
  }
  public onBookingDateChange($event: Date){

  }
  public onBookingSportChange($event: any){
    this.bookingSport = $event;
  }
  public onBookingTypeChange($bookingType: string): void {
    this.bookingType = $bookingType;
  }
  public onUserAgeChange($age: number): void {
    this.userAge = $age;
  }
  public onUserNamesChange($names: string): void {
    this.userNames = $names;
  }
  public onUserCCNumberChange($ccNumber: string): void {
    this.userCCNumber = $ccNumber;
  }
  public onUserCCTypeChange($ccType: string): void {
    this.userCCType = $ccType;
  }
  public onContactEmailChange($email: string): void {
    this.contactEmail = $email;
  }
  public onContactPhoneChange($phone: string): void {
    this.contactPhone = $phone;
  }
  public onContactAddressChange($address: string): void {
    this.contactAddress = $address;
  }
  public onContactCityChange($city: string): void {
    this.contactCity = $city;
  }
  public onHealthSymptomsChange($covid: any): void {
    this.userCovid = $covid;
  }
  public onHealthTemperatureChange($temperature: number): void {
    if($temperature > 37.9){
      this.$swal(' TEMPERATURA ELEVADA','El usuario no puede ingresar','error')
    } else {
      this.userTemperature = $temperature;
    }
  }
  public onHealthEpsChange($eps: string): void {
    this.userEPS = $eps;
  }
}