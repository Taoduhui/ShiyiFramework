import { RequestModelBase } from "../../../../Base/RequestModelBase";
import { ResponseCode, ResponseDataModelBase, ResponseModelBase } from "../../../../Base/ResposeModelBase";


export class SampleApiModelReqModel extends RequestModelBase {
    private Id:number;
    constructor(Id:number) {
        super();
        this.Id = Id;
    }
    public GetMethod(): "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined {
        return "GET"
}
    public GetBody(): Record<string, any> {
        return {
            id: this.Id,
        };
    }

}

export interface SampleApiRespData extends ResponseDataModelBase{

}

export class SampleApiModelRespModel extends ResponseModelBase {

    public IsOk:boolean = false;
    public Parse(data: SampleApiRespData) {
        this.IsOk = data.code == ResponseCode.Ok;
        return this;
    }
    
}