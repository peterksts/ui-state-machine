export class Minimap {

  private container: HTMLElement; // Html Element
  private positionMiniMap: {x: number, y: number} = {x: 20, y: 20};

  constructor(minimapId: string) {
    this.container = document.getElementById(minimapId);

    // get position mini-map
    if (this.container.style.right && this.container.style.top) {
      const x = parseInt(this.container.style.right.slice(0, this.container.style.right.length - 2), null);
      const y = parseInt(this.container.style.top.slice(0, this.container.style.top.length - 2), null);
    }
  }

  // shift mini-map
  public shift(x: number, y: number) {
    this.container.style.right = (this.positionMiniMap.x - x) + 'px';
    this.container.style.top = (this.positionMiniMap.y + y) + 'px';
  }
}
