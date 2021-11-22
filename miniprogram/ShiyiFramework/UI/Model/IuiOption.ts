export interface IuiOption {
    changedTouches: Array<ITouch>;
    currentTarget: ITarget;
    detail:any;
    mark: Record<string, any>;
    mut: boolean;
    target: ITarget;
    timeStamp: number;
    touches: Array<ITouch>;
    type: string;
    _userTap: boolean;
}

export interface IPoint {
    x: number;
    y: number;
}

export interface ITouch {
    clientX: number;
    clientY: number;
    force: number;
    identifier: number;
    pageX: number;
    pageY: number;
}

export interface ITarget {
    dataset: Record<string, any>;
    id: string;
    offsetLeft: number;
    offsetTop: number;
}
