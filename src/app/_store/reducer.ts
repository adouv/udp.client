
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Types } from './types.enum';
import { State } from './state';
/**
 * https://www.jianshu.com/p/c2d61fc76128
 */
export const list: State = { list: [] };

export function reducer(action: Action, state = list): State {
  let result: any;
  switch (action.type) {
    case Types.GET_LIST:
      result = { list: Types.GET_LIST };
      break;
    default:
      result = state;
      break;
  };
  return result;
}