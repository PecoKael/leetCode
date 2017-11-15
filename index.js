(function() {

    var jmLib = {};

    // 原生对象拓展
    if (typeof Number.prototype.currency == 'undefined') {
        Number.prototype.currency = function(place) {
            var place = place || 0;
            return (this.toFixed(place) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
        }
    }

    /* 获取url参数 */
    jmLib.getUrlParams = function() {
        var search = location.search;
        var params = {};
        if (search != "") {
            search.slice(1).split("&").forEach(
                function(val) {
                    var arr = val.split("=");
                    params[arr[0]] = arr[1];
                }
            );
        }
        return params;
    }

    /* 数字转换 */
    jmLib.currency = function(str, place) {
        if (!str) str = 0;
        var place = place || 0;
        return (str.toFixed(place) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
    }

    window.jmLib = jmLib;

})();
