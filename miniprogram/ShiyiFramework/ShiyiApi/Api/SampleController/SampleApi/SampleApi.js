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
exports.SampleApi = void 0;
var ApiBase_1 = require("../../../Base/ApiBase");
var SampleApiModel_1 = require("./Model/SampleApiModel");
var SampleApi = (function (_super) {
    __extends(SampleApi, _super);
    function SampleApi(id, _finish) {
        var _this = this;
        var ApiUrl = "ApiUrl";
        var ReqModel = new SampleApiModel_1.SampleReqModel(id);
        var RespModel = new SampleApiModel_1.SampleRespModel();
        _this = _super.call(this, ApiUrl, ReqModel, RespModel, function (model) {
            var resp = model;
            if (_finish) {
                _finish(resp.IsOk);
            }
            ;
        }) || this;
        return _this;
    }
    return SampleApi;
}(ApiBase_1.ApiBase));
exports.SampleApi = SampleApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FtcGxlQXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2FtcGxlQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFnRDtBQUNoRCx5REFBeUU7QUFHekU7SUFBK0IsNkJBQU87SUFDbEMsbUJBQVksRUFBUyxFQUFDLE9BQTZCO1FBQW5ELGlCQVNDO1FBUkcsSUFBSSxNQUFNLEdBQUUsUUFBUSxDQUFDO1FBQ3JCLElBQUksUUFBUSxHQUFDLElBQUksK0JBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxJQUFJLFNBQVMsR0FBQyxJQUFJLGdDQUFlLEVBQUUsQ0FBQztRQUNwQyxRQUFBLGtCQUFNLE1BQU0sRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFVBQUMsS0FBSztZQUVsQyxJQUFJLElBQUksR0FBRyxLQUF3QixDQUFDO1lBQ3BDLElBQUcsT0FBTyxFQUFDO2dCQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFBQztZQUFBLENBQUM7UUFDckMsQ0FBQyxDQUFDLFNBQUE7O0lBQ04sQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQVhELENBQStCLGlCQUFPLEdBV3JDO0FBWFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcGlCYXNlIH0gZnJvbSBcIi4uLy4uLy4uL0Jhc2UvQXBpQmFzZVwiO1xyXG5pbXBvcnQgeyBTYW1wbGVSZXFNb2RlbCwgU2FtcGxlUmVzcE1vZGVsIH0gZnJvbSBcIi4vTW9kZWwvU2FtcGxlQXBpTW9kZWxcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2FtcGxlQXBpIGV4dGVuZHMgQXBpQmFzZXtcclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlcixfZmluaXNoPzooaXNPazpib29sZWFuKT0+dm9pZCl7XHJcbiAgICAgICAgbGV0IEFwaVVybD0gXCJBcGlVcmxcIjtcclxuICAgICAgICBsZXQgUmVxTW9kZWw9bmV3IFNhbXBsZVJlcU1vZGVsKGlkKTtcclxuICAgICAgICBsZXQgUmVzcE1vZGVsPW5ldyBTYW1wbGVSZXNwTW9kZWwoKTtcclxuICAgICAgICBzdXBlcihBcGlVcmwsUmVxTW9kZWwsUmVzcE1vZGVsLChtb2RlbCk9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3AgPSBtb2RlbCBhcyBTYW1wbGVSZXNwTW9kZWw7XHJcbiAgICAgICAgICAgIGlmKF9maW5pc2gpe19maW5pc2gocmVzcC5Jc09rKTt9O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXX0=