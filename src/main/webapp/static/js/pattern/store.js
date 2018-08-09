$(document).ready(function(){
    main();
    getdata('/pattern/store/bidCompMapInfo.json',chart1);
    getdata('/pattern/store/chart2.json',chart2);
    getdata('/pattern/store/chart3.json',chart3);
    getdata('/pattern/store/chart4.json',chart4);
    getdata('/pattern/store/chart5.json',chart5);
    getdata('/pattern/store/chart6.json',chart6);
});

function main(){
    getdata('/pattern/store/main.json', function(data) {
        var option = {
            title:{
                text:'世界库存变动',
                subtext:'单位：千吨',
                textStyle:{
                    fontSize:16,
                    color:'#fff'
                },
                top:20
            },
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
                        areaColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(21, 127, 237,1)'
                            }, {
                                offset: 0.4,
                                color: 'rgba(21, 127, 237,0.5)'
                            }, {
                                offset: 1,
                                color: 'rgba(21, 127, 237,0.1)'
                            }]
                        ),//'rgba(21, 127, 237, 0.5)',//'transparent',
                        //borderColor: '#3fdaff',
                        borderWidth: 0,
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
                    name: '世界库存变动',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: data,
                    symbolSize: function (val) {
                        if(val[2] < 1100)
                            return 15;
                        else if(val[2] < 10000)
                            return 15 + val[2] / 500;
                        return 25 + val[2] / 2000;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: function(o){ return o.name + ' - ' + o.value[2]},
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
                    },
                    zlevel: 1
                },
            ]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}

