export const ResponseCode={
    NetError:9999,
    Notification:9998,
    Ok:1000,
    CodeInvalidParam:1001,
    CodeUserExist:1002,
    CodeUserNotExist:1003,
    CodeInvalidPassword:1004,
    CodeServerBusy:1005,
    CodeNeedLogin:1006,
    CodeInvalidToken:1007,
    CodeHasRelation:1008
}

export var ResponseExceptionHandler:Map<number,(RespData:ResponseDataModelBase)=>void>=new Map<number,(RespData:ResponseDataModelBase)=>void>();

export interface ResponseDataModelBase {
    "code": number,
    "notification":Array<NotificationModel>,
    "msg": "success",
    "data": any
}

export interface NotificationModel{
    id:number,
    desc:string
}
/**
 * ShiyiApi的ResponseModel需继承自此类
 * 继承自此类需要子类定义Response数据结构
 * 并实现Parse方法用于解析数据
 * 视情况可添加对数据进一步处理的方法*/
export abstract class ResponseModelBase {

    public StatusCode: number = 0;
    /**
     * 解析Response数据,返回this
     * @param data 原始Response数据
     */
    public abstract Parse(data: string|Record<string,any>): any;
}