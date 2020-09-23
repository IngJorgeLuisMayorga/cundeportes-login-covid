<template>
  <div class="input cc-type-input">  
      <div class="input-wrapper">


    <label style="text-align: left;display: block; color: #6e6e6e">Tipo de Documento </label>
      <div class="radio-row">
        
        <md-radio 
            v-model="ccType" 
            value="CC" 
            @change="onChange($event)">
            Cedula
        </md-radio>

        <md-radio
          v-model="ccType"
          value="CE"
          @change="onChange($event)"
        >Cedula de extranjería</md-radio>

        <md-radio
          v-model="ccType"
          value="TI"
          @change="onChange($event)"
        >Tarjeta de identidad</md-radio>

        <md-radio
          v-model="ccType"
          value="PA"
          @change="onChange($event)"
        >Pasaporte</md-radio>

        <md-radio
          v-model="ccType"
          value="NUIP"
          @change="onChange($event)"
        >NUIP</md-radio>

        <md-radio
          v-model="ccType"
          value="RC"
          @change="onChange($event)"
        >Registro Civil</md-radio>


      </div>
      </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {

  @Prop() private placeholder!: string;

  public ccType: any = "CC";

  private mounted(){
    this.ccType = this.placeholder
  }

 /* eslint-disable */
  public onChange($event: any): void {
      this.$emit('onChange', $event)
  }

}
</script>
<style  lang="less">
.input.cc-type-input {
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
