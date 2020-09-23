<template>
  <div class="input booking-type-input">
    <div class="input-wrapper">
      <label style="text-align: left;display: block; color: #6e6e6e">Tipo de Reservación</label>
      <div class="radio-row">
        <md-radio v-model="bookedType" value="PUBLIC" @change="onChange($event)">Ingreso al Publico</md-radio>
        <md-radio
          v-model="bookedType"
          value="SCHOOL"
          @change="onChange($event)"
        >Escuelas de Formación</md-radio>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class BookingTypeInputComponent extends Vue {
  public bookedType: any = "PUBLIC";
 @Prop() private placeholder!: string;
 
public mounted(){
  this.bookedType = this.placeholder;
}
  /* eslint-disable */
  public onChange($event: any): void {
    (window as any).publicType = $event;
    this.$emit("onChange", $event);
  }
}
</script>
<style  lang="less">
.input.booking-type-input {
  .input-wrapper {
    display: block;
    width: 100%;

    .radio-row {
      padding-top: 1em;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .md-radio {
      margin-top: 6px;
      margin-bottom: 6px;
    }
  }
}
</style>
