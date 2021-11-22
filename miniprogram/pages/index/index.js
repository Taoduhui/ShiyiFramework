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
exports.index = void 0;
var SampleComp_1 = require("../../PesudoComponents/SampleComp/SampleComp");
var ShiyiPageBase_1 = require("../../ShiyiFramework/ShiyiPage/Base/ShiyiPageBase");
var indexFunc_1 = require("./Functional/indexFunc");
var indexUI_1 = require("./UI/indexUI");
var index = (function (_super) {
    __extends(index, _super);
    function index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Func = new indexFunc_1.indexFunc();
        _this.UI = new indexUI_1.indexUI();
        _this.PesudoCompnents = {
            SampleComp: new SampleComp_1.SampleComp("Sample")
        };
        _this.data = {
            Theme: "",
            SampleRefClicked: "",
            ChangeThemeClicked: false,
            SelfBindContent: ""
        };
        _this.Cnt = 0;
        return _this;
    }
    index.prototype.onReady = function () {
    };
    index.prototype.RefClicked = function () {
        this.Render({
            "SampleRefClicked": "Ref Clicked! " + this.Cnt
        });
        this.Cnt++;
    };
    return index;
}(ShiyiPageBase_1.ShiyiPageBase));
exports.index = index;
Page(new index());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyRUFBMEU7QUFDMUUsOEVBQWtHO0FBRWxHLG9EQUFtRDtBQUVuRCx3Q0FBdUM7QUFNdkM7SUFBMkIseUJBQWE7SUFBeEM7UUFBQSxxRUF1Q0M7UUF0Q1UsVUFBSSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQ3ZCLFFBQUUsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUNuQixxQkFBZSxHQUFtQjtZQUNyQyxVQUFVLEVBQUUsSUFBSSx1QkFBVSxDQUFDLFFBQVEsQ0FBQztTQUN2QyxDQUFBO1FBRU0sVUFBSSxHQUFjO1lBQ3JCLEtBQUssRUFBRSxFQUFFO1lBQ1QsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLGVBQWUsRUFBRSxFQUFFO1NBQ3RCLENBQUE7UUFjTyxTQUFHLEdBQVUsQ0FBQyxDQUFDOztJQWEzQixDQUFDO0lBakJVLHVCQUFPLEdBQWQ7SUFFQSxDQUFDO0lBR00sMEJBQVUsR0FBakI7UUFNSSxJQUFJLENBQUMsTUFBTSxDQUFZO1lBQ25CLGtCQUFrQixFQUFFLGVBQWUsR0FBRSxJQUFJLENBQUMsR0FBRztTQUNoRCxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUwsWUFBQztBQUFELENBQUMsQUF2Q0QsQ0FBMkIsNkJBQWEsR0F1Q3ZDO0FBdkNZLHNCQUFLO0FBdUNoQixJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2FtcGxlQ29tcCB9IGZyb20gXCJAUm9vdC9QZXN1ZG9Db21wb25lbnRzL1NhbXBsZUNvbXAvU2FtcGxlQ29tcFwiO1xuaW1wb3J0IHsgUGVzdWRvQ29tcG5lbnRTdGFjaywgU2hpeWlQYWdlQmFzZSB9IGZyb20gXCJAU2hpeWlGcmFtZXdvcmsvU2hpeWlQYWdlL0Jhc2UvU2hpeWlQYWdlQmFzZVwiO1xuaW1wb3J0IHsgSXVpT3B0aW9uIH0gZnJvbSBcIkBTaGl5aUZyYW1ld29yay9VSS9Nb2RlbC9JdWlPcHRpb25cIjtcbmltcG9ydCB7IGluZGV4RnVuYyB9IGZyb20gXCIuL0Z1bmN0aW9uYWwvaW5kZXhGdW5jXCI7XG5pbXBvcnQgeyBpbmRleERhdGEgfSBmcm9tIFwiLi9Nb2RlbHMvTW9kZWxzXCI7XG5pbXBvcnQgeyBpbmRleFVJIH0gZnJvbSBcIi4vVUkvaW5kZXhVSVwiO1xuXG5pbnRlcmZhY2UgSW5kZXhDb21wb25lbnQgZXh0ZW5kcyBQZXN1ZG9Db21wbmVudFN0YWNrIHtcbiAgICBTYW1wbGVDb21wOlNhbXBsZUNvbXA7XG59XG5cbmV4cG9ydCBjbGFzcyBpbmRleCBleHRlbmRzIFNoaXlpUGFnZUJhc2Uge1xuICAgIHB1YmxpYyBGdW5jID0gbmV3IGluZGV4RnVuYygpO1xuICAgIHB1YmxpYyBVSSA9IG5ldyBpbmRleFVJKCk7XG4gICAgcHVibGljIFBlc3Vkb0NvbXBuZW50czogSW5kZXhDb21wb25lbnQgPSB7XG4gICAgICAgIFNhbXBsZUNvbXA6IG5ldyBTYW1wbGVDb21wKFwiU2FtcGxlXCIpXG4gICAgfVxuXG4gICAgcHVibGljIGRhdGE6IGluZGV4RGF0YSA9IHtcbiAgICAgICAgVGhlbWU6IFwiXCIsXG4gICAgICAgIFNhbXBsZVJlZkNsaWNrZWQ6IFwiXCIsXG4gICAgICAgIENoYW5nZVRoZW1lQ2xpY2tlZDogZmFsc2UsXG4gICAgICAgIFNlbGZCaW5kQ29udGVudDogXCJcIlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWcqFBhZ2XlhoXkuI3opoHlrprkuYlvbkxvYWTjgIFvblVubG9hZFxuICAgICAqIOWQpuWImeS8muimhuebllNoaXlpRnJhbWV3b3Jr55qE6buY6K6k6KGM5Li6XG4gICAgICog5aaC6ZyA5Zyob25Mb2Fk5ZGo5pyf5omn6KGM5pON5L2c77yM6K+35ZyoRnVuYy5Jbml0Q3VzdG9tRGF0YeaIllVJLkluaXRDdXN0b21EYXRh5Lit5aSE55CGXG4gICAgICog5LuW5Lus5bCG5Lya5Zyob25Mb2Fk5pe26KKr6LCD55SoXG4gICAgICog5aaC6ZyA5Zyob25Mb2Fk5ZGo5pyf5omn6KGM5pON5L2cXG4gICAgICog6K+36LCD55Soc3VwZXIub25VbkxvYWTmnaXpmLLmraJTaGl5aUZyYW1ld29ya+eahOm7mOiupOihjOS4uuiiq+imhuebllxuICAgICAqL1xuICAgIHB1YmxpYyBvblJlYWR5KCkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBDbnQ6bnVtYmVyID0gMDtcbiAgICBwdWJsaWMgUmVmQ2xpY2tlZCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOivt+S9v+eUqHRoaXMuUmVuZGVyPHR5cGU+KCkg5Luj5pu/dGhpcy5zZXREYXRhKClcbiAgICAgICAgICogdGhpcy5SZW5kZXI8dHlwZT4oKeiDveWkn+aPkOS+m+iJr+WlveeahOS7o+eggeaPkOekulxuICAgICAgICAgKiDlubbkuJTmlK/mjIFTaGl5aUZyYW1ld29ya+eahOaVsOaNrue7keWumlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5SZW5kZXI8aW5kZXhEYXRhPih7XG4gICAgICAgICAgICBcIlNhbXBsZVJlZkNsaWNrZWRcIjogXCJSZWYgQ2xpY2tlZCEgXCIrIHRoaXMuQ250XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuQ250Kys7XG4gICAgfVxuXG59IFBhZ2UobmV3IGluZGV4KCkpOyJdfQ==