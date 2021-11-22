import { StorageKey } from "../../Utils/ConstValue";
import Cst = require("../../Utils/ConstValue");
/**
 * ShiyiApi的RequestModel需继承自此类
 * 继承自此类需子类重写构造函数用于传入参数
 * 并实现GetBody方法用于将数据转换为Record<string,any>
 * 以及GetMethod方法用于定义Request的方法*/
export abstract class RequestModelBase {
    /**
     * 定义Request方法，仅需return一种方法即可*/
    public abstract GetMethod(): "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined;
    /**
     * 将Request的数据拼接为Record<string,any>*/
    public abstract GetBody(): Record<string, any>;
    /**
     * 获取Header，实现了微信小程序的Cookie系统*/
    public GetHeader(): Record<string, any> {
        let Header: Record<string, any> = {};
        let cookies: string = this.GetCookies();
        if (cookies != "") {
            Header["cookie"] = cookies;
        }

        let Token = this.GetToken();
        if(Token){
            Header["Authorization"]="Bearer " + Token;
        }
        Header["Content-Type"]="application/json";
      
        return Header;
    }

    private GetToken():string|undefined{
        return wx.getStorageSync(StorageKey.Authorization);
    }

    private GetCookies() {
        let cookies: string = "";
        if (wx.getStorageSync(Cst.StorageKey.Cookies)) {
            let cookiesMap: Record<string, string> = JSON.parse(wx.getStorageSync(Cst.StorageKey.Cookies));
            let keys = Object.keys(cookiesMap) as Array<string>;
            for (let i = 0; i < keys.length; i++) {
                cookies += keys[i] + "=" + cookiesMap[keys[i]] + ";";
            }
        }
        return cookies;
    }
}