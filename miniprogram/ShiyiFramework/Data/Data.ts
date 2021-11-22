import { Router } from "../Router/Router";
import { ShiyiComponentBase } from "../ShiyiComponent/Base/ComponentsBase";
import { ShiyiPageBase } from "../ShiyiPage/Base/ShiyiPageBase";
import { Guid } from "../Utils/Utils";


export class GetSetData<DataT>{
    protected data:DataT;
    protected _getFunc?:(data:DataT)=>DataT;
    protected _setFunc?:(data:DataT)=>DataT;
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
    protected RegisteredBindding:Array<ShiyiPageBase>=[];
    protected RegisteredComponentBindding:Array<ShiyiComponentBase>=[];

    constructor(data:DataT,_getFunc?:(data:DataT)=>DataT,_setFunc?:(data:DataT)=>DataT){
        super(data,_getFunc,_setFunc);
        this.DataKey=Guid.newGuid().toString();
    }

    public Set(data:DataT,IsGlobalNotification?:boolean){
        super.Set(data);
        this.RegisteredBindding.forEach(page=>{
            page.ObserverNotify(this.DataKey,data);
        });
        this.RegisteredComponentBindding.forEach(component=>{
            component.MethodInstance.ObserverNotify(this.DataKey,data);
        });
        if(!IsGlobalNotification){
            this.RegisteredGlobalBinding.forEach((PreProcess,TargetData)=>{
                TargetData.Set(PreProcess?PreProcess(data):data,true);
            })
        }
    }

    public RemoveBindding(page:ShiyiPageBase){
        if(this.RegisteredBindding.indexOf(page)>=0){
            let ChildrenComponents = page.ComponentStack;
            for(let i=0;i<ChildrenComponents.length; i++){
                if(this.RegisteredComponentBindding.indexOf(ChildrenComponents[i])>=0){
                    this.RegisteredComponentBindding.splice(this.RegisteredComponentBindding.indexOf(ChildrenComponents[i],1));
                }
            }
            this.RegisteredBindding.splice(this.RegisteredBindding.indexOf(page),1);
        }
    }

    public BindComponent(component:ShiyiComponentBase):string{
        if(this.RegisteredComponentBindding.indexOf(component)<0){
            component.MethodInstance.ObserverNotify(this.DataKey,this.Get());
            this.RegisteredComponentBindding.push(component);
        }
        return this.DataKey;
    }

    public Bind(page:ShiyiPageBase):string{
        if(this.RegisteredBindding.indexOf(page)<0){
            Router.RegisterPageUnLoaded(page,this.PageUnload.bind(this));
            page.ObserverNotify(this.DataKey,this.Get());
            this.RegisteredBindding.push(page);
        }
        return this.DataKey;
    }

    public RegisteredGlobalBinding:Map<Data<any>,undefined|((value:DataT)=>any)>=new Map<Data<any>,undefined|((value:DataT)=>any)>();
    public BindToGlobal<TargetDataT>(TargetData:Data<TargetDataT>,PreProcess?:(value:DataT)=>TargetDataT){
        this.RegisteredGlobalBinding.set(TargetData,PreProcess);
    }

    public PageUnload(page:ShiyiPageBase):void{
        this.RemoveBindding(page);
    }
}

export class StorageData<DataT> extends Data<DataT>{
    protected StorageKey:string;
    constructor(data:DataT,storageKey:string,_getFunc?:(data:DataT)=>DataT,_setFunc?:(data:DataT)=>DataT){
        super(data,_getFunc,_setFunc);
        this.StorageKey=storageKey;
    }

    public Get():DataT {
        let data:DataT = wx.getStorageSync(this.StorageKey);
        if(data){
            if(this._getFunc){
                return this._getFunc(data);
            }
        }
        return data;
    }

    public Set(data:DataT){
        if(this._setFunc){
            data=this._setFunc(data);
        }
        wx.setStorageSync(this.StorageKey,data);
        this.RegisteredBindding.forEach(page=>{
            page.ObserverNotify(this.DataKey,data);
        });
    }
}