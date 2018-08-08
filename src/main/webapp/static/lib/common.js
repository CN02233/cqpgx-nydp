if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}

var $chart = {
    xtime:function(d){
        for(var i = 0, l = d.length; i<l; i++){
            var a = d[i].split('-');
            if(a.length == 3)
                d[i] = a[1] + '-' + a[2] + '\n' + a[0];
        }
        return d;
    },
    init:function(id, option, style){
        style = style || {

        };
        option = $.extend(style, option);
        var myChart = echarts.init($(id)[0]);
        myChart.setOption(option);
        return myChart;
    }
};

function gourl(url){
    location.href = url;
}
function getdata(url, o){
    url = __host + '/static/data' + url;
    if(typeof(o) == 'function'){
        o = {success:o};
    }
    o = $.extend({
        url:url,
        method:'get',
        error:function(jq,state){
            console.log(url+' :ajax error,'+jq.status);
        }
    }, o);
    $.ajax(o);
}
