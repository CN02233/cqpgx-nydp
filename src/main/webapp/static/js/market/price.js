$(document).ready(function(){
    main();
    getdata('/pattern/index/chart1.json',chart1);
    getdata('/pattern/index/chart2.json',chart2);
    getdata('/pattern/index/chart3.json',chart3);
    getdata('/pattern/index/chart4.json',chart4);
});

function main(){

}

function chart1(data){
    if(data==null||data.length<2)
        return;
    var option = {
        legend:{
            show:true,
            bottom:0,
            textStyle:{
                color:'#fff'
            },
            data:['欧佩克']
        },
        series: [{
            "name": ' ',
            "type": 'pie',
            "radius": ['68%', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": 90,
            "color": ["#fff", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": '30',
                        "fontWeight": 'bold'
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 75,
                "name": '',
                "itemStyle": {
                    "normal": {
                        "color": new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            "offset": 0,
                            "color": '#ffffff'
                        }, {
                            "offset": 0.2,
                            "color": '#2874ff'
                        }]),
                    }
                }
            }, {
                "value": 25,
                "name": '',
                "itemStyle": {
                    "normal": {
                        color: 'rgba(0,0,0,0)'
                    }
                }
            }]
        }, {
            "name": '欧佩克',
            "type": 'pie',
            "radius": ['50%', '68.1%'],
            "avoidLabelOverlap": false,
            "startAngle": 90,
            "color": ["#2874ff", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "z": 10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": '30',
                        "fontWeight": 'bold'
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "name": data[0].value,
                "value": 37.5,
                "label": {
                    "normal": {
                        "show": true,
                        "textStyle": {
                            "fontSize": 24,
                            "fontWeight": "bold",
                            "color": "#5886f0",
                        },
                        "position": "center"
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            "offset": 0,
                            "color": '#ffffff'
                        }, {
                            "offset": 0.2,
                            "color": '#2874ff'
                        }]),
                    }
                }
            }, {
                "name": '',
                "value": 62.5,
                "itemStyle": {
                    "normal": {
                        color: 'rgba(0,0,0,0)'
                    }
                }
            }]
        }]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
    var seriesData = [];
    for(var i = 0; i < data[1].length; i++){
        var o = {
            name:data[1][i],
            type:'line',
            stack: '总量',
            showSymbol: false,
            areaStyle: {normal: {}},
            data:data[2+i]||[]
        };
        seriesData.push(o);
    }
    var option = {
        color: ['#ffd653','#6ed5ff','#ff3a83','#2874ff','#ffa24c','#af59ff'],
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            show:false
        },
        grid:[{
            top:20,
            bottom:20,
            containLabel: true
        }],
        dataZoom: [{
            type:'inside',
            show: true
        }],
        xAxis : [{
            type : 'category',
            boundaryGap : false,
            axisLabel: {
                rotate:45,
                textStyle: {
                    color: '#ffffff'
                }
            },
            data : data[0]
        }],
        yAxis : [{
            splitLine:{
                show:false
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            type : 'value'
        }],
        series : seriesData
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
    var dataStyle = {
        normal: {
            label: {
                show: true,
                color: '#fff',
                fontSize: 18,
            },
            labelLine: {
                //smooth: 0.2,
                length: 40,
                length2: 40
            },
        }
    };

    var labelShow = {
        show: true,
        color: '#fff',
        fontSize: 15,
        formatter: [
            '{b| {b} }',
            '占比：{d| {d}% }'
        ].join('\n'),
        rich: {
            d: {
                fontSize: 15,
                color: '#fff'
            },
            b: {
                fontSize: 18,
                color: '#fff'
            },
        }
    };

    var placeHolderStyle = {
        normal: {
            color: 'rgba(0,0,0,0)',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var option = {
        color: ['#2078d1', '#8a00ec', '#ff00f3', '#fb0065', '#ff941b'],
        tooltip: {
            show: true,
            formatter: function(param){
                if (param.name.length>0) {
                    return param.name+'<br/>'+param.value;
                }
            }
        },
        angleAxis: {
            type: 'category',
            z: 10,
            axisLine: {
                color: '#fff',
                lineStyle: {
                    width: 3,
                    color: '#fff',
                }
            },
        },
        radiusAxis: {
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                color: '#fff'
            },
            axisLine: {
                show: false,
                color: '#fff',
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine: {
                color: '#000',
                lineStyle: {
                    type: 'dotted',
                    color: 'rgba(170,170,170,.5)',
                }
            },

        },
        polar: {
            center: ['50%', '50%'],
            radius: 70,
        },
        legend: {
            show:false
        },
        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [50, 55],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [{
                value: 260,
                name: '',
                itemStyle: placeHolderStyle
            }, {
                value: 100,
                name: '伊拉克',
                label: labelShow,
            },
            {
                value: 0,
                name: '',
                itemStyle: placeHolderStyle
            }]
        },
            {
                name: 'Line 2',
                type: 'pie',
                clockWise: false,
                radius: [35, 50],
                itemStyle: dataStyle,
                hoverAnimation: false,

                data: [{
                    value: 190,
                    name: '',
                    itemStyle: placeHolderStyle
                },
                    {
                        value: 70,
                        name: '委内瑞拉',
                        label: labelShow,
                    },
                    {
                        value: 100,
                        name: '',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: 'Line 3',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [60, 65],
                itemStyle: dataStyle,

                data: [{
                    value: 130,
                    name: '',
                    itemStyle: placeHolderStyle
                },
                    {
                        value: 60,
                        name: '美国',
                        label: labelShow,
                    },
                    {
                        value: 170,
                        name: '',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: 'Line 4',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [55, 65],
                itemStyle: dataStyle,
                data: [{
                    value: 40,
                    name: '',
                    itemStyle: placeHolderStyle
                },
                    {
                        value: 90,
                        name: '伊朗',
                        label: labelShow,
                    },
                    {
                        value: 230,
                        name: '',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: 'Line 5',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [30, 40],
                itemStyle: dataStyle,

                data: [{
                    value: 0,
                    name: '',
                    itemStyle: placeHolderStyle
                },
                    {
                        value: 40,
                        name: '中国',
                        label: labelShow,
                    },
                    {
                        value: 320,
                        name: '',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                type: 'bar',
                data: [0],
                coordinateSystem: 'polar',
                name: '06a',
                stack: 'a'
            },

        ]
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
    var option = {
        tooltip:{
            formatter:'{b}: {c}%',
        },
        grid: {
            bottom: 20,
            top: 20,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data[1],
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                rotate: 45,
                interval: 0,
                textStyle: {
                    color: '#ffffff'
                }
            }
        },
        yAxis: [{
            splitLine: {
                show: false
            },
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                formatter:'{value}%',
                textStyle: {
                    color: '#ffffff'
                }
            }
        }],
        series: [{
            name: '探明储量',
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(40,161,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(40,161,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(40,161,255,0.1)'
                        }]
                    ),
                    barBorderRadius: [3, 3, 0, 0]
                }
            },
            z: -12,
            data: data[2]
        }]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}