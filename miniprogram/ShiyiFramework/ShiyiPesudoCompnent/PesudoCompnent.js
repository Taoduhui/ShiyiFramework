"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PesudoCompnent = void 0;
var PesudoCompnent = (function () {
    function PesudoCompnent(_ComponentId) {
        this.ComponentId = "";
        this.ComponentId = _ComponentId;
    }
    Object.defineProperty(PesudoCompnent.prototype, "Inst", {
        get: function () {
            return this.PageInstance;
        },
        enumerable: false,
        configurable: true
    });
    PesudoCompnent.prototype.Init = function () {
        console.log(this._Render);
        this.Render(this.data);
        return this;
    };
    PesudoCompnent.prototype.Render = function (value) {
        var _this = this;
        var RealValue = {};
        Object.keys(value).forEach(function (key) {
            RealValue[_this.ComponentId + key] = value[key];
        });
        this._Render(RealValue);
    };
    return PesudoCompnent;
}());
exports.PesudoCompnent = PesudoCompnent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVzdWRvQ29tcG5lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQZXN1ZG9Db21wbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFNQTtJQVNJLHdCQUFZLFlBQW1CO1FBSnhCLGdCQUFXLEdBQVMsRUFBRSxDQUFDO1FBSzFCLElBQUksQ0FBQyxXQUFXLEdBQUMsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFURCxzQkFBVyxnQ0FBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBU00sNkJBQUksR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwrQkFBTSxHQUFiLFVBQTRDLEtBQW9DO1FBQWhGLGlCQU1DO1FBTEcsSUFBSSxTQUFTLEdBQXNCLEVBQUUsQ0FBQztRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDMUIsU0FBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLEdBQUMsR0FBRyxDQUFDLEdBQUUsS0FBNEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdMLHFCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCcUIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGl5aVBhZ2VCYXNlIH0gZnJvbSBcIi4uL1NoaXlpUGFnZS9CYXNlL1NoaXlpUGFnZUJhc2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVzdWRvQ29tcG5lbnREYXRhIHtcclxuICAgIFRoZW1lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBlc3Vkb0NvbXBuZW50IHtcclxuICAgIHB1YmxpYyBQYWdlSW5zdGFuY2UhOiBTaGl5aVBhZ2VCYXNlO1xyXG4gICAgcHVibGljIGdldCBJbnN0KCk6IFNoaXlpUGFnZUJhc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlBhZ2VJbnN0YW5jZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBDb21wb25lbnRJZDogc3RyaW5nPVwiXCI7XHJcbiAgICBwdWJsaWMgZGF0YSE6IFBlc3Vkb0NvbXBuZW50RGF0YTtcclxuICAgIHB1YmxpYyBfUmVuZGVyITogKHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKF9Db21wb25lbnRJZDpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuQ29tcG9uZW50SWQ9X0NvbXBvbmVudElkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJbml0KCk6UGVzdWRvQ29tcG5lbnR7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fUmVuZGVyKTtcclxuICAgICAgICB0aGlzLlJlbmRlcih0aGlzLmRhdGEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW5kZXI8VCBleHRlbmRzIFBlc3Vkb0NvbXBuZW50RGF0YT4odmFsdWU6IFBhcnRpYWw8UmVjb3JkPGtleW9mIFQsIGFueT4+KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IFJlYWxWYWx1ZTpSZWNvcmQ8c3RyaW5nLGFueT4gPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrZXkgPT57XHJcbiAgICAgICAgICAgIFJlYWxWYWx1ZVt0aGlzLkNvbXBvbmVudElkK2tleV09KHZhbHVlIGFzIFJlY29yZDxzdHJpbmcsYW55Pilba2V5XTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX1JlbmRlcihSZWFsVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59Il19