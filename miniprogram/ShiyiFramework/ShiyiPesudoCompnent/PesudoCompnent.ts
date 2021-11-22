import { ShiyiPageBase } from "../ShiyiPage/Base/ShiyiPageBase";

export interface PesudoCompnentData {
    Theme: string
}

export abstract class PesudoCompnent {
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

    
}