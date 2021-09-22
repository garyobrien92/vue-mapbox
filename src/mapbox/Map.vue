<template>
  <div :id="container" ref="mapboxRef" class="map">
    <slot v-if="loaded" />
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType } from 'vue'
import useMap from './use-map'

export default defineComponent({
  props: {
    container: {
      type: String as PropType<string>,
      default: 'map'
    }
  },

  setup (props, context: SetupContext) {
    const {mapboxRef, map, loaded} = useMap(props, context)

    return {
      mapboxRef, map, loaded
    }
  }
})
</script>

<style scoped>

</style>