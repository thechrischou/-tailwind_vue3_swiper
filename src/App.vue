<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from './components/Home.vue'
import curationEvent from './components/CurationEvent.vue'
import CurationImg from './components/CurationImg.vue'
import CurationProduct from './components/CurationProduct.vue'
import CurationBrand from './components/CurationBrand.vue'
import CurationGrid from './components/CurationGrid.vue'

</script>

<template>
  <curationEvent />
  <curationGrid />
  <curationImg />
  <CurationBrand />
  <curationProduct />

  <Home />
  
</template>

<style>
#app {
  
}
</style>
