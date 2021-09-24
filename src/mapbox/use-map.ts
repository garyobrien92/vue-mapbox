import {ref, watch, SetupContext, readonly, onMounted, onUnmounted} from 'vue';
import mapboxgl, {Map} from 'mapbox-gl';
import {MapboxEvent} from './enums';
import { UseMapState } from './types';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyeW9icmllbiIsImEiOiJjampzZXppZWYycnJnM3BvMTdlZ3kyMjlsIn0.9cIo5697DOC3BfFuNqoBQg';

export default function useMap(props: any, context: SetupContext): UseMapState {
  const map = ref<any>(null);
  const initialized = ref(false);

  function emitEvent(event: any) {
    context.emit(event.type,{
      mapboxEvent: event,
      component: context,
      map: map.value
    })
  }


  function init() { 
    initialized.value = true;

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

  return  {

    map,
    initialized: readonly(initialized)
  }
}