<template>
  <div class="add-park">

         <md-button class="md-primary md-raised" @click="open()">
             <md-icon class="md-size-2x">add_circle</md-icon>
        </md-button>

       <md-dialog :md-active.sync="showDialog">

            <md-dialog-title>AGREGAR NUEVO PARQUE</md-dialog-title>

            <div class="card--modal">

                <div class="row">
                    <md-field>
                        <label>Nombre de parque</label>
                        <md-input v-model="name"></md-input>
                    </md-field>

                    <md-field>
                        <label>Capacidad / Aforo</label>
                        <md-input v-model="capacity"></md-input>
                    </md-field>

                    <md-field>
                        <label>Icono del parque</label>
                        <md-input v-model="logo"></md-input>
                    </md-field>
                </div>

                <md-table md-card>

                    <md-table-toolbar>
                        <h1 class="md-title">Horarios para Publico General</h1>
                    </md-table-toolbar>

                    <md-table-row>
                        <md-table-head>Lunes</md-table-head>
                        <md-table-head>Martes</md-table-head>
                        <md-table-head>Miercoles</md-table-head>
                        <md-table-head>Jueves</md-table-head>
                        <md-table-head>Viernes</md-table-head>
                        <md-table-head>Sabado</md-table-head>
                        <md-table-head>Domingo</md-table-head>
                    </md-table-row>

                    <md-table-row>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': monday.hour600am_730am}"   @click="setMondayToogle('hour600am_730am')">6:00 am -  7:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': tuesday.hour600am_730am}"   @click="setTuesdayToogle('hour600am_730am')">6:00 am -  7:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': wednesday.hour600am_730am}"   @click="setWednesdayToogle('hour600am_730am')">6:00 am -  7:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': thursday.hour600am_730am}"   @click="setThursdayToogle('hour600am_730am')">6:00 am -  7:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': friday.hour600am_730am}"   @click="setFridayToogle('hour600am_730am')">6:00 am -  7:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': saturday.hour600am_730am}"   @click="setSaturdayToogle('hour600am_730am')">6:00 am -  7:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': sunday.hour600am_730am}"   @click="setSundayToogle('hour600am_730am')">6:00 am -  7:30 am</md-button></md-table-cell>
                    </md-table-row>

                    <md-table-row>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': monday.hour800am_930am}"    @click="setMondayToogle('hour800am_930am')">8:00 am -  9:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': tuesday.hour800am_930am}"    @click="setTuesdayToogle('hour800am_930am')">8:00 am -  9:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': wednesday.hour800am_930am}"    @click="setWednesdayToogle('hour800am_930am')">8:00 am -  9:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': thursday.hour800am_930am}"    @click="setThursdayToogle('hour800am_930am')">8:00 am -  9:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': friday.hour800am_930am}"    @click="setFridayToogle('hour800am_930am')">8:00 am -  9:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': saturday.hour800am_930am}"    @click="setSaturdayToogle('hour800am_930am')">8:00 am -  9:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': sunday.hour800am_930am}"    @click="setSundayToogle('hour800am_930am')">8:00 am -  9:30 am</md-button></md-table-cell>
                    </md-table-row>
       
                    <md-table-row>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': monday.hour1000am_1130am}"    @click="setMondayToogle('hour1000am_1130am')">10:00 am - 11:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': tuesday.hour1000am_1130am}"    @click="setTuesdayToogle('hour1000am_1130am')">10:00 am - 11:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': wednesday.hour1000am_1130am}"    @click="setWednesdayToogle('hour1000am_1130am')">10:00 am - 11:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': thursday.hour1000am_1130am}"    @click="setThursdayToogle('hour1000am_1130am')">10:00 am - 11:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': friday.hour1000am_1130am}"    @click="setFridayToogle('hour1000am_1130am')">10:00 am - 11:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': saturday.hour1000am_1130am}"    @click="setSaturdayToogle('hour1000am_1130am')">10:00 am - 11:30 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': sunday.hour1000am_1130am}"    @click="setSundayToogle('hour1000am_1130am')">10:00 am - 11:30 am</md-button></md-table-cell>
                    </md-table-row>

                    <md-table-row>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': monday.hour1200am_0130pm}"    @click="setMondayToogle('hour1200am_0130pm')">12:00 am - 1:30 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': tuesday.hour1200am_0130pm}"    @click="setTuesdayToogle('hour1200am_0130pm')">12:00 am - 1:30 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': wednesday.hour1200am_0130pm}"    @click="setWednesdayToogle('hour1200am_0130pm')">12:00 am - 1:30 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': thursday.hour1200am_0130pm}"    @click="setThursdayToogle('hour1200am_0130pm')">12:00 am - 1:30 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': friday.hour1200am_0130pm}"    @click="setFridayToogle('hour1200am_0130pm')">12:00 am - 1:30 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': saturday.hour1200am_0130pm}"    @click="setSaturdayToogle('hour1200am_0130pm')">12:00 am - 1:30 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': sunday.hour1200am_0130pm}"    @click="setSundayToogle('hour1200am_0130pm')">12:00 am - 1:30 pm</md-button></md-table-cell>
                    </md-table-row>

            
       

                </md-table>

                <md-table md-card>

                    <md-table-toolbar>
                        <h1 class="md-title">Horarios para Escuelas</h1>
                    </md-table-toolbar>

                    <md-table-row>
                        <md-table-head>Lunes</md-table-head>
                        <md-table-head>Martes</md-table-head>
                        <md-table-head>Miercoles</md-table-head>
                        <md-table-head>Jueves</md-table-head>
                        <md-table-head>Viernes</md-table-head>
                        <md-table-head>Sabado</md-table-head>
                        <md-table-head>Domingo</md-table-head>
                    </md-table-row>
          

                    <md-table-row>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': monday.hour800am_900am}"    @click="setMondayToogle('hour800am_900am')">8:00 am -  9:00 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': tuesday.hour800am_900am}"    @click="setTuesdayToogle('hour800am_900am')">8:00 am -  9:00 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': wednesday.hour800am_900am}"    @click="setWednesdayToogle('hour800am_900am')">8:00 am -  9:00 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': thursday.hour800am_900am}"    @click="setThursdayToogle('hour800am_900am')">8:00 am -  9:00 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': friday.hour800am_900am}"    @click="setFridayToogle('hour800am_900am')">8:00 am -  9:00 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': saturday.hour800am_900am}"    @click="setSaturdayToogle('hour800am_900am')">8:00 am -  9:00 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': sunday.hour800am_900am}"    @click="setSundayToogle('hour800am_900am')">8:00 am -  9:00 am</md-button></md-table-cell>
                    </md-table-row>
       
                    <md-table-row>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': monday.hour1000am_1100am}"    @click="setMondayToogle('hour1000am_1100am')">10:00 am - 11:00 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': tuesday.hour1000am_1100am}"    @click="setTuesdayToogle('hour1000am_1100am')">10:00 am - 11:00 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': wednesday.hour1000am_1100am}"    @click="setWednesdayToogle('hour1000am_1100am')">10:00 am - 11:00 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': thursday.hour1000am_1100am}"    @click="setThursdayToogle('hour1000am_1100am')">10:00 am - 11:00 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': friday.hour1000am_1100am}"    @click="setFridayToogle('hour1000am_1100am')">10:00 am - 11:00 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': saturday.hour1000am_1100am}"    @click="setSaturdayToogle('hour1000am_1100am')">10:00 am - 11:00 am</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': sunday.hour1000am_1100am}"    @click="setSundayToogle('hour1000am_1100am')">10:00 am - 11:00 am</md-button></md-table-cell>
                    </md-table-row>

                    <md-table-row>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': monday.hour0300pm_0400pm}"    @click="setMondayToogle('hour0300pm_0400pm')">3:00 pm -  4:00 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': tuesday.hour0300pm_0400pm}"    @click="setTuesdayToogle('hour0300pm_0400pm')">3:00 pm -  4:00 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': wednesday.hour0300pm_0400pm}"    @click="setWednesdayToogle('hour0300pm_0400pm')">3:00 pm -  4:00 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': thursday.hour0300pm_0400pm}"    @click="setThursdayToogle('hour0300pm_0400pm')">3:00 pm -  4:00 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': friday.hour0300pm_0400pm}"    @click="setFridayToogle('hour0300pm_0400pm')">3:00 pm -  4:00 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': saturday.hour0300pm_0400pm}"    @click="setSaturdayToogle('hour0300pm_0400pm')">3:00 pm -  4:00 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': sunday.hour0300pm_0400pm}"    @click="setSundayToogle('hour0300pm_0400pm')">3:00 pm -  4:00 pm</md-button></md-table-cell>
                    </md-table-row>

                    <md-table-row>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': monday.hour0500pm_0600pm}"    @click="setMondayToogle('hour0500pm_0600pm')">5:00 pm -  6:00 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': tuesday.hour0500pm_0600pm}"    @click="setTuesdayToogle('hour0500pm_0600pm')">5:00 pm -  6:00 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': wednesday.hour0500pm_0600pm}"    @click="setWednesdayToogle('hour0500pm_0600pm')">5:00 pm -  6:00 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': thursday.hour0500pm_0600pm}"    @click="setThursdayToogle('hour0500pm_0600pm')">5:00 pm -  6:00 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': friday.hour0500pm_0600pm}"    @click="setFridayToogle('hour0500pm_0600pm')">5:00 pm -  6:00 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': saturday.hour0500pm_0600pm}"    @click="setSaturdayToogle('hour0500pm_0600pm')">5:00 pm -  6:00 pm</md-button></md-table-cell>
                        <md-table-cell> <md-button class="md-dense md-primary" :class="{'md-raised': sunday.hour0500pm_0600pm}"    @click="setSundayToogle('hour0500pm_0600pm')">5:00 pm -  6:00 pm</md-button></md-table-cell>
                    </md-table-row>
       

                </md-table>

               
        
            </div>

            <md-dialog-actions>
                <md-button class="md-primary" @click="showDialog = false">Cerrar</md-button>
                <md-button class="md-primary" @click="save()">Guardar</md-button>
            </md-dialog-actions>

        </md-dialog>

  </div>
  
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { Component, Vue } from 'vue-property-decorator';
import UIPictureImageComponent from '@/components/images/picture.image.vue'; // @ is an alias to /src
import UICCInputComponent from '@/components/inputs/cc.input.vue'; // @ is an alias to /src
import UISubmitButtonComponent from '@/components/buttons/submit.button.vue'; // @ is an alias to /src
import IFireBasePark from '@/models/firebase/IFireBasePark.model';
import IFirebaseHourSchedule from '@/models/firebase/IFirebaseHourSchedule.interface';
import IFirebaseHourWeekday from '@/models/firebase/IFirebaseHourWeekday.interface';
import { addPark } from '../../../helpers/addPark.helper';

