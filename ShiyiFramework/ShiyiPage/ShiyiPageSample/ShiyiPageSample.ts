import { ShiyiPageBase } from "../Base/ShiyiPageBase";
import { ShiyiPageSampleFunc } from "./Functional/ShiyiPageSampleFunc";
import { ShiyiPageSampleData } from "./Models/Models";
import { ShiyiPageSampleUI } from "./UI/ShiyiPageSampleUI";

export class ShiyiPageSample extends ShiyiPageBase{
    public Func=new ShiyiPageSampleFunc();
    public UI=new ShiyiPageSampleUI();
    public data:ShiyiPageSampleData={
        Dark: ""
    }
    public onReady(){
        this.Func.Init(this).InitCustomData();
        this.UI.Init(this).InitCustomData();
    }
}Page(new ShiyiPageSample());
