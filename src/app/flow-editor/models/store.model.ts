interface IStore {
  type: string;
  event: any;
  data: any;
}

export class Store implements IStore {
  type: string;
  event: any;
  data: any;

  constructor() { }

  public setStore(newStore: IStore) {
    this.type = newStore.type;
    this.event = newStore.event;
    this.data = newStore.data;
  }
}
