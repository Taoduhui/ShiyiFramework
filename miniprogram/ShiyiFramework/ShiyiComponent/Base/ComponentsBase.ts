import { GlobalData } from "@Root/GlobalData/GlobalData";
import { Data } from "@Root/ShiyiFramework/Data/Data";
import { CreateRecordInstance, nameof } from "@Root/ShiyiFramework/Utils/Utils";
import { Event } from "../../Event/Event";
import { Router } from "../../Router/Router";


abstract class ShiyiComponentExternBase<CompT extends ShiyiComponentBase> {

    public ComponentInstance!: CompT
    constructor() {
    }

    public Init(_ComponentInstance: CompT): any {
        this.ComponentInstance = _ComponentInstance;     
        return this;
    }
    public abstract InitCustomData(_options?: Record<string, any> | undefined): void;
}

export abstract class ShiyiComponentFuncBase<CompT extends ShiyiComponentBase> extends ShiyiComponentExternBase<CompT> {
}

export abstract class ShiyiComponentUIBase<CompT extends ShiyiComponentBase> extends ShiyiComponentExternBase<CompT> {
    public Init(_ComponentInstance: CompT): ShiyiComponentExternBase<CompT> {
        super.Init(_ComponentInstance);
        this.LoadGlobalUIConfig();
        return this;
    }
    public LoadGlobalUIConfig(): void {
        this.ComponentInstance.MethodInstance.AddObserver(GlobalData.Theme,{
            name:nameof<ComponentData>("Theme"), 
            PreProcess:(value:boolean)=>{
                return value?"Boy":"Girl";
            }
        })
    }
}

export interface ComponentData {
    Theme: string
}

export class ComponentMethod<CompT extends ShiyiComponentBase> extends ShiyiComponentExternBase<CompT> {
    
    
    public InitCustomData(_options?: Record<string, any>): void {
    }

    public RegisteredEventHandlers: Record<string, (e: Event) => void> = {};
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
        if (Handler) {
            Handler(e);
        } else {
            e.Pass();
        }
    }

    //#region 数据绑定
    private ObserverList: Record<string, ObserverTarget<any>> = {};
    /**
     * 全局数据绑定
     * @param data 绑定数据源
     * @param target 绑定本页面的数据
     */
    public AddObserver<DataT>(data: Data<DataT>, target: ObserverTarget<DataT>) {
        this.ObserverList[data.DataKey] = target;
        data.BindComponent(this.ComponentInstance);
    }

    public RemoveObserver<DataT>(data: Data<DataT>) {
        if (this.ObserverList[data.DataKey]) {
            delete this.ObserverList[data.DataKey];
        }
    }

    public ObserverNotify(key: string, value: any) {
        let target = this.ObserverList[key];
        if (target) {
            this.ComponentInstance.setData({
                [target.name]: target.PreProcess ? target.PreProcess(value) : value
            })
        }
    }
    //#endregion

    public static CreateInstance(instance:any){
        return CreateRecordInstance(instance);
    }
}

export class ComponentLifeCycle <CompT extends ShiyiComponentBase> extends ShiyiComponentExternBase<CompT> {
    
    public InitCustomData(_options?: Record<string, any>): void {
    }

    public static CreateInstance(instance:any) {
        let Base = CreateRecordInstance(instance);
        if(Base["attached"]){
            console.error("attached is exist");
            let attached_re= Base["attached"];
            Base["ready"]=()=>{
                attached_re();
                Base["ready"]?Base["ready"]():null;
            }
            delete Base["attached"];
            console.log(Base);
            return;
        }
        return Base;
    }
}

export interface ShiyiComponentBase extends WechatMiniprogram.Component.InstanceMethods<WechatMiniprogram.Component.DataOption> {

}

type TIsPage = false

interface ObserverTarget<DataT> {
    name: string;
    PreProcess?: (value: DataT) => any;
}

export class ShiyiComponentBase implements WechatMiniprogram.Component.Options<
    WechatMiniprogram.Component.DataOption,
    WechatMiniprogram.Component.PropertyOption,
    WechatMiniprogram.Component.MethodOption,
    WechatMiniprogram.IAnyObject,
    TIsPage>
{
    public MethodInstance!: ComponentMethod<ShiyiComponentBase>;
    public methods: Record<string,Function> = {};
};