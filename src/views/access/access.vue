<template>
  <div class="view view-layout x-center y-center view-home">
       <form class="form-login">
          <div class="form-header">
              <ui-picture :src="cover"></ui-picture>
          </div>
          <div class="form-content">
            
            <h1>ACCESO A PARQUES</h1>

            <ui-cc-input @onChange="onCedulaType($event)"></ui-cc-input>
            <ui-park-input :parks="parks" @onChange="onParkChange($event)"></ui-park-input>
            <ui-category-input @onChange="onCategoryChange($event)"></ui-category-input>

            <br>

            <ul class="hours-buttons"  v-if="hours">
                <li v-for="$hour of hours" :key="$hour.hour">
                    <md-button style="font-size:12px" class="md-primary" :class="{'md-raised': hour === $hour}" @click="setHour($hour)">{{ getHourLabel($hour.hour) }}</md-button>
                </li>
            </ul>

            <h4 v-if="!hours && !park && !category">
              SELECCIONA UN PARQUE Y UN TIPO DE RESERVACIÓN PARA VER LOS HORARIOS DISPONIBLES
            </h4>

            <h4 v-if="park && category && hours.length < 1">
              <br>
              <br>
                NO HAY HORARIOS DISPONIBLES POR HOY
              <br>
              <br>
            </h4>

            <br>
            <br>
            <br>
            <br>

          </div>
          <div class="form-footer">
            <ui-submit text="Ingresar" @onClick="doSubmit()"></ui-submit>
          </div>
       </form> 
  </div>
</template>
<script lang="ts" src="./access.ts"></script>
<style lang="less" src="./access.less"></style>