const hoursPublic = {
       hour600am_730am: false,
       hour800am_930am: false,
       hour1000am_1130am: false,
       hour1200am_0130pm: false,
}
const hoursSchool = {
       hour800am_900am: false,
       hour1000am_1100am: false,
       
       hour0300pm_0400pm: false,
       hour0500pm_0600pm: false,
}


@Component({
    components: {
        'ui-cc-input': UICCInputComponent,
        'ui-picture': UIPictureImageComponent,
        'ui-submit': UISubmitButtonComponent ,
    },
})
export default class AdminAuthView extends Vue {

    public name = '';
    public logo = 'https://www.flaticon.com/svg/static/icons/svg/896/896008.svg';
    public capacity = 0;
    public showDialog = false;

    open(){
        this.name = '';
        this.capacity = 0 ;
        this.showDialog = true
    }

   public monday = { ...hoursPublic , ...hoursSchool };
   public tuesday = { ...hoursPublic , ...hoursSchool };
   public wednesday = { ...hoursPublic , ...hoursSchool };
   public thursday = { ...hoursPublic , ...hoursSchool };
   public friday = { ...hoursPublic , ...hoursSchool };
   public saturday = { ...hoursPublic , ...hoursSchool };
   public sunday = { ...hoursPublic , ...hoursSchool };

