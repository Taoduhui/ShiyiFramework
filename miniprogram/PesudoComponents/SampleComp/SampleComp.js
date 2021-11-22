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
exports.SampleComp = void 0;
var PesudoCompnent_1 = require("../../ShiyiFramework/ShiyiPesudoCompnent/PesudoCompnent");
var SampleComp = (function (_super) {
    __extends(SampleComp, _super);
    function SampleComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = {
            SampleData: "SampleComp Click Me",
            Theme: ""
        };
        return _this;
    }
    SampleComp.prototype.SampleFunc = function () {
        console.log("Sample");
        this.Render({
            "SampleData": "SampleComp Clicked"
        });
    };
    return SampleComp;
}(PesudoCompnent_1.PesudoCompnent));
exports.SampleComp = SampleComp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FtcGxlQ29tcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNhbXBsZUNvbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQXVHO0FBTXZHO0lBQWdDLDhCQUFjO0lBQTlDO1FBQUEscUVBWUM7UUFYVSxVQUFJLEdBQWdCO1lBQ3ZCLFVBQVUsRUFBRSxxQkFBcUI7WUFDakMsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFBOztJQVFMLENBQUM7SUFOVSwrQkFBVSxHQUFqQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBaUI7WUFDeEIsWUFBWSxFQUFDLG9CQUFvQjtTQUNwQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBZ0MsK0JBQWMsR0FZN0M7QUFaWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlc3Vkb0NvbXBuZW50RGF0YSwgUGVzdWRvQ29tcG5lbnQgfSBmcm9tIFwiQFNoaXlpRnJhbWV3b3JrL1NoaXlpUGVzdWRvQ29tcG5lbnQvUGVzdWRvQ29tcG5lbnRcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTYW1wbGVDb21wRGF0YSBleHRlbmRzIFBlc3Vkb0NvbXBuZW50RGF0YXtcclxuICAgIFNhbXBsZURhdGE6c3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29tcCBleHRlbmRzIFBlc3Vkb0NvbXBuZW50e1xyXG4gICAgcHVibGljIGRhdGE6U2FtcGxlQ29tcERhdGE9e1xyXG4gICAgICAgIFNhbXBsZURhdGE6IFwiU2FtcGxlQ29tcCBDbGljayBNZVwiLFxyXG4gICAgICAgIFRoZW1lOiBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNhbXBsZUZ1bmMoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNhbXBsZVwiKVxyXG4gICAgICAgIHRoaXMuUmVuZGVyPFNhbXBsZUNvbXBEYXRhPih7XHJcbiAgICAgICAgICAgIFwiU2FtcGxlRGF0YVwiOlwiU2FtcGxlQ29tcCBDbGlja2VkXCJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il19