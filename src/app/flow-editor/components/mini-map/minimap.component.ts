import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { jsPlumbInstance } from '../../../../ubix_module/jsplumb';

interface IPercentPosition {
  percentX: number;
  percentY: number;
}

@Component({
  selector: 'app-minimap',
  templateUrl: './minimap.component.html',
  styleUrls: ['./minimap.component.css']
})
export class MinimapComponent implements OnInit {

  @Input() moveMinimapView: (percentPosition: IPercentPosition) => void;

  private jsPlumbInstance: jsPlumbInstance;
  private suffixForIdTask = '_mini-map-task';
  private positionMiniMap: {x: number, y: number} = {x: 20, y: 20};

  @ViewChild('minimapView')
  private minimapViewElementRef: ElementRef;

  constructor(private el: ElementRef,
  ) { }

  ngOnInit(): void {
  }

}