function chart1(data){
    var option = {
        legend: {
            top: 'top',
            textStyle:{
                color:'#fff'
            },
            data:data[0]
        },
        tooltip: {
            formatter: '{b} - {c}千吨'
        },
        /*dataZoom: [{
         type: 'inside',
         throttle: 50
         }],*/
        grid: {
            top: 40,
            left:100,
            bottom:20
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            z: 10
        },
        series: [{
            name:'ARA汽油库存',
            type:'line',
            smooth: true,
            showAllSymbol: false,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: '#2874ff'
                }
            },
            data: data[2]
        }, {
            name:'ARA柴油库存',
            type:'line',
            smooth:true,
            showAllSymbol: false,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: '#61ffff'
                }
            },
            lineStyle:{
                normal:{
                    color:'#61ffff',
                    width:1,
                    opacity:0
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(97,255,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(97,255,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(97,255,255,0.1)'
                        }]
                    )
                }
            },
            data: data[3]
        }]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
    var option = {
        legend: {
            left:120,
            bottom: 40,
            textStyle:{
                color:'#fff'
            },
            data:data[0]
        },
        tooltip: {
            formatter: '{b} - {c}百万桶'
        },
        grid: {
            top: 40,
            left:100,
            bottom:20
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            name:'百万桶',
            nameTextStyle:{
                color:'#fff'
            },
            type: 'value',
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            z: 10
        },
        series: [{
            name:'浮式油轮原油库存量（15天移动均值）',
            type:'line',
            smooth: true,
            showAllSymbol: false,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: '#43f1a0'
                }
            },
            data: data[2]
        }]
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
    var seriesData = [];
    for(var i = 2; i < data.length; i++){
        var o = {
            name: data[0][i-2],
            type: 'line',
            smooth: true,
            symbolSize: 1,
            symbol: 'circle',
            data: data[i]
        };
        if(i==2){
            o.lineStyle = {
                type:'dotted'
            };
        }
        else if(i == data.length - 1){
            o.areaStyle = {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(196,171,85,1)'
                        }, {
                            offset: 0.7,
                            color: 'rgba(196,171,85,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(196,171,85,0.1)'
                        }]
                    ),
                }
            };
        }
        seriesData.push(o);
    }
    var option = {
        color: ['#ff3481','#ffa24c','#61ffff','#2874ff','#ac9857'],
        legend:{
            top:'top',
            textStyle:{
                color:'#fff'
            },
            data:data[0]
        },
        tooltip: {
            trigger: 'axis',
        },
        grid:{
            top:40,
            bottom:20
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            data: data[1]
        },
        yAxis: {
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            splitLine: {
                show: false
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
        color: ["#ffa3ff","#ffa3ff", "#69df55", "#f034d", "#217346"],//["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        tooltip: {
            trigger: 'axis',
        },
        grid:{
            top:20,
            bottom:25
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            data: data[1]
        },
        yAxis: {
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            splitLine: {
                show: false
            },
            min:80,
            max:200,
            type: 'value'
        },
        series: [{
            name: ' ',
            type: 'line',
            stack:'a',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                width:1
            },
            areaStyle : {
                normal:{
                    opacity: 0
                }
            },
            data: data[2]
        },{
            name: '2013-17年范围',
            type: 'line',
            stack:'a',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                width:1
            },
            areaStyle : {
                normal:{
                    color:'#61ffff'
                }
            },
            data: data[3]
        },{
            name: '5年平均值',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle : {
                normal: {
                    color:'#2874ff',
                    type: 'dashed'
                }
            },
            data: data[4]
        },{
            name: '2017',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle : {
                normal: {
                    color:'#ffa24c'
                }
            },
            data: data[6]
        },{
            name: '2018',
            type: 'line',
            smooth: true,
            symbolSize: 5,
            lineStyle : {
                normal: {
                    color:'#ff3481',
                }
            },
            data: data[7]
        }]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
    var option = {
        color: ["#ffa3ff","#ffa3ff", "#69df55", "#f034d", "#217346"],//["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        tooltip: {
            trigger: 'axis',
        },
        grid:{
            top:20,
            bottom:25
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            data: data[1]
        },
        yAxis: {
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            splitLine: {
                show: false
            },
            min:170,
            max:270,
            type: 'value'
        },
        series: [{
            name: ' ',
            type: 'line',
            stack:'a',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                width:1
            },
            areaStyle : {
                normal:{
                    opacity: 0
                }
            },
            data: data[2]
        },{
            name: '2013-17年范围',
            type: 'line',
            stack:'a',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                width:1
            },
            areaStyle : {
                normal:{
                    color:'#61ffff'
                }
            },
            data: data[3]
        },{
            name: '5年平均值',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle : {
                normal: {
                    color:'#2874ff',
                    type: 'dashed'
                }
            },
            data: data[4]
        },{
            name: '2017',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle : {
                normal: {
                    color:'#ffa24c'
                }
            },
            data: data[6]
        },{
            name: '2018',
            type: 'line',
            smooth: true,
            symbolSize: 5,
            lineStyle : {
                normal: {
                    color:'#ff3481',
                }
            },
            data: data[7]
        }]
    };
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function chart6(data){
    var option = {
        color: ["#ffa3ff","#ffa3ff", "#69df55", "#f034d", "#217346"],//["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        tooltip: {
            trigger: 'axis',
        },
        grid:{
            top:20,
            bottom:25
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            data: data[1]
        },
        yAxis: {
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            splitLine: {
                show: false
            },
            min:250,
            max:550,
            type: 'value'
        },
        series: [{
            name: ' ',
            type: 'line',
            stack:'a',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                width:1
            },
            areaStyle : {
                normal:{
                    opacity: 0
                }
            },
            data: data[2]
        },{
            name: '2013-17年范围',
            type: 'line',
            stack:'a',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                width:1
            },
            areaStyle : {
                normal:{
                    color:'#61ffff'
                }
            },
            data: data[3]
        },{
            name: '5年平均值',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle : {
                normal: {
                    color:'#2874ff',
                    type: 'dashed'
                }
            },
            data: data[4]
        },{
            name: '2017',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle : {
                normal: {
                    color:'#ffa24c'
                }
            },
            data: data[6]
        },{
            name: '2018',
            type: 'line',
            smooth: true,
            symbolSize: 5,
            lineStyle : {
                normal: {
                    color:'#ff3481',
                }
            },
            data: data[7]
        }]
    };
    var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}