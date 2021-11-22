"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = exports.PageName = void 0;
var PageName;
(function (PageName) {
})(PageName = exports.PageName || (exports.PageName = {}));
var Router = (function () {
    function Router() {
    }
    Router.TryGetMapPath = function (name, CurrentPath, map) {
        for (var i = 0; i < map.length; i++) {
            var Res = Router.TryGetMapPath(name, CurrentPath + "/" + PageName[map[i].name], map[i].children);
            if (Res) {
                return Res;
            }
            if (map[i].name == name) {
                return CurrentPath + "/" + PageName[map[i].name] + "/" + PageName[map[i].name];
            }
        }
        return "";
    };
    Router.GetPagePath = function (name) {
        var Path = Router.TryGetMapPath(name, "/pages", Router.PageMap);
        if (Path) {
            return Path;
        }
        else {
            return "/pages/" + PageName[name] + "/" + PageName[name];
        }
    };
    Router.PageLoad = function (page) {
        Router.PageStacks.push(page);
        Router.ComponentStack.forEach(function (comp) {
            page.ComponentStack.push(comp);
        });
        Router.ComponentStack = [];
    };
    Router.PageUnload = function () {
        var e_1, _a;
        var Observers = Router.RegisteredDataObservers.get(Router.CurrentPage);
        if (Observers) {
            try {
                for (var Observers_1 = __values(Observers), Observers_1_1 = Observers_1.next(); !Observers_1_1.done; Observers_1_1 = Observers_1.next()) {
                    var Notification = Observers_1_1.value;
                    Notification(Router.CurrentPage);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (Observers_1_1 && !Observers_1_1.done && (_a = Observers_1.return)) _a.call(Observers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        Router.PageStacks.pop();
    };
    Router.ComponentLoad = function (comp) {
        Router.ComponentStack.push(comp);
    };
    Router.RegisterPageUnLoaded = function (page, notification) {
        var Observers = Router.RegisteredDataObservers.get(page);
        if (!Observers) {
            Observers = new Array();
        }
        Observers.push(notification);
        Router.RegisteredDataObservers.set(page, Observers);
    };
    Router.NavigateTo = function (name, param) {
        Router.NavigateParam = param ? param : undefined;
        wx.navigateTo({
            url: Router.GetPagePath(name)
        });
    };
    Router.NavigateBack = function () {
        wx.navigateBack();
    };
    Object.defineProperty(Router.prototype, "CurrentPage", {
        get: function () {
            return Router.PageStacks[Router.PageStacks.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Router.PageMap = [];
    Router.PageStacks = new Array();
    Router.RegisteredDataObservers = new Map();
    Router.ComponentStack = [];
    return Router;
}());
exports.Router = Router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBWSxRQUNYO0FBREQsV0FBWSxRQUFRO0FBQ3BCLENBQUMsRUFEVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUNuQjtBQU9EO0lBQUE7SUFvRkEsQ0FBQztJQTlFaUIsb0JBQWEsR0FBM0IsVUFBNEIsSUFBYyxFQUFFLFdBQW1CLEVBQUUsR0FBdUI7UUFDcEYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRyxJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLEdBQUcsQ0FBQzthQUNkO1lBQ0QsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDckIsT0FBTyxXQUFXLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEY7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVjLGtCQUFXLEdBQTFCLFVBQTJCLElBQWM7UUFDckMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLElBQUksRUFBRTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTTtZQUNILE9BQU8sU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVEO0lBQ0wsQ0FBQztJQVFhLGVBQVEsR0FBdEIsVUFBdUIsSUFBbUI7UUFDdEMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNhLGlCQUFVLEdBQXhCOztRQUNJLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksU0FBUyxFQUFFOztnQkFDWCxLQUF5QixJQUFBLGNBQUEsU0FBQSxTQUFTLENBQUEsb0NBQUEsMkRBQUU7b0JBQS9CLElBQUksWUFBWSxzQkFBQTtvQkFDakIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtpQkFDbkM7Ozs7Ozs7OztTQUNKO1FBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ2Esb0JBQWEsR0FBM0IsVUFBNEIsSUFBdUI7UUFDL0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQU9hLDJCQUFvQixHQUFsQyxVQUFtQyxJQUFtQixFQUFDLFlBQTBDO1FBQzdGLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBaUMsQ0FBQztTQUMxRDtRQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUdhLGlCQUFVLEdBQXhCLFVBQXlCLElBQWMsRUFBRSxLQUFXO1FBQ2hELE1BQU0sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNqRCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQ2hDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFYSxtQkFBWSxHQUExQjtRQUNJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBR0Qsc0JBQVcsK0JBQVc7YUFBdEI7WUFDSSxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQzs7O09BQUE7SUEvRWEsY0FBTyxHQUF1QixFQUFFLENBQUE7SUF3QmhDLGlCQUFVLEdBQXlCLElBQUksS0FBSyxFQUFpQixDQUFDO0lBRTdELDhCQUF1QixHQUNoQyxJQUFJLEdBQUcsRUFBdUQsQ0FBQztJQUV2RCxxQkFBYyxHQUEyQixFQUFFLENBQUE7SUFtRDdELGFBQUM7Q0FBQSxBQXBGRCxJQW9GQztBQXBGWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoaXlpQ29tcG9uZW50QmFzZSB9IGZyb20gXCIuLi9TaGl5aUNvbXBvbmVudC9CYXNlL0NvbXBvbmVudHNCYXNlXCI7XHJcbmltcG9ydCB7IFNoaXlpUGFnZUJhc2UgfSBmcm9tIFwiLi4vU2hpeWlQYWdlL0Jhc2UvU2hpeWlQYWdlQmFzZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gUGFnZU5hbWUge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VNYXBJdGVtIHtcclxuICAgIG5hbWU6IFBhZ2VOYW1lLFxyXG4gICAgY2hpbGRyZW46IEFycmF5PFBhZ2VNYXBJdGVtPixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XHJcbiAgICAvKipcclxuICAgICAqIOS7heW1jOWll+ebruW9lemcgOimgeWcqOatpOWumuS5iVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBhZ2VNYXA6IEFycmF5PFBhZ2VNYXBJdGVtPiA9IFtdXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBUcnlHZXRNYXBQYXRoKG5hbWU6IFBhZ2VOYW1lLCBDdXJyZW50UGF0aDogc3RyaW5nLCBtYXA6IEFycmF5PFBhZ2VNYXBJdGVtPik6IHN0cmluZyB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IFJlcyA9IFJvdXRlci5UcnlHZXRNYXBQYXRoKG5hbWUsIEN1cnJlbnRQYXRoICsgXCIvXCIgKyBQYWdlTmFtZVttYXBbaV0ubmFtZV0sIG1hcFtpXS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgIGlmIChSZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBSZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1hcFtpXS5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBDdXJyZW50UGF0aCArIFwiL1wiICsgUGFnZU5hbWVbbWFwW2ldLm5hbWVdICsgXCIvXCIgKyBQYWdlTmFtZVttYXBbaV0ubmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0UGFnZVBhdGgobmFtZTogUGFnZU5hbWUpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBQYXRoID0gUm91dGVyLlRyeUdldE1hcFBhdGgobmFtZSwgXCIvcGFnZXNcIiwgUm91dGVyLlBhZ2VNYXApO1xyXG4gICAgICAgIGlmIChQYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQYXRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIi9wYWdlcy9cIiArIFBhZ2VOYW1lW25hbWVdICsgXCIvXCIgKyBQYWdlTmFtZVtuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBQYWdlU3RhY2tzOiBBcnJheTxTaGl5aVBhZ2VCYXNlPiA9IG5ldyBBcnJheTxTaGl5aVBhZ2VCYXNlPigpO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIFJlZ2lzdGVyZWREYXRhT2JzZXJ2ZXJzOiBNYXA8U2hpeWlQYWdlQmFzZSwgQXJyYXk8KHBhZ2U6IFNoaXlpUGFnZUJhc2UpID0+IHZvaWQ+PlxyXG4gICAgICAgID0gbmV3IE1hcDxTaGl5aVBhZ2VCYXNlLCBBcnJheTwocGFnZTogU2hpeWlQYWdlQmFzZSkgPT4gdm9pZD4+KCk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDb21wb25lbnRTdGFjazpBcnJheTxTaGl5aUNvbXBvbmVudEJhc2U+PVtdXHJcbiAgICBwdWJsaWMgc3RhdGljIFBhZ2VMb2FkKHBhZ2U6IFNoaXlpUGFnZUJhc2UpOiB2b2lkIHtcclxuICAgICAgICBSb3V0ZXIuUGFnZVN0YWNrcy5wdXNoKHBhZ2UpO1xyXG4gICAgICAgIFJvdXRlci5Db21wb25lbnRTdGFjay5mb3JFYWNoKChjb21wKT0+e1xyXG4gICAgICAgICAgICBwYWdlLkNvbXBvbmVudFN0YWNrLnB1c2goY29tcCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBSb3V0ZXIuQ29tcG9uZW50U3RhY2sgPSBbXTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgUGFnZVVubG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgT2JzZXJ2ZXJzID0gUm91dGVyLlJlZ2lzdGVyZWREYXRhT2JzZXJ2ZXJzLmdldChSb3V0ZXIuQ3VycmVudFBhZ2UpO1xyXG4gICAgICAgIGlmIChPYnNlcnZlcnMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgTm90aWZpY2F0aW9uIG9mIE9ic2VydmVycykge1xyXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uKFJvdXRlci5DdXJyZW50UGFnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBSb3V0ZXIuUGFnZVN0YWNrcy5wb3AoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29tcG9uZW50TG9hZChjb21wOlNoaXlpQ29tcG9uZW50QmFzZSk6IHZvaWQge1xyXG4gICAgICAgIFJvdXRlci5Db21wb25lbnRTdGFjay5wdXNoKGNvbXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uR5a6a5oyH5a6a6aG16Z2iVW5sb2FkZWTkuovku7ZcclxuICAgICAqIEBwYXJhbSBwYWdlIOimgee7keWumueahOmhtemdolxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvbiBVbmxvYWTml7blpITnkIblh73mlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZWdpc3RlclBhZ2VVbkxvYWRlZChwYWdlOiBTaGl5aVBhZ2VCYXNlLG5vdGlmaWNhdGlvbjoocGFnZTogU2hpeWlQYWdlQmFzZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBPYnNlcnZlcnMgPSBSb3V0ZXIuUmVnaXN0ZXJlZERhdGFPYnNlcnZlcnMuZ2V0KHBhZ2UpO1xyXG4gICAgICAgIGlmICghT2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgICAgIE9ic2VydmVycyA9IG5ldyBBcnJheTwocGFnZTogU2hpeWlQYWdlQmFzZSkgPT4gdm9pZD4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JzZXJ2ZXJzLnB1c2gobm90aWZpY2F0aW9uKTtcclxuICAgICAgICBSb3V0ZXIuUmVnaXN0ZXJlZERhdGFPYnNlcnZlcnMuc2V0KHBhZ2UsIE9ic2VydmVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBOYXZpZ2F0ZVBhcmFtOiBhbnlcclxuICAgIHB1YmxpYyBzdGF0aWMgTmF2aWdhdGVUbyhuYW1lOiBQYWdlTmFtZSwgcGFyYW0/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBSb3V0ZXIuTmF2aWdhdGVQYXJhbSA9IHBhcmFtID8gcGFyYW0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogUm91dGVyLkdldFBhZ2VQYXRoKG5hbWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBOYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDdXJyZW50UGFnZTogU2hpeWlQYWdlQmFzZTtcclxuICAgIHB1YmxpYyBnZXQgQ3VycmVudFBhZ2UoKTogU2hpeWlQYWdlQmFzZSB7XHJcbiAgICAgICAgcmV0dXJuIFJvdXRlci5QYWdlU3RhY2tzW1JvdXRlci5QYWdlU3RhY2tzLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==