"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiyiPageBase = exports.ShiyiPageUIBase = exports.ShiyiPageFuncBase = void 0;
var Router_1 = require("../../Router/Router");
var ShiyiPageExternBase = (function () {
    function ShiyiPageExternBase() {
    }
    ShiyiPageExternBase.prototype.Init = function (_PageInstance) {
        this.PageInstance = _PageInstance;
        return this;
    };
    return ShiyiPageExternBase;
}());
var ShiyiPageFuncBase = (function (_super) {
    __extends(ShiyiPageFuncBase, _super);
    function ShiyiPageFuncBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShiyiPageFuncBase;
}(ShiyiPageExternBase));
exports.ShiyiPageFuncBase = ShiyiPageFuncBase;
var ShiyiPageUIBase = (function (_super) {
    __extends(ShiyiPageUIBase, _super);
    function ShiyiPageUIBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShiyiPageUIBase.prototype.Init = function (_PageInstance) {
        _super.prototype.Init.call(this, _PageInstance);
        this.LoadGlobalUIConfig();
        return this;
    };
    ShiyiPageUIBase.prototype.LoadGlobalUIConfig = function () {
    };
    return ShiyiPageUIBase;
}(ShiyiPageExternBase));
exports.ShiyiPageUIBase = ShiyiPageUIBase;
var ShiyiPageBase = (function () {
    function ShiyiPageBase() {
        this.ComponentStack = new Array();
        this.RegisteredEventHandlers = {};
        this.ObserverList = {};
    }
    ShiyiPageBase.prototype.AddHandler = function (Trigger, Handler) {
        this.RegisteredEventHandlers[Trigger] = Handler;
    };
    ShiyiPageBase.prototype.Removehandler = function (Trigger, Handler) {
        if (this.RegisteredEventHandlers[Trigger] === Handler) {
            delete this.RegisteredEventHandlers[Trigger];
        }
    };
    ShiyiPageBase.prototype.EventHandler = function (e) {
        e.Catch();
        var Handler = this.RegisteredEventHandlers[e.EventName];
        console.log(Handler);
        if (Handler) {
            Handler(e);
        }
        else {
            e.Pass();
        }
    };
    ShiyiPageBase.prototype.AddObserver = function (data, target) {
        var key = data.Bind(this);
        this.ObserverList[key] = target;
    };
    ShiyiPageBase.prototype.RemoveObserver = function (data) {
        if (this.ObserverList[data.DataKey]) {
            delete this.ObserverList[data.DataKey];
        }
    };
    ShiyiPageBase.prototype.ObserverNotify = function (key, value) {
        var _a;
        var target = this.ObserverList[key];
        if (target) {
            this.setData((_a = {},
                _a[target.name] = target.PreProcess ? target.PreProcess(value) : value,
                _a));
        }
    };
    ShiyiPageBase.prototype.onLoad = function () {
        Router_1.Router.PageLoad(this);
        this.InParameter = Router_1.Router.NavigateParam;
    };
    ShiyiPageBase.prototype.onUnload = function () {
        Router_1.Router.PageUnload();
    };
    return ShiyiPageBase;
}());
exports.ShiyiPageBase = ShiyiPageBase;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hpeWlQYWdlQmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNoaXlpUGFnZUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsOENBQTZDO0FBSTdDO0lBR0k7SUFDQSxDQUFDO0lBRU0sa0NBQUksR0FBWCxVQUFZLGFBQW9CO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHTCwwQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBRUQ7SUFBNkUscUNBQTBCO0lBQXZHOztJQUNBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFERCxDQUE2RSxtQkFBbUIsR0FDL0Y7QUFEcUIsOENBQWlCO0FBR3ZDO0lBQTJFLG1DQUEwQjtJQUFyRzs7SUFRQSxDQUFDO0lBUFUsOEJBQUksR0FBWCxVQUFZLGFBQW9CO1FBQzVCLGlCQUFNLElBQUksWUFBQyxhQUFhLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ00sNENBQWtCLEdBQXpCO0lBQ0EsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQVJELENBQTJFLG1CQUFtQixHQVE3RjtBQVJxQiwwQ0FBZTtBQXVCckM7SUFBQTtRQU1lLG1CQUFjLEdBQTJCLElBQUksS0FBSyxFQUFzQixDQUFDO1FBQ3pFLDRCQUF1QixHQUFpQyxFQUFFLENBQUM7UUF5QjFELGlCQUFZLEdBQXVDLEVBQUUsQ0FBQztJQWdDdEUsQ0FBQztJQXZEYyxrQ0FBVSxHQUFqQixVQUFrQixPQUFjLEVBQUMsT0FBdUI7UUFDcEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUNwRCxDQUFDO0lBQ00scUNBQWEsR0FBcEIsVUFBcUIsT0FBYyxFQUFFLE9BQXVCO1FBQ3hELElBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxLQUFHLE9BQU8sRUFBQztZQUMvQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFFTSxvQ0FBWSxHQUFuQixVQUFvQixDQUFPO1FBQ3ZCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNWLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFHLE9BQU8sRUFBQztZQUNQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNkO2FBQUk7WUFDRCxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDWjtJQUNMLENBQUM7SUFNTSxtQ0FBVyxHQUFsQixVQUEwQixJQUFnQixFQUFDLE1BQTRCO1FBQ25FLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDcEMsQ0FBQztJQUVNLHNDQUFjLEdBQXJCLFVBQTZCLElBQWdCO1FBQ3pDLElBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFFTSxzQ0FBYyxHQUFyQixVQUFzQixHQUFVLEVBQUMsS0FBUzs7UUFDdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFHLE1BQU0sRUFBQztZQUNOLElBQUksQ0FBQyxPQUFPO2dCQUNSLEdBQUMsTUFBTSxDQUFDLElBQUksSUFBRSxNQUFNLENBQUMsVUFBVSxDQUFBLENBQUMsQ0FBQSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQSxLQUFLO29CQUNoRSxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBS00sOEJBQU0sR0FBYjtRQUNJLGVBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFNLENBQUMsYUFBYSxDQUFDO0lBQzVDLENBQUM7SUFFTSxnQ0FBUSxHQUFmO1FBQ0ksZUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDVCxvQkFBQztBQUFELENBQUMsQUFoRUQsSUFnRUM7QUFoRXFCLHNDQUFhO0FBZ0VsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpeWlDb21wb25lbnRCYXNlIH0gZnJvbSBcIi4uLy4uL1NoaXlpQ29tcG9uZW50L0Jhc2UvQ29tcG9uZW50c0Jhc2VcIjtcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi4vLi4vRXZlbnQvRXZlbnRcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uLy4uL1JvdXRlci9Sb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi9EYXRhL0RhdGFcIjtcclxuXHJcblxyXG5hYnN0cmFjdCBjbGFzcyBTaGl5aVBhZ2VFeHRlcm5CYXNlPFBhZ2VUIGV4dGVuZHMgU2hpeWlQYWdlQmFzZT4ge1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBwdWJsaWMgUGFnZUluc3RhbmNlOiBQYWdlVFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEluaXQoX1BhZ2VJbnN0YW5jZTogUGFnZVQpOiBTaGl5aVBhZ2VFeHRlcm5CYXNlPFBhZ2VUPiB7XHJcbiAgICAgICAgdGhpcy5QYWdlSW5zdGFuY2UgPSBfUGFnZUluc3RhbmNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBJbml0Q3VzdG9tRGF0YShfb3B0aW9ucz86IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2hpeWlQYWdlRnVuY0Jhc2U8UGFnZVQgZXh0ZW5kcyBTaGl5aVBhZ2VCYXNlPiBleHRlbmRzIFNoaXlpUGFnZUV4dGVybkJhc2U8UGFnZVQ+IHtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNoaXlpUGFnZVVJQmFzZTxQYWdlVCBleHRlbmRzIFNoaXlpUGFnZUJhc2U+IGV4dGVuZHMgU2hpeWlQYWdlRXh0ZXJuQmFzZTxQYWdlVD4ge1xyXG4gICAgcHVibGljIEluaXQoX1BhZ2VJbnN0YW5jZTogUGFnZVQpOiBTaGl5aVBhZ2VFeHRlcm5CYXNlPFBhZ2VUPiB7XHJcbiAgICAgICAgc3VwZXIuSW5pdChfUGFnZUluc3RhbmNlKTtcclxuICAgICAgICB0aGlzLkxvYWRHbG9iYWxVSUNvbmZpZygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIExvYWRHbG9iYWxVSUNvbmZpZygpOiB2b2lkIHtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdlRGF0YSB7XHJcbiAgICBEYXJrOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaGl5aVBhZ2VCYXNlIGV4dGVuZHMgV2VjaGF0TWluaXByb2dyYW0uUGFnZS5JbnN0YW5jZU1ldGhvZHM8V2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LkRhdGFPcHRpb24+IHtcclxuXHJcbn1cclxuXHJcbmludGVyZmFjZSBPYnNlcnZlclRhcmdldDxEYXRhVD57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBQcmVQcm9jZXNzPzoodmFsdWU6RGF0YVQpID0+IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNoaXlpUGFnZUJhc2VcclxuICAgIGltcGxlbWVudHMgV2VjaGF0TWluaXByb2dyYW0uUGFnZS5PcHRpb25zPFxyXG4gICAgV2VjaGF0TWluaXByb2dyYW0uUGFnZS5EYXRhT3B0aW9uLFxyXG4gICAgV2VjaGF0TWluaXByb2dyYW0uUGFnZS5DdXN0b21PcHRpb25cclxuICAgID57XHJcbiAgICAgICAgLy8jcmVnaW9uIOS6i+S7tuWkhOeQhlxyXG4gICAgICAgIHB1YmxpYyBDb21wb25lbnRTdGFjazpBcnJheTxTaGl5aUNvbXBvbmVudEJhc2U+PW5ldyBBcnJheTxTaGl5aUNvbXBvbmVudEJhc2U+KCk7XHJcbiAgICAgICAgcHVibGljIFJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLChlOkV2ZW50KT0+dm9pZD49e307XHJcblxyXG4gICAgICAgIHB1YmxpYyBBZGRIYW5kbGVyKFRyaWdnZXI6c3RyaW5nLEhhbmRsZXI6KGU6RXZlbnQpPT52b2lkKTp2b2lke1xyXG4gICAgICAgICAgICB0aGlzLlJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzW1RyaWdnZXJdID0gSGFuZGxlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIFJlbW92ZWhhbmRsZXIoVHJpZ2dlcjpzdHJpbmcsIEhhbmRsZXI6KGU6RXZlbnQpPT52b2lkKTp2b2lke1xyXG4gICAgICAgICAgICBpZih0aGlzLlJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzW1RyaWdnZXJdPT09SGFuZGxlcil7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5SZWdpc3RlcmVkRXZlbnRIYW5kbGVyc1tUcmlnZ2VyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEV2ZW50SGFuZGxlcihlOkV2ZW50KTp2b2lke1xyXG4gICAgICAgICAgICBlLkNhdGNoKCk7XHJcbiAgICAgICAgICAgIGxldCBIYW5kbGVyID0gdGhpcy5SZWdpc3RlcmVkRXZlbnRIYW5kbGVyc1tlLkV2ZW50TmFtZV07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBpZihIYW5kbGVyKXtcclxuICAgICAgICAgICAgICAgIEhhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZS5QYXNzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8jZW5kcmVnaW9uXHJcblxyXG5cclxuICAgICAgICAvLyNyZWdpb24g5pWw5o2u57uR5a6aXHJcbiAgICAgICAgcHJpdmF0ZSBPYnNlcnZlckxpc3Q6IFJlY29yZDxzdHJpbmcsT2JzZXJ2ZXJUYXJnZXQ8YW55Pj4gPSB7fTtcclxuICAgICAgICBwdWJsaWMgQWRkT2JzZXJ2ZXI8RGF0YVQ+KGRhdGE6RGF0YTxEYXRhVD4sdGFyZ2V0Ok9ic2VydmVyVGFyZ2V0PERhdGFUPil7IFxyXG4gICAgICAgICAgICBsZXQga2V5ID0gZGF0YS5CaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLk9ic2VydmVyTGlzdFtrZXldID0gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFJlbW92ZU9ic2VydmVyPERhdGFUPihkYXRhOkRhdGE8RGF0YVQ+KXtcclxuICAgICAgICAgICAgaWYodGhpcy5PYnNlcnZlckxpc3RbZGF0YS5EYXRhS2V5XSl7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5PYnNlcnZlckxpc3RbZGF0YS5EYXRhS2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIE9ic2VydmVyTm90aWZ5KGtleTpzdHJpbmcsdmFsdWU6YW55KXsgXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLk9ic2VydmVyTGlzdFtrZXldO1xyXG4gICAgICAgICAgICBpZih0YXJnZXQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBbdGFyZ2V0Lm5hbWVdOnRhcmdldC5QcmVQcm9jZXNzP3RhcmdldC5QcmVQcm9jZXNzKHZhbHVlKTp2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyNlbmRyZWdpb25cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBJblBhcmFtZXRlcjphbnlcclxuICAgICAgICBwdWJsaWMgb25Mb2FkKCl7XHJcbiAgICAgICAgICAgIFJvdXRlci5QYWdlTG9hZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5JblBhcmFtZXRlciA9IFJvdXRlci5OYXZpZ2F0ZVBhcmFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG9uVW5sb2FkKCl7XHJcbiAgICAgICAgICAgIFJvdXRlci5QYWdlVW5sb2FkKCk7XHJcbiAgICAgICAgfVxyXG59OyJdfQ==