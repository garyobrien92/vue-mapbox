import {ref, watch, SetupContext} from 'vue';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FyeW9icmllbiIsImEiOiJjampzZXppZWYycnJnM3BvMTdlZ3kyMjlsIn0.9cIo5697DOC3BfFuNqoBQg';

export default function useMap(props: any, context: SetupContext) {
  const mapboxRef = ref(null);
  const map = ref<any>(null);
  const loaded = ref(null);

  function emitEvent(event: any) {
    context.emit(event.type,{
      mapboxEvent: event,
      component: context
    } )
  }


  function init() {
    map.value = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    map.value.on('load', emitEvent)
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
    loaded
  }
}