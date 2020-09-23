<template>
  <div class="input input-group">

    <div class="group--name">
        {{ name }}
    </div>
    
    <div class="group--wrapper"> 
        <slot></slot>
    </div>

  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class GroupInputComponent extends Vue {
  @Prop() private name!: string;
}
</script>
<style  lang="less">
.input.input-group{

  display: block;
  width: 100%;
  padding-top: 1em;
  padding-bottom: 2em;

  position: relative;

  .group--name {
    color: gray;
    position: absolute;
    top: -0em;
    left: 1em;
    background-color: #f0f0f0 ;
    //background-color: red ;
    width: fit-content;
    display: block;
    z-index: 1000000;
    padding: 0.2em;
  }

  .group--wrapper {

    display: block;
    width: 100%;

    position: relative;
    box-sizing: border-box;
    padding: 1em 3em;

    border: 1px solid gray;
    border-radius: 0.5em;

  }
}
</style>
