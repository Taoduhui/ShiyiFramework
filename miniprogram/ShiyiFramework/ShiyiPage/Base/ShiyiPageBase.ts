import { ShiyiComponentBase } from "../../ShiyiComponent/Base/ComponentsBase";
import { Event } from "../../Event/Event";
import { Router } from "../../Router/Router";
import { Data } from "../../Data/Data";
import { GlobalData } from "@Root/GlobalData/GlobalData";
import { nameof } from "@Root/ShiyiFramework/Utils/Utils";
import { PesudoCompnent } from "@Root/ShiyiFramework/ShiyiPesudoCompnent/PesudoCompnent";


abstract class ShiyiPageExternBase<PageT extends ShiyiPageBase> {
    public PageInstance!: PageT
    public get Inst(): PageT {
        return this.PageInstance;
    }
    public _Render!: (value: Record<string, any>) => void;
    public data!: Record<string, any>;
    constructor() {
    }

    public Init(): ShiyiPageExternBase<PageT> {
        this._Render = this.PageInstance.Render.bind(this.PageInstance);
        this.data = this.PageInstance.data;
        return this;
    }
    public abstract InitCustomData(_options?: Record<string, any> | undefined): void;

    public Render<T extends PageData>(value: Partial<Record<keyof T, any>>): void {
        this._Render(value);
    }
}

export abstract class ShiyiPageFuncBase<PageT extends ShiyiPageBase> extends ShiyiPageExternBase<PageT> {
}

export abstract class ShiyiPageUIBase<PageT extends ShiyiPageBase> extends ShiyiPageExternBase<PageT> {
    public Init(): ShiyiPageExternBase<PageT> {
        super.Init();
        this.LoadGlobalUIConfig();
        return this;
    }
    public LoadGlobalUIConfig(): void {
        this.PageInstance.BindGlobal(GlobalData.Theme, "Theme",
            (value: boolean) => {
                return value ? "Dark" : "";
            }
        )
    }
}

export interface PageData {
    Theme: string
}

export interface PesudoCompnentStack{

}

export interface ShiyiPageBase extends WechatMiniprogram.Page.InstanceMethods<WechatMiniprogram.Component.DataOption> {

}

interface ObserverTarget<DataT> {
    name: string;
    PreProcess?: (value: DataT) => any;
}

interface ObserverBackwardTarget<DataT> {
    TargetDataObj: Data<any>;
    PreProcess?: (value: DataT) => any;
}
 


