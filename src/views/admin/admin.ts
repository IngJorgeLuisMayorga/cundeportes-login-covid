import { deletePark } from '@/helpers/deletePark.helper';
import { getParksFromDB } from '@/helpers/getParksFromDB.helper';
import IFireBasePark from '@/models/firebase/IFireBasePark.model';
import { Component, Vue } from 'vue-property-decorator';

import AdminAuthFormComponent from "./components/auth.admin.vue";
import AdminHeaderComponent from "./components/header.admin.vue";

import TabBookingComponent from "./components/tab-booking.admin.vue";
import TabParksComponent from "./components/tab-parks.admin.vue";
import TabUsersComponent from "./components/tab-users.admin.vue";

//import moment from  'moment';

@Component({
    components: {
        'admin-auth-form': AdminAuthFormComponent,
        'admin-header': AdminHeaderComponent,
        'tab-bookings': TabBookingComponent,
        'tab-parks': TabParksComponent,
        'tab-users': TabUsersComponent,
    }
  })
  export default class AdminView extends Vue {

    public isAuth = false;
    public parks: IFireBasePark[] = [];

    private async mounted(){

        const isAuth = JSON.parse(localStorage.getItem('isAuth') || 'false');
        this.isAuth = isAuth;

        this.parks = await getParksFromDB();
    } 

    public onAuthSucceed(){
        this.isAuth = true;
    }

    public onAuthFailed(){
        this.$swal('CONTRASEÑA INCORRECTA', "", "error");
    }

    public async onAddPark($park: IFireBasePark){
        this.parks.push($park);
    }
    public async onEditPark($park: IFireBasePark){
        const parks = this.parks.map(park => {
            if(park.name === $park.name){
                return $park;
            } else {
                return park;
            }
        })
        this.parks = parks;
    }
    public async onRemovePark($park: IFireBasePark){
        const isRemoved = await deletePark($park);
        const parks = this.parks.filter(park => park.name != $park.name)
        this.parks = parks;
    }
  }