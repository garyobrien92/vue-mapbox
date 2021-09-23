<template>
  <div :id="container" ref="mapboxRef" class="map">
    <slot v-if="initialized" />
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType } from "vue";
import useMap from "./use-map";

export default defineComponent({
  props: {
    container: {
      type: String as PropType<string>,
      default: "map",
    },
  },

  setup(props, context: SetupContext) {
    const { mapboxRef, map, initialized } = useMap(props, context);

    return {
      mapboxRef,
      map,
      initialized,
    };
  },
});
</script>

<style scoped>
</style>