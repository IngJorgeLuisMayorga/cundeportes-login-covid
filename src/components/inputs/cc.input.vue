<template>
  <div class="input cc-input">  
      <div class="input-wrapper">
                <md-field :class="mdFieldClass">
                    <label> Cedula de Ciudadanía </label>
                    <md-input v-model="mdInputText" required @change="onChange($event)"></md-input>
                    <span class="md-error"> Cedula Invalida </span>
                </md-field>
      </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {

  @Prop() private label!: string;

  public mdFielClass = ''; //'md-invalid'
  public mdInputText = '';
  public hasTyped = false;

 /* eslint-disable */
  public onChange($event: any): void {
      this.hasTyped = true;
      this.$emit('onChange', $event.target.value)
  }

  public get mdFieldClass(){
      return (this.mdInputText || !this.hasTyped) ? '' : 'md-invalid';
  }


}
</script>
<style  lang="less">
.input.cc-input{
    .input-wrapper{
        display: block;
        width: 100%;
    }
}
</style>
