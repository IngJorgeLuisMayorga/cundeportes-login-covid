<template>
  <div class="view view-layout x-center y-center view-admin">
       
      <admin-auth-form v-if="!isAuth"
        @onSucceed="onAuthSucceed()" 
        @onFailed="onAuthFailed()"
      ></admin-auth-form>

      <form v-if="isAuth" class="form-admin">
        <div class="wrapper">
            <admin-header></admin-header>
            <md-tabs>
                <md-tab id="tab-bookings" md-label="Reservas" md-icon="book_online">
                    <tab-bookings></tab-bookings>
                </md-tab>
                <md-tab id="tab-users" md-label="Usarios" md-icon="face">
                     <tab-users></tab-users>
                </md-tab>
                <md-tab id="tab-posts" md-label="Parques" md-icon="nature_people">
                     <tab-parks :parks="parks" 
                     @add="onAddPark($event)"
                     @edit="onEditPark($event)"
                     @remove="onRemovePark($event)"
                     ></tab-parks>
                </md-tab>
            </md-tabs>
        </div>
      </form>


    
  </div>
</template>
<script lang="ts" src="./admin.ts"></script>
<style lang="less" src="./admin.less"></style>

