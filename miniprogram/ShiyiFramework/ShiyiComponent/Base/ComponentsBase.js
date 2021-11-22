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
exports.ShiyiComponentBase = exports.ComponentLifeCycle = exports.ComponentMethod = exports.ShiyiComponentUIBase = exports.ShiyiComponentFuncBase = void 0;
var GlobalData_1 = require("../../../GlobalData/GlobalData");
var Utils_1 = require("../../../ShiyiFramework/Utils/Utils");
var ShiyiComponentExternBase = (function () {
    function ShiyiComponentExternBase() {
    }
    ShiyiComponentExternBase.prototype.Init = function (_ComponentInstance) {
        this.ComponentInstance = _ComponentInstance;
        return this;
    };
    return ShiyiComponentExternBase;
}());
var ShiyiComponentFuncBase = (function (_super) {
    __extends(ShiyiComponentFuncBase, _super);
    function ShiyiComponentFuncBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShiyiComponentFuncBase;
}(ShiyiComponentExternBase));
exports.ShiyiComponentFuncBase = ShiyiComponentFuncBase;
var ShiyiComponentUIBase = (function (_super) {
    __extends(ShiyiComponentUIBase, _super);
    function ShiyiComponentUIBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShiyiComponentUIBase.prototype.Init = function (_ComponentInstance) {
        _super.prototype.Init.call(this, _ComponentInstance);
        this.LoadGlobalUIConfig();
        return this;
    };
    ShiyiComponentUIBase.prototype.LoadGlobalUIConfig = function () {
        this.ComponentInstance.MethodInstance.AddObserver(GlobalData_1.GlobalData.Theme, {
            name: (0, Utils_1.nameof)("Theme"),
            PreProcess: function (value) {
                return value ? "Boy" : "Girl";
            }
        });
    };
    return ShiyiComponentUIBase;
}(ShiyiComponentExternBase));
exports.ShiyiComponentUIBase = ShiyiComponentUIBase;
var ComponentMethod = (function (_super) {
    __extends(ComponentMethod, _super);
    function ComponentMethod() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.RegisteredEventHandlers = {};
        _this.ObserverList = {};
        return _this;
    }
    ComponentMethod.prototype.InitCustomData = function (_options) {
    };
    ComponentMethod.prototype.AddHandler = function (Trigger, Handler) {
        this.RegisteredEventHandlers[Trigger] = Handler;
    };
    ComponentMethod.prototype.Removehandler = function (Trigger, Handler) {
        if (this.RegisteredEventHandlers[Trigger] === Handler) {
            delete this.RegisteredEventHandlers[Trigger];
        }
    };
    ComponentMethod.prototype.EventHandler = function (e) {
        e.Catch();
        var Handler = this.RegisteredEventHandlers[e.EventName];
        if (Handler) {
            Handler(e);
        }
        else {
            e.Pass();
        }
    };
    ComponentMethod.prototype.AddObserver = function (data, target) {
        this.ObserverList[data.DataKey] = target;
        data.BindComponent(this.ComponentInstance);
    };
    ComponentMethod.prototype.RemoveObserver = function (data) {
        if (this.ObserverList[data.DataKey]) {
            delete this.ObserverList[data.DataKey];
        }
    };
    ComponentMethod.prototype.ObserverNotify = function (key, value) {
        var _a;
        var target = this.ObserverList[key];
        if (target) {
            this.ComponentInstance.setData((_a = {},
                _a[target.name] = target.PreProcess ? target.PreProcess(value) : value,
                _a));
        }
    };
    ComponentMethod.CreateInstance = function (instance) {
        return (0, Utils_1.CreateRecordInstance)(instance);
    };
    return ComponentMethod;
}(ShiyiComponentExternBase));
exports.ComponentMethod = ComponentMethod;
var ComponentLifeCycle = (function (_super) {
    __extends(ComponentLifeCycle, _super);
    function ComponentLifeCycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentLifeCycle.prototype.InitCustomData = function (_options) {
    };
    ComponentLifeCycle.CreateInstance = function (instance) {
        var Base = (0, Utils_1.CreateRecordInstance)(instance);
        if (Base["attached"]) {
            console.error("attached is exist");
            var attached_re_1 = Base["attached"];
            Base["ready"] = function () {
                attached_re_1();
                Base["ready"] ? Base["ready"]() : null;
            };
            delete Base["attached"];
            console.log(Base);
            return;
        }
        return Base;
    };
    return ComponentLifeCycle;
}(ShiyiComponentExternBase));
exports.ComponentLifeCycle = ComponentLifeCycle;
var ShiyiComponentBase = (function () {
    function ShiyiComponentBase() {
        this.methods = {};
    }
    return ShiyiComponentBase;
}());
exports.ShiyiComponentBase = ShiyiComponentBase;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50c0Jhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb21wb25lbnRzQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBeUQ7QUFFekQsMERBQWdGO0FBS2hGO0lBR0k7SUFDQSxDQUFDO0lBRU0sdUNBQUksR0FBWCxVQUFZLGtCQUF5QjtRQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLCtCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFFRDtJQUF1RiwwQ0FBK0I7SUFBdEg7O0lBQ0EsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQURELENBQXVGLHdCQUF3QixHQUM5RztBQURxQix3REFBc0I7QUFHNUM7SUFBcUYsd0NBQStCO0lBQXBIOztJQWNBLENBQUM7SUFiVSxtQ0FBSSxHQUFYLFVBQVksa0JBQXlCO1FBQ2pDLGlCQUFNLElBQUksWUFBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTSxpREFBa0IsR0FBekI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyx1QkFBVSxDQUFDLEtBQUssRUFBQztZQUMvRCxJQUFJLEVBQUMsSUFBQSxjQUFNLEVBQWdCLE9BQU8sQ0FBQztZQUNuQyxVQUFVLEVBQUMsVUFBQyxLQUFhO2dCQUNyQixPQUFPLEtBQUssQ0FBQSxDQUFDLENBQUEsS0FBSyxDQUFBLENBQUMsQ0FBQSxNQUFNLENBQUM7WUFDOUIsQ0FBQztTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFkRCxDQUFxRix3QkFBd0IsR0FjNUc7QUFkcUIsb0RBQW9CO0FBb0IxQztJQUF1RSxtQ0FBK0I7SUFB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O1lBQ3ZDLENBQUMsQ0FBQTtZQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsT0FBTztTQUNWO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUEyRSx3QkFBd0IsR0FvQmxHO0FBcEJZLGdEQUFrQjtBQWlDL0I7SUFBQTtRQVFXLFlBQU8sR0FBNEIsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksZ0RBQWtCO0FBUzlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxEYXRhIH0gZnJvbSBcIkBSb290L0dsb2JhbERhdGEvR2xvYmFsRGF0YVwiO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSBcIkBSb290L1NoaXlpRnJhbWV3b3JrL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgeyBDcmVhdGVSZWNvcmRJbnN0YW5jZSwgbmFtZW9mIH0gZnJvbSBcIkBSb290L1NoaXlpRnJhbWV3b3JrL1V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uLy4uL0V2ZW50L0V2ZW50XCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi8uLi9Sb3V0ZXIvUm91dGVyXCI7XHJcblxyXG5cclxuYWJzdHJhY3QgY2xhc3MgU2hpeWlDb21wb25lbnRFeHRlcm5CYXNlPENvbXBUIGV4dGVuZHMgU2hpeWlDb21wb25lbnRCYXNlPiB7XHJcblxyXG4gICAgcHVibGljIENvbXBvbmVudEluc3RhbmNlITogQ29tcFRcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJbml0KF9Db21wb25lbnRJbnN0YW5jZTogQ29tcFQpOiBhbnkge1xyXG4gICAgICAgIHRoaXMuQ29tcG9uZW50SW5zdGFuY2UgPSBfQ29tcG9uZW50SW5zdGFuY2U7ICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBJbml0Q3VzdG9tRGF0YShfb3B0aW9ucz86IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2hpeWlDb21wb25lbnRGdW5jQmFzZTxDb21wVCBleHRlbmRzIFNoaXlpQ29tcG9uZW50QmFzZT4gZXh0ZW5kcyBTaGl5aUNvbXBvbmVudEV4dGVybkJhc2U8Q29tcFQ+IHtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNoaXlpQ29tcG9uZW50VUlCYXNlPENvbXBUIGV4dGVuZHMgU2hpeWlDb21wb25lbnRCYXNlPiBleHRlbmRzIFNoaXlpQ29tcG9uZW50RXh0ZXJuQmFzZTxDb21wVD4ge1xyXG4gICAgcHVibGljIEluaXQoX0NvbXBvbmVudEluc3RhbmNlOiBDb21wVCk6IFNoaXlpQ29tcG9uZW50RXh0ZXJuQmFzZTxDb21wVD4ge1xyXG4gICAgICAgIHN1cGVyLkluaXQoX0NvbXBvbmVudEluc3RhbmNlKTtcclxuICAgICAgICB0aGlzLkxvYWRHbG9iYWxVSUNvbmZpZygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIExvYWRHbG9iYWxVSUNvbmZpZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkNvbXBvbmVudEluc3RhbmNlLk1ldGhvZEluc3RhbmNlLkFkZE9ic2VydmVyKEdsb2JhbERhdGEuVGhlbWUse1xyXG4gICAgICAgICAgICBuYW1lOm5hbWVvZjxDb21wb25lbnREYXRhPihcIlRoZW1lXCIpLCBcclxuICAgICAgICAgICAgUHJlUHJvY2VzczoodmFsdWU6Ym9vbGVhbik9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZT9cIkJveVwiOlwiR2lybFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnREYXRhIHtcclxuICAgIFRoZW1lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1ldGhvZDxDb21wVCBleHRlbmRzIFNoaXlpQ29tcG9uZW50QmFzZT4gZXh0ZW5kcyBTaGl5aUNvbXBvbmVudEV4dGVybkJhc2U8Q29tcFQ+IHtcclxuICAgIFxyXG4gICAgXHJcbiAgICBwdWJsaWMgSW5pdEN1c3RvbURhdGEoX29wdGlvbnM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+ID0ge307XHJcbiAgICBwdWJsaWMgQWRkSGFuZGxlcihUcmlnZ2VyOiBzdHJpbmcsIEhhbmRsZXI6IChlOiBFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuUmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnNbVHJpZ2dlcl0gPSBIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW1vdmVoYW5kbGVyKFRyaWdnZXI6IHN0cmluZywgSGFuZGxlcjogKGU6IEV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuUmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnNbVHJpZ2dlcl0gPT09IEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuUmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnNbVHJpZ2dlcl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBFdmVudEhhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBlLkNhdGNoKCk7XHJcbiAgICAgICAgbGV0IEhhbmRsZXIgPSB0aGlzLlJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzW2UuRXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoSGFuZGxlcikge1xyXG4gICAgICAgICAgICBIYW5kbGVyKGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGUuUGFzcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyNyZWdpb24g5pWw5o2u57uR5a6aXHJcbiAgICBwcml2YXRlIE9ic2VydmVyTGlzdDogUmVjb3JkPHN0cmluZywgT2JzZXJ2ZXJUYXJnZXQ8YW55Pj4gPSB7fTtcclxuICAgIC8qKlxyXG4gICAgICog5YWo5bGA5pWw5o2u57uR5a6aXHJcbiAgICAgKiBAcGFyYW0gZGF0YSDnu5HlrprmlbDmja7mupBcclxuICAgICAqIEBwYXJhbSB0YXJnZXQg57uR5a6a5pys6aG16Z2i55qE5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBBZGRPYnNlcnZlcjxEYXRhVD4oZGF0YTogRGF0YTxEYXRhVD4sIHRhcmdldDogT2JzZXJ2ZXJUYXJnZXQ8RGF0YVQ+KSB7XHJcbiAgICAgICAgdGhpcy5PYnNlcnZlckxpc3RbZGF0YS5EYXRhS2V5XSA9IHRhcmdldDtcclxuICAgICAgICBkYXRhLkJpbmRDb21wb25lbnQodGhpcy5Db21wb25lbnRJbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbW92ZU9ic2VydmVyPERhdGFUPihkYXRhOiBEYXRhPERhdGFUPikge1xyXG4gICAgICAgIGlmICh0aGlzLk9ic2VydmVyTGlzdFtkYXRhLkRhdGFLZXldKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLk9ic2VydmVyTGlzdFtkYXRhLkRhdGFLZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgT2JzZXJ2ZXJOb3RpZnkoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5PYnNlcnZlckxpc3Rba2V5XTtcclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ29tcG9uZW50SW5zdGFuY2Uuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBbdGFyZ2V0Lm5hbWVdOiB0YXJnZXQuUHJlUHJvY2VzcyA/IHRhcmdldC5QcmVQcm9jZXNzKHZhbHVlKSA6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGVJbnN0YW5jZShpbnN0YW5jZTphbnkpe1xyXG4gICAgICAgIHJldHVybiBDcmVhdGVSZWNvcmRJbnN0YW5jZShpbnN0YW5jZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMaWZlQ3ljbGUgPENvbXBUIGV4dGVuZHMgU2hpeWlDb21wb25lbnRCYXNlPiBleHRlbmRzIFNoaXlpQ29tcG9uZW50RXh0ZXJuQmFzZTxDb21wVD4ge1xyXG4gICAgXHJcbiAgICBwdWJsaWMgSW5pdEN1c3RvbURhdGEoX29wdGlvbnM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGVJbnN0YW5jZShpbnN0YW5jZTphbnkpIHtcclxuICAgICAgICBsZXQgQmFzZSA9IENyZWF0ZVJlY29yZEluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICBpZihCYXNlW1wiYXR0YWNoZWRcIl0pe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiYXR0YWNoZWQgaXMgZXhpc3RcIik7XHJcbiAgICAgICAgICAgIGxldCBhdHRhY2hlZF9yZT0gQmFzZVtcImF0dGFjaGVkXCJdO1xyXG4gICAgICAgICAgICBCYXNlW1wicmVhZHlcIl09KCk9PntcclxuICAgICAgICAgICAgICAgIGF0dGFjaGVkX3JlKCk7XHJcbiAgICAgICAgICAgICAgICBCYXNlW1wicmVhZHlcIl0/QmFzZVtcInJlYWR5XCJdKCk6bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWxldGUgQmFzZVtcImF0dGFjaGVkXCJdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhCYXNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQmFzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaGl5aUNvbXBvbmVudEJhc2UgZXh0ZW5kcyBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuSW5zdGFuY2VNZXRob2RzPFdlY2hhdE1pbmlwcm9ncmFtLkNvbXBvbmVudC5EYXRhT3B0aW9uPiB7XHJcblxyXG59XHJcblxyXG50eXBlIFRJc1BhZ2UgPSBmYWxzZVxyXG5cclxuaW50ZXJmYWNlIE9ic2VydmVyVGFyZ2V0PERhdGFUPiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBQcmVQcm9jZXNzPzogKHZhbHVlOiBEYXRhVCkgPT4gYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hpeWlDb21wb25lbnRCYXNlIGltcGxlbWVudHMgV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50Lk9wdGlvbnM8XHJcbiAgICBXZWNoYXRNaW5pcHJvZ3JhbS5Db21wb25lbnQuRGF0YU9wdGlvbixcclxuICAgIFdlY2hhdE1pbmlwcm9ncmFtLkNvbXBvbmVudC5Qcm9wZXJ0eU9wdGlvbixcclxuICAgIFdlY2hhdE1pbmlwcm9ncmFtLkNvbXBvbmVudC5NZXRob2RPcHRpb24sXHJcbiAgICBXZWNoYXRNaW5pcHJvZ3JhbS5JQW55T2JqZWN0LFxyXG4gICAgVElzUGFnZT5cclxue1xyXG4gICAgcHVibGljIE1ldGhvZEluc3RhbmNlITogQ29tcG9uZW50TWV0aG9kPFNoaXlpQ29tcG9uZW50QmFzZT47XHJcbiAgICBwdWJsaWMgbWV0aG9kczogUmVjb3JkPHN0cmluZyxGdW5jdGlvbj4gPSB7fTtcclxufTsiXX0=