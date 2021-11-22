import { SampleComp } from "@Root/PesudoComponents/SampleComp/SampleComp";
import { PesudoCompnentStack, ShiyiPageBase } from "@ShiyiFramework/ShiyiPage/Base/ShiyiPageBase";
import { IuiOption } from "@ShiyiFramework/UI/Model/IuiOption";
import { indexFunc } from "./Functional/indexFunc";
import { indexData } from "./Models/Models";
import { indexUI } from "./UI/indexUI";

interface IndexComponent extends PesudoCompnentStack {
    SampleComp:SampleComp;
}

export class index extends ShiyiPageBase {
    public Func = new indexFunc();
    public UI = new indexUI();
    public PesudoCompnents: IndexComponent = {
        SampleComp: new SampleComp("Sample")
    }

    public data: indexData = {
        Theme: "",
        SampleRefClicked: "",
        ChangeThemeClicked: false,
        SelfBindContent: ""
    }

    /**
     * 在Page内不要定义onLoad、onUnload
     * 否则会覆盖ShiyiFramework的默认行为
     * 如需在onLoad周期执行操作，请在Func.InitCustomData或UI.InitCustomData中处理
     * 他们将会在onLoad时被调用
     * 如需在onLoad周期执行操作
     * 请调用super.onUnLoad来防止ShiyiFramework的默认行为被覆盖
     */
    public onReady() {

    }

    private Cnt:number = 0;
    public RefClicked() {
        /**
         * 请使用this.Render<type>() 代替this.setData()
         * this.Render<type>()能够提供良好的代码提示
         * 并且支持ShiyiFramework的数据绑定
         */
        this.Render<indexData>({
            "SampleRefClicked": "Ref Clicked! "+ this.Cnt
        })
        this.Cnt++;
    }

} Page(new index());