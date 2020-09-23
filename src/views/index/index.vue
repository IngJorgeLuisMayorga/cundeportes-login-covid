<template>
  <div class="view view-layout x-center y-center view-home">
       <form class="form-login">
          <div class="form-header">
              <ui-picture :src="cover"></ui-picture>
          </div>
          <div class="form-content">
            <ui-cc-input @onChange="onCedulaType($event)"></ui-cc-input>
            <ui-park-input :parks="parks" @onChange="onParkChange($event)"></ui-park-input>
            <ui-category-input @onChange="onCategoryChange($event)"></ui-category-input>
          </div>
          <div class="form-footer">
            <ui-submit text="Ingresar" @onClick="doSubmit()"></ui-submit>
          </div>
       </form> 
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="less" src="./index.less"></style>

