import { MLActionTypes } from "app/store/actions/actionTypes";
import { CuraInfo } from "app/store/model/models";
import { Action } from '@ngrx/store'

export class OpenCompositeAction implements Action {
    type = MLActionTypes.OCL;
    constructor(public payload: CuraInfo){}
}
export class CloseCompositeAction implements Action {
    type = MLActionTypes.OCL;
    constructor(public payload: CuraInfo){}
}
