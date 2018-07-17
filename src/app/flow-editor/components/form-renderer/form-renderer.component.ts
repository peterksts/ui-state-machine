import {Component, Inject, Input, OnInit} from '@angular/core';
import {BrutusinService} from '../../services/brutusin.service';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css']
})

export class FormRendererComponent implements OnInit {

  @Input() schema: any;
  @Input() data: any;

  private _brutusin: any;

  constructor(@Inject(BrutusinService) public brutusin: any) {
    // console.log(['Brutusin', brutusin]);
    // this._brutusin = brutusin;
  }

  ngOnInit() {
    this.create();
  }

  create() {
    const bf = this.brutusin.create(this.schema);
    const container = document.getElementById('form');
    bf.render(container, this.data);
  }

}
