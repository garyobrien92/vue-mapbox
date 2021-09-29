import {ref, computed, SetupContext, readonly, onMounted, onUnmounted, provide, watchEffect} from 'vue';
import {Map} from 'mapbox-gl';
import {MapboxEvent} from './enums';
import { UseMapState } from './types';

export const MapSymbol = Symbol('mapSymbol');


export default function useMap(props: any, context: SetupContext): UseMapState {
  const map = ref<any>(null);
  const initialized = ref(false);

  function emitEvent(event: any) {
    context.emit(event.type,{
      mapboxEvent: event,
      component: context,
      map: map.value
    })

    initialized.value = true;
  }


  function init() { 
    map.value = new Map({ style: props.mapStyle, ...props});

    map.value.on(MapboxEvent.Load, emitEvent)
  } 

  function destroy() {
    map.value && map.value.remove()
    map.value = null
    initialized.value = false
  }

  onMounted(init)

  onUnmounted(destroy)

  provide(MapSymbol, computed(() => map.value))

  return  {
    map,
    initialized: readonly(initialized)
  }
}