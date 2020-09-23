<template>
  <div class="input park-input-input">
    <div class="input-wrapper">

      <label style="text-align: left;display: block; color: #6e6e6e">Parque</label>

      <div class="radio-row park-logos">

        <div class="park-logo" :class="{'active' : park === $park}" v-for="$park of parks" :key="$park.name" @click="setPark($park)">
          <img :src="$park.logo">
          <span> {{ $park.name }} </span>
        </div>
     
      </div>

    </div>
    <br>
  </div>
</template>
<script lang="ts">
import IFireBasePark from '@/models/firebase/IFireBasePark.model';
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class ParkInputComponent extends Vue {

  @Prop() private parks!: IFireBasePark[];
  private park: IFireBasePark | null = null;

  public onChange($event: any): void {
    this.$emit("onChange", $event);
  }

  public setPark($park){
    this.park = $park;
    this.$emit('onChange', $park)
  }
  
}
</script>
<style  lang="less">
.input.park-input-input {

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

    .park-logos {

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
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;

        .park-logo {
          display: block;
          width: 120px;
          height: 120px;
          padding: 1em;
          cursor: pointer;
          -webkit-box-shadow: 6px 6px 17px -10px rgba(0,0,0,0.5);
          -moz-box-shadow: 6px 6px 17px -10px rgba(0,0,0,0.5);
          box-shadow: 6px 6px 17px -10px rgba(0,0,0,0.5);
          
          background-color: white;
          &.active{
            background-color:#e0dfdf;
          }
          &:hover{
            background-color:#e0dfdf;
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
          -webkit-align-content: center;
          -ms-flex-line-pack: center;
          align-content: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;

        }

        img{
          display: block;
          width: 40px;
          height: 40px;
        }
    }

  }
}
</style>
