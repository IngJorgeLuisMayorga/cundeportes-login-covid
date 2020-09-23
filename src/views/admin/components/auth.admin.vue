<template>
  <div class="view view-layout x-center y-center view-home">
       <form class="form-login">
       <div class="form-header">
              <ui-picture :src="cover"></ui-picture>
          </div>
          <div class="form-content">
             <md-field :class="mdFieldClass">
                    <label> Contraseña de Admin </label>
                    <md-input v-model="mdInputText" required ></md-input>
                    <span class="md-error"> Contraseña invalida Invalida </span>
              </md-field>
          </div>
          <div class="form-footer">
            <ui-submit text="Ingresar" @onClick="onSubmit()"></ui-submit>
          </div>
       </form> 
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UIPictureImageComponent from '@/components/images/picture.image.vue'; // @ is an alias to /src
import UICCInputComponent from '@/components/inputs/cc.input.vue'; // @ is an alias to /src
import UISubmitButtonComponent from '@/components/buttons/submit.button.vue'; // @ is an alias to /src
//import moment from  'moment';

const ADMIN_PASSWORD = '33DFX';

@Component({
    components: {
        'ui-cc-input': UICCInputComponent,
        'ui-picture': UIPictureImageComponent,
        'ui-submit': UISubmitButtonComponent ,
    },
})
export default class AdminAuthView extends Vue {

  public mdInputText = '';
  public mdFieldClass = '';

  public cover = require("@/assets/cover-banner-2.jpg");


  onSubmit(){
   if(this.mdInputText === ADMIN_PASSWORD ){
       localStorage.setItem('isAuth','true')
    this.$emit('onSucceed');
    } else {
        this.$emit('onFailed');
    }
  }
  

}
</script>
<style lang="less">
</style>
