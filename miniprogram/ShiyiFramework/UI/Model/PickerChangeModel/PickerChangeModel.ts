import { IuiOption } from "../IuiOption";

interface PickerChangeDetail {
    value:number
}

export interface PickerChangeModel extends IuiOption {
    detail: PickerChangeDetail;
}