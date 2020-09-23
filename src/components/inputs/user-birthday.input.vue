<template>
  <div class="input user-birthday-input">
    <div class="input-wrapper">

<!--
      <md-datepicker v-model="date" @md-closed="setBirthDate($event)">
        <label>Fecha Nacimiento</label>
      </md-datepicker>
-->


      <md-icon>cake</md-icon>
      <md-field :class="mdFieldClass">
            <label> Edad </label>
            <md-input v-model="mdInputText" required @change="onChange($event)" type="Number" min="0" max="99"></md-input>
            <span class="md-error"> Edad Invalida </span>
        </md-field>

      <label v-if="getAge() && getAge() > 0">{{ getAge() }} años</label>
    </div>

  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class BirthdayComponent extends Vue {

  @Prop() private placeholder!: number;

  public mdFielClass = ""; //'md-invalid'
  public mdInputText = 0;
  public hasTyped = false;
  public birthday: any = null;
  public date: any = null;

  construtor() { 
    this.birthday = null;
    this.date = null;
  }

  public mounted(){
    this.mdInputText = this.placeholder;
    console.log(' BIRTHDAY PLACEHOLDER ')
    console.log(this.placeholder)
  }

  /* eslint-disable */
  public onChange($event: any): void {
    const age = $event.target.value;
    const birthdate = new Date();
    this.$emit("onChange", age);
  }

  public getAge() {
    /*
      try{
        var today = new Date();
        var birthDate = this.birthday || new Date();
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
          return age;
      }catch(Err){
            return 0;
      }*/
    return 0;
  }

  public get mdFieldClass() {
    return this.mdInputText || !this.hasTyped ? "" : "md-invalid";
  }
}
</script>
<style  lang="less">
.input.user-birthday-input {
     .input-wrapper{
        display: block;
        width: 100%;
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

    .md-icon {
          width: fit-content;
          margin: 0;
          margin-right: 12px;
    }
    .md-field{
          width:  calc(100% - 3em);
    }
    
    }
}
</style>
