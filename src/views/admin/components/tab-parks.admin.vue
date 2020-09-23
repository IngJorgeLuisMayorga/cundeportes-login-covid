<template>
  <div class="tab tab-cards">



    <!-- ------------------------------------------------- -->
    <!-- --- ADD PARK CARD  ------------------------------ -->
    <!-- ------------------------------------------------- -->
      <div class="tab-card">
        <md-card class="card--park-new" @click="first = true">
            <add-park-modal @save="parkAdd($event)"></add-park-modal>
        </md-card>
      </div>
    <!-- ------------------------------------------------- -->



    <!-- ------------------------------------------------- -->
    <!-- --- LIST PARK CARD ------------------------------ -->
    <!-- ------------------------------------------------- -->
    <div class="tab-card" v-for="park of parks" :key="park.name">    
      <md-card class="card--park">

        <md-card-header>

          <md-card-header-text>
            <div class="md-title" style=" text-align: left;"> {{ park.name }}</div>
            <div class="md-subhead" style=" text-align: left; padding-left: 0em;">Aforo : {{ park.capacity }}</div>
          </md-card-header-text>

          <md-card-media>
            <img :src="park.logo" :alt="park.name + ' logo '">
          </md-card-media>

        </md-card-header>

        <md-card-actions style="position: absolute; bottom:0px; right: 0px">
          <md-button class="md-raised md-accent" style="background-color:#e26b6b; margin-right:1em" @click="parkDelete(park)">Eliminar</md-button>
          <edit-park-modal :park = "park" @edit="parkEdit($event)"></edit-park-modal>
        </md-card-actions>

      </md-card>
    </div>
    <!-- ------------------------------------------------- -->

  
  </div>

</template>
<script lang="ts">
import IFireBasePark from '@/models/firebase/IFireBasePark.model';
import { Component, Prop, Vue } from 'vue-property-decorator';

import AddParkModal from './add-park.admin.vue';
import EditParkModal from './edit-park.admin.vue';

import { deletePark } from '@/helpers/deletePark.helper';

@Component({
    components: {
      'add-park-modal': AddParkModal,
      'edit-park-modal': EditParkModal,
    },
})
export default class TabParksView extends Vue {

  @Prop() public parks!: IFireBasePark[];

  public parkAdd($park: IFireBasePark){
    this.$emit('add', $park )
  }

  public async parkEdit($park: IFireBasePark){
    this.$emit('edit', $park)
  }

  public async parkDelete($park: IFireBasePark){
    this.$emit('remove', $park )
  }

}
</script>
<style scoped lang="less">
.tab{
  height: auto;
}
.tab-cards{
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
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
}
.tab-card{
  display: block;
  width: 25%;
  margin: 1em;
  min-width: 300px;
  max-width: 500px;
}
.card--park{
    display: block;
  min-height: 250px !important;
}
.card--park-new{
  display: block;
  min-height: 250px;

  cursor: pointer;
  opacity: 1;

  -webkit-transition: all 400ms ease-in-out;
  -moz-transition: all 400ms ease-in-out;
  -ms-transition: all 400ms ease-in-out;
  -o-transition: all 400ms ease-in-out;
  transition: all 400ms ease-in-out;

  &:hover{
    opacity: 0.8;
    -webkit-transition: all 400ms ease-in-out;
    -moz-transition: all 400ms ease-in-out;
    -ms-transition: all 400ms ease-in-out;
    -o-transition: all 400ms ease-in-out;
    transition: all 400ms ease-in-out;
  }

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.card-actions{
      position: absolute;
    bottom: 0px;
    right: 0px;
}
</style>