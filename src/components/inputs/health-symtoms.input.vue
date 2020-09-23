<template>
  <div class="input health-symptoms-input">
    <div class="input-wrapper">
      <label style="text-align: left;display: block; color: #6e6e6e">Ha tenido síntomas como fiebre, dolor de cabeza, gripa o tos en los ultimos 14 dias</label>
      <div class="radio-row">
        <md-radio v-model="COVID_SYMPTOMS" value="yes" @change="onChange($event)">Si</md-radio>
        <md-radio v-model="COVID_SYMPTOMS" value="no" @change="onChange($event)">No</md-radio>
      </div>
    </div>

    <br>

    <div class="input-wrapper">
      <label style="text-align: left;display: block; color: #6e6e6e">En los ultimos 14 dias ha estado en contacto con alguien a quienle diagnosticaron o tiene síntomas para Covid-19</label>
      <div class="radio-row">
        <md-radio v-model="COVID_CONTACT" value="yes" @change="onChange($event)">Si</md-radio>
        <md-radio v-model="COVID_CONTACT" value="no" @change="onChange($event)">No</md-radio>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class BookingTypeInputComponent extends Vue {
  public COVID_CONTACT: any = "yes";
  public COVID_SYMPTOMS: any = "yes";

  constructor(){
    super();
    this.COVID_SYMPTOMS = "yes";
    this.COVID_CONTACT = "yes";
  }

  /* eslint-disable */
  public onChange($event: any): void {
    this.$emit("onChange", {
      contact: this.COVID_CONTACT,
      symptoms: this.COVID_SYMPTOMS
    });
  }
}
</script>
<style  lang="less">
.input.health-symptoms-input {
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
