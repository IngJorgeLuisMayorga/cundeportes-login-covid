<template>
  <div class="view view-layout x-center y-center view-home">
       <form class="form-login">
          <div class="form-header">
              <ui-picture :src="cover"></ui-picture>
          </div>
          <div class="form-content">
            

              <div class="row row--park" >
                  <img :src="getParkLogoByParkName(park.name)">
                  <h1>
                        <select v-model="parkName" @change="setPark()">
                            <option v-for="$park of parks" :key="$park.name" :value="$park.name" >
                              {{ $park.name }}
                            </option>
                        </select>
                  </h1>
                  <h5 > 
                    <span style="font-size:1em"> Acceso a {{ (publicType === 'PUBLIC') ? 'Publico General' : 'Escuelas de Formación' }} </span>
                  </h5>
              </div>

              <br>

              <div class="row row--booking">
                    <ui-booking-date-input
                      style="width:100%"
                      :publicType="publicType"
                      :placeholder="new Date()"
                      :weekdays="(park ? park.weekdays : [])"
                      @onChange="onBookingDateChange($event)"
                    ></ui-booking-date-input>
                    <ul>
                      <li v-for="$hour of hours" :key="$hour.hour">
                          <md-button style="font-size:12px" class="md-primary" :class="{'md-raised': hour === $hour}" @click="setHour($hour)">{{ getHourLabel($hour.hour) }}</md-button>
                      </li>
                    </ul>
              </div>

              <br>

              <div class="row row--sport">
                     <ui-booking-sport-input
                        style="width:100%"
                        :placeholder="'Practica Libre'"
                        @onChange="onBookingSportChange($event)"
                     ></ui-booking-sport-input>
              </div>

              <br>
              <br>

              <div class="row row--user" v-if="user">

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

              <div class="row row--user" v-if="userCCType == 'NUIP' || userCCType == 'RC' ">

                <h2>Agregar Acompañante</h2>

                    <ui-user-cc-type-input :placeholder="''" @onChange="onUserCCTypeChange($event,true)"></ui-user-cc-type-input>
                    <ui-user-cc-number-input :placeholder="''" :ccType="'CC'" @onChange="onUserCCNumberChange($event,true)"></ui-user-cc-number-input>
                    <ui-user-names-input :placeholder="''" @onChange="onUserNamesChange($event,true)"></ui-user-names-input>
                    <ui-user-birthday-input :placeholder="''" @onChange="onUserAgeChange($event,true)"></ui-user-birthday-input>
                    <ui-health-eps-input :placeholder="''" @onChange="onHealthEpsChange($event,true)"></ui-health-eps-input>

                    <br />

                    <ui-contact-email-input :placeholder="''" @onChange="onContactEmailChange($event,true)"></ui-contact-email-input>
                    <ui-contact-phone-input :placeholder="''" @onChange="onContactPhoneChange($event,true)"></ui-contact-phone-input>
                    <ui-contact-address-input :placeholder="''"  @onChange="onContactAddressChange($event,true)"></ui-contact-address-input>
                    <ui-contact-city-input :placeholder="''" @onChange="onContactCityChange($event,true)"></ui-contact-city-input>

                    <br />
              </div>

              
            
          </div>
          <div class="form-footer">
            <ui-submit text="Ingresar" @onClick="doSubmit()"></ui-submit>
          </div>
       </form>
  </div>
</template>
<script lang="ts" src="./signup.ts"></script>
<style lang="less" src="./signup.less"></style>