export abstract class ShiyiPageBase
    implements WechatMiniprogram.Page.Options<
    WechatMiniprogram.Page.DataOption,
    WechatMiniprogram.Page.CustomOption
    >{
    public data!: PageData;
    public Func!: ShiyiPageExternBase<ShiyiPageBase>;
    public UI!: ShiyiPageExternBase<ShiyiPageBase>;
    //#region 事件处理
    public ComponentStack: Array<ShiyiComponentBase> = new Array<ShiyiComponentBase>();
    public RegisteredEventHandlers: Record<string, (e: Event) => void> = {};
    public PesudoCompnents!:PesudoCompnentStack;
    /**
     * 绑定事件处理方法
     * @param Trigger 事件名
     * @param Handler 处理方法
     */
    public BindEvent(Trigger: string, Handler: (e: Event) => void): void {
        this.AddHandler(Trigger, Handler);
    }
    public AddHandler(Trigger: string, Handler: (e: Event) => void): void {
        this.RegisteredEventHandlers[Trigger] = Handler;
    }
    public Removehandler(Trigger: string, Handler: (e: Event) => void): void {
        if (this.RegisteredEventHandlers[Trigger] === Handler) {
            delete this.RegisteredEventHandlers[Trigger];
        }
    }

    public EventHandler(e: Event): void {
        e.Catch();
        let Handler = this.RegisteredEventHandlers[e.EventName];
        console.log(Handler);
        if (Handler) {
            Handler(e);
        } else {
            e.Pass();
        }
    }
    //#endregion

    //#region 数据绑定
    private ObserverList: Record<string, ObserverTarget<any>> = {};
    /**
     * 全局数据绑定
     * @param data 绑定数据源
     * @param target 绑定本页面的数据
     */
    public AddObserver<DataT>(data: Data<DataT>, target: ObserverTarget<DataT>) {
        this.ObserverList[data.DataKey] = target;
        data.Bind(this);
    }

    public RemoveObserver<DataT>(data: Data<DataT>) {
        if (this.ObserverList[data.DataKey]) {
            delete this.ObserverList[data.DataKey];
        }
    }

    public ObserverNotify(key: string, value: any) {
        let target = this.ObserverList[key];
        if (target) {
            this.RenderNoBackward({
                [target.name]: target.PreProcess ? target.PreProcess(value) : value
            })
        }

    }


    /**
     * 全局数据绑定
     * @type {GlobalDataT} 全局数据类型
     * @type {T} 页面中派生自PageData的data类型
     * @param GlobalData 全局数据Object
     * @param SelfDataKey 自身数据Key
     * @param PreProcess 预处理方式
     */
    public BindGlobal<GlobalDataT, T extends PageData>(
        GlobalData: Data<GlobalDataT>,
        SelfDataKey: keyof T,
        PreProcess?: (value: GlobalDataT) => any) {
        this.AddObserver<GlobalDataT>(GlobalData, {
            name: SelfDataKey as string,
            PreProcess: PreProcess
        })
    }

    private RegisteredGlobalBackWardBinding: Record<string,Array< ObserverBackwardTarget<any>>> = {};

    public BindGlobalBackward<SelfDataT, T extends PageData>(
        SelfDataKey: keyof T,
        GlobalDataObj: Data<any>,
        PreProcess?: (value: SelfDataT) => any) {
            if(!this.RegisteredGlobalBackWardBinding[SelfDataKey as string]){
                this.RegisteredGlobalBackWardBinding[SelfDataKey as string]=new Array< ObserverBackwardTarget<any>>();
            }
            this.RegisteredGlobalBackWardBinding[SelfDataKey as string].push( {
                "TargetDataObj":GlobalDataObj,
                "PreProcess":PreProcess
            });
    }

    /**
     * 全局数据双向绑定
     * @param SelfDataKey 自身数据Key
     * @param GlobalDataObj 全局数据Object
     * @param SelfToGlobalPreProcess 自身数据到全局数据的预处理
     * @param GlobalToSelfPreProcess 全局数据到自身数据的预处理
     */
    public BindGlobalTwoWay<SelfDataT,GlobalDataT, T extends PageData>(
        SelfDataKey: keyof T,
        GlobalDataObj: Data<GlobalDataT>,
        SelfToGlobalPreProcess?: (value: SelfDataT) => GlobalDataT,
        GlobalToSelfPreProcess?: (value: GlobalDataT) => SelfDataT){
            this.BindGlobal<GlobalDataT,T>(GlobalDataObj,SelfDataKey,GlobalToSelfPreProcess);
            this.BindGlobalBackward<SelfDataT,T>(SelfDataKey,GlobalDataObj,SelfToGlobalPreProcess);
    }


    private RegisteredSelfBinding: Record<string,Array<ObserverTarget<any>>> = {};

    /**
     * 页面数据自绑定
     * @type {SrcDataT} 源数据类型
     * @type {T} 页面中派生自PageData的data类型
     * @param SrcKey 源数据Key
     * @param TargetKey 目标数据Key
     * @param PreProcess 预处理方式
     */
    public BindSelf<SrcDataT, T extends PageData>(SrcKey: keyof T, TargetKey: keyof T, PreProcess?: (value: SrcDataT) => any) {
        if(!this.RegisteredSelfBinding[SrcKey as string]){
            this.RegisteredSelfBinding[SrcKey as string]=new Array<ObserverTarget<any>>();
        }
        this.RegisteredSelfBinding[SrcKey as string] .push({
            name: TargetKey as string,
            PreProcess: PreProcess
        })
    }

    public BindSelfTwoWay<FirstDataT,SecDataT, T extends PageData>(
        FirstData:keyof T,
        SecData:keyof T,
        FirstToSecPreProcess?: (value: FirstDataT) => SecDataT,
        SecToFirstPreProcess?: (value: SecDataT ) => FirstDataT
    ){
        this.BindSelf<FirstDataT,T>(FirstData,SecData,FirstToSecPreProcess);
        this.BindSelf<SecDataT,T>(SecData,FirstData,SecToFirstPreProcess);
    }

    public Render<T extends PageData>(value: Partial<Record<keyof T, any>>){
        this._render<T>(value,false);
    }
    public RenderNoBackward<T extends PageData>(value: Partial<Record<keyof T, any>>){
        this._render<T>(value,true);
    }

    private _render<T extends PageData>(value: Partial<Record<keyof T, any>>,DisableBackward:boolean) {
        let Modified = false;
        let Keys = Object.keys(value)
        type DataKeys = keyof T;
        Keys.forEach(key => {
            if (this.RegisteredSelfBinding[key]) {
                this.RegisteredSelfBinding[key].forEach((target)=>{
                    if (Keys.indexOf(target.name as string) < 0) {
                        Modified = true;
                        if (target.PreProcess) {
                            value[target.name as DataKeys] = target.PreProcess(value[key as DataKeys]);
                        } else {
                            value[target.name as DataKeys] = value[key as DataKeys];
                        }
                    }
                })
            }
            if(!DisableBackward&&this.RegisteredGlobalBackWardBinding[key]){
                this.RegisteredGlobalBackWardBinding[key].forEach(target=>{
                    target.TargetDataObj.Set(
                        target.PreProcess?
                        target.PreProcess(value[key as DataKeys]):
                        value[key as DataKeys]);
                })
            }
        });
        if (Modified) {
            this._render<T>(value,DisableBackward);
            return;
        }
        this.setData(value);
    }

    //#endregion

    protected LoadPesudoComponents():void {
        let components = this.PesudoCompnents as Record<string, PesudoCompnent>;
        Object.keys(components).forEach(key => {
            let Comp = components[key];
            Comp.PageInstance=this;
            Comp._Render=this.Render.bind(this);
            let CompProto = Comp;
            let CompId = components[key].ComponentId;
            while(CompProto){
                Object.keys(CompProto).forEach(key => {
                    //@ts-ignore
                    if(typeof CompProto[key]=="function"){
                        //@ts-ignore
                        this[CompId + key]=CompProto[key].bind(Comp);
                    }
                    
                });
                CompProto= Object.getPrototypeOf(CompProto);
            }
            let CompData:Record<string,any> = {};
            Object.keys(components[key].data).forEach(datakey=>{
                //@ts-ignore
                CompData[CompId+datakey]=components[key].data[datakey];
            })
            this.Render(CompData);
        })
    }

    protected LoadExtends(){
        this.Func.PageInstance=this;
        this.Func.Init();
        this.UI.PageInstance=this;
        this.UI.Init();
        this.UI.InitCustomData();
        this.Func.InitCustomData();
    }

    public InParameter: any
    public onLoad() {
        Router.PageLoad(this);
        this.LoadPesudoComponents();
        this.LoadExtends();
        this.InParameter = Router.NavigateParam;
    }

    public onUnload() {
        Router.PageUnload();
    }
};