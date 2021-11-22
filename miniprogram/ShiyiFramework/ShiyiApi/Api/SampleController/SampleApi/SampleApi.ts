import { ApiBase } from "../../../Base/ApiBase";
import { SampleReqModel, SampleRespModel } from "./Model/SampleApiModel";


export class SampleApi extends ApiBase{
    constructor(id:number,_finish?:(isOk:boolean)=>void){
        let ApiUrl= "ApiUrl";
        let ReqModel=new SampleReqModel(id);
        let RespModel=new SampleRespModel();
        super(ApiUrl,ReqModel,RespModel,(model)=>
        {
            let resp = model as SampleRespModel;
            if(_finish){_finish(resp.IsOk);};
        })
    }
}