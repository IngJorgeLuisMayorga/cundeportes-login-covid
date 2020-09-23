<template>
  <div class="input contact-email-input">  
      <div class="input-wrapper">

             <md-icon>medical_services</md-icon>

             <md-field :class="mdFieldClass">
                    <label> EPS </label>
                    <md-input v-model="mdInputText" required @change="onChange($event)"></md-input>
                    <span class="md-error"> EPS Invalida </span>
                </md-field>
      
      </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {

  @Prop() private placeholder!: string;

    public sports = ['Acondicionamiento Fisico','Gimnasia Artistica','Futsal', 'Futbol','Baloncesto','Voleibol'];
    public mdFielClass = ''; //'md-invalid'
    public mdInputText = '';
    public hasTyped = false;

public mounted(){
    this.mdInputText = this.placeholder;
}

 /* eslint-disable */
  public onChange($event: any): void {
      this.hasTyped = true;
      this.$emit('onChange', this.mdInputText)
  }

  public get mdFieldClass(){
      return (this.mdInputText || !this.hasTyped) ? '' : 'md-invalid';
  }


}
</script>
<style  lang="less">
.input.contact-email-input{
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
