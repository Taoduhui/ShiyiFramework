import Cst = require("../../Utils/ConstValue");
import Utils = require("../../Utils/Utils");
import { RequestModelBase } from "./RequestModelBase";
import { ResponseCode, ResponseDataModelBase, ResponseExceptionHandler, ResponseModelBase } from "./ResponseModelBase";

/**
 * ShiyiApi需继承自ApiBase
 * 继承ApiBase仅需要子类重写构造函数
 * 将相应的Model以及结束事件传入ApiBase
 * 视情况可选是否传入外部的结束事件给子类*/
export abstract class ApiBase {
    public Host: string = Cst.Host;
    public Url: string = "";
    public ReqModel: RequestModelBase;
    public RespModel: ResponseModelBase;
    public Responed: (model: ResponseModelBase) => void;

    /**
     * 
     * @param _Url 请求的Url，https://domian:port + [_Url]
     * @param _ReqModel RequestModel，定义了Request所需数据
     * @param _RespModel ResponseModel，定义了Response处理数据的方法
     * @param _Responed 请求完成后的处理事件
     */
    constructor(
        _Url: string,
        _ReqModel: RequestModelBase,
        _RespModel: ResponseModelBase,
        _Responed: (model: ResponseModelBase) => void) {
        this.Url = this.Host + _Url;
        this.ReqModel = _ReqModel;
        this.RespModel = _RespModel;
        this.Responed = _Responed;
    }

    /**
     * 执行Request*/
    public Exec(): ApiBase {
        wx.request({
            method: this.ReqModel.GetMethod(),
            url: this.Url,
            data: this.ReqModel.GetBody(),
            header: this.ReqModel.GetHeader(),
            success: res => {
                Utils.SaveCookies(res.cookies);
                let RespData= res.data as ResponseDataModelBase;
                if(RespData.notification){
                    let Handler = ResponseExceptionHandler.get(ResponseCode.Notification);
                    if(Handler){Handler(RespData)}
                }
                if(RespData.code!=ResponseCode.Ok){
                    let Handler = ResponseExceptionHandler.get(RespData.code);
                    if(Handler){Handler(RespData)}
                }
                this.RespModel.StatusCode = res.statusCode;
                this.Responed(this.RespModel.Parse(RespData));
            },
            fail: res => {
                console.log({
                    Url: this.Url,
                    Msg:res
                });
            }
        })
        return this;
    };
}