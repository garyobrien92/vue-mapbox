import {ref, watch, SetupContext, readonly} from 'vue';
import mapboxgl, {Map} from 'mapbox-gl';
import {MapboxEvent} from './enums';
import { UseMapState } from './types';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyeW9icmllbiIsImEiOiJjampzZXppZWYycnJnM3BvMTdlZ3kyMjlsIn0.9cIo5697DOC3BfFuNqoBQg';

export default function useMap(props: any, context: SetupContext): UseMapState {
  const mapboxRef = ref(null);
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

    map.value = new Map({
      style: 'mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      ...props
    });

    map.value.on(MapboxEvent.Load, emitEvent)
  } 

  function destroy() {
    map.value && map.value.remove()
  }

  watch(mapboxRef, (el, _, onCleanup) => {
    init()
    onCleanup(destroy)
  })

  return  {
    mapboxRef,
    map,
    initialized: readonly(initialized)
  }
}