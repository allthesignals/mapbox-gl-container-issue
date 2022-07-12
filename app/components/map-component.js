import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { registerWaiter, unregisterWaiter } from '@ember/test';

export default class MapComponentComponent extends Component {
  constructor(...args) {
    super(...args);

    this.checkMap = () => this.mapDidLoad;

    registerWaiter(this.checkMap);
  }

  initOptions = {
    style: 'mapbox://styles/mapbox/basic-v9',
    zoom: 13,
    center: [ -96.7969879, 32.7766642 ]
  };

  marker = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [ -96.7969879, 32.7766642 ] }
      }
    ]
  };

  @tracked
  mapDidLoad = false;

  @action
  mapLoaded(map) {
    console.log('did load')
    this.mapDidLoad = true;
  }

  willDestroyElement() {
    unregisterWaiter(this.checkMap)
  }
}
