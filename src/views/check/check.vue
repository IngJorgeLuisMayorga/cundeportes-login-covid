<template>
  <div class="view view-layout x-center y-center view-home">
       <form class="form-login">
          <div class="form-header">
              <ui-picture :src="cover"></ui-picture>
          </div>
          <div class="form-content">
            
              <div class="row row--park" v-if="park">
                  <img :src="getParkLogoByParkName(park.name)">
                  <h1 style="padding-left: 1em">
                       {{ parkName }}
                  </h1>
                  <h5 > 
                    <span style="font-size:1em"> Acceso a {{ (publicType === 'PUBLIC') ? 'Publico General' : 'Escuelas de Formación' }} </span>
                  </h5>
              </div>
              <br>
              <div class="row row--booking">
                    <ui-booking-date-input
                      style="width:100%"
                      :disabled="true"
                      :publicType="publicType"
                      :placeholder="new Date()"
                      :weekdays="(park ? park.weekdays : [])"
                      @onChange="onBookingDateChange($event)"
                    ></ui-booking-date-input>
              </div>
              <ul class="row row--hours"  v-if="hours">
                <li v-for="$hour of hours" :key="$hour.hour">
                    <md-button 
                         style="font-size:12px" 
                         class="md-primary" 
                        :class="{'md-raised': hour.hour == $hour.hour }" 
                        >{{ getHourLabel($hour.hour) }}
                    </md-button>
                </li>
              </ul>
              <br>
              <div class="row">
                  <ui-health-temperature-input style="width:100%" @onChange="onHealthTemperatureChange($event)"></ui-health-temperature-input>
              </div>
              <div class="row">
                  <ui-health-symptoms-input style="width:100%" @onChange="onHealthSymptomsChange($event)"></ui-health-symptoms-input>
              </div>
              <br>
                <br>
               <br>
              <div class="row">
                <h1 class="md-title" style="max-width: 500px;text-align: center;margin: 0 auto;">
                  Para el ingreso al parque y durante la estadia en el mismo es importante que porte tapabocas debe portar su gel o alcohol y una toalla de uso personal
                </h1>
              </div>
              <br>
              <br>
              <div class="row row--space"  @click="setToogleUserShow()" v-if="!isUserShow">
                    <md-icon class="md-size-2x" >add_circle</md-icon>
              </div>
              <div class="row row--space"  @click="setToogleUserShow()" v-if="isUserShow">
                    <md-icon class="md-size-2x" >remove_circle</md-icon>
              </div>
              <div class="row row--sport" v-if="user && isUserShow">
                     <ui-booking-sport-input
                        style="width:100%"
                        :placeholder="'Practica Libre'"
                        @onChange="onBookingSportChange($event)"
                     ></ui-booking-sport-input>
              </div>
          
              <div class="row row--user" v-if="user && isUserShow">

                    <ui-user-cc-type-input :placeholder="user.type" @onChange="onUserCCTypeChange($event)"></ui-user-cc-type-input>
                    <ui-user-cc-number-input :placeholder="user.cc" :ccType="userCCType" @onChange="onUserCCNumberChange($event)"></ui-user-cc-number-input>
                    <ui-user-names-input :placeholder="user.name" @onChange="onUserNamesChange($event)"></ui-user-names-input>
                    <ui-user-birthday-input :placeholder="user.age" @onChange="onUserAgeChange($event)"></ui-user-birthday-input>
                    <ui-health-eps-input :placeholder="user.eps" @onChange="onHealthEpsChange($event)"></ui-health-eps-input>

                    <br />

                    <ui-contact-email-input :placeholder="user.email" @onChange="onContactEmailChange($event)"></ui-contact-email-input>
                    <ui-contact-phone-input :placeholder="user.phone" @onChange="onContactPhoneChange($event)"></ui-contact-phone-input>
                    <ui-contact-address-input :placeholder="user.address"  @onChange="onContactAddressChange($event)"></ui-contact-address-input>
                    <ui-contact-city-input :placeholder="user.city" @onChange="onContactCityChange($event)"></ui-contact-city-input>

                    <br />
              </div>

              
            
          </div>
          <div class="form-footer">
            <ui-submit text="Ingresar" @onClick="doSubmit()"></ui-submit>
          </div>
       </form>
  </div>
</template>
<script lang="ts" src="./check.ts"></script>
<style lang="less" src="./check.less"></style>

