import { EndpointOptions } from '../../../ubix_module/jsplumb';

export const PortOptions: EndpointOptions = {
  anchor: [],
  maxConnections: 1,
  parameters: {},
  id: '',
  cssClass: 'endpoint',
  scope: '1.0',
  reattachConnections: true,
  type: 'Dot',
  // isSource: false,
  // isTarget: true,
  connector: 'Bezier',
  paintStyle: {fill: 'rgba(95, 158, 160, 0.4)', stroke: 'rgba(95, 158, 160, 0.6)', strokeWidth: 3, radius: 5},
  hoverPaintStyle: {stroke: 'rgba(95, 158, 160, 0.9)', fill: 'rgba(95, 158, 160, 0.7)'},
  connectorStyle: {stroke: 'rgba(102, 96, 255, 0.9)', strokeWidth: 1},
  connectorHoverStyle: {strokeWidth: 2}
};
