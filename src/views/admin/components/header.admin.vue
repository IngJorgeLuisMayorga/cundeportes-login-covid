<template>
  <header>
      <ui-picture :src="coverP1" style="height:240px"></ui-picture>
      <ui-picture :src="coverP2" style="height:240px"></ui-picture>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UIPictureImageComponent from '@/components/images/picture.image.vue';

@Component({
    components: {
        'ui-picture': UIPictureImageComponent,
    },
})
export default class AdminAuthView extends Vue {

  public mdInputText = '';
  public mdFieldClass = '';

  public coverP1 = require("@/assets/logop1.jpg");
  public coverP2 = require("@/assets/logop2.jpg");

  

}
</script>
<style scoped lang="less">
header{

background-color: white;
   display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
header .image-wrapper{
  width: fit-content;
}
header img{
    width: 150px;
    border-radius:1em
}
</style>
