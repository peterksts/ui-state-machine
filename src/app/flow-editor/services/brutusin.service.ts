import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BrutusinService {

  private _brutusin: any;

  get forms() {
    return this._brutusin ? this._brutusin['json-forms'] : null;
  }

  constructor() {
    this._brutusin = window['brutusin'];
  }

  create(schema: any) {
    return this.forms.create(schema);
  }
}
