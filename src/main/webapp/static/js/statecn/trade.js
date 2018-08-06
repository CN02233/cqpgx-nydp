$(document).ready(function(){
    main();
    getdata('/statecn/trade/chart1.json',chart1);
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
        var regionCss = [{name:"China", itemStyle:{color:'#ffa24c'}}];
        /*for(var i = 0; i < regionData.length; i++){
            var c = '', v = regionData[i].value;
            if(v < 1)
                c = color[0];
            else if(v >= 100 & v < 200)
                c = color[1];
            else if(v > 60 & v < 100)
                c = color[2];
            else if(v > 30 & v < 61)
                c = color[3];
            else if(v > 0)
                c = color[4];
            else
                c = color[5];
            regionCss.push({
                name:regionData[i].name,
                itemStyle:{
                    color:c
                }
            });
        }*/
        var data1 = data.top.map(function(o){
           return o;
        });
        var option = {
            geo: {
                show: true,
                map: 'world',
                label: {
                    normal: {
                        show: false
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
                            show: true
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
                /*{
                    name:'航线',
                    type:'lines',
                    coordinateSystem: 'geo',
                    large: true,
                    largeThreshold: 100,
                    lineStyle: {
                        normal: {
                            opacity: 0.05,
                            width: 0.5,
                            curveness: 0.3
                        }
                    },
                    blendMode: 'lighter',
                    data:convertLines(data1)
                }*/
            ]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}
function convertLines(d){
    var o = {
        coords:[],
        lineStyle:{}
    };
    for(var i = 0; i < d.length; i++){
        o.coords.push([121.336319, 31.197], [d[i].value[0],d[i].value[1]]);
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