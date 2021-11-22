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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEvent = exports.Event = void 0;
var Router_1 = require("../Router/Router");
var Event = (function () {
    function Event(EventName, EventData) {
        this.Stop = false;
        this.EventName = EventName;
        this.EventData = EventData;
    }
    Event.prototype.Run = function (IncludeComponent) {
        return __awaiter(this, void 0, void 0, function () {
            var i, Page_1, ComponentStack, c;
            return __generator(this, function (_a) {
                for (i = Router_1.Router.PageStacks.length - 1; i >= 0; i--) {
                    Page_1 = Router_1.Router.PageStacks[i];
                    if (IncludeComponent) {
                        ComponentStack = Page_1.ComponentStack;
                        for (c = ComponentStack.length - 1; c >= 0; c--) {
                            ComponentStack[i].MethodInstance.EventHandler(this);
                        }
                    }
                    Page_1.EventHandler(this);
                    if (this.Stop) {
                        break;
                    }
                }
                return [2];
            });
        });
    };
    Event.prototype.Catch = function () {
        this.Stop = true;
    };
    Event.prototype.Pass = function () {
        this.Stop = false;
    };
    return Event;
}());
exports.Event = Event;
var CustomEvent = (function (_super) {
    __extends(CustomEvent, _super);
    function CustomEvent(EventName, EventData) {
        return _super.call(this, EventName, EventData) || this;
    }
    return CustomEvent;
}(Event));
exports.CustomEvent = CustomEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFFMUM7SUFJSSxlQUFZLFNBQWdCLEVBQUUsU0FBNEI7UUFEbkQsU0FBSSxHQUFXLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRVksbUJBQUcsR0FBaEIsVUFBaUIsZ0JBQXlCOzs7O2dCQUN0QyxLQUFRLENBQUMsR0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQztvQkFDdEMsU0FBTyxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxJQUFHLGdCQUFnQixFQUFDO3dCQUNaLGNBQWMsR0FBRyxNQUFJLENBQUMsY0FBYyxDQUFBO3dCQUN4QyxLQUFRLENBQUMsR0FBQyxjQUFjLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxDQUFDLElBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDOzRCQUN2QyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDdkQ7cUJBQ0o7b0JBQ0QsTUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDdkIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFDO3dCQUNULE1BQU07cUJBQ1Q7aUJBQ0o7Ozs7S0FDSjtJQUVNLHFCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sb0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSxzQkFBSztBQWtDbEI7SUFBd0MsK0JBQUs7SUFDekMscUJBQVksU0FBZ0IsRUFBRSxTQUFlO2VBQ3pDLGtCQUFNLFNBQVMsRUFBQyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQUpELENBQXdDLEtBQUssR0FJNUM7QUFKWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9Sb3V0ZXIvUm91dGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnQge1xyXG4gICAgcHVibGljIEV2ZW50TmFtZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgRXZlbnREYXRhOlJlY29yZDxzdHJpbmcsYW55PjtcclxuICAgIHB1YmxpYyBTdG9wOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKEV2ZW50TmFtZTpzdHJpbmcsIEV2ZW50RGF0YTpSZWNvcmQ8c3RyaW5nLGFueT4pe1xyXG4gICAgICAgIHRoaXMuRXZlbnROYW1lID0gRXZlbnROYW1lO1xyXG4gICAgICAgIHRoaXMuRXZlbnREYXRhID0gRXZlbnREYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBSdW4oSW5jbHVkZUNvbXBvbmVudD86Ym9vbGVhbil7XHJcbiAgICAgICAgZm9yKGxldCBpPVJvdXRlci5QYWdlU3RhY2tzLmxlbmd0aC0xO2k+PTA7aS0tKXtcclxuICAgICAgICAgICAgbGV0IFBhZ2UgPSBSb3V0ZXIuUGFnZVN0YWNrc1tpXTtcclxuICAgICAgICAgICAgaWYoSW5jbHVkZUNvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgQ29tcG9uZW50U3RhY2sgPSBQYWdlLkNvbXBvbmVudFN0YWNrXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGM9Q29tcG9uZW50U3RhY2subGVuZ3RoLTE7Yz49MDtjLS0pe1xyXG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudFN0YWNrW2ldLk1ldGhvZEluc3RhbmNlLkV2ZW50SGFuZGxlcih0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBQYWdlLkV2ZW50SGFuZGxlcih0aGlzKVxyXG4gICAgICAgICAgICBpZih0aGlzLlN0b3Ape1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENhdGNoKCl7XHJcbiAgICAgICAgdGhpcy5TdG9wID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUGFzcygpe1xyXG4gICAgICAgIHRoaXMuU3RvcCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tRXZlbnQ8RGF0YVQ+IGV4dGVuZHMgRXZlbnR7XHJcbiAgICBjb25zdHJ1Y3RvcihFdmVudE5hbWU6c3RyaW5nLCBFdmVudERhdGE6RGF0YVQpe1xyXG4gICAgICAgIHN1cGVyKEV2ZW50TmFtZSxFdmVudERhdGEpO1xyXG4gICAgfVxyXG59Il19