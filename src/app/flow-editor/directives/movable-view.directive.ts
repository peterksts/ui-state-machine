import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[ubix-movable-view]'
})
export class UbixMovableViewDirective {

  private pressed = false;
  private startPositionMouse: { x: number, y: number };

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  private moveView(e) {
    const startPositionX = this.el.nativeElement.scrollLeft;
    const startPositionY = this.el.nativeElement.scrollTop;
    const newPositionMouse = {x: e.clientX, y: e.clientY};
    let newPositionX = startPositionX;
    let newPositionY = startPositionY;
    // set new X position
    if (newPositionMouse.x > this.startPositionMouse.x) {
      newPositionX = startPositionX - (newPositionMouse.x - this.startPositionMouse.x);
    }
    if (newPositionMouse.x < this.startPositionMouse.x) {
      newPositionX = startPositionX + (this.startPositionMouse.x - newPositionMouse.x);
    }
    // set new Y position
    if (newPositionMouse.y > this.startPositionMouse.y) {
      newPositionY = startPositionY - (newPositionMouse.y - this.startPositionMouse.y);
    }
    if (newPositionMouse.y < this.startPositionMouse.y) {
      newPositionY = startPositionY + (this.startPositionMouse.y - newPositionMouse.y);
    }
    // set position scroll
    this.startPositionMouse = newPositionMouse;
    this.el.nativeElement.scrollLeft = newPositionX;
    this.el.nativeElement.scrollTop = newPositionY;
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(event) {
    if (event.target === this.el.nativeElement) {
      document.body.style.cursor = 'move';
      this.startPositionMouse = {x: event.clientX, y: event.clientY};
      this.pressed = true;
    }
  }

  @HostListener('mousemove', ['$event'])
  mouseMove(event) {
    if (this.pressed) {
      this.moveView(event);
    }
  }

  @HostListener('mouseup', ['$event'])
  mouseUp(event) {
    this.pressed = false;
    document.body.style.cursor = 'default';
  }
}
