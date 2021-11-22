import { Data } from "@ShiyiFramework/Data/Data";

/**
 * GlobalData中的数据可以使用Data<T>类型来实现GlobalData->Page的数据绑定
 */
export class GlobalData{
    public static Theme:Data<boolean>=new Data<boolean>(false);
}