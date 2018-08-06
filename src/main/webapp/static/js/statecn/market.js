$(document).ready(function(){
    main();
    getdata('/statecn/market/chart1.json',chart1);
    getdata('/statecn/market/chart2.json',chart2);
    getdata('/statecn/market/chart3.json',chart3);
    getdata('/statecn/market/chart4.json',chart4);
});

function main(){
    getdata('/statecn/market/main.json', function(data){
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
            return {
                value: parseFloat(o.value[0])
            };
        });
        var option = {
            geo: {
                show: true,
                map: 'china',
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
            ]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}

function chart1(data){
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
            data:data[1]
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
                data: data[2]
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
                data: data[3]
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
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
            data:data[1]
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
                name:data[0][0],
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: '#61ffff'
                    },
                },
                zlevel:1,
                data: data[2]
            },
            {
                name:data[0][2],
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: '#2874ff'
                    },
                },
                zlevel:1,
                data: data[4]
            },
            {
                name:data[0][1],
                yAxisIndex:1,
                type:'line',
                areaStyle:{
                    normal:{
                        color:'#ffa24c'
                    }
                },
                data: data[3]
            },
            {
                name:data[0][3],
                yAxisIndex:1,
                type:'line',
                itemStyle:{
                    normal:{
                        color:'#ff3481'
                    }
                },
                data: data[5]
            }
        ]
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
    var seriesData = [];
    for(var i = 2; i < data.length; i++){
        var o = {
            name:data[0][i-2],
            type:'line',
            areaStyle:{},
            data:data[i]
        };
        seriesData.push(o);
    }
    var option = {
        tooltip:{},
        color:['#61ffff','#2874ff','#ffa24c'],
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
            data:data[1]
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            type: 'value'
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
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
            data:data[1]
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
                }
            },
            type: 'value'
        }],
        series: [
            {
                name:data[0][0],
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: '#61ffff'
                    },
                },
                data: data[2]
            },
            {
                name:data[0][1],
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: '#2874ff'
                    },
                },
                data: data[3]
            },
            {
                name:data[0][2],
                yAxisIndex:1,
                type:'line',
                itemStyle:{
                    normal:{
                        color:'#ff0'
                    }
                },
                data: data[4]
            }
        ]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}