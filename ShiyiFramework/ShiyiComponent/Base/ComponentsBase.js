"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiyiComponentBase = void 0;
var Router_1 = require("../../Router/Router");
var ShiyiComponentBase = (function () {
    function ShiyiComponentBase() {
        this.RegisteredEventHandlers = {};
    }
    ShiyiComponentBase.prototype.AddHandler = function (Trigger, Handler) {
        this.RegisteredEventHandlers[Trigger] = Handler;
    };
    ShiyiComponentBase.prototype.Removehandler = function (Trigger, Handler) {
        if (this.RegisteredEventHandlers[Trigger] === Handler) {
            delete this.RegisteredEventHandlers[Trigger];
        }
    };
    ShiyiComponentBase.prototype.EventHandler = function (e) {
        e.Catch();
        var Handler = this.RegisteredEventHandlers[e.EventName];
        console.log(Handler);
        if (Handler) {
            Handler(e);
        }
        else {
            e.Pass();
        }
    };
    ShiyiComponentBase.prototype.onLoad = function () {
        Router_1.Router.CurrentPage.ComponentStack.push(this);
    };
    return ShiyiComponentBase;
}());
exports.ShiyiComponentBase = ShiyiComponentBase;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50c0Jhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb21wb25lbnRzQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw4Q0FBNkM7QUFRN0M7SUFBQTtRQU9TLDRCQUF1QixHQUF1QyxFQUFFLENBQUM7SUF3QjFFLENBQUM7SUF2QlEsdUNBQVUsR0FBakIsVUFBa0IsT0FBZSxFQUFFLE9BQTJCO1FBQzVELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQUNNLDBDQUFhLEdBQXBCLFVBQXFCLE9BQWUsRUFBRSxPQUEyQjtRQUMvRCxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxPQUFPLEVBQUU7WUFDckQsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRU0seUNBQVksR0FBbkIsVUFBb0IsQ0FBUTtRQUMxQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDVixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDWjthQUFNO1lBQ0wsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ1Y7SUFDSCxDQUFDO0lBRU0sbUNBQU0sR0FBYjtRQUNFLGVBQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JZLGdEQUFrQjtBQStCOUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uLy4uL0V2ZW50L0V2ZW50XCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi8uLi9Sb3V0ZXIvUm91dGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNoaXlpQ29tcG9uZW50QmFzZSBleHRlbmRzIFdlY2hhdE1pbmlwcm9ncmFtLkNvbXBvbmVudC5JbnN0YW5jZU1ldGhvZHM8V2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LkRhdGFPcHRpb24+IHtcclxuXHJcbn1cclxuXHJcbnR5cGUgVElzUGFnZSA9IGZhbHNlXHJcblxyXG5leHBvcnQgY2xhc3MgU2hpeWlDb21wb25lbnRCYXNlIGltcGxlbWVudHMgV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50Lk9wdGlvbnM8XHJcbiAgV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LkRhdGFPcHRpb24sXHJcbiAgV2VjaGF0TWluaXByb2dyYW0uQ29tcG9uZW50LlByb3BlcnR5T3B0aW9uLFxyXG4gIFdlY2hhdE1pbmlwcm9ncmFtLkNvbXBvbmVudC5NZXRob2RPcHRpb24sXHJcbiAgV2VjaGF0TWluaXByb2dyYW0uSUFueU9iamVjdCxcclxuICBUSXNQYWdlPlxyXG57XHJcbiAgcHVibGljIFJlZ2lzdGVyZWRFdmVudEhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+ID0ge307XHJcbiAgcHVibGljIEFkZEhhbmRsZXIoVHJpZ2dlcjogc3RyaW5nLCBIYW5kbGVyOiAoZTogRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuUmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnNbVHJpZ2dlcl0gPSBIYW5kbGVyO1xyXG4gIH1cclxuICBwdWJsaWMgUmVtb3ZlaGFuZGxlcihUcmlnZ2VyOiBzdHJpbmcsIEhhbmRsZXI6IChlOiBFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuUmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnNbVHJpZ2dlcl0gPT09IEhhbmRsZXIpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuUmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnNbVHJpZ2dlcl07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgRXZlbnRIYW5kbGVyKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBlLkNhdGNoKCk7XHJcbiAgICBsZXQgSGFuZGxlciA9IHRoaXMuUmVnaXN0ZXJlZEV2ZW50SGFuZGxlcnNbZS5FdmVudE5hbWVdO1xyXG4gICAgY29uc29sZS5sb2coSGFuZGxlcik7XHJcbiAgICBpZiAoSGFuZGxlcikge1xyXG4gICAgICBIYW5kbGVyKGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS5QYXNzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Mb2FkKCkge1xyXG4gICAgUm91dGVyLkN1cnJlbnRQYWdlLkNvbXBvbmVudFN0YWNrLnB1c2godGhpcyk7XHJcbiAgfVxyXG59OyJdfQ==