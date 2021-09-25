<template>
  <div :id="container" class="map">
    <slot v-if="initialized" />
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";
import useMap from "./use-map";
import options from "./options";

export default defineComponent({
  name: "Map",

  props: {
    mapboxGl: {
      type: Object,
      default: null,
    },

    ...options,
  },

  setup(props, context: SetupContext) {
    const { map, initialized } = useMap(props, context);

    return {
      map,
      initialized,
    };
  },
});
</script>

<style scoped>
</style>