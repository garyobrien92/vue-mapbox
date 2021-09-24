import {isRef, isReadonly, nextTick} from 'vue';
import {mount} from '@vue/test-utils';
import useMap from './use-map';
import MapboxMap from './Map.vue';
import { MapboxEvent } from './enums';

const mockEvent = {
  type: MapboxEvent.Load
}
const mockMap = {
  remove: jest.fn(),
  on: jest.fn((_, callback: any) => callback(mockEvent))
};

jest.mock('mapbox-gl', () => ({
  Map: jest.fn(() => mockMap)
}))

const mockProps = {
  container: 'map',
  mapStyle: 'some style url'
} as any
const mockContext = {
  emit: jest.fn()
} as any


describe('useMap', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  });

  it('should return useMap state refs',() => {

    const {map, initialized} = useMap(mockProps, mockContext)
    
    expect(isRef(map)).toBeTruthy()
    expect(isRef(initialized)).toBeTruthy()

    expect(isReadonly(initialized)).toBeTruthy()
  })

  it('should update useMap state when used by component', async () => {
    const wrapper = mount(MapboxMap, {props: mockProps});

    await nextTick()

    const {map, initialized} = wrapper.vm;

    expect(initialized).toBe(true)
    expect(map).toEqual(mockMap)
  }) 
  
  it('should reset map state if component is destroyed', async () => {
    const wrapper = mount(MapboxMap,{props: mockProps});

    await nextTick()

    expect(wrapper.vm.initialized).toBe(true)
    expect(wrapper.vm.map).toEqual(mockMap)

    wrapper.unmount();

    expect(mockMap.remove).toHaveBeenCalled();

    expect(wrapper.vm.map).toBe(null)
    expect(wrapper.vm.initialized).toBe(false)
  })
})