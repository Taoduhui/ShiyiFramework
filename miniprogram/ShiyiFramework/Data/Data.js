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
exports.StorageData = exports.Data = exports.GetSetData = void 0;
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
        _this.RegisteredComponentBindding = [];
        _this.RegisteredGlobalBinding = new Map();
        _this.DataKey = Utils_1.Guid.newGuid().toString();
        return _this;
    }
    Data.prototype.Set = function (data, IsGlobalNotification) {
        var _this = this;
        _super.prototype.Set.call(this, data);
        this.RegisteredBindding.forEach(function (page) {
            page.ObserverNotify(_this.DataKey, data);
        });
        this.RegisteredComponentBindding.forEach(function (component) {
            component.MethodInstance.ObserverNotify(_this.DataKey, data);
        });
        if (!IsGlobalNotification) {
            this.RegisteredGlobalBinding.forEach(function (PreProcess, TargetData) {
                TargetData.Set(PreProcess ? PreProcess(data) : data, true);
            });
        }
    };
    Data.prototype.RemoveBindding = function (page) {
        if (this.RegisteredBindding.indexOf(page) >= 0) {
            var ChildrenComponents = page.ComponentStack;
            for (var i = 0; i < ChildrenComponents.length; i++) {
                if (this.RegisteredComponentBindding.indexOf(ChildrenComponents[i]) >= 0) {
                    this.RegisteredComponentBindding.splice(this.RegisteredComponentBindding.indexOf(ChildrenComponents[i], 1));
                }
            }
            this.RegisteredBindding.splice(this.RegisteredBindding.indexOf(page), 1);
        }
    };
    Data.prototype.BindComponent = function (component) {
        if (this.RegisteredComponentBindding.indexOf(component) < 0) {
            component.MethodInstance.ObserverNotify(this.DataKey, this.Get());
            this.RegisteredComponentBindding.push(component);
        }
        return this.DataKey;
    };
    Data.prototype.Bind = function (page) {
        if (this.RegisteredBindding.indexOf(page) < 0) {
            Router_1.Router.RegisterPageUnLoaded(page, this.PageUnload.bind(this));
            page.ObserverNotify(this.DataKey, this.Get());
            this.RegisteredBindding.push(page);
        }
        return this.DataKey;
    };
    Data.prototype.BindToGlobal = function (TargetData, PreProcess) {
        this.RegisteredGlobalBinding.set(TargetData, PreProcess);
    };
    Data.prototype.PageUnload = function (page) {
        this.RemoveBindding(page);
    };
    return Data;
}(GetSetData));
exports.Data = Data;
var StorageData = (function (_super) {
    __extends(StorageData, _super);
    function StorageData(data, storageKey, _getFunc, _setFunc) {
        var _this = _super.call(this, data, _getFunc, _setFunc) || this;
        _this.StorageKey = storageKey;
        return _this;
    }
    StorageData.prototype.Get = function () {
        var data = wx.getStorageSync(this.StorageKey);
        if (data) {
            if (this._getFunc) {
                return this._getFunc(data);
            }
        }
        return data;
    };
    StorageData.prototype.Set = function (data) {
        var _this = this;
        if (this._setFunc) {
            data = this._setFunc(data);
        }
        wx.setStorageSync(this.StorageKey, data);
        this.RegisteredBindding.forEach(function (page) {
            page.ObserverNotify(_this.DataKey, data);
        });
    };
    return StorageData;
}(Data));
exports.StorageData = StorageData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBRzFDLHdDQUFzQztBQUd0QztJQUlJLG9CQUFZLElBQVUsRUFBQyxRQUE2QixFQUFDLFFBQTZCO1FBQzlFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFDTSx3QkFBRyxHQUFWO1FBQ0ksSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ00sd0JBQUcsR0FBVixVQUFXLElBQVU7UUFDakIsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2IsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksZ0NBQVU7QUF3QnZCO0lBQWlDLHdCQUFpQjtJQU05QyxjQUFZLElBQVUsRUFBQyxRQUE2QixFQUFDLFFBQTZCO1FBQWxGLFlBQ0ksa0JBQU0sSUFBSSxFQUFDLFFBQVEsRUFBQyxRQUFRLENBQUMsU0FFaEM7UUFOUyx3QkFBa0IsR0FBc0IsRUFBRSxDQUFDO1FBQzNDLGlDQUEyQixHQUEyQixFQUFFLENBQUM7UUFtRDVELDZCQUF1QixHQUErQyxJQUFJLEdBQUcsRUFBNEMsQ0FBQztRQS9DN0gsS0FBSSxDQUFDLE9BQU8s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QUEsSUFBSTtZQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBMUJELENBQXdDLElBQUksR0EwQjNDO0FBMUJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL1JvdXRlci9Sb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2hpeWlDb21wb25lbnRCYXNlIH0gZnJvbSBcIi4uL1NoaXlpQ29tcG9uZW50L0Jhc2UvQ29tcG9uZW50c0Jhc2VcIjtcclxuaW1wb3J0IHsgU2hpeWlQYWdlQmFzZSB9IGZyb20gXCIuLi9TaGl5aVBhZ2UvQmFzZS9TaGl5aVBhZ2VCYXNlXCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vVXRpbHMvVXRpbHNcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR2V0U2V0RGF0YTxEYXRhVD57XHJcbiAgICBwcm90ZWN0ZWQgZGF0YTpEYXRhVDtcclxuICAgIHByb3RlY3RlZCBfZ2V0RnVuYz86KGRhdGE6RGF0YVQpPT5EYXRhVDtcclxuICAgIHByb3RlY3RlZCBfc2V0RnVuYz86KGRhdGE6RGF0YVQpPT5EYXRhVDtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGE6RGF0YVQsX2dldEZ1bmM/OihkYXRhOkRhdGFUKT0+RGF0YVQsX3NldEZ1bmM/OihkYXRhOkRhdGFUKT0+RGF0YVQpe1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5fZ2V0RnVuYyA9IF9nZXRGdW5jO1xyXG4gICAgICAgIHRoaXMuX3NldEZ1bmMgPSBfc2V0RnVuYztcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXQoKTpEYXRhVHtcclxuICAgICAgICBpZih0aGlzLl9nZXRGdW5jKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEZ1bmModGhpcy5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXQoZGF0YTpEYXRhVCl7XHJcbiAgICAgICAgaWYodGhpcy5fc2V0RnVuYyl7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YT10aGlzLl9zZXRGdW5jKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhPERhdGFUPiBleHRlbmRzIEdldFNldERhdGE8RGF0YVQ+e1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhS2V5OnN0cmluZztcclxuICAgIHByb3RlY3RlZCBSZWdpc3RlcmVkQmluZGRpbmc6QXJyYXk8U2hpeWlQYWdlQmFzZT49W107XHJcbiAgICBwcm90ZWN0ZWQgUmVnaXN0ZXJlZENvbXBvbmVudEJpbmRkaW5nOkFycmF5PFNoaXlpQ29tcG9uZW50QmFzZT49W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YTpEYXRhVCxfZ2V0RnVuYz86KGRhdGE6RGF0YVQpPT5EYXRhVCxfc2V0RnVuYz86KGRhdGE6RGF0YVQpPT5EYXRhVCl7XHJcbiAgICAgICAgc3VwZXIoZGF0YSxfZ2V0RnVuYyxfc2V0RnVuYyk7XHJcbiAgICAgICAgdGhpcy5EYXRhS2V5PUd1aWQubmV3R3VpZCgpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldChkYXRhOkRhdGFULElzR2xvYmFsTm90aWZpY2F0aW9uPzpib29sZWFuKXtcclxuICAgICAgICBzdXBlci5TZXQoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5SZWdpc3RlcmVkQmluZGRpbmcuZm9yRWFjaChwYWdlPT57XHJcbiAgICAgICAgICAgIHBhZ2UuT2JzZXJ2ZXJOb3RpZnkodGhpcy5EYXRhS2V5LGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuUmVnaXN0ZXJlZENvbXBvbmVudEJpbmRkaW5nLmZvckVhY2goY29tcG9uZW50PT57XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5NZXRob2RJbnN0YW5jZS5PYnNlcnZlck5vdGlmeSh0aGlzLkRhdGFLZXksZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoIUlzR2xvYmFsTm90aWZpY2F0aW9uKXtcclxuICAgICAgICAgICAgdGhpcy5SZWdpc3RlcmVkR2xvYmFsQmluZGluZy5mb3JFYWNoKChQcmVQcm9jZXNzLFRhcmdldERhdGEpPT57XHJcbiAgICAgICAgICAgICAgICBUYXJnZXREYXRhLlNldChQcmVQcm9jZXNzP1ByZVByb2Nlc3MoZGF0YSk6ZGF0YSx0cnVlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbW92ZUJpbmRkaW5nKHBhZ2U6U2hpeWlQYWdlQmFzZSl7XHJcbiAgICAgICAgaWYodGhpcy5SZWdpc3RlcmVkQmluZGRpbmcuaW5kZXhPZihwYWdlKT49MCl7XHJcbiAgICAgICAgICAgIGxldCBDaGlsZHJlbkNvbXBvbmVudHMgPSBwYWdlLkNvbXBvbmVudFN0YWNrO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPENoaWxkcmVuQ29tcG9uZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLlJlZ2lzdGVyZWRDb21wb25lbnRCaW5kZGluZy5pbmRleE9mKENoaWxkcmVuQ29tcG9uZW50c1tpXSk+PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmVnaXN0ZXJlZENvbXBvbmVudEJpbmRkaW5nLnNwbGljZSh0aGlzLlJlZ2lzdGVyZWRDb21wb25lbnRCaW5kZGluZy5pbmRleE9mKENoaWxkcmVuQ29tcG9uZW50c1tpXSwxKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5SZWdpc3RlcmVkQmluZGRpbmcuc3BsaWNlKHRoaXMuUmVnaXN0ZXJlZEJpbmRkaW5nLmluZGV4T2YocGFnZSksMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBCaW5kQ29tcG9uZW50KGNvbXBvbmVudDpTaGl5aUNvbXBvbmVudEJhc2UpOnN0cmluZ3tcclxuICAgICAgICBpZih0aGlzLlJlZ2lzdGVyZWRDb21wb25lbnRCaW5kZGluZy5pbmRleE9mKGNvbXBvbmVudCk8MCl7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5NZXRob2RJbnN0YW5jZS5PYnNlcnZlck5vdGlmeSh0aGlzLkRhdGFLZXksdGhpcy5HZXQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuUmVnaXN0ZXJlZENvbXBvbmVudEJpbmRkaW5nLnB1c2goY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YUtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQmluZChwYWdlOlNoaXlpUGFnZUJhc2UpOnN0cmluZ3tcclxuICAgICAgICBpZih0aGlzLlJlZ2lzdGVyZWRCaW5kZGluZy5pbmRleE9mKHBhZ2UpPDApe1xyXG4gICAgICAgICAgICBSb3V0ZXIuUmVnaXN0ZXJQYWdlVW5Mb2FkZWQocGFnZSx0aGlzLlBhZ2VVbmxvYWQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHBhZ2UuT2JzZXJ2ZXJOb3RpZnkodGhpcy5EYXRhS2V5LHRoaXMuR2V0KCkpO1xyXG4gICAgICAgICAgICB0aGlzLlJlZ2lzdGVyZWRCaW5kZGluZy5wdXNoKHBhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5EYXRhS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlcmVkR2xvYmFsQmluZGluZzpNYXA8RGF0YTxhbnk+LHVuZGVmaW5lZHwoKHZhbHVlOkRhdGFUKT0+YW55KT49bmV3IE1hcDxEYXRhPGFueT4sdW5kZWZpbmVkfCgodmFsdWU6RGF0YVQpPT5hbnkpPigpO1xyXG4gICAgcHVibGljIEJpbmRUb0dsb2JhbDxUYXJnZXREYXRhVD4oVGFyZ2V0RGF0YTpEYXRhPFRhcmdldERhdGFUPixQcmVQcm9jZXNzPzoodmFsdWU6RGF0YVQpPT5UYXJnZXREYXRhVCl7XHJcbiAgICAgICAgdGhpcy5SZWdpc3RlcmVkR2xvYmFsQmluZGluZy5zZXQoVGFyZ2V0RGF0YSxQcmVQcm9jZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUGFnZVVubG9hZChwYWdlOlNoaXlpUGFnZUJhc2UpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5SZW1vdmVCaW5kZGluZyhwYWdlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VEYXRhPERhdGFUPiBleHRlbmRzIERhdGE8RGF0YVQ+e1xyXG4gICAgcHJvdGVjdGVkIFN0b3JhZ2VLZXk6c3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoZGF0YTpEYXRhVCxzdG9yYWdlS2V5OnN0cmluZyxfZ2V0RnVuYz86KGRhdGE6RGF0YVQpPT5EYXRhVCxfc2V0RnVuYz86KGRhdGE6RGF0YVQpPT5EYXRhVCl7XHJcbiAgICAgICAgc3VwZXIoZGF0YSxfZ2V0RnVuYyxfc2V0RnVuYyk7XHJcbiAgICAgICAgdGhpcy5TdG9yYWdlS2V5PXN0b3JhZ2VLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldCgpOkRhdGFUIHtcclxuICAgICAgICBsZXQgZGF0YTpEYXRhVCA9IHd4LmdldFN0b3JhZ2VTeW5jKHRoaXMuU3RvcmFnZUtleSk7XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2dldEZ1bmMpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEZ1bmMoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldChkYXRhOkRhdGFUKXtcclxuICAgICAgICBpZih0aGlzLl9zZXRGdW5jKXtcclxuICAgICAgICAgICAgZGF0YT10aGlzLl9zZXRGdW5jKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyh0aGlzLlN0b3JhZ2VLZXksZGF0YSk7XHJcbiAgICAgICAgdGhpcy5SZWdpc3RlcmVkQmluZGRpbmcuZm9yRWFjaChwYWdlPT57XHJcbiAgICAgICAgICAgIHBhZ2UuT2JzZXJ2ZXJOb3RpZnkodGhpcy5EYXRhS2V5LGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19