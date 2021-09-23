import {isRef, isReadonly, nextTick} from 'vue';
import {mount} from '@vue/test-utils';
import useMap from './use-map';
import MapboxMap from './Map.vue';
import { MapboxEvent } from './enums';

const mockEvent = {
  type: MapboxEvent.Load
}
const mockMap = {
  on: jest.fn((_, callback: any) => callback(mockEvent))
};

jest.mock('mapbox-gl', () => ({
  Map: jest.fn(() => mockMap)
}))

const mockProps = {
  container: 'map'
} as any
const mockContext = {
  emit: jest.fn()
} as any


describe('useMap', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  });

  it('should return useMap state refs', () => {
    const {map, initialized, mapboxRef} = useMap(mockProps, mockContext)
    
    expect(isRef(map)).toBeTruthy()
    expect(isRef(initialized)).toBeTruthy()
    expect(isRef(mapboxRef)).toBeTruthy()

    expect(isReadonly(initialized)).toBeTruthy()

    expect(map.value).toBe(null)
    expect(initialized.value).toBe(false)
    expect(mapboxRef.value).toBe(null)
  })

  it('should update useMap state when used by component', async () => {
    const wrapper = mount(MapboxMap, {});

    await nextTick()

    const {map, initialized} = wrapper.vm;

    expect(initialized).toBe(true)
    expect(map).toEqual(mockMap)
  })  
})