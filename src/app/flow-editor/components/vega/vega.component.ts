import {Component, Input, OnInit} from '@angular/core';
import {DataSourceService} from '../../services/data-source.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

declare let vega;

@Component({
  selector: 'app-vega',
  templateUrl: './vega.component.html',
  styleUrls: ['./vega.component.css']
})
export class VegaComponent implements OnInit {

  constructor(private dataSource: DataSourceService,
              private activeModal: NgbActiveModal) {

  }

  ngOnInit() {
    const spec1 = {
      'marks': [{
        'marks': [{
          'marks': [{
            'encode': {
              'update': {
                'stroke': {
                  'field': 'series',
                  'scale': 'color'
                },
                'defined': {'signal': 'isNumber(datum.value)'},
                'y': {'field': 'value', 'scale': 'yscale'},
                'x': {'field': 'category', 'scale': 'xscale'}
              }
            }, 'from': {'data': 'facetData'}, 'type': 'line'
          }],
          'from': {'facet': {'groupby': 'series', 'data': 'foldedData', 'name': 'facetData'}},
          'type': 'group'
        }],
        'legends': [{'stroke': 'color', 'orient': 'right'}],
        'axes': [{
          'gridScale': 'xscale',
          'grid': true,
          'scale': 'yscale',
          'orient': 'left'
        }, {
          'gridScale': 'yscale',
          'grid': true,
          'labelPadding': 4,
          'tickSize': 0,
          'encode': {'labels': {'update': {'limit': {'signal': 'bandwidth(\'xscale\')'}}}},
          'scale': 'xscale',
          'orient': 'bottom'
        }],
        'scales': [{
          'zero': false,
          'range': [0, {'signal': 'box[2]-box[0]'}],
          'domain': {'field': 'category', 'data': 'foldedData'},
          'type': 'point',
          'name': 'xscale'
        }, {
          'nice': true,
          'zero': true,
          'round': true,
          'range': [{'signal': 'box[3]-box[1]'}, 0],
          'domain': {'field': 'value', 'data': 'foldedData'},
          'type': 'linear',
          'name': 'yscale'
        }, {
          'range': {'scheme': 'category20'},
          'domain': {'field': 'series', 'data': 'foldedData'},
          'type': 'ordinal',
          'name': 'color'
        }],


        // "$schema": "https://vega.github.io/schema/vega/v4.json",
        // "width": 400,
        // "height": 200,
        // "padding": 5,
        //
        // "data": [
        //   {
        //     "name": "table",
        //     "values": [
        //       {"category": "A", "amount": 28},
        //       {"category": "B", "amount": 55},
        //       {"category": "C", "amount": 43},
        //       {"category": "D", "amount": 91},
        //       {"category": "E", "amount": 81},
        //       {"category": "F", "amount": 53},
        //       {"category": "G", "amount": 19},
        //       {"category": "H", "amount": 87}
        //     ]
        //   }
        // ],


        'signals': [{
          'on': [{
            'update': 'invert(\'xscale\', clamp(x()-box[0], 0, box[2]-box[0]))',
            'events': 'mousemove'
          }], 'push': 'outer', 'name': 'indexDate'
        }],
        'encode': {
          'update': {
            'clip': true,
            'y2': {'signal': 'box[3]'},
            'y': {'signal': 'box[1]'},
            'x2': {'signal': 'box[2]'},
            'x': {'signal': 'box[0]'}
          }
        },
        'type': 'group',
        'name': 'boxGroup'
      }],
      'signals': [
        {'update': 'containerWidth', 'name': 'width'},
        {'update': 'containerHeight', 'name': 'height'},
        {'update': '[50, 50, width-150, height-50]', 'name': 'box'},
        {'name': 'indexDate'}
      ],
      'data': [
        {'name': 'vegaData'},
        {
          'transform': [
            {'as': 'category', 'expr': 'datum.ubix_row_id', 'type': 'formula'},
            {'as': ['series', 'value'], 'fields': '!!CLIENT-SIDE-REPLACED!!', 'type': 'fold'}
          ],
          'source': 'vegaData',
          'name': 'foldedData'
        }
      ]
    };

    const spec2 = {
      "$schema": "https://vega.github.io/schema/vega/v4.json",
      "width": 400,
      "height": 200,
      "padding": 5,
      "data": [
        {
          "name": "table",
          "values": [
            {"category": "A", "amount": 28},
            {"category": "B", "amount": 55},
            {"category": "C", "amount": 43},
            {"category": "D", "amount": 91},
            {"category": "E", "amount": 81},
            {"category": "F", "amount": 53},
            {"category": "G", "amount": 19},
            {"category": "H", "amount": 87}
          ]
        }
      ],
      "signals": [
        {
          "name": "tooltip",
          "value": {},
          "on": [
            {"events": "rect:mouseover", "update": "datum"},
            {"events": "rect:mouseout", "update": "{}"}
          ]
        }
      ],
      "scales": [
        {
          "name": "xscale",
          "type": "band",
          "domain": {"data": "table", "field": "category"},
          "range": "width",
          "padding": 0.05,
          "round": true
        },
        {
          "name": "yscale",
          "domain": {"data": "table", "field": "amount"},
          "nice": true,
          "range": "height"
        }
      ],
      "axes": [
        {"orient": "bottom", "scale": "xscale"},
        {"orient": "left", "scale": "yscale"}
      ],
      "marks": [
        {
          "type": "rect",
          "from": {"data": "table"},
          "encode": {
            "enter": {
              "x": {"scale": "xscale", "field": "category"},
              "width": {"scale": "xscale", "band": 1},
              "y": {"scale": "yscale", "field": "amount"},
              "y2": {"scale": "yscale", "value": 0}
            },
            "update": {
              "fill": {"value": "steelblue"}
            },
            "hover": {
              "fill": {"value": "red"}
            }
          }
        },
        {
          "type": "text",
          "encode": {
            "enter": {
              "align": {"value": "center"},
              "baseline": {"value": "bottom"},
              "fill": {"value": "#333"}
            },
            "update": {
              "x": {"scale": "xscale", "signal": "tooltip.category", "band": 0.5},
              "y": {"scale": "yscale", "signal": "tooltip.amount", "offset": -2},
              "text": {"signal": "tooltip.amount"},
              "fillOpacity": [
                {"test": "datum === tooltip", "value": 0},
                {"value": 1}
              ]
            }
          }
        }
      ]
    };
    const spec3 = {
      "$schema": "https://vega.github.io/schema/vega/v4.json",
      "width": 200,
      "height": 200,
      "padding": 5,

      "data": [
        {
          "name": "source",
          "url": "data/cars.json",
          "transform": [
            {
              "type": "filter",
              "expr": "datum['Horsepower'] != null && datum['Miles_per_Gallon'] != null && datum['Acceleration'] != null"
            }
          ]
        }
      ],

      "scales": [
        {
          "name": "x",
          "type": "linear",
          "round": true,
          "nice": true,
          "zero": true,
          "domain": {"data": "source", "field": "Horsepower"},
          "range": "width"
        },
        {
          "name": "y",
          "type": "linear",
          "round": true,
          "nice": true,
          "zero": true,
          "domain": {"data": "source", "field": "Miles_per_Gallon"},
          "range": "height"
        },
        {
          "name": "size",
          "type": "linear",
          "round": true,
          "nice": false,
          "zero": true,
          "domain": {"data": "source", "field": "Acceleration"},
          "range": [4, 361]
        }
      ],

      "axes": [
        {
          "scale": "x",
          "grid": true,
          "domain": false,
          "orient": "bottom",
          "tickCount": 5,
          "title": "Horsepower"
        },
        {
          "scale": "y",
          "grid": true,
          "domain": false,
          "orient": "left",
          "titlePadding": 5,
          "title": "Miles_per_Gallon"
        }
      ],

      "legends": [
        {
          "size": "size",
          "title": "Acceleration",
          "format": "s",
          "encode": {
            "symbols": {
              "update": {
                "strokeWidth": {"value": 2},
                "opacity": {"value": 0.5},
                "stroke": {"value": "#4682b4"},
                "shape": {"value": "circle"}
              }
            }
          }
        }
      ],

      "marks": [
        {
          "name": "marks",
          "type": "symbol",
          "from": {"data": "source"},
          "encode": {
            "update": {
              "x": {"scale": "x", "field": "Horsepower"},
              "y": {"scale": "y", "field": "Miles_per_Gallon"},
              "size": {"scale": "size", "field": "Acceleration"},
              "shape": {"value": "circle"},
              "strokeWidth": {"value": 2},
              "opacity": {"value": 0.5},
              "stroke": {"value": "#4682b4"},
              "fill": {"value": "transparent"}
            }
          }
        }
      ]
    };

    // vega.loader()
    //   .load('https://vega.github.io/vega/examples/bar-chart.vg.json')
    //   .then((data) =>{ render(JSON.parse(data)); });

    console.log(spec1);
    this.render(spec1);
  }

  private render(spec) {
    const view = new vega.View(vega.parse(spec))
      .renderer('canvas')  // set renderer (canvas or svg)
      .initialize('#vega') // initialize view within parent DOM container
      .hover()             // enable hover encode set processing
      .run();
  }

}