   public setMondayToogle($hour: string){
       this.monday[$hour] = !this.monday[$hour] ;
   }
   public setTuesdayToogle($hour: string){
       this.tuesday[$hour] = !this.tuesday[$hour] ;
   }
   public setWednesdayToogle($hour: string){
       this.wednesday[$hour] = !this.wednesday[$hour] ;
   }
   public setThursdayToogle($hour: string){
       this.thursday[$hour] = !this.thursday[$hour] ;
   }
   public setFridayToogle($hour: string){
       this.friday[$hour] = !this.friday[$hour] ;
   }
   public setSaturdayToogle($hour: string){
       this.saturday[$hour] = !this.saturday[$hour] ;
   }
   public setSundayToogle($hour: string){
       this.sunday[$hour] = !this.sunday[$hour] ;
   }
   public getSchedules(day){
        const schedules: IFirebaseHourWeekday[] = [];
        Object.keys(this[day]).forEach(hourKey => {
            const isEnabled = this[day][hourKey];
            const types = [
                !(Object.keys(hoursSchool).includes(hourKey) && this[day][hourKey]) ? 'PUBLIC' : '' ,
                  Object.keys(hoursSchool).includes(hourKey) && this[day][hourKey] ? 'SCHOOL': ''
            ].filter(type => type && type != '')


            if(isEnabled){
                schedules.push({
                    hour: hourKey,
                    aviableFor: types as any,
                    capacity: {
                        total: parseInt(this.capacity + '', 10),
                        busy: 0,
                    },
                })
            }
        });
       return schedules
   }


    public async save(){
        if(this.name && this.capacity){
            try{
                const park = await addPark({
                    name: this.name,
                    logo: this.logo,
                    capacity: this.capacity,
                    weekdays: {
                        monday: this.getSchedules('monday'),
                        tuesday: this.getSchedules('tuesday'),
                        wednesday: this.getSchedules('wednesday'),
                        thursday: this.getSchedules('thursday'),
                        friday: this.getSchedules('friday'),
                        saturday: this.getSchedules('saturday'),
                        sunday: this.getSchedules('sunday'),
                    }, 
                    schedules : [],
                } as IFireBasePark);
                this.$emit('save', park);
                this.showDialog = false
            } catch(error){
                this.$swal('ERROR GUARDANDO PARQUE',JSON.stringify(error),'error')
            }
        } else {
            this.$swal('NOMBRE O CAPACIDAD INVALIDA','','success')
        }
    }
   

}
</script>
<style lang="less">
.add-park{
    .md-button{
        height: 100px;
        width: 100px;
    }
}
.card--modal{
    display: block;
    box-sizing: border-box;
    padding: 1em;
}

.md-dialog-container{
    overflow-y: scroll !important;
}

.row{
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    & > .md-field {
        width: calc(100% - 2em);
        margin-left: 2em;
        &:first-child{
          margin-left: 0em;  
        }
    }
}
</style>
