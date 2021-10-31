import { Router } from "../Router/Router";
import { ShiyiPageBase } from "../ShiyiPage/Base/ShiyiPageBase";
import { Guid } from "../Utils/Utils";


export class GetSetData<DataT>{
    private data:DataT;
    private _getFunc?:(data:DataT)=>DataT;
    private _setFunc?:(data:DataT)=>DataT;
    constructor(data:DataT,_getFunc?:(data:DataT)=>DataT,_setFunc?:(data:DataT)=>DataT){
        this.data = data;
        this._getFunc = _getFunc;
        this._setFunc = _setFunc;
    }
    public Get():DataT{
        if(this._getFunc){
            return this._getFunc(this.data);
        }
        return this.data;
    }
    public Set(data:DataT){
        if(this._setFunc){
            this.data=this._setFunc(data);
            return;
        }
        this.data = data;
    }
}

export class Data<DataT> extends GetSetData<DataT>{

    public readonly DataKey:string;
    private RegisteredBindding:Array<ShiyiPageBase>=[];

    constructor(data:DataT,_getFunc?:(data:DataT)=>DataT,_setFunc?:(data:DataT)=>DataT){
        super(data,_getFunc,_setFunc);
        this.DataKey=Guid.newGuid().toString();
    }

    public Set(data:DataT){
        super.Set(data);
        this.RegisteredBindding.forEach(page=>{
            page.ObserverNotify(this.DataKey,data);
        });
    }

    public RemoveBindding(page:ShiyiPageBase){
        if(this.RegisteredBindding.indexOf(page)>=0){
            this.RegisteredBindding.splice(this.RegisteredBindding.indexOf(page),1);
        }
    }

    public Bind(page:ShiyiPageBase):string{
        if(this.RegisteredBindding.indexOf(page)<0){
            Router.RegisterPageUnLoaded(page,this.PageUnload.bind(this));
            page.ObserverNotify(this.DataKey,this.Get());
            this.RegisteredBindding.push(page);
        }
        return this.DataKey;
    }

    public PageUnload(page:ShiyiPageBase):void{
        this.RemoveBindding(page);
    }
}