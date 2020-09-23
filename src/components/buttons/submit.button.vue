<template>
  <div class="input cc-input">  
      <div class="input-wrapper">
           <md-button class="md-raised md-primary" @click="doClick()"> {{ text }}</md-button>
      </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class SubmitButtonComponent extends Vue {
  @Prop() private text!: string;

  doClick(): void {
      this.$emit('onClick')
  }
}
</script>
<style scoped lang="less">

</style>
