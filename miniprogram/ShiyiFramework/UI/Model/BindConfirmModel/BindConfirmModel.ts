import {  IuiOption } from "../IuiOption";

interface IBindConfirmDetail {
    value:string
}

export interface IBindConfirmOption extends IuiOption {
    detail: IBindConfirmDetail;
}