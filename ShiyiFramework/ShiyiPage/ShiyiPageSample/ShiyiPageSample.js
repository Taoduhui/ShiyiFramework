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
exports.ShiyiPageSample = void 0;
var ShiyiPageBase_1 = require("../Base/ShiyiPageBase");
var ShiyiPageSampleFunc_1 = require("./Functional/ShiyiPageSampleFunc");
var ShiyiPageSampleUI_1 = require("./UI/ShiyiPageSampleUI");
var ShiyiPageSample = (function (_super) {
    __extends(ShiyiPageSample, _super);
    function ShiyiPageSample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Func = new ShiyiPageSampleFunc_1.ShiyiPageSampleFunc();
        _this.UI = new ShiyiPageSampleUI_1.ShiyiPageSampleUI();
        _this.data = {
            Dark: ""
        };
        return _this;
    }
    ShiyiPageSample.prototype.onReady = function () {
        this.Func.Init(this).InitCustomData();
        this.UI.Init(this).InitCustomData();
    };
    return ShiyiPageSample;
}(ShiyiPageBase_1.ShiyiPageBase));
exports.ShiyiPageSample = ShiyiPageSample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hpeWlQYWdlU2FtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2hpeWlQYWdlU2FtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCx3RUFBdUU7QUFFdkUsNERBQTJEO0FBRTNEO0lBQXFDLG1DQUFhO0lBQWxEO1FBQUEscUVBVUM7UUFUVSxVQUFJLEdBQUMsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDO1FBQy9CLFFBQUUsR0FBQyxJQUFJLHFDQUFpQixFQUFFLENBQUM7UUFDM0IsVUFBSSxHQUFxQjtZQUM1QixJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUE7O0lBS0wsQ0FBQztJQUpVLGlDQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBcUMsNkJBQWEsR0FVakQ7QUFWWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoaXlpUGFnZUJhc2UgfSBmcm9tIFwiLi4vQmFzZS9TaGl5aVBhZ2VCYXNlXCI7XHJcbmltcG9ydCB7IFNoaXlpUGFnZVNhbXBsZUZ1bmMgfSBmcm9tIFwiLi9GdW5jdGlvbmFsL1NoaXlpUGFnZVNhbXBsZUZ1bmNcIjtcclxuaW1wb3J0IHsgU2hpeWlQYWdlU2FtcGxlRGF0YSB9IGZyb20gXCIuL01vZGVscy9Nb2RlbHNcIjtcclxuaW1wb3J0IHsgU2hpeWlQYWdlU2FtcGxlVUkgfSBmcm9tIFwiLi9VSS9TaGl5aVBhZ2VTYW1wbGVVSVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNoaXlpUGFnZVNhbXBsZSBleHRlbmRzIFNoaXlpUGFnZUJhc2V7XHJcbiAgICBwdWJsaWMgRnVuYz1uZXcgU2hpeWlQYWdlU2FtcGxlRnVuYygpO1xyXG4gICAgcHVibGljIFVJPW5ldyBTaGl5aVBhZ2VTYW1wbGVVSSgpO1xyXG4gICAgcHVibGljIGRhdGE6U2hpeWlQYWdlU2FtcGxlRGF0YT17XHJcbiAgICAgICAgRGFyazogXCJcIlxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVhZHkoKXtcclxuICAgICAgICB0aGlzLkZ1bmMuSW5pdCh0aGlzKS5Jbml0Q3VzdG9tRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuVUkuSW5pdCh0aGlzKS5Jbml0Q3VzdG9tRGF0YSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==