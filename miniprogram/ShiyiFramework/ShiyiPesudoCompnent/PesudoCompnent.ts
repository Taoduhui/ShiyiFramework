import { GlobalData } from "@Root/GlobalData/GlobalData";
import { Data } from "../Data/Data";
import { ShiyiPageBase } from "../ShiyiPage/Base/ShiyiPageBase";


abstract class ShiyiComponentExternBase<CompT extends PesudoCompnent> {
    public CompInstance!: CompT
    public get Inst(): CompT {
        return this.CompInstance;
    }
    public _Render!: (value: Record<string, any>) => void;
    public data!: Record<string, any>;
    constructor() {

    }

    public Init(): ShiyiComponentExternBase<CompT> {
        this._Render = this.CompInstance.Render.bind(this.CompInstance);
        this.data = this.CompInstance.data;
        return this;
    }

    public abstract InitCustomData(_options?: Record<string, any> | undefined): void;

    public Render<T extends PesudoCompnentData>(value: Partial<Record<keyof T, any>>): void {
        this._Render(value);
    }
}

export abstract class ShiyiCompFuncBase<CompT extends PesudoCompnent> extends ShiyiComponentExternBase<CompT> {
}

export abstract class ShiyiCompUIBase<CompT extends PesudoCompnent> extends ShiyiComponentExternBase<CompT> {
    public Init(): ShiyiComponentExternBase<CompT> {
        super.Init();
        this.LoadGlobalUIConfig();
        return this;
    }
    public LoadGlobalUIConfig(): void {
        this.CompInstance.BindGlobal<boolean,PesudoCompnentData>(GlobalData.Theme, "Theme",
            (value: boolean) => {
                return value ? "Boy" : "Girl";
            }
        )
    }
}

export interface PesudoCompnentData {
    Theme: string
}

interface ObserverTarget<DataT> {
    name: string;
    PreProcess?: (value: DataT) => any;
}

interface ObserverBackwardTarget<DataT> {
    TargetDataObj: Data<any>;
    PreProcess?: (value: DataT) => any;
}


export abstract class PesudoCompnent {
    public Func!:ShiyiCompFuncBase<PesudoCompnent>;
    public UI!:ShiyiCompUIBase<PesudoCompnent>;
    public PageInstance!: ShiyiPageBase;
    public get Inst(): ShiyiPageBase {
        return this.PageInstance;
    }
    public ComponentId: string="";
    public data!: PesudoCompnentData;
    public _Render!: (value: Record<string, any>) => void;

    constructor(_ComponentId:string){
        this.ComponentId=_ComponentId;
    }

    public Init():PesudoCompnent{
        console.log(this._Render);
        this.Render(this.data);
        return this;
    }

    public Render<T extends PesudoCompnentData>(value: Partial<Record<keyof T, any>>): void {
        let RealValue:Record<string,any> = {};
        Object.keys(value).forEach(key =>{
            RealValue[this.ComponentId+key]=(value as Record<string,any>)[key];
        })
        this._Render(RealValue);
    }

    //#region ????????????
    /**
     * ??????????????????
     * @type {GlobalDataT} ??????????????????
     * @type {T} ??????????????????PesudoCompnentData???data??????
     * @param GlobalData ????????????Object
     * @param SelfDataKey ????????????Key
     * @param PreProcess ???????????????
     */
    public BindGlobal<GlobalDataT, T extends PesudoCompnentData>(
        GlobalData: Data<GlobalDataT>,
        SelfDataKey: keyof T,
        PreProcess?: (value: GlobalDataT) => any) {
            this.Inst.BindGlobal<GlobalDataT,any>(GlobalData,this.ComponentId+SelfDataKey,PreProcess);
    }

    private RegisteredGlobalBackWardBinding: Record<string,Array< ObserverBackwardTarget<any>>> = {};

    public BindGlobalBackward<SelfDataT, T extends PesudoCompnentData>(
        SelfDataKey: keyof T,
        GlobalDataObj: Data<any>,
        PreProcess?: (value: SelfDataT) => any) {
            this.Inst.BindGlobalBackward<any,any>(this.ComponentId+SelfDataKey,GlobalDataObj,PreProcess);
    }

    /**
     * ????????????????????????
     * @param SelfDataKey ????????????Key
     * @param GlobalDataObj ????????????Object
     * @param SelfToGlobalPreProcess ???????????????????????????????????????
     * @param GlobalToSelfPreProcess ???????????????????????????????????????
     */
    public BindGlobalTwoWay<SelfDataT,GlobalDataT, T extends PesudoCompnentData>(
        SelfDataKey: keyof T,
        GlobalDataObj: Data<GlobalDataT>,
        SelfToGlobalPreProcess?: (value: SelfDataT) => GlobalDataT,
        GlobalToSelfPreProcess?: (value: GlobalDataT) => SelfDataT){
            this.BindGlobal<GlobalDataT,T>(GlobalDataObj,SelfDataKey,GlobalToSelfPreProcess);
            this.BindGlobalBackward<SelfDataT,T>(SelfDataKey,GlobalDataObj,SelfToGlobalPreProcess);
    }


    private RegisteredSelfBinding: Record<string,Array<ObserverTarget<any>>> = {};

    /**
     * ?????????????????????
     * @type {SrcDataT} ???????????????
     * @type {T} ??????????????????PesudoCompnentData???data??????
     * @param SrcKey ?????????Key
     * @param TargetKey ????????????Key
     * @param PreProcess ???????????????
     */
    public BindSelf<SrcDataT, T extends PesudoCompnentData>(SrcKey: keyof T, TargetKey: keyof T, PreProcess?: (value: SrcDataT) => any) {
        this.Inst.BindSelf<any,any>(this.ComponentId+SrcKey,this.ComponentId+TargetKey,PreProcess)
    }

    public BindSelfTwoWay<FirstDataT,SecDataT, T extends PesudoCompnentData>(
        FirstData:keyof T,
        SecData:keyof T,
        FirstToSecPreProcess?: (value: FirstDataT) => SecDataT,
        SecToFirstPreProcess?: (value: SecDataT ) => FirstDataT
    ){
        this.BindSelf<FirstDataT,T>(FirstData,SecData,FirstToSecPreProcess);
        this.BindSelf<SecDataT,T>(SecData,FirstData,SecToFirstPreProcess);
    }

}