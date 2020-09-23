<template>
  <div class="input booking-date-input">
    <div class="input-wrapper">
      <md-datepicker v-model="date"  :md-disabled-dates="disabledDates" @md-closed="onChange($event)">
        <label>Fecha de ingreso al parque</label>
      </md-datepicker>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IScheduleDate from '@/models/IDates.model';
@Component({
  data: () => ({
    disabledDates: (date: any) => {

        const MAX_VACANCY = 3;

        const day = date.getDay();
        const month = date.getMonth();

        const noVacancyDate: IScheduleDate = ((window as any).noVacancyDates).filter(
                (scheduleDate: IScheduleDate) => 
                    scheduleDate.month == (date.getMonth() + 1) &&
                    scheduleDate.day == (date.getDate() + 0)
        )[0];

        const isDateNoVacancy = noVacancyDate ? noVacancyDate.booked > MAX_VACANCY : false;

        const isPublic = (window as any).publicType === "PUBLIC"; // Miercoles 6 am a 9 am
        const isSchools = (window as any).publicType === "SCHOOL"; // Martes 3 pm a 6 pm
        const isWednesdayAndFriday = day === 3 || day === 5;
        const isTuesdayAndThursday = day === 2 || day === 4;
        const isDateBusy = isDateNoVacancy;
      return isDateBusy || (isPublic && !isWednesdayAndFriday) || (isSchools && !isTuesdayAndThursday);
    },
  }),
})
export default class BookingDateInputComponent extends Vue {
  
  @Prop() private placeholder!: Date;
  @Prop() private publicType!: string;

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
          console.log(' BOOKING DATE PLACEHOLDER ')
    console.log(this.placeholder)
      //(this as any).$material.locale.shortMonths = ['E', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      //(this as any).$material.locale.shorterMonths = 
      //(this as any).$material.locale.shorterMonths = 
      
  
  }
  disabledDateFn(date: Date) {
    const day = date.getDay();
    const isPublic = this.publicType === "PUBLIC"; // Miercoles 6 am a 9 am
    const isSchools = this.publicType === "SCHOOL"; // Martes 3 pm a 6 pm
    const isWednesdayAndFriday = day === 3 || day === 5;
    const isTuesdayAndThursday = day === 2 || day === 4;
    //return !(isPublic && isWednesdayAndFriday) || !(isSchools && isTuesdayAndThursday)
    return day === 6;
  }

  /* eslint-disable */
  public onChange($event: any): void {
      setTimeout(() => {
        console.log(' this.date' );
        this.$emit("onChange", this.date);
      },1000)
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
