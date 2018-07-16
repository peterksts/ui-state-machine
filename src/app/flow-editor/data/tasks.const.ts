import { Task } from '../models/task.model';

export const Tasks: any[] = [
  {
    '_id': '5b3f8a93db58397a47d006b1',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'operator', 'subCommand': 'delete'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'DSL: Delete Operator',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00662',
    'nameTemplate': 'develop_profile_na',
    'parameters': {'usage': 'script', 'subCommand': 'delete'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'DSL: Delete Script',
    'category': 'develop',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00673',
    'nameTemplate': 'develop_profile_na',
    'parameters': {'usage': 'script', 'subCommand': 'execute'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'DSL: Execute Script',
    'category': 'develop',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00684',
    'nameTemplate': 'develop_profile_na',
    'parameters': {'usage': 'script', 'subCommand': 'iteratorexecute'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'DSL: Execute Script Iterator',
    'category': 'develop',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006a6',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'script', 'subCommand': 'get'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'DSL: List Scripts',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00663',
    'nameTemplate': 'develop_profile_na',
    'parameters': {'usage': 'script', 'subCommand': 'loadexecfile'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'DSL: Load Script File',
    'category': 'develop',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00674',
    'nameTemplate': 'develop_profile_na',
    'parameters': {'usage': 'script', 'subCommand': 'loadexectable'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'DSL: Load Script Iterator File',
    'category': 'develop',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00651',
    'nameTemplate': 'develop_profile_na',
    'parameters': {'usage': 'operator', 'subCommand': 'add'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'DSL: New Operator',
    'category': 'develop',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00696',
    'nameTemplate': 'develop_profile_na',
    'parameters': {'usage': 'script', 'subCommand': 'executetext'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'DSL: Write and Execute Script',
    'category': 'develop',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00652',
    'nameTemplate': 'develop_profile_na',
    'parameters': {'usage': 'script', 'subCommand': 'iteratorexecutetext'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'DSL: Write and Execute Script Iterator',
    'category': 'develop',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006ab',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'trim'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'EDIT: Remove Columns',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006ae',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'search', 'subCommand': 'index'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'ELASTIC: Index ElasticSearch',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0065b',
    'name': 'ENGINEER - Advanced Create View',
    'displayName': 'Ubix Internal: Advanced Create View',
    'nameTemplate': 'Create View: {{table_name}}',
    'category': 'engineer',
    'parameters': {
      'jsonSchema': {
        'required': ['table_name', 'new_col', 'expression'],
        'properties': {
          'expression': {'type': 'string', 'description': 'Add HiveQL query here'},
          'table_name': {'type': 'string', 'description': 'Add table name here'}
        },
        'type': 'object',
        'title': 'enhanceNewTableParam'
      }
    },
    'execution': {'annotationSet': '{{table_name}}.schema.new', 'dsl': 'query \'{{expression}}\' | as {{table_name}}'},
    'completion': [{
      'subsetColumn': {'ignore': 'ubix_row_id', 'column': 'column_name'},
      'row': 'bycolumn',
      'annotationSet': '{{table_name}}.schema',
      'dsl': "schema | where table_name = '{{table_name}}'"
    }, {
      'columns': {'columns': 'type', 'ignore': true},
      'subsetColumn': {'column': 'name'},
      'row': 'bycolumn',
      'annotationSet': '{{table_name}}.distribution',
      'dsl': 'pipe {{table_name}} | describe distribution'
    }],
    'review': [{
      'primary': true,
      'dsl': 'pipe {{table_name}}',
      'table': '{{table_name}}',
      'type': 'data'
    }, {'set': '{{table_name}}.schema', 'type': 'annotations'}, {
      'set': '{{table_name}}.distribution',
      'type': 'annotations'
    }],
    '__v': 0,
    'produces': ['source'],
    'consumes': [],
    'version': 0
  }, {
    '_id': '5b3f8a92db58397a47d00675',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'fillEmpty'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'ENHANCE: Fill empty values',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00659',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'factor'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'ENHANCE: Index Distinct Values',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0065a',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'concat'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'EXPORT: Convert Column to String Array',
    'category': 'integrate',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0066b',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'pipe'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'EXPORT: Download Table',
    'category': 'integrate',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0069f',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'save', 'subCommand': 'csv'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'EXPORT: Save as CSV to Network',
    'category': 'integrate',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0068d',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'save', 'subCommand': 'parquet'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'EXPORT: Save as Parquet',
    'category': 'integrate',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0068c',
    'name': 'FEATURE - Advanced Derive Feature',
    'displayName': 'Advanced Derive Feature',
    'nameTemplate': 'Derive Feature: {{new_col}}',
    'category': 'engineer',
    'parameters': {
      'jsonSchema': {
        'required': ['table_name', 'new_col', 'expression'],
        'properties': {
          'expression': {'type': 'string', 'description': 'Add HiveQL expression here'},
          'new_col': {'type': 'string', 'description': 'Column Name'},
          'table_name': {'type': 'string', 'description': 'Table Name'}
        },
        'type': 'object',
        'title': 'enhanceNewColumnParam'
      }, 'interpolate': {'table_name': {'dataEntity': {'category': 'source'}}}
    },
    'execution': {'dsl': 'pipe {{table_name}}  | sql-expr -n {{new_col}} \'{{expression}}\' | as {{table_name}}_{{new_col}}'},
    'completion': [{
      'dataEntity': {
        'category': 'source',
        'name': '{{table_name}}_{{new_col}}',
        'child': 'feature'
      }
    }, {
      'dsl': 'schema --filter {{table_name}}_{{new_col}}',
      'annotations': {
        'annotationSet': '{{table_name}}_{{new_col}}.schema',
        'row': 'bycolumn',
        'subsetColumn': {'column': 'column_name', 'ignore': 'ubix_row_id'}
      },
      'dataEntity': {
        'category': 'feature',
        'name': '',
        'nameColumn': 'column_name',
        'parent': 'source',
        'properties': [{'name': 'table', 'value': '{{table_name}}_{{new_col}}'}, {
          'name': 'column',
          'column': 'column_name'
        }]
      }
    }, {
      'columns': {'columns': 'type', 'ignore': true},
      'subsetColumn': {'column': 'name'},
      'row': 'bycolumn',
      'annotationSet': '{{table_name}}_{{new_col}}.distribution',
      'dsl': 'pipe {{table_name}}_{{new_col}} | columns {{new_col}} | describe distribution'
    }],
    'review': [{
      'primary': true,
      'dsl': 'pipe {{table_name}}_{{new_col}}',
      'table': '{{table_name}}_{{new_col}}',
      'type': 'data'
    }, {
      'set': '{{table_name}}_{{new_col}}.schema',
      'type': 'annotations'
    }, {'set': '{{table_name}}_{{new_col}}.distribution', 'type': 'annotations'}],
    '__v': 0,
    'produces': ['source'],
    'consumes': ['source'],
    'version': 8
  }, {
    '_id': '5b3f8a92db58397a47d00669',
    'name': 'FEATURE - Bucket by Clusters',
    'displayName': 'Bucket by Clusters',
    'nameTemplate': 'Bucket {{column}} by Clusters',
    'category': 'engineer',
    'parameters': {
      'jsonSchema': {
        'type': 'object',
        'properties': {
          'table_src': {'type': 'string', 'title': 'Table to bucket'},
          'table_dst': {'type': 'string', 'title': 'New table'},
          'column': {'type': 'string', 'title': 'Column to bucket', 'description': 'column for bucket calculation'},
          'input': {
            'type': 'integer',
            'minimum': '2',
            'maximum': '100',
            'title': 'Number of buckets',
            'description': 'number of buckets, or clusters for column'
          }
        },
        'required': ['table_src', 'table_dst', 'input', 'column'],
        'parameterOrder': ['table_src', 'column', 'input', 'table_dst'],
        'interpolate': {'table_dst': {'parameter': 'table_src', 'template': '{{table_src}}_bucketclus'}}
      }
    },
    'execution': {'dsl': [{'dsl': 'pipe {{table_src}} | bin auto -c {{column}} -k {{input}}'},
        {'dsl': 'rename column -f {{column}}_bin_factor1,{{column}}_bin1 -t' +
          ' {{column}}_clus_bucket_group_of_{{input}},{{column}}_clus_bucket_range_of_{{input}} | as {{table_dst}}'}]},
    'completion': [{
      'dsl': [{'dsl': 'pipe {{table_dst}} | countby {{column}}_clus_bucket_group_of_{{input}},{{column}}_clus_bucket_range_of_{{input}} '},
        {'dsl': 'rename column -f 3 -t Count | distinct | sortby 1 | as {{table_dst}}_bucket_summary'}],
      'annotationSet': '{{table_dst}}.summary',
      'row': 'all'
    }, {
      'dsl': 'schema --filter {{table_dst}}',
      'annotationSet': '{{table_dst}}.schema',
      'row': 'bycolumn',
      'subsetColumn': {'column': 'column_name', 'ignore': 'ubix_row_id'}
    }, {
      'dsl': 'pipe {{table_dst}} | columns {{column}}_clus_bucket_group_of_{{input}},{{column}}_' +
        'clus_bucket_range_of_{{input}} | describe distribution',
      'annotationSet': '{{table_dst}}.distribution',
      'row': 'bycolumn',
      'subsetColumn': {'column': 'name'},
      'columns': {'ignore': true, 'columns': 'type'}
    }],
    'review': [{
      'type': 'data',
      'table': '{{table_dst}}_bucket_summary',
      'dsl': 'pipe {{table_dst}}_bucket_summary',
      'primary': true
    }, {'type': 'data', 'table': '{{table_dst}}', 'dsl': 'pipe {{table_dst}}', 'primary': true}, {
      'type': 'annotations',
      'set': '{{table_dst}}.schema'
    }, {'type': 'annotations', 'set': '{{table_dst}}.distribution'}],
    '__v': 0,
    'produces': ['source'],
    'consumes': ['source'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d00658',
    'name': 'FEATURE - Bucket by Percentile',
    'displayName': 'Bucket by Percentile',
    'nameTemplate': 'Bucket {{column}} by Percentile',
    'category': 'engineer',
    'parameters': {
      'jsonSchema': {
        'type': 'object',
        'properties': {
          'table_src': {'type': 'string', 'title': 'Table to bucket'},
          'table_dst': {'type': 'string', 'title': 'New table'},
          'column': {'type': 'string', 'title': 'Column to bucket', 'description': 'column for bucket calculation'},
          'input': {
            'type': 'integer',
            'minimum': '2',
            'maximum': '100',
            'title': 'Number of buckets',
            'description': 'number of buckets, or quantiles for column'
          }
        },
        'required': ['table_src', 'table_dst', 'input', 'column']
      },
      'parameterOrder': ['table_src', 'column', 'input', 'table_dst'],
      'interpolate': {'table_dst': {'parameter': 'table_src', 'template': '{{table_src}}_bucketpct'}}
    },
    'execution': {'dsl': [{'dsl': 'pipe {{table_src}} | bin quantile -c {{column}} -q {{input}}'},
        {'dsl': 'rename column -f {{column}}_bin_factor1,{{column}}_bin1 -t {{column}}_pct_bucket_group_of_{{input}},{{column}}' +
          '_pct_bucket_range_of_{{input}} | as {{table_dst}}'}]},
    'completion': [{
      'dsl': [{'dsl': 'pipe {{table_dst}} | countby {{column}}_pct_bucket_group_of_{{input}},' +
        '{{column}}_pct_bucket_range_of_{{input}} '}, {'dsl': 'rename column -f 3 -t Count | distinct |' +
        ' sortby 1 | as {{table_dst}}_bucket_summary'}],
      'annotationSet': '{{table_dst}}.summary',
      'row': 'all'
    }, {
      'dsl': 'schema --filter {{table_dst}}',
      'annotationSet': '{{table_dst}}.schema',
      'row': 'bycolumn',
      'subsetColumn': {'column': 'column_name', 'ignore': 'ubix_row_id'}
    }, {
      'dsl': 'pipe {{table_dst}} | columns {{column}}_pct_bucket_group_of_{{input}},{{column}}_pct_bucket_range_of_{{input}}' +
      ' | describe distribution',
      'annotationSet': '{{table_dst}}.distribution',
      'row': 'bycolumn',
      'subsetColumn': {'column': 'name'},
      'columns': {'ignore': true, 'columns': 'type'}
    }],
    'review': [{
      'type': 'data',
      'table': '{{table_dst}}_bucket_summary',
      'dsl': 'pipe {{table_dst}}_bucket_summary',
      'primary': true
    }, {'type': 'data', 'table': '{{table_dst}}', 'dsl': 'pipe {{table_dst}}', 'primary': true}, {
      'type': 'annotations',
      'set': '{{table_dst}}.schema'
    }, {'type': 'annotations', 'set': '{{table_dst}}.distribution'}],
    '__v': 0,
    'produces': ['source'],
    'consumes': ['source'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0067a',
    'name': 'FEATURE - Bucket by Ranges',
    'displayName': 'Bucket by Ranges',
    'nameTemplate': 'Bucket {{column}} by Ranges',
    'category': 'engineer',
    'parameters': {
      'jsonSchema': {
        'type': 'object', 'properties': {
          'table_src': {'type': 'string', 'title': 'Table to bucket'},
          'table_dst': {'type': 'string', 'title': 'New table'},
          'column': {'type': 'string', 'title': 'Column to bucket', 'description': 'column for bucket calculation'},
          'input': {
            'type': 'integer',
            'minimum': '2',
            'maximum': '100',
            'title': 'Number of buckets',
            'description': 'number of buckets, or subranges for column'
          }
        }, 'required': ['table_src', 'table_dst', 'input', 'column']
      },
      'parameterOrder': ['table_src', 'column', 'input', 'table_dst'],
      'interpolate': {
        'table_src': {'dataEntity': {'category': 'source'}},
        'column': {
          'parameter': 'table_src',
          'dataEntity': {'category': 'feature', 'relations': {'sourceId': '_id»},»[«:»column'}},
          'table_dst': {'parameter': 'table_src', 'template': '{{table_src}}_bucketrng'}
        },
        'consumesMap': {
          'feature': {
            'parameter': 'column',
            'property': 'column',
            'map': [{'parameter': 'table_src', 'property': 'table'}]
          }
        }
      },
      'execution': {'dsl': [{'dsl': 'pipe {{table_src}} | bin range -c {{column}} -r {{input}}'},
          {'dsl': 'rename column -f {{column}}_bin_factor1,{{column}}_bin1 -t {{column}}_rng_bucket_group_of_{{input}},{{column}}' +
            '_rng_bucket_range_of_{{input}} | as {{table_dst}}'}]},
      'completion': [{
        'dsl': [{'dsl': 'pipe {{table_dst}} | countby {{column}}_rng_bucket_group_of_{{input}}' +
          ',{{column}}_rng_bucket_range_of_{{input}} '},
          {'dsl': 'rename column -f 3 -t Count | distinct | sortby 1 | as {{table_dst}}_bucket_summary'}],
        'annotationSet': '{{table_dst}}.summary',
        'row': 'all'
      }, {
        'dsl': 'schema --filter {{table_dst}}',
        'annotationSet': '{{table_dst}}.schema',
        'row': 'bycolumn',
        'subsetColumn': {'column': 'column_name', 'ignore': 'ubix_row_id'}
      }, {
        'dsl': 'pipe {{table_dst}} | columns {{column}}_rng_bucket_group_of_{{input}},{{column}}' +
        '_rng_bucket_range_of_{{input}} | describe distribution',
        'annotationSet': '{{table_dst}}.distribution',
        'row': 'bycolumn',
        'subsetColumn': {'column': 'name'},
        'columns': {'ignore': true, 'columns': 'type'}
      }],
      'review': [{
        'name': 'bucket_summary',
        'type': 'data',
        'table': '{{table_dst}}_bucket_summary',
        'dsl': 'pipe {{table_dst}}_bucket_summary'
      }, {
        'name': 'Bucket Distribution',
        'type': 'plot',
        'data': 'bucket_summary',
        'primary': true,
        'plot': {
          'plotType': 'vega-prefab',
          'specTemplate': 'bar',
          'parameters': {'x': '{{column}}_rng_bucket_range_of_{{input}}', 'y': ['Count']}
        },
        'plotTemplateKeys': ['parameters.x']
      }, {
        'type': 'data',
        'table': '{{table_dst}}',
        'dsl': 'pipe {{table_dst}}',
        'primary': true
      }, {'type': 'annotations', 'set': '{{table_dst}}.schema'}, {
        'type': 'annotations',
        'set': '{{table_dst}}.distribution'
      }],
      '__v': 0,
      'produces': ['source'],
      'consumes': ['feature'],
      'version': 7
    }
  },
  {
    '_id': '5b3f8a92db58397a47d0067b',
    'name': 'FEATURE - Pivot',
    'displayName': 'Pivot',
    'nameTemplate': 'Pivot {{table_src}} on {{output}}',
    'category': 'engineer',
    'parameters': {
      'jsonSchema': {
        'type': 'object',
        'properties': {
          'table_src': {'type': 'string', 'title': 'Table to pivot'},
          'table_dst': {'type': 'string', 'title': 'New table'},
          'columns': {
            'type': 'string',
            'title': 'Row grouping ',
            'description': 'comma delimited list of columns for grouping aggregates'
          },
          'output': {
            'type': 'string',
            'title': 'Aggregation column',
            'description': 'column that will be calculated in aggregate'
          },
          'input': {
            'type': 'string',
            'title': 'Column grouping',
            'description': 'column name producing one aggregated column per value'
          },
          'agg': {
            'type': 'string',
            'title': 'Aggregation',
            'description': 'Type of calculation on aggregation column',
            'enum': ['avg', 'count', 'stdev', 'sum']
          }
        },
        'required': ['table_src', 'table_dst', 'input', 'output', 'columns', 'agg']
      }
    },
    'execution': {'dsl': [{'dsl': 'pipe {{table_src}} | transpose pivot -i {{input}} -c {{columns}}' +
        ' -o {{agg}}_{{output}} -a {{agg}}:{{output}}'}, {'dsl': 'as {{table_dst}}'}]},
    'completion': [{
      'dsl': 'schema --filter {{table_dst}}',
      'annotationSet': '{{table_dst}}.schema',
      'row': 'bycolumn',
      'subsetColumn': {'column': 'column_name', 'ignore': 'ubix_row_id'}
    }, {
      'dsl': 'pipe {{table_dst}} | describe distribution',
      'annotationSet': '{{table_dst}}.distribution',
      'row': 'bycolumn',
      'subsetColumn': {'column': 'name'},
      'columns': {'ignore': true, 'columns': 'type'}
    }],
    'review': [{
      'type': 'data',
      'table': '{{table_dst}}',
      'dsl': 'pipe {{table_dst}}',
      'primary': true
    }, {'type': 'annotations', 'set': '{{table_dst}}.schema'}, {
      'type': 'annotations',
      'set': '{{table_dst}}.distribution'
    }],
    '__v': 0,
    'produces': ['source'],
    'consumes': ['source'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0069e',
    'name': 'FEATURE - Unpivot',
    'displayName': 'Unpivot',
    'nameTemplate': 'Unpivot {{table_src}} by {{input}}',
    'category': 'engineer',
    'parameters': {
      'jsonSchema': {
        'type': 'object',
        'properties': {
          'table_src': {'type': 'string', 'title': 'Table to unpivot'},
          'table_dst': {'type': 'string', 'title': 'New table'},
          'output': {
            'type': 'string',
            'title': 'Unpivoted data prefix',
            'description': 'name for new label and value columns'
          },
          'input': {'type': 'string', 'title': 'Unpivot columns', 'description': 'column names (comma delimited) '},
          'empty': {'type': 'boolean', 'title': 'Add rows for empty pivoted values'}
        },
        'required': ['table_src', 'table_dst', 'output', 'input']
      }
    },
    'execution': {'dsl': [{'dsl': 'pipe {{table_src}} | transpose unpivot -i {{input}} -o' +
        ' {{output}}_label'}, {'dsl': 'rename column -f transposed_1 -t {{output}}_value | as {{table_dst}}'}]},
    'completion': [{
      'dsl': 'schema --filter {{table_dst}}',
      'annotationSet': '{{table_dst}}.schema',
      'row': 'bycolumn',
      'subsetColumn': {'column': 'column_name', 'ignore': 'ubix_row_id'}
    }, {
      'dsl': 'pipe {{table_dst}} | describe distribution',
      'annotationSet': '{{table_dst}}.distribution',
      'row': 'bycolumn',
      'subsetColumn': {'column': 'name'},
      'columns': {'ignore': true, 'columns': 'type'}
    }],
    'review': [{
      'type': 'data',
      'table': '{{table_dst}}',
      'dsl': 'pipe {{table_dst}}',
      'primary': true
    }, {'type': 'annotations', 'set': '{{table_dst}}.schema'}, {
      'type': 'annotations',
      'set': '{{table_dst}}.distribution'
    }],
    '__v': 0,
    'produces': ['source'],
    'consumes': ['source'],
    'version': 2
  },


  {
    '_id': '5b3f8a92db58397a47d00699',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'edges'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Convert graph to edge table',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00698',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'vertices'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Convert graph to vertex table',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00689',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'graph', 'subCommand': 'buildseparatedvertex'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Create graph from edge and vertex tables',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0069b',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'graph', 'subCommand': 'build'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Create graph from single table',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00653',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'stronglyconnectedcomponents'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Derive component connections',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00697',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'pagerank'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Derive link ranks using PageRank',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00664',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'trianglecount'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Derive triangle counts',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00688',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa227a7dfe97ae40941a6',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa636ce11a57b337777f3',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa8eab6da867b636ee293',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3faa626a103b7b87cb8b1d',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fadae4b62f27bcb04f0af',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fb4754b96f781b7465077',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4341d1dba9d204f442c2e0',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b435a78a5c1bf072cad6560',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b43670859bfc50b1b182134',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b448cfdae7815189f3368ea',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44ac921a2f761a179a229b',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44bfcd6d8d3d1a8ae11815',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b45cf36e5011409fa26920a',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634d8f0513f24f65e8829',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634e1be619f250bbad32d',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00656',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa227a7dfe97ae40941a5',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa636ce11a57b337777ef',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa8eab6da867b636ee295',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3faa626a103b7b87cb8b18',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fadae4b62f27bcb04f0b3',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fb4754b96f781b7465079',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4341d1dba9d204f442c2e2',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b435a78a5c1bf072cad655e',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b43670859bfc50b1b18212e',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b448cfdae7815189f3368e9',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44ac921a2f761a179a229a',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44bfcd6d8d3d1a8ae11813',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b45cf36e5011409fa269209',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634d8f0513f24f65e8826',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634e1be619f250bbad32f',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'edgeleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Edge left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00657',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'subgraph', 'subCommand': 'edgefilter'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Filter graph by edge filter',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00668',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'subgraph', 'subCommand': 'edgetable'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Filter graph by edge table',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00679',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'subgraph', 'subCommand': 'neighborsreduce'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Filter graph by neighbor reduction',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0069c',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'subgraph', 'subCommand': 'vertexfilter'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Filter graph by vertex filter',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0068a',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'subgraph', 'subCommand': 'vertextable'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Filter graph by vertex table',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00667',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa227a7dfe97ae40941a8',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa636ce11a57b337777ed',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa8eab6da867b636ee297',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3faa626a103b7b87cb8b1a',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fadae4b62f27bcb04f0b1',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fb4754b96f781b7465076',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4341d1dba9d204f442c2e4',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b435a78a5c1bf072cad6562',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b43670859bfc50b1b182132',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b448cfdae7815189f3368e4',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44ac921a2f761a179a2298',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44bfcd6d8d3d1a8ae1180f',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b45cf36e5011409fa269205',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634d8f0513f24f65e8828',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634e1be619f250bbad331',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexinner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00678',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa227a7dfe97ae40941a3',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa636ce11a57b337777f2',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa8eab6da867b636ee299',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3faa626a103b7b87cb8b1c',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fadae4b62f27bcb04f0ad',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fb4754b96f781b746507b',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4341d1dba9d204f442c2de',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b435a78a5c1bf072cad655c',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b43670859bfc50b1b182130',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b448cfdae7815189f3368e6',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44ac921a2f761a179a229d',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44bfcd6d8d3d1a8ae11811',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b45cf36e5011409fa269207',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634d8f0513f24f65e882b',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634e1be619f250bbad32c',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'vertexleft'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'GRAPH: Vertex left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006b0',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'fs', 'subCommand': 'rm'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'HDFS: Remove File',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006a9',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'kafka', 'subCommand': 'delete'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'KAFKA: Delete Topic',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0067c',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'push'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'KAFKA: Send Data to Topic',
    'category': 'integrate',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a93db58397a47d006ad',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'kafka', 'subCommand': 'unregister'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'KAFKA: Unregister Topic',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0064f',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'kafka', 'subCommand': 'schema'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'KAFKA: View Topic Schema',
    'category': 'deploy',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0066c',
    'name': 'LOAD - CSV',
    'displayName': 'Load from CSV',
    'nameTemplate': 'Load {{table}} from CSV',
    'category': 'load',
    'parameters': {
      'usage': 'load',
      'subCommand': 'csv',
      'jsonSchema': {
        'type': 'object',
        'properties': {
          'table': {'title': 'Name of Table'},
          'path': {'title': 'Path to Content'},
          'header': {'title': 'Header Line Specifies Columns', 'type': 'boolean', 'default': true},
          'metadata': {'type': 'array', 'uniqueItems': 'true', 'minItems': 0, 'items': {'type': 'string'}}
        },
        'required': ['header']
      }
    },
    'execution': {'dsl': 'load csv', 'attributes': true},
    'completion': [{
      'dataEntity': {
        'category': 'source',
        'name': '{{table}}',
        'child': 'feature'
      }
    }, {
      'dsl': 'schema --filter {{table}}',
      'annotations': {
        'annotationSet': '{{table}}.schema',
        'row': 'bycolumn',
        'subsetColumn': {'column': 'column_name', 'ignore': 'ubix_row_id'}
      },
      'dataEntity': {
        'category': 'feature',
        'name': '{{table}}-',
        'nameColumn': 'column_name',
        'parent': 'source',
        'properties': [{'name': 'table', 'value': '{{table}}'}, {'name': 'column', 'column': 'column_name'}]
      }
    }, {
      'dsl': 'pipe {{table}} | describe distribution',
      'annotationSet': '{{table}}.distribution',
      'row': 'bycolumn',
      'subsetColumn': {'column': 'name'},
      'columns': {'ignore': true, 'columns': 'type'}
    }],
    'review': [{
      'name': 'table-data',
      'type': 'data',
      'table': '{{table}}',
      'dsl': 'pipe {{table}}'
    }, {
      'name': 'Data Review',
      'type': 'plot',
      'data': 'table-data',
      'plot': {
        'plotType': 'vega',
        'vegaSpec': {
          'data': [{'name': 'vegaData'}, {
            'name': 'foldedData',
            'source': 'vegaData',
            'transform': [{'type': 'formula', 'expr': 'datum.ubix_row_id', 'as': 'category'}, {
              'type': 'fold',
              'fields': '!!CLIENT-SIDE-REPLACED!!',
              'as': ['series', 'value']
            }]
          }],
          'signals': [{'name': 'width', 'update': 'containerWidth'}, {
            'name': 'height',
            'update': 'containerHeight'
          }, {'name': 'box', 'update': '[50, 50, width-150, height-50]'}, {'name': 'indexDate'}],
          'marks': [{
            'name': 'boxGroup',
            'type': 'group',
            'encode': {
              'update': {
                'x': {'signal': 'box[0]'},
                'x2': {'signal': 'box[2]'},
                'y': {'signal': 'box[1]'},
                'y2': {'signal': 'box[3]'},
                'clip': true
              }
            },
            'signals': [{
              'name': 'indexDate',
              'push': 'outer',
              'on': [{'events': 'mousemove', 'update': "invert('xscale', clamp(x()-box[0], 0, box[2]-box[0]))"}]
            }],
            'scales': [{
              'name': 'xscale',
              'type': 'point',
              'domain': {'data': 'foldedData', 'field': 'category'},
              'range': [0, {'signal': 'box[2]-box[0]'}],
              'zero': false
            }, {
              'name': 'yscale',
              'type': 'linear',
              'domain': {'data': 'foldedData', 'field': 'value'},
              'range': [{'signal': 'box[3]-box[1]'}, 0],
              'round': true,
              'zero': true,
              'nice': true
            }, {
              'name': 'color',
              'type': 'ordinal',
              'domain': {'data': 'foldedData', 'field': 'series'},
              'range': {'scheme': 'category20'}
            }],
            'axes': [{'orient': 'left', 'scale': 'yscale', 'grid': true, 'gridScale': 'xscale'}, {
              'orient': 'bottom',
              'scale': 'xscale',
              'encode': {'labels': {'update': {'limit': {'signal': "bandwidth('xscale')"}}}},
              'tickSize': 0,
              'labelPadding': 4,
              'grid': true,
              'gridScale': 'yscale'
            }],
            'legends': [{'orient': 'right', 'stroke': 'color'}],
            'marks': [{
              'type': 'group',
              'from': {'facet': {'name': 'facetData', 'data': 'foldedData', 'groupby': 'series'}},
              'marks': [{
                'type': 'line',
                'from': {'data': 'facetData'},
                'encode': {
                  'update': {
                    'x': {'scale': 'xscale', 'field': 'category'},
                    'y': {'scale': 'yscale', 'field': 'value'},
                    'defined': {'signal': 'isNumber(datum.value)'},
                    'stroke': {'scale': 'color', 'field': 'series'}
                  }
                }
              }]
            }]
          }]
        }
      },
      'featureKeys': [{
        'key': 'vegaSpec.data[1].transform[1].fields',
        'ignore': 'ubix_row_id',
        'type': ['DOUBLE', 'INTEGER', 'NUMBER']
      }],
      'primary': true
    }, {'type': 'annotations', 'set': '{{table}}.schema'}, {'type': 'annotations', 'set': '{{table}}.distribution'}],
    '__v': 0,
    'produces': ['source'],
    'consumes': [],
    'version': 10
  }, {
    '_id': '5b3f8a92db58397a47d00660',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'solution', 'subCommand': 'add'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MGMT: Add Solution',
    'category': 'deploy',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d00671',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'solution', 'subCommand': 'backup'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MGMT: Backup Solution',
    'category': 'deploy',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d00694',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'solution', 'subCommand': 'clear'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MGMT: Clear Solution',
    'category': 'deploy',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d00682',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'solution', 'subCommand': 'drop'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MGMT: Drop Solution',
    'category': 'deploy',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d00650',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'solution', 'subCommand': 'export'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MGMT: Export Solution',
    'category': 'deploy',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d00661',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'solution', 'subCommand': 'import'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MGMT: Import Solution',
    'category': 'deploy',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a93db58397a47d006b5',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'solution', 'subCommand': 'backuplist'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MGMT: List Backups',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006b6',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'expiretemp'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MGMT: Purge Temporary Data',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006b2',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'repartition'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MGMT: Realign Storage Partitions',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006a7',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'drop'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MGMT: Remove Table',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00672',
    'nameTemplate': 'deploy_profile_na',
    'parameters': {'usage': 'solution', 'subCommand': 'restore'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MGMT: Restore Solution',
    'category': 'deploy',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a93db58397a47d006aa',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'solution', 'subCommand': 'show'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MGMT: Show Solutions',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0067e',
    'name': 'MODEL - Find Best Model for Yes/No Column',
    'nameTemplate': 'Ubix Internal: Bakeoff Binary Classification: {{feature_set}}',
    'category': 'model',
    'parameters': {
      'jsonSchema': {
        'required': ['training_set', 'feature_set', 'target_feature', 'criteria'],
        'properties': {
          'training_set': {
            'title': 'Source for Model',
            'type': 'string',
            'description': 'Add the name of the data you want to use'
          },
          'target_feature': {
            'title': 'Value to Predict',
            'type': 'string',
            'description': 'Add the name of the column you want to predict'
          },
          'criteria': {
            'title': 'Performance Metric',
            'type': 'string',
            'description': 'Type of performance most important to you'
          },
          'feature_set': {
            'title': 'Values to Analyze',
            'type': 'string',
            'description': 'List of columns to use in model building'
          }
        },
        'type': 'object',
        'title': 'enhanceNewTableParam'
      },
      'parameterOrder': ['training_set', 'target_feature', 'feature_set', 'criteria'],
      'interpolate': {
        'training_set': {'dataEntity': {'category': 'source'}},
        'target_feature': {
          'parameter': 'training_set',
          'dataEntity': {'category': 'feature', 'relations': {'sourceId': '_id'}, 'property': 'target_feature'}
        }
      }
    },
    'execution': {'dsl': 'analytics_model_train_binclass_bakeoff --train_data' +
      ' {{training_set}} --train_tgt {{target_feature}} --train_ftr {{feature_set}}'},
    'completion': [{
      'dsl': 'model list',
      'annotationSet': '{{training_set}}.models',
      'row': 'bycolumn',
      'subsetColumn': {'column': 'name', 'ignore': 'trainingError'}
    }, {
      'dsl': 'analytics_model_binclass_performance_bakeoff --featureset {{training_set}} --metric {{criteria}}',
      'annotationSet': 'best model: {{training_set}}.{{criteria}}',
      'row': 'bycolumn',
      'subsetColumn': {'column': 'model_name'}
    }, {
      'dsl': "pipe analytics_model_binclass_performance_eval | where feature_set = '{{training_set}}'",
      'annotationSet': '{{training_set}}.model_performance',
      'row': 'bycolumn',
      'subsetColumn': {'column': 'model_name'}
    }],
    'review': [{'type': 'annotations', 'set': '{{training_set}}.models'}, {
      'type': 'annotations',
      'set': 'best model: {{training_set}}.{{criteria}}'
    }, {'type': 'annotations', 'set': '{{training_set}}.model_performance'}],
    '__v': 0,
    'produces': ['model'],
    'consumes': ['source'],
    'version': 3
  }, {
    '_id': '5b3f8a93db58397a47d006b3',
    'nameTemplate': 'model_build_topic',
    'category': 'develop',
    'parameters': {'usage': 'train', 'subCommand': 'sparkldamllib2'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MODEL: Build SparkML LDA Model',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0068f',
    'nameTemplate': 'model_build_regress',
    'category': 'develop',
    'parameters': {'usage': 'train', 'subCommand': 'lasso'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MODEL: Build SparkML Lasso Regression Model',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006b7',
    'nameTemplate': 'model_build_multi',
    'category': 'develop',
    'parameters': {'usage': 'train', 'subCommand': 'randomforest'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MODEL: Build SparkML Random Forest Multiclass Model',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d006a1',
    'nameTemplate': 'model_build_regress',
    'category': 'develop',
    'parameters': {'usage': 'train', 'subCommand': 'ridge'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MODEL: Build SparkML Ridge Regression Model',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006a8',
    'nameTemplate': 'model_build_topic',
    'category': 'develop',
    'parameters': {'usage': 'train', 'subCommand': 'vwlf'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MODEL: Build Vowpal Wabbit LDA  Model',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006ac',
    'nameTemplate': 'model_build_multi',
    'category': 'develop',
    'parameters': {'usage': 'train', 'subCommand': 'vwlf'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MODEL: Build Vowpal Wabbit Multiclass Model',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0065d',
    'nameTemplate': 'model_build_regress',
    'category': 'develop',
    'parameters': {'usage': 'train', 'subCommand': 'vwlf'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MODEL: Build Vowpal Wabbit Regression Model',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006af',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'model', 'subCommand': 'delete'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'MODEL: Delete Model',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00695',
    'nameTemplate': 'annotate_profile_na',
    'parameters': {'usage': 'bind'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SCHEMA: Rename Data',
    'category': 'annotate',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0066a',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'columns'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SCOPE: Select Columns',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d006a4',
    'nameTemplate': 'model_apply_class_bin',
    'category': 'model',
    'parameters': {'usage': 'predict'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SCORE: Predict Yes/No from Model',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00654',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'insert'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Add data to table',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00685',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'countBy'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Aggregate - count',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00665',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'prop'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Aggregate - proportion',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0068b',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'compresssparse'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Convert Columns to Sparse',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0069d',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'expandsparse'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Convert Sparse to Columns',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00655',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa227a7dfe97ae40941a4',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa636ce11a57b337777ee',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa8eab6da867b636ee294',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3faa626a103b7b87cb8b17',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fadae4b62f27bcb04f0b2',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fb4754b96f781b7465078',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4341d1dba9d204f442c2e1',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b435a78a5c1bf072cad655d',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b43670859bfc50b1b18212d',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b448cfdae7815189f3368e8',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44ac921a2f761a179a2299',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44bfcd6d8d3d1a8ae11812',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b45cf36e5011409fa269208',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634d8f0513f24f65e8825',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634e1be619f250bbad32e',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'cross'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Cross join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00686',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'where'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Filter values',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00666',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa227a7dfe97ae40941a7',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa636ce11a57b337777ec',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa8eab6da867b636ee296',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3faa626a103b7b87cb8b19',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fadae4b62f27bcb04f0b0',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fb4754b96f781b7465075',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4341d1dba9d204f442c2e3',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b435a78a5c1bf072cad6561',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b43670859bfc50b1b182131',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b448cfdae7815189f3368e3',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44ac921a2f761a179a2297',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44bfcd6d8d3d1a8ae1180e',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b45cf36e5011409fa269204',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634d8f0513f24f65e8827',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634e1be619f250bbad330',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'inner'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Inner join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00677',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa227a7dfe97ae40941a2',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa636ce11a57b337777f1',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa8eab6da867b636ee298',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3faa626a103b7b87cb8b1b',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fadae4b62f27bcb04f0ac',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fb4754b96f781b746507a',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4341d1dba9d204f442c2dd',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b435a78a5c1bf072cad655b',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b43670859bfc50b1b18212f',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b448cfdae7815189f3368e5',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44ac921a2f761a179a229c',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44bfcd6d8d3d1a8ae11810',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b45cf36e5011409fa269206',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634d8f0513f24f65e882a',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634e1be619f250bbad32b',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'left'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Left join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00676',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'merge'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Merge data',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00687',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'mergesparse'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Merge sparse columns',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0069a',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa227a7dfe97ae40941a1',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa636ce11a57b337777f0',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fa8eab6da867b636ee29a',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3faa626a103b7b87cb8b1e',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fadae4b62f27bcb04f0ae',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3fb4754b96f781b7465074',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4341d1dba9d204f442c2df',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b435a78a5c1bf072cad655f',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b43670859bfc50b1b182133',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b448cfdae7815189f3368e7',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44ac921a2f761a179a229e',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b44bfcd6d8d3d1a8ae11814',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b45cf36e5011409fa26920b',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634d8f0513f24f65e8824',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b4634e1be619f250bbad332',
    'nameTemplate': 'engineer_profile_na',
    'parameters': {'usage': 'join', 'subCommand': 'right'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SHAPE: Right join',
    'category': 'engineer',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006b4',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'job', 'subCommand': 'delete'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SPARK: Delete JAR',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00683',
    'nameTemplate': 'develop_profile_na',
    'parameters': {'usage': 'job', 'subCommand': 'execute'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SPARK: Execute JAR',
    'category': 'develop',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a93db58397a47d006a5',
    'nameTemplate': 'process_profile_na',
    'parameters': {'usage': 'job', 'subCommand': 'delete'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'SPARK: Register JAR',
    'category': 'process',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00690',
    'nameTemplate': 'load_profile',
    'parameters': {'usage': 'create', 'subCommand': 'range'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Create sample data - custom range',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0067f',
    'nameTemplate': 'load_profile',
    'parameters': {'usage': 'create', 'subCommand': 'double'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Create sample data - double',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d006a2',
    'nameTemplate': 'load_profile',
    'parameters': {'usage': 'create', 'subCommand': 'normal'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Create sample data - normal distribution',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0066e',
    'nameTemplate': 'load_profile',
    'parameters': {'usage': 'create', 'subCommand': 'timestamp'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Create sample data - timestamp',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0067d',
    'nameTemplate': 'load_profile_na',
    'parameters': {'usage': 'create', 'subCommand': 'indexedlookup'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: ElasticSearch Indexed Cassandra',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d00680',
    'nameTemplate': 'load_profile',
    'parameters': {'usage': 'load', 'subCommand': 's3'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Load data from AWS S3',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0065f',
    'nameTemplate': 'load_profile',
    'parameters': {'usage': 'fs', 'subCommand': 'cat'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Load data from HDFS file',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d00681',
    'nameTemplate': 'load_profile',
    'parameters': {'usage': 'jdbc'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Load data from JDBC',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d00670',
    'nameTemplate': 'load_profile',
    'parameters': {'usage': 'generatetable'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Load data from JSON',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d006a3',
    'nameTemplate': 'load_profile',
    'parameters': {'usage': 'load', 'subCommand': 'sparse'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Load data from LibSVM/Sparse file',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0065e',
    'nameTemplate': 'load_profile',
    'parameters': {'usage': 'load', 'subCommand': 'parquet'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Load data from Parquet file',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d00691',
    'nameTemplate': 'load_profile',
    'parameters': {'usage': 'load', 'subCommand': 'tsv'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Load data from Tab delimited Text',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d0066f',
    'nameTemplate': 'load_profile',
    'parameters': {'usage': 'load', 'subCommand': 'raw'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Load data from raw data',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 2
  }, {
    '_id': '5b3f8a92db58397a47d006a0',
    'nameTemplate': 'load_profile_na',
    'parameters': {'usage': 'create', 'subCommand': 'lookup'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Lookup Indexed Cassandra',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0068e',
    'nameTemplate': 'load_profile_na',
    'parameters': {'usage': 'create', 'subCommand': 'string'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Static String Table',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0066d',
    'nameTemplate': 'load_profile_na',
    'parameters': {'usage': 'create', 'subCommand': 'timeseries'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Table with Time Series Index',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }, {
    '_id': '5b3f8a92db58397a47d0065c',
    'nameTemplate': 'load_profile_na',
    'parameters': {'usage': 'create', 'subCommand': 'table'},
    'execution': {'dsl': 'usage test'},
    'completion': {'handler': 'testComplete'},
    'review': {'type': 'annotations', 'set': 'test'},
    'name': 'STATIC: Table without Indexes',
    'category': 'load',
    '__v': 0,
    'produces': ['prodcon2'],
    'consumes': ['prodcon1'],
    'version': 1
  }
];
