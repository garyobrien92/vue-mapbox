
import {Ref} from 'vue';
import {Map} from 'mapbox-gl';

export type UseMapState = {
  map: Ref<Map> | Ref<null>,
  initialized: Ref<boolean>,
  mapboxRef: Ref<Element> | Ref<null>
}