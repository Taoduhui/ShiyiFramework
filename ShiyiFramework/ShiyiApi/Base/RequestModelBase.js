"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModelBase = void 0;
var Cst = require("../../Utils/ConstValue");
var RequestModelBase = (function () {
    function RequestModelBase() {
    }
    RequestModelBase.prototype.GetHeader = function () {
        var Header = {};
        var cookies = this.GetCookies();
        if (cookies != "") {
            Header["cookie"] = cookies;
        }
        return Header;
    };
    RequestModelBase.prototype.GetCookies = function () {
        var cookies = "";
        if (wx.getStorageSync(Cst.StorageKey.Cookies)) {
            var cookiesMap = JSON.parse(wx.getStorageSync(Cst.StorageKey.Cookies));
            var keys = Object.keys(cookiesMap);
            for (var i = 0; i < keys.length; i++) {
                cookies += keys[i] + "=" + cookiesMap[keys[i]] + ";";
            }
        }
        return cookies;
    };
    return RequestModelBase;
}());
exports.RequestModelBase = RequestModelBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdE1vZGVsQmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlcXVlc3RNb2RlbEJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNENBQStDO0FBTS9DO0lBQUE7SUE2QkEsQ0FBQztJQXBCVSxvQ0FBUyxHQUFoQjtRQUNJLElBQUksTUFBTSxHQUF3QixFQUFFLENBQUM7UUFDckMsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hDLElBQUksT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUNmLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDOUI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU8scUNBQVUsR0FBbEI7UUFDSSxJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUM7UUFDekIsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDL0YsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQWtCLENBQUM7WUFDcEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDeEQ7U0FDSjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3QnFCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDc3QgPSByZXF1aXJlKFwiLi4vLi4vVXRpbHMvQ29uc3RWYWx1ZVwiKTtcclxuLyoqXHJcbiAqIFNoaXlpQXBp55qEUmVxdWVzdE1vZGVs6ZyA57un5om/6Ieq5q2k57G7XHJcbiAqIOe7p+aJv+iHquatpOexu+mcgOWtkOexu+mHjeWGmeaehOmAoOWHveaVsOeUqOS6juS8oOWFpeWPguaVsFxyXG4gKiDlubblrp7njrBHZXRCb2R55pa55rOV55So5LqO5bCG5pWw5o2u6L2s5o2i5Li6UmVjb3JkPHN0cmluZyxhbnk+XHJcbiAqIOS7peWPikdldE1ldGhvZOaWueazleeUqOS6juWumuS5iVJlcXVlc3TnmoTmlrnms5UqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVxdWVzdE1vZGVsQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIOWumuS5iVJlcXVlc3Tmlrnms5XvvIzku4XpnIByZXR1cm7kuIDnp43mlrnms5XljbPlj68qL1xyXG4gICAgcHVibGljIGFic3RyYWN0IEdldE1ldGhvZCgpOiBcIk9QVElPTlNcIiB8IFwiR0VUXCIgfCBcIkhFQURcIiB8IFwiUE9TVFwiIHwgXCJQVVRcIiB8IFwiREVMRVRFXCIgfCBcIlRSQUNFXCIgfCBcIkNPTk5FQ1RcIiB8IHVuZGVmaW5lZDtcclxuICAgIC8qKlxyXG4gICAgICog5bCGUmVxdWVzdOeahOaVsOaNruaLvOaOpeS4ulJlY29yZDxzdHJpbmcsYW55PiovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgR2V0Qm9keSgpOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5ZIZWFkZXLvvIzlrp7njrDkuoblvq7kv6HlsI/nqIvluo/nmoRDb29raWXns7vnu58qL1xyXG4gICAgcHVibGljIEdldEhlYWRlcigpOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcclxuICAgICAgICBsZXQgSGVhZGVyOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcbiAgICAgICAgbGV0IGNvb2tpZXM6IHN0cmluZyA9IHRoaXMuR2V0Q29va2llcygpO1xyXG4gICAgICAgIGlmIChjb29raWVzICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgSGVhZGVyW1wiY29va2llXCJdID0gY29va2llcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEhlYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEdldENvb2tpZXMoKSB7XHJcbiAgICAgICAgbGV0IGNvb2tpZXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHd4LmdldFN0b3JhZ2VTeW5jKENzdC5TdG9yYWdlS2V5LkNvb2tpZXMpKSB7XHJcbiAgICAgICAgICAgIGxldCBjb29raWVzTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gSlNPTi5wYXJzZSh3eC5nZXRTdG9yYWdlU3luYyhDc3QuU3RvcmFnZUtleS5Db29raWVzKSk7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoY29va2llc01hcCkgYXMgQXJyYXk8c3RyaW5nPjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb29raWVzICs9IGtleXNbaV0gKyBcIj1cIiArIGNvb2tpZXNNYXBba2V5c1tpXV0gKyBcIjtcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29va2llcztcclxuICAgIH1cclxufSJdfQ==