<template>
  <div id="core" class="container-fluid">
    <div class="row flex-nowrap flex-column core-content">
      <core-navigation v-once></core-navigation>
      <router-view class="core-page"/>
      <core-footer v-once></core-footer>
    </div>
  </div>
</template>

<script src='./core.js'>
</script>

<style src="./core.css">
</style>
