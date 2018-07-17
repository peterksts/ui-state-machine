import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ubix-movable-minimap-view]'
})
export class UbixMovableMinimapViewDirective {

  @Input() getMinimapBoundingClientRect: () => ClientRect | DOMRect;
  @Input() moveMinimapView: (percentPosition: { percentX: number, percentY: number }) => void;

  private pressed = false;
  private mouseStartX: number;
  private mouseStartY: number;

  constructor(private el: ElementRef
  ) {
  }

  private moveView(e) {
    const rectMiniMapView = this.el.nativeElement.getBoundingClientRect();
    const rectMiniMap = this.getMinimapBoundingClientRect();

    const startPositionX = parseInt(this.el.nativeElement.style.left.slice(0, this.el.nativeElement.style.left.length - 2), null);
    const startPositionY = parseInt(this.el.nativeElement.style.top.slice(0, this.el.nativeElement.style.top.length - 2), null);
    let newPositionX = startPositionX;
    let newPositionY = startPositionY;
    // set new X position mini-map view
    if (e.clientX > this.mouseStartX) {
      newPositionX = startPositionX + (e.clientX - this.mouseStartX);
    }
    if (e.clientX < this.mouseStartX) {
      newPositionX = startPositionX - (this.mouseStartX - e.clientX);
    }
    // set new Y position mini-map view
    if (e.clientY > this.mouseStartY) {
      newPositionY = startPositionY + (e.clientY - this.mouseStartY);
    }
    if (e.clientY < this.mouseStartY) {
      newPositionY = startPositionY - (this.mouseStartY - e.clientY);
    }
    // set position mini-map view
    this.mouseStartX = e.clientX;
    this.mouseStartY = e.clientY;
    if (rectMiniMapView.left + newPositionX >= rectMiniMap.left &&
      (newPositionX + (rectMiniMapView.right - rectMiniMapView.left)) + rectMiniMap.left <= rectMiniMap.right ) {
      this.el.nativeElement.style.left = newPositionX + 'px';
    } else {
      newPositionX = startPositionX;
    }
    if (rectMiniMapView.top + newPositionY >= rectMiniMap.top &&
      (newPositionY + (rectMiniMapView.bottom - rectMiniMapView.top)) + rectMiniMap.top <= rectMiniMap.bottom) {
      this.el.nativeElement.style.top = newPositionY + 'px';
    } else {
      newPositionY = startPositionY;
    }

    // callback for flow-builder minimap
    this.moveMinimapView({percentX: newPositionX / ((rectMiniMap.right - rectMiniMap.left) / 100),
      percentY: newPositionY / ((rectMiniMap.bottom - rectMiniMap.top) / 100)});
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(event) {
    if (event.target === this.el.nativeElement) {
      document.body.style.cursor = 'move';
      this.mouseStartX = event.clientX;
      this.mouseStartY = event.clientY;
      this.pressed = true;
    }
  }

  @HostListener('window:mousemove', ['$event'])
  mouseMove(event) {
    if (this.pressed) {
      this.moveView(event);
    }
  }

  @HostListener('window:mouseup', ['$event'])
  mouseUp(event) {
    this.pressed = false;
    document.body.style.cursor = 'default';
  }
}
