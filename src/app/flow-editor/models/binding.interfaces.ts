interface IBrutusinForm {
  [propName: string]: any;

  render(container: HTMLElement, data: any): void;

  validate(): Boolean;

  getData(): any;

  getRenderingContainer(): any;
}


export { IBrutusinForm };
