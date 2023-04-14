/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '@superset-ui/core';

export const AGGREGATES = {
  AVG: 'AVG',
  COUNT: 'COUNT',
  COUNT_DISTINCT: 'COUNT_DISTINCT',
  MAX: 'MAX',
  MIN: 'MIN',
  SUM: 'SUM',
};
export const AGGREGATES_OPTIONS = Object.values(AGGREGATES);

export enum Operators {
  EQUALS = 'EQUALS',
  NOT_EQUALS = 'NOT_EQUALS',
  LESS_THAN = 'LESS_THAN',
  LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
  GREATER_THAN = 'GREATER_THAN',
  GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
  IN = 'IN',
  NOT_IN = 'NOT_IN',
  LIKE = 'LIKE',
  ILIKE = 'ILIKE',
  REGEX = 'REGEX',
  IS_NOT_NULL = 'IS_NOT_NULL',
  IS_NULL = 'IS_NULL',
  LATEST_PARTITION = 'LATEST_PARTITION',
  IS_TRUE = 'IS_TRUE',
  IS_FALSE = 'IS_FALSE',
  TEMPORAL_RANGE = 'TEMPORAL_RANGE',
}

export interface OperatorType {
  display: string;
  operation: string;
}

export const OPERATOR_ENUM_TO_OPERATOR_TYPE: {
  [key in Operators]: OperatorType;
} = {
  [Operators.EQUALS]: { display: t('Equal to (=)'), operation: '==' },
  [Operators.NOT_EQUALS]: { display: t('Not equal to (≠)'), operation: '!=' },
  [Operators.LESS_THAN]: { display: t('Less than (<)'), operation: '<' },
  [Operators.LESS_THAN_OR_EQUAL]: {
    display: t('Less or equal (<=)'),
    operation: '<=',
  },
  [Operators.GREATER_THAN]: { display: t('Greater than (>)'), operation: '>' },
  [Operators.GREATER_THAN_OR_EQUAL]: {
    display: t('Greater or equal (>=)'),
    operation: '>=',
  },
  [Operators.IN]: { display: t('In'), operation: 'IN' },
  [Operators.NOT_IN]: { display: t('Not in'), operation: 'NOT IN' },
  [Operators.LIKE]: { display: t('Like'), operation: 'LIKE' },
  [Operators.ILIKE]: {
    display: t('Like (case insensitive)'),
    operation: 'ILIKE',
  },
  [Operators.REGEX]: { display: t('Regex'), operation: 'REGEX' },
  [Operators.IS_NOT_NULL]: {
    display: t('Is not null'),
    operation: 'IS NOT NULL',
  },
  [Operators.IS_NULL]: { display: t('Is null'), operation: 'IS NULL' },
  [Operators.LATEST_PARTITION]: {
    display: t('use latest_partition template'),
    operation: 'LATEST PARTITION',
  },
  [Operators.IS_TRUE]: { display: t('Is true'), operation: '==' },
  [Operators.IS_FALSE]: { display: t('Is false'), operation: '==' },
  [Operators.TEMPORAL_RANGE]: {
    display: t('TEMPORAL_RANGE'),
    operation: 'TEMPORAL_RANGE',
  },
};

export const OPERATORS_OPTIONS = Object.values(Operators) as Operators[];

export const TABLE_ONLY_OPERATORS = [Operators.LIKE, Operators.ILIKE];
export const HAVING_OPERATORS = [
  Operators.EQUALS,
  Operators.NOT_EQUALS,
  Operators.LESS_THAN,
  Operators.LESS_THAN_OR_EQUAL,
  Operators.GREATER_THAN,
  Operators.GREATER_THAN_OR_EQUAL,
];
export const MULTI_OPERATORS = new Set([Operators.IN, Operators.NOT_IN]);
// CUSTOM_OPERATORS will show operator in simple mode,
// but will generate customized sqlExpression
export const CUSTOM_OPERATORS = new Set([
  Operators.LATEST_PARTITION,
  Operators.TEMPORAL_RANGE,
]);
// DISABLE_INPUT_OPERATORS will disable filter value input
// in adhocFilter control
export const DISABLE_INPUT_OPERATORS = [
  Operators.IS_NOT_NULL,
  Operators.IS_NULL,
  Operators.LATEST_PARTITION,
  Operators.IS_TRUE,
  Operators.IS_FALSE,
];

export const sqlaAutoGeneratedMetricNameRegex =
  /^(sum|min|max|avg|count|count_distinct)__.*$/i;
export const sqlaAutoGeneratedMetricRegex =
  /^(LONG|DOUBLE|FLOAT)?(SUM|AVG|MAX|MIN|COUNT)\([A-Z0-9_."]*\)$/i;
export const druidAutoGeneratedMetricRegex =
  /^(LONG|DOUBLE|FLOAT)?(SUM|MAX|MIN|COUNT)\([A-Z0-9_."]*\)$/i;

export const TIME_FILTER_LABELS = {
  time_range: t('Time range'),
  granularity_sqla: t('Time column'),
  time_grain_sqla: t('Time grain'),
  granularity: t('Time granularity'),
};

export const FILTER_CONFIG_ATTRIBUTES = {
  CLEARABLE: 'clearable',
  DEFAULT_VALUE: 'defaultValue',
  MULTIPLE: 'multiple',
  SEARCH_ALL_OPTIONS: 'searchAllOptions',
  SORT_ASCENDING: 'asc',
  SORT_METRIC: 'metric',
};

export const FILTER_OPTIONS_LIMIT = 1000;

/**
 * Map control names to their key in extra_filters
 */
export const TIME_FILTER_MAP = {
  time_range: '__time_range',
  granularity_sqla: '__time_col',
  time_grain_sqla: '__time_grain',
  granularity: '__granularity',
};

export const POPOVER_INITIAL_HEIGHT = 240;
export const POPOVER_INITIAL_WIDTH = 320;
export const UNRESIZABLE_POPOVER_WIDTH = 296;

export const UNSAVED_CHART_ID = 0;