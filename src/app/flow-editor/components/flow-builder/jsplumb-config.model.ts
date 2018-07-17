import { Defaults } from '../../../../ubix_module/jsplumb';

export const jsPlumbConfig: Defaults = {
  DragOptions: {cursor: 'pointer', zIndex: 2000},
  ConnectionOverlays: [
    ['Arrow', {
      location: 1,
      visible: true,
      width: 11,
      length: 11,
      id: 'ARROW',
      events: {}
    }],
    ['Label', {
      location: 0.1,
      id: 'label',
      cssClass: 'aLabel',
      events: {}
    }]
  ],
  Container: null // set your container
};
