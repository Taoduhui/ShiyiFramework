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
            Theme: ""
        };
        return _this;
    }
    ShiyiPageSample.prototype.onReady = function () {
    };
    return ShiyiPageSample;
}(ShiyiPageBase_1.ShiyiPageBase));
exports.ShiyiPageSample = ShiyiPageSample;
Page(new ShiyiPageSample());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hpeWlQYWdlU2FtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2hpeWlQYWdlU2FtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCx3RUFBdUU7QUFFdkUsNERBQTJEO0FBRTNEO0lBQXFDLG1DQUFhO0lBQWxEO1FBQUEscUVBUUM7UUFQVSxVQUFJLEdBQUMsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDO1FBQy9CLFFBQUUsR0FBQyxJQUFJLHFDQUFpQixFQUFFLENBQUM7UUFDM0IsVUFBSSxHQUFxQjtZQUM1QixLQUFLLEVBQUUsRUFBRTtTQUNaLENBQUE7O0lBR0wsQ0FBQztJQUZVLGlDQUFPLEdBQWQ7SUFDQSxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBcUMsNkJBQWEsR0FRakQ7QUFSWSwwQ0FBZTtBQVEzQixJQUFJLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpeWlQYWdlQmFzZSB9IGZyb20gXCIuLi9CYXNlL1NoaXlpUGFnZUJhc2VcIjtcclxuaW1wb3J0IHsgU2hpeWlQYWdlU2FtcGxlRnVuYyB9IGZyb20gXCIuL0Z1bmN0aW9uYWwvU2hpeWlQYWdlU2FtcGxlRnVuY1wiO1xyXG5pbXBvcnQgeyBTaGl5aVBhZ2VTYW1wbGVEYXRhIH0gZnJvbSBcIi4vTW9kZWxzL01vZGVsc1wiO1xyXG5pbXBvcnQgeyBTaGl5aVBhZ2VTYW1wbGVVSSB9IGZyb20gXCIuL1VJL1NoaXlpUGFnZVNhbXBsZVVJXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2hpeWlQYWdlU2FtcGxlIGV4dGVuZHMgU2hpeWlQYWdlQmFzZXtcclxuICAgIHB1YmxpYyBGdW5jPW5ldyBTaGl5aVBhZ2VTYW1wbGVGdW5jKCk7XHJcbiAgICBwdWJsaWMgVUk9bmV3IFNoaXlpUGFnZVNhbXBsZVVJKCk7XHJcbiAgICBwdWJsaWMgZGF0YTpTaGl5aVBhZ2VTYW1wbGVEYXRhPXtcclxuICAgICAgICBUaGVtZTogXCJcIlxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVhZHkoKXtcclxuICAgIH1cclxufVBhZ2UobmV3IFNoaXlpUGFnZVNhbXBsZSgpKTtcclxuIl19