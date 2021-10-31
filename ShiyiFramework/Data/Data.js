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
exports.Data = exports.GetSetData = void 0;
var Router_1 = require("../Router/Router");
var Utils_1 = require("../Utils/Utils");
var GetSetData = (function () {
    function GetSetData(data, _getFunc, _setFunc) {
        this.data = data;
        this._getFunc = _getFunc;
        this._setFunc = _setFunc;
    }
    GetSetData.prototype.Get = function () {
        if (this._getFunc) {
            return this._getFunc(this.data);
        }
        return this.data;
    };
    GetSetData.prototype.Set = function (data) {
        if (this._setFunc) {
            this.data = this._setFunc(data);
            return;
        }
        this.data = data;
    };
    return GetSetData;
}());
exports.GetSetData = GetSetData;
var Data = (function (_super) {
    __extends(Data, _super);
    function Data(data, _getFunc, _setFunc) {
        var _this = _super.call(this, data, _getFunc, _setFunc) || this;
        _this.RegisteredBindding = [];
        _this.DataKey = Utils_1.Guid.newGuid().toString();
        return _this;
    }
    Data.prototype.Set = function (data) {
        var _this = this;
        _super.prototype.Set.call(this, data);
        this.RegisteredBindding.forEach(function (page) {
            page.ObserverNotify(_this.DataKey, data);
        });
    };
    Data.prototype.RemoveBindding = function (page) {
        if (this.RegisteredBindding.indexOf(page) >= 0) {
            this.RegisteredBindding.splice(this.RegisteredBindding.indexOf(page), 1);
        }
    };
    Data.prototype.Bind = function (page) {
        if (this.RegisteredBindding.indexOf(page) < 0) {
            Router_1.Router.RegisterPageUnLoaded(page, this.PageUnload.bind(this));
            page.ObserverNotify(this.DataKey, this.Get());
            this.RegisteredBindding.push(page);
        }
        return this.DataKey;
    };
    Data.prototype.PageUnload = function (page) {
        this.RemoveBindding(page);
    };
    return Data;
}(GetSetData));
exports.Data = Data;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBRTFDLHdDQUFzQztBQUd0QztJQUlJLG9CQUFZLElBQVUsRUFBQyxRQUE2QixFQUFDLFFBQTZCO1FBQzlFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFDTSx3QkFBRyxHQUFWO1FBQ0ksSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ00sd0JBQUcsR0FBVixVQUFXLElBQVU7UUFDakIsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2IsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksZ0NBQVU7QUF3QnZCO0lBQWlDLHdCQUFpQjtJQUs5QyxjQUFZLElBQVUsRUFBQyxRQUE2QixFQUFDLFFBQTZCO1FBQWxGLFlBQ0ksa0JBQU0sSUFBSSxFQUFDLFFBQVEsRUFBQyxRQUFRLENBQUMsU0FFaEM7UUFMTyx3QkFBa0IsR0FBc0IsRUFBRSxDQUFDO1FBSS9DLEtBQUksQ0FBQyxPQUFPLEdBQUMsWUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDOztJQUMzQyxDQUFDO0lBRU0sa0JBQUcsR0FBVixVQUFXLElBQVU7UUFBckIsaUJBS0M7UUFKRyxpQkFBTSxHQUFHLFlBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDZCQUFjLEdBQXJCLFVBQXNCLElBQWtCO1FBQ3BDLElBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBRSxDQUFDLEVBQUM7WUFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNFO0lBQ0wsQ0FBQztJQUVNLG1CQUFJLEdBQVgsVUFBWSxJQUFrQjtRQUMxQixJQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDO1lBQ3ZDLGVBQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0seUJBQVUsR0FBakIsVUFBa0IsSUFBa0I7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFuQ0QsQ0FBaUMsVUFBVSxHQW1DMUM7QUFuQ1ksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vUm91dGVyL1JvdXRlclwiO1xyXG5pbXBvcnQgeyBTaGl5aVBhZ2VCYXNlIH0gZnJvbSBcIi4uL1NoaXlpUGFnZS9CYXNlL1NoaXlpUGFnZUJhc2VcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi9VdGlscy9VdGlsc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRTZXREYXRhPERhdGFUPntcclxuICAgIHByaXZhdGUgZGF0YTpEYXRhVDtcclxuICAgIHByaXZhdGUgX2dldEZ1bmM/OihkYXRhOkRhdGFUKT0+RGF0YVQ7XHJcbiAgICBwcml2YXRlIF9zZXRGdW5jPzooZGF0YTpEYXRhVCk9PkRhdGFUO1xyXG4gICAgY29uc3RydWN0b3IoZGF0YTpEYXRhVCxfZ2V0RnVuYz86KGRhdGE6RGF0YVQpPT5EYXRhVCxfc2V0RnVuYz86KGRhdGE6RGF0YVQpPT5EYXRhVCl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLl9nZXRGdW5jID0gX2dldEZ1bmM7XHJcbiAgICAgICAgdGhpcy5fc2V0RnVuYyA9IF9zZXRGdW5jO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldCgpOkRhdGFUe1xyXG4gICAgICAgIGlmKHRoaXMuX2dldEZ1bmMpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RnVuYyh0aGlzLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFNldChkYXRhOkRhdGFUKXtcclxuICAgICAgICBpZih0aGlzLl9zZXRGdW5jKXtcclxuICAgICAgICAgICAgdGhpcy5kYXRhPXRoaXMuX3NldEZ1bmMoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGE8RGF0YVQ+IGV4dGVuZHMgR2V0U2V0RGF0YTxEYXRhVD57XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IERhdGFLZXk6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBSZWdpc3RlcmVkQmluZGRpbmc6QXJyYXk8U2hpeWlQYWdlQmFzZT49W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YTpEYXRhVCxfZ2V0RnVuYz86KGRhdGE6RGF0YVQpPT5EYXRhVCxfc2V0RnVuYz86KGRhdGE6RGF0YVQpPT5EYXRhVCl7XHJcbiAgICAgICAgc3VwZXIoZGF0YSxfZ2V0RnVuYyxfc2V0RnVuYyk7XHJcbiAgICAgICAgdGhpcy5EYXRhS2V5PUd1aWQubmV3R3VpZCgpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldChkYXRhOkRhdGFUKXtcclxuICAgICAgICBzdXBlci5TZXQoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5SZWdpc3RlcmVkQmluZGRpbmcuZm9yRWFjaChwYWdlPT57XHJcbiAgICAgICAgICAgIHBhZ2UuT2JzZXJ2ZXJOb3RpZnkodGhpcy5EYXRhS2V5LGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW1vdmVCaW5kZGluZyhwYWdlOlNoaXlpUGFnZUJhc2Upe1xyXG4gICAgICAgIGlmKHRoaXMuUmVnaXN0ZXJlZEJpbmRkaW5nLmluZGV4T2YocGFnZSk+PTApe1xyXG4gICAgICAgICAgICB0aGlzLlJlZ2lzdGVyZWRCaW5kZGluZy5zcGxpY2UodGhpcy5SZWdpc3RlcmVkQmluZGRpbmcuaW5kZXhPZihwYWdlKSwxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEJpbmQocGFnZTpTaGl5aVBhZ2VCYXNlKTpzdHJpbmd7XHJcbiAgICAgICAgaWYodGhpcy5SZWdpc3RlcmVkQmluZGRpbmcuaW5kZXhPZihwYWdlKTwwKXtcclxuICAgICAgICAgICAgUm91dGVyLlJlZ2lzdGVyUGFnZVVuTG9hZGVkKHBhZ2UsdGhpcy5QYWdlVW5sb2FkLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICBwYWdlLk9ic2VydmVyTm90aWZ5KHRoaXMuRGF0YUtleSx0aGlzLkdldCgpKTtcclxuICAgICAgICAgICAgdGhpcy5SZWdpc3RlcmVkQmluZGRpbmcucHVzaChwYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YUtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUGFnZVVubG9hZChwYWdlOlNoaXlpUGFnZUJhc2UpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5SZW1vdmVCaW5kZGluZyhwYWdlKTtcclxuICAgIH1cclxufSJdfQ==