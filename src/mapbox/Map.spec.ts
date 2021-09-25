import {nextTick} from 'vue';
import {mount} from '@vue/test-utils';
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

const props = {
  mapStyle: 'some style url'
};

describe('Map', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  });

  it('should update useMap state when used by component', async () => {
    const wrapper = mount(MapboxMap, {props});

    await nextTick()

    const {map, initialized} = wrapper.vm;

    expect(initialized).toBe(true)
    expect(map).toEqual(mockMap)
  });

  it('it should use container prop if passed', async () => {
    const wrapper = mount(MapboxMap, {
      props: {
        container: 'myMap',
        ...props
      }
    });

    await nextTick()

    expect(wrapper.attributes().id).toBe('myMap')
  })

  it('should slot content if initialized value is true', async () => {
    const wrapper = mount(MapboxMap, {
      props,
      slots: {
        default: '<div>I am the default slot</div>'
      }
    });

    await nextTick()

    expect(wrapper.html()).toContain('I am the default slot')
  })
})