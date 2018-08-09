$(document).ready(function(){
    main();
    getdata('/statecn/trade/bidCompMapInfo.json',chart1);
    getdata('/statecn/trade/chart2.json',chart2);
    getdata('/statecn/trade/chart3.json',chart3);
});

function main(){
    var cnMap = {};
    for(var n in _country){
        cnMap[_country[n]] = n;
    }
    getdata('/statecn/trade/main.json', function(data){
        var color = ["#070093", "#1c3fbf", "#1482e5", "#70b4eb", "#b4e0f3", "#b9e1f2", "#ffffff"];
        var regionCss = [];
        for(var i = 0; i < data.top.length; i++){
            var c = data.top[i].name, v = data.top[i].value;
            regionCss.push({
                name: _country[c],
                itemStyle: {
                    normal: {
                        areaColor: '#2874ff',
                    }
                }
            });
        }
        var data1 = data.top.map(function(o){
           return o;
        });
        var option = {
            geo: {
                show: true,
                map: 'world',
                regions:regionCss,
                left: '20%', top: 5, right: '20%', bottom: 5,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: 'transparent',
                        borderColor: '#3fdaff',
                        borderWidth: 1,
                        shadowColor: 'rgba(63, 218, 255, 0.3)',
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            series : [
                {
                    name: '进口量',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: data1,
                    symbolSize: function (val) {
                        return 15;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            position: 'left',
                            show: true,
                            formatter: function(v){return v.value[2];}
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F4E925',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    }
                },
                {
                    name:'航线',
                    type:'lines',
                    coordinateSystem: 'geo',
                    large: true,
                    polyline:true,
                    zlevel: 2,
                    largeThreshold: 100,
                    effect: {
                        show: true,
                        constantSpeed: 30,
                        symbol: 'arrow',
                        symbolSize: 5,
                        trailLength: 0,
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            curveness: 0.3
                        }
                    },
                    blendMode: 'lighter',
                    data:convertLines(data1, data.route)
                }
            ]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}
function convertLines(d, m){
    var o = [];
    for(var i = 0; i < m.length; i++){
        o.push({
            fromName: m[i].name,
            toName: "中国",
            coords:m[i].value
        });
    }
    return o;
}

function chart1(data){
    var option = {
        color: ['#ffd653','#6ed5ff','#ff3a83','#2874ff','#ffa24c','#af59ff'],
        tooltip : {
            trigger: 'item'
        },
        legend: {
            x : 'center',
            y : 'top',
            type:'scroll',
            textStyle:{
                color:'#fff'
            },
            pageTextStyle:{
                color:'#fff'
            }
        },
        series : [
            {
                name:'国家',
                type:'pie',
                radius : [30, 80],
                center : ['50%', '60%'],
                roseType : 'area',
                labelLine: {
                    length: 5,
                    length2: 10
                },
                data:data
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
    var dataShadow = [], yMax = 12000;
    for(var i = 0; i < data[3].length; i++){
        dataShadow.push(yMax);
    }
    var option = {
        tooltip:{},
        legend:{
            y : 'left',
            textStyle:{
                color:'#fff'
            },
            data:data[0]
        },
        xAxis: {
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            },
            type: 'category',
            data:$chart.xtime(data[1])
        },
        yAxis: [{
            axisLine: {
                show: false
            },
            splitLine:{
                show:false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            type: 'value'
        },{
            axisLine: {
                show: false
            },
            splitLine:{
                show:false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter:function(v){
                    return v + '%';
                }
            },
            type: 'value'
        }],
        series: [
            {
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {color: 'rgba(12,15,34,0.8)'}
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                data: dataShadow,
                animation: false
            },
            {
                name:data[0][0],
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#2874ff'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },
                },
                data: data[3]
            },
            {
                name:data[0][1],
                yAxisIndex:1,
                type:'line',
                itemStyle:{
                    normal:{
                        color:'#8121dd'
                    }
                },
                data: data[4]
            }
        ]
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
    var option = {
        tooltip:{},
        color:['#61ffff','#ff0'],
        legend:{
            y : 'left',
            textStyle:{
                color:'#fff'
            },
            data:data[0]
        },
        xAxis: {
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            },
            type: 'category',
            data:$chart.xtime(data[1])
        },
        yAxis: [{
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            type: 'value'
        },{
            axisLine: {
                show: false
            },
            splitLine:{
                show:false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
            },
            formatter:function(v){
                return v + '%';
            },
            min:-60,
            max:100,
            type: 'value'
        }],
        series: [
            {
                name:data[0][0],
                yAxisIndex:0,
                type: 'bar',
                data: data[3]
            },
            {
                name:data[0][1],
                yAxisIndex:1,
                type:'line',
                lineStyle:{
                    type:'dotted'
                },
                data: data[4]
            }
        ]
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}