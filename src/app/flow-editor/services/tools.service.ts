import {Endpoint, EndpointOptions, jsPlumbInstance} from 'jsplumb';

export const GetCenterElement = (el: HTMLElement): {x: number, y: number} => {
  const rect = el.getBoundingClientRect();
  const x = (rect.right - rect.left) / 2;
  const y = (rect.bottom - rect.top) / 2;

  return {x: x, y: y};
};

export interface IPort {
  id: string;
  Endpoint: Endpoint;
}

export const AddEndpointInputPorts = (taskId: string,
                                      portOptions: EndpointOptions,
                                      count: number,
                                      jsPlumbInst: jsPlumbInstance,
                                      prefixId: string,
                                      suffixId: string): IPort[] => {
  if (count === 0) { return; }

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

  const listPort: IPort[] = [];
  anchors.forEach((anchor, index) => {
    portOptions.anchor = anchor;
    portOptions.id = prefixId + '-in_port-' + index + suffixId;
    const endpoint = jsPlumbInst.addEndpoint(taskId, portOptions);
    (<Endpoint>endpoint).id = portOptions.id;
    listPort.push({id: portOptions.id, Endpoint: <Endpoint>endpoint});
  });
  return listPort;
};

export const AddEndpointOutputPorts = (taskId: string,
                                       portOptions: EndpointOptions,
                                       count: number,
                                       jsPlumbInst: jsPlumbInstance,
                                       prefixId: string,
                                       suffixId: string): IPort[] => {
  if (count === 0) { return; }

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

  const listPort: IPort[] = [];
  anchors.forEach((anchor, index) => {
    portOptions.anchor = anchor;
    portOptions.id = prefixId + '-out_port-' + index + suffixId;
    const endpoint = jsPlumbInst.addEndpoint(taskId, portOptions);
    (<Endpoint>endpoint).id = portOptions.id;
    listPort.push({id: portOptions.id, Endpoint: <Endpoint>endpoint});
  });
  return listPort;
};

export const ParseStylePxToNumber = (style: string): number => {
  const styleNum = parseInt(style.slice(0, style.length - 2), null);
  return styleNum;
};
