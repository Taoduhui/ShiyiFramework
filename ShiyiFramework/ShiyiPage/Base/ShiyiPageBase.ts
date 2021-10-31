import { ShiyiComponentBase } from "../../ShiyiComponent/Base/ComponentsBase";
import { Event } from "../../Event/Event";
import { Router } from "../../Router/Router";
import { Data } from "../../Data/Data";


abstract class ShiyiPageExternBase<PageT extends ShiyiPageBase> {
    //@ts-ignore
    public PageInstance: PageT
    constructor() {
    }

    public Init(_PageInstance: PageT): ShiyiPageExternBase<PageT> {
        this.PageInstance = _PageInstance;
        return this;
    }

    public abstract InitCustomData(_options?: Record<string, any> | undefined): void;
}

export abstract class ShiyiPageFuncBase<PageT extends ShiyiPageBase> extends ShiyiPageExternBase<PageT> {
}

export abstract class ShiyiPageUIBase<PageT extends ShiyiPageBase> extends ShiyiPageExternBase<PageT> {
    public Init(_PageInstance: PageT): ShiyiPageExternBase<PageT> {
        super.Init(_PageInstance);
        this.LoadGlobalUIConfig();
        return this;
    }
    public LoadGlobalUIConfig(): void {
    }
}

export interface PageData {
    Dark: string
}

export interface ShiyiPageBase extends WechatMiniprogram.Page.InstanceMethods<WechatMiniprogram.Component.DataOption> {

}

interface ObserverTarget<DataT>{
    name: string;
    PreProcess?:(value:DataT) => any;
}

export abstract class ShiyiPageBase
    implements WechatMiniprogram.Page.Options<
    WechatMiniprogram.Page.DataOption,
    WechatMiniprogram.Page.CustomOption
    >{
        //#region 事件处理
        public ComponentStack:Array<ShiyiComponentBase>=new Array<ShiyiComponentBase>();
        public RegisteredEventHandlers: Record<string,(e:Event)=>void>={};

        public AddHandler(Trigger:string,Handler:(e:Event)=>void):void{
            this.RegisteredEventHandlers[Trigger] = Handler;
        }
        public Removehandler(Trigger:string, Handler:(e:Event)=>void):void{
            if(this.RegisteredEventHandlers[Trigger]===Handler){
                delete this.RegisteredEventHandlers[Trigger];
            }
        }

        public EventHandler(e:Event):void{
            e.Catch();
            let Handler = this.RegisteredEventHandlers[e.EventName];
            console.log(Handler);
            if(Handler){
                Handler(e);
            }else{
                e.Pass();
            }
        }
        //#endregion


        //#region 数据绑定
        private ObserverList: Record<string,ObserverTarget<any>> = {};
        public AddObserver<DataT>(data:Data<DataT>,target:ObserverTarget<DataT>){ 
            let key = data.Bind(this);
            this.ObserverList[key] = target;
        }

        public RemoveObserver<DataT>(data:Data<DataT>){
            if(this.ObserverList[data.DataKey]){
                delete this.ObserverList[data.DataKey];
            }
        }

        public ObserverNotify(key:string,value:any){ 
            let target = this.ObserverList[key];
            if(target){
                this.setData({
                    [target.name]:target.PreProcess?target.PreProcess(value):value
                })
            }
        }
        //#endregion


        public InParameter:any
        public onLoad(){
            Router.PageLoad(this);
            this.InParameter = Router.NavigateParam;
        }

        public onUnload(){
            Router.PageUnload();
        }
};