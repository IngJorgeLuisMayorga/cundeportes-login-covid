<template>

  <div id="app">
    <router-view/>
  </div>

</template>

<style lang="scss">

$color-blue:#003554;

@import "~vue-material/dist/theme/engine"; // Import the theme engine
@include md-register-theme("default", (
  primary: $color-blue, // The primary color of your brand
  accent: #1a11e8 // The secondary color of your brand
));
@import "~vue-material/dist/theme/all"; // Apply the theme
</style>

<style lang="less">
@import './styles/_index.less';
</style>
