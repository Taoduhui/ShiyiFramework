import { index } from "..";
import { ShiyiPageUIBase } from "@ShiyiFramework/ShiyiPage/Base/ShiyiPageBase";
import { indexData } from "../Models/Models";
import { GlobalData } from "@Root/GlobalData/GlobalData";

export class indexUI extends ShiyiPageUIBase<index> {

    public InitCustomData(_options?: Record<string, any>): void {
        this.Inst.BindGlobalBackward<boolean,indexData>("ChangeThemeClicked",GlobalData.Theme);
        this.Inst.BindSelf<boolean,indexData>("SampleRefClicked","SelfBindContent");
    }
}