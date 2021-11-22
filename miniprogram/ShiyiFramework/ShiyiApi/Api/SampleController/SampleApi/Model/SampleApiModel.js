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
exports.SampleRespModel = exports.SampleReqModel = void 0;
var RequestModelBase_1 = require("../../../../Base/RequestModelBase");
var ResponseModelBase_1 = require("../../../../Base/ResponseModelBase");
var SampleReqModel = (function (_super) {
    __extends(SampleReqModel, _super);
    function SampleReqModel(id) {
        var _this = _super.call(this) || this;
        _this.Id = id;
        return _this;
    }
    SampleReqModel.prototype.GetMethod = function () {
        return "GET";
    };
    SampleReqModel.prototype.GetBody = function () {
        return {
            id: this.Id,
        };
    };
    return SampleReqModel;
}(RequestModelBase_1.RequestModelBase));
exports.SampleReqModel = SampleReqModel;
var SampleRespModel = (function (_super) {
    __extends(SampleRespModel, _super);
    function SampleRespModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.IsOk = false;
        return _this;
    }
    SampleRespModel.prototype.Parse = function (data) {
        this.IsOk = data.code == ResponseModelBase_1.ResponseCode.Ok;
        return this;
    };
    return SampleRespModel;
}(ResponseModelBase_1.ResponseModelBase));
exports.SampleRespModel = SampleRespModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FtcGxlQXBpTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTYW1wbGVBcGlNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBcUU7QUFDckUsd0VBQTRHO0FBRzVHO0lBQW9DLGtDQUFnQjtJQUVoRCx3QkFBWSxFQUFTO1FBQXJCLFlBQ0ksaUJBQU8sU0FFVjtRQURHLEtBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDOztJQUNqQixDQUFDO0lBQ00sa0NBQVMsR0FBaEI7UUFDSSxPQUFPLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBQ1UsZ0NBQU8sR0FBZDtRQUNJLE9BQU87WUFDSCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7U0FDZCxDQUFDO0lBQ04sQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQWZELENBQW9DLG1DQUFnQixHQWVuRDtBQWZZLHdDQUFjO0FBcUIzQjtJQUFxQyxtQ0FBaUI7SUFBdEQ7UUFBQSxxRUFRQztRQU5VLFVBQUksR0FBVyxLQUFLLENBQUM7O0lBTWhDLENBQUM7SUFMVSwrQkFBSyxHQUFaLFVBQWEsSUFBdUI7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLGdDQUFZLENBQUMsRUFBRSxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUFSRCxDQUFxQyxxQ0FBaUIsR0FRckQ7QUFSWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RNb2RlbEJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQmFzZS9SZXF1ZXN0TW9kZWxCYXNlXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlQ29kZSwgUmVzcG9uc2VEYXRhTW9kZWxCYXNlLCBSZXNwb25zZU1vZGVsQmFzZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9CYXNlL1Jlc3BvbnNlTW9kZWxCYXNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbXBsZVJlcU1vZGVsIGV4dGVuZHMgUmVxdWVzdE1vZGVsQmFzZSB7XHJcbiAgICBwcml2YXRlIElkOm51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5JZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldE1ldGhvZCgpOiBcIk9QVElPTlNcIiB8IFwiR0VUXCIgfCBcIkhFQURcIiB8IFwiUE9TVFwiIHwgXCJQVVRcIiB8IFwiREVMRVRFXCIgfCBcIlRSQUNFXCIgfCBcIkNPTk5FQ1RcIiB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIFwiR0VUXCJcclxufVxyXG4gICAgcHVibGljIEdldEJvZHkoKTogUmVjb3JkPHN0cmluZywgYW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuSWQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2FtcGxlQXBpUmVzcERhdGEgZXh0ZW5kcyBSZXNwb25zZURhdGFNb2RlbEJhc2V7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2FtcGxlUmVzcE1vZGVsIGV4dGVuZHMgUmVzcG9uc2VNb2RlbEJhc2Uge1xyXG5cclxuICAgIHB1YmxpYyBJc09rOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBQYXJzZShkYXRhOiBTYW1wbGVBcGlSZXNwRGF0YSkge1xyXG4gICAgICAgIHRoaXMuSXNPayA9IGRhdGEuY29kZSA9PSBSZXNwb25zZUNvZGUuT2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ==