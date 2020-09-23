<template>
  <div class="image picture-image" @click="goToHome()">  
      <div class="image-wrapper">
        <img :src="src">
      </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
  @Prop() private src!: string;
  goToHome(){
    this.$router.push('/')
  }
}
</script>
<style scoped lang="less">
    .image.picture-image{
        display: block;
        width: 100%;
        cursor: pointer;
    }
    .image-wrapper{
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 0em;
    }
</style>
