if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}
var $style = {
    base:'oil',
    gas:{
        color:'#38b8ff'
    },
    oil:{
        color:'#59ebe8'
    },
    setTheme:function(g){
        if(g!='gas') return;
        var c = $style[g].color;
        $style.bar.xAxis.axisLine.lineStyle.color = c;
        $style.bar.yAxis.axisLine.lineStyle.color = c;
    },
    bar:{
        grid:{
            top:'10%',
            bottom:'5%',
        },
        legend: {  //图例组件，颜色和名字
            show:true,
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 8,
            }
        },
        tooltip:{},
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            }
        },
    }
};
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
        style = style || {};
        if(typeof(style)=="string"){
            style = $style[style];
            if(style == null)
                style = {};
        }
        option = $.extend(true, style, option);
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
