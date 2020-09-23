import { Component, Vue } from 'vue-property-decorator';

import UIPictureImageComponent from '@/components/images/picture.image.vue'; // @ is an alias to /src
import UICCInputComponent from '@/components/inputs/cc.input.vue'; // @ is an alias to /src
import UIParkInputComponent from '@/components/inputs/park.input.vue'; // @ is an alias to /src
import UICategoryInputComponent from '@/components/inputs/category.input.vue'; // @ is an alias to /src

import UISubmitButtonComponent from '@/components/buttons/submit.button.vue'; // @ is an alias to /src

import { getUserByCedula } from '@/helpers/getUserByCedula.helper';
import { getBookById } from '@/helpers/getBookById.helper';

import moment from  'moment';
import IFireBasePark from '@/models/firebase/IFireBasePark.model';
import { getParksFromDB } from '@/helpers/getParksFromDB.helper';


@Component({
  components: {

    'ui-cc-input': UICCInputComponent,
    'ui-park-input': UIParkInputComponent,
    'ui-category-input': UICategoryInputComponent,

    'ui-picture': UIPictureImageComponent,
    'ui-submit': UISubmitButtonComponent ,
  },
})
export default class Home extends Vue {
  
  public cover = require('@/assets/cover-banner-2.jpg');
  public cedula = '';
  public category = '';

  public parks: IFireBasePark[] = [] ;
  public park: null | IFireBasePark = null ;

  private async mounted(){
    this.parks = await getParksFromDB();
  }

  public onCedulaType($cedula: string): void {
      this.cedula = $cedula;
  }
  public onParkChange($park: IFireBasePark): void {
      this.park = $park;
  }
  public onCategoryChange($category: string): void {
      this.category = $category;
  }

  public async doSubmit() {

    try {

        // Cedula, User y Park
        const cedula = this.cedula;
        const user = await getUserByCedula(cedula);
        const park = this.park;
        const parks = this.parks;

        // Set SessionStorage
        sessionStorage.setItem('cedula', JSON.stringify(cedula));
        sessionStorage.setItem('user',   JSON.stringify(user));
        sessionStorage.setItem('parks', JSON.stringify(parks));
        sessionStorage.setItem('park', JSON.stringify(park));

        // Route to Forms
        if(!user){

          // Go To SignIn
          const parkId = (park?.id || park?.name.replace(/[^A-Z0-9]+/ig, "_"));
          const categoryId = this.category;

          if(parkId && categoryId){
            this.$router.push({ name: 'SignIn', params: { park: parkId , category: categoryId} })
          }

        } else {

           // Go To SignUp
           const parkId = (park?.id || park?.name.replace(/[^A-Z0-9]+/ig, "_"));
           const categoryId = this.category;

          if(parkId && categoryId){
            this.$router.push({ name: 'SignUp', params: { park: parkId , category: categoryId} })
          }

        }



    } catch(error) {
      this.$swal('Error @ doSubmit()')
      console.error(error);
    }

  }

}