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
exports.indexUI = void 0;
var ShiyiPageBase_1 = require("../../../ShiyiFramework/ShiyiPage/Base/ShiyiPageBase");
var GlobalData_1 = require("../../../GlobalData/GlobalData");
var indexUI = (function (_super) {
    __extends(indexUI, _super);
    function indexUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    indexUI.prototype.InitCustomData = function (_options) {
        this.Inst.BindGlobalBackward("ChangeThemeClicked", GlobalData_1.GlobalData.Theme);
        this.Inst.BindSelf("SampleRefClicked", "SelfBindContent");
    };
    return indexUI;
}(ShiyiPageBase_1.ShiyiPageUIBase));
exports.indexUI = indexUI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhVSS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOEVBQStFO0FBRS9FLDBEQUF5RDtBQUV6RDtJQUE2QiwyQkFBc0I7SUFBbkQ7O0lBTUEsQ0FBQztJQUpVLGdDQUFjLEdBQXJCLFVBQXNCLFFBQThCO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQW9CLG9CQUFvQixFQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQW9CLGtCQUFrQixFQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBNkIsK0JBQWUsR0FNM0M7QUFOWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluZGV4IH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IFNoaXlpUGFnZVVJQmFzZSB9IGZyb20gXCJAU2hpeWlGcmFtZXdvcmsvU2hpeWlQYWdlL0Jhc2UvU2hpeWlQYWdlQmFzZVwiO1xyXG5pbXBvcnQgeyBpbmRleERhdGEgfSBmcm9tIFwiLi4vTW9kZWxzL01vZGVsc1wiO1xyXG5pbXBvcnQgeyBHbG9iYWxEYXRhIH0gZnJvbSBcIkBSb290L0dsb2JhbERhdGEvR2xvYmFsRGF0YVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGluZGV4VUkgZXh0ZW5kcyBTaGl5aVBhZ2VVSUJhc2U8aW5kZXg+IHtcclxuXHJcbiAgICBwdWJsaWMgSW5pdEN1c3RvbURhdGEoX29wdGlvbnM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5JbnN0LkJpbmRHbG9iYWxCYWNrd2FyZDxib29sZWFuLGluZGV4RGF0YT4oXCJDaGFuZ2VUaGVtZUNsaWNrZWRcIixHbG9iYWxEYXRhLlRoZW1lKTtcclxuICAgICAgICB0aGlzLkluc3QuQmluZFNlbGY8Ym9vbGVhbixpbmRleERhdGE+KFwiU2FtcGxlUmVmQ2xpY2tlZFwiLFwiU2VsZkJpbmRDb250ZW50XCIpO1xyXG4gICAgfVxyXG59Il19