<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MapboxMap from "./mapbox/Map.vue";

function mapLoaded(event: any) {
  console.log(event);
}
</script>

<template>
  <mapbox-map
    @load="mapLoaded"
    access-token="pk.eyJ1IjoiZ2FyeW9icmllbiIsImEiOiJjampzZXppZWYycnJnM3BvMTdlZ3kyMjlsIn0.9cIo5697DOC3BfFuNqoBQg"
    map-style="mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji"
    :center="[-74.5, 40]"
    :zoom="9"
  >
    <div>Map loaded</div>
  </mapbox-map>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
