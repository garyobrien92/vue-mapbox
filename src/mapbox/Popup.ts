import { h, SetupContext, ref, inject, onMounted, onUnmounted , PropType } from 'vue';
import {MapSymbol} from './use-map';
import { Popup, Map } from 'mapbox-gl';

export default {
  name: 'MapboxPopup',

  props: {
    coordinates: {
      type: Array as PropType<number[]>
    }
  },

  setup(props: any, context: SetupContext) {
    const map: any = inject(MapSymbol)
    const popup = ref(new Popup(props))

    const slots = context.slots.default ? context.slots.default() : [];

    function add() {
      popup.value = new Popup(props)
      .setLngLat(props.coordinates)
      .setDOMContent(slots[0].el as Node)
      .addTo(map.value as Map);
    }

    function remove() {
      if(map) {
        popup.value.remove()
      }
    }

    
    onMounted(add)
    onUnmounted(remove)
  

    return () => h('div', {}, slots)
  }
}