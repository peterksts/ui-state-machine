import { Endpoint, EndpointOptions, jsPlumbInstance } from 'jsplumb';

export const GetCenterElement = (el: HTMLElement): {x: number, y: number} => {
  const rect = el.getBoundingClientRect();
  const x = (rect.right - rect.left) / 2;
  const y = (rect.bottom - rect.top) / 2;

  return {x: x, y: y};
};

export const AddEndpointInputPorts = (taskId: string,
                                      portOptions: EndpointOptions,
                                      count: number,
                                      jsPlumbInst: jsPlumbInstance,
                                      prefixId: string,
                                      suffixId: string): Endpoint[] => {
  if (count === 0) { return; }

  portOptions.isSource = false;
  portOptions.isTarget = true;

  let anchors = [[0.5, 0]];
  if (count > 1) {
    anchors = [];
    count += 1;
    let coordination = 1 / count;
    const coordinationIterator = coordination;

    for (let i = 2; i <= count; i++) {
      anchors.push([coordination, 0]);
      coordination += coordinationIterator;
    }
  }

  const listPort: Endpoint[] = [];
  anchors.forEach((anchor, index) => {
    portOptions.anchor = anchor;
    portOptions.id = prefixId + '-in_port-' + index + suffixId;
    portOptions.uuid = portOptions.id;
    const endpoint = jsPlumbInst.addEndpoint(taskId, portOptions);
    (<Endpoint>endpoint).id = portOptions.id;
    listPort.push(<Endpoint>endpoint);
  });
  return listPort;
};

export const AddEndpointOutputPorts = (taskId: string,
                                       portOptions: EndpointOptions,
                                       count: number,
                                       jsPlumbInst: jsPlumbInstance,
                                       prefixId: string,
                                       suffixId: string): Endpoint[] => {
  if (count === 0) { return; }

  portOptions.isSource = true;
  portOptions.isTarget = false;

  let anchors = [[0.5, 1]];
  if (count > 1) {
    anchors = [];
    count += 1;
    let coordination = 1 / count;
    const coordinationIterator = coordination;

    for (let i = 2; i <= count; i++) {
      anchors.push([coordination, 1]);
      coordination += coordinationIterator;
    }
  }

  const listPort: Endpoint[] = [];
  anchors.forEach((anchor, index) => {
    portOptions.anchor = anchor;
    portOptions.id = prefixId + '-out_port-' + index + suffixId;
    portOptions.uuid = portOptions.id;
    const endpoint = jsPlumbInst.addEndpoint(taskId, portOptions);
    (<Endpoint>endpoint).id = portOptions.id;
    listPort.push(<Endpoint>endpoint);
  });
  return listPort;
};

export const ParseStylePxToNumber = (style: string): number => {
  const styleNum = parseInt(style.slice(0, style.length - 2), null);
  return styleNum;
};
