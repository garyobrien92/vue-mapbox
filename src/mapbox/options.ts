import { PropType } from 'vue';

export default {
  container: {
    type: String as PropType<string>,
    default: "map",
  },
  accessToken: {
    type: String as PropType<string>,
    default: undefined
  },
  minZoom: {
    type: Number as PropType<number>,
    default: 0
  },
  maxZoom: {
    type: Number as PropType<number>,
    default: 22
  },
  mapStyle: {
    type: [String, Object] as PropType<string | object>,
    required: true
  },
  hash: {
    type: [Boolean, String] as PropType<boolean | string>,
    default: false
  },
  interactive: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  bearingSnap: {
    type: Number as PropType<number>,
    default: 7
  },
  pitchWithRotate: {
    type:  Boolean as PropType<boolean>,
    default: true
  },
  clickTolerance: {
    type: Number as PropType<number>,
    default: 3
  },
  attributionControl: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  customAttribution: {
    type: [String, Array] as PropType<string | any[]>,
    default: null
  },
  logoPosition: {
    type: String as PropType<string>,
    default: "bottom-left",
    validator: (val: string) =>
      ["top-left", "top-right", "bottom-left", "bottom-right"].includes(val)
  },
  failIfMajorPerformanceCaveat: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  preserveDrawingBuffer: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  refreshExpiredTiles: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  maxBounds: {
    type: Array as PropType<any[]>,
    default() {
      return undefined;
    }
  },
  scrollZoom: {
    type: [Boolean, Object] as PropType<boolean | object>,
    default() {
      return true;
    }
  },
  boxZoom: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  dragRotate: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  dragPan: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  keyboard: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  doubleClickZoom: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  touchZoomRotate: {
    type: [Boolean, Object] as PropType<boolean | object>,
    default() {
      return true;
    }
  },
  trackResize: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  center: {
    type: [Object, Array] as PropType<object | any[]>,
    default: undefined
  },
  zoom: {
    type: Number as PropType<number>,
    default: 0
  },
  bearing: {
    type: Number as PropType<number>,
    default: 0
  },
  pitch: {
    type: Number as PropType<number>,
    default: 0
  },
  bounds: {
    type: [Object, Array] as PropType<object | any[]>,
    default: undefined
  },
  fitBoundsOptions: {
    type: Object as PropType<object>,
    default: undefined
  },
  renderWorldCopies: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  RTLTextPluginUrl: {
    type: String  as PropType<string>,
    default: undefined
  },
  light: {
    type: Object  as PropType<object>,
    default: undefined
  },
  tileBoundaries: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  collisionBoxes: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  repaint: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  transformRequest: {
    type: Function,
    default: null
  },
  maxTileCacheSize: {
    type: Number as PropType<number>,
    default: null
  },
  localIdeographFontFamily: {
    type: String as PropType<string>,
    default: null
  },
  collectResourceTiming: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  fadeDuration: {
    type: Number as PropType<number>,
    default: 300
  },
  crossSourceCollisions: {
    type: Boolean as PropType<boolean>,
    default: true
  }
}