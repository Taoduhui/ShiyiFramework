import { ITarget, IuiOption, IPoint } from "../IuiOption";

interface TapTargetDataset {
    index: number;
}

interface TapTarget extends ITarget {
    dataset: TapTargetDataset;
}

export interface TapOption extends IuiOption {
    currentTarget: TapTarget;
    detail: IPoint;
}