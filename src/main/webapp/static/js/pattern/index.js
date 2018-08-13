$(document).ready(function(){
    main();
    getdata('/pattern/index/chart1.json',chart1);
    getdata('/pattern/index/chart2.json',chart2);
    getdata('/pattern/index/chart3.json',chart3);
    getdata('/pattern/index/chart4.json',chart4);
});

function main(){
    var cnMap = {};
    for(var n in _country){
        cnMap[_country[n]] = n;
    }
    getdata('/pattern/index/main.json', function(data){
        var db = data.country;
        for(var i = 0; i < db.length; i++){
            db[i].name = _country[db[i].name];
            db[i].regionHeight = db[i].value > 10 ? 8 : 4;
        }
        var color = ["#070093", "#1c3fbf", "#1482e5", "#70b4eb", "#b4e0f3", "#b9e1f2", "#ffffff"];
        /*var regionCss = [];
        for(var i = 0; i < regionData.length; i++){
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
        var data1 = db.filter(function(datItem, index){
            return index < 2;
        }).map(function(d,i){
            return {"name": d.name, value: [data.top[i][0], data.top[i][1], 0, d.value]};
        });

        var option = {
            visualMap: {
                type: 'piecewise',
                inverse: true,
                seriesIndex:0,
                pieces: [
                    {
                    min: 0,
                    max: 0.99,
                    label:'<10',
                    color: '#fff'
                }, {
                    min: 1,
                    max: 1.99,
                    label:'10-20',
                    color: '#b4e0f3'
                }, {
                    min: 2,
                    max: 4.99,
                    label:'20-50',
                    color: '#70b4eb'
                }, {
                    min: 5,
                    max: 9.99,
                    label:'50-100',
                    color: '#1482e5'
                }, {
                    min: 10,
                    max: 29.99,
                    label:'100-300',
                    color: '#1c3fbf'
                }, {
                    min: 30,
                    label:'>300',
                    color: '#070093'
                }],
                left: '2%',
                top: 'bottom',
                itemWidth:16,
                itemHeight:10,
                itemGap:5,
                textStyle: {
                    color: '#fff',
                    fontSize:10,
                }
            },
            /*geo3D: {
                map: 'world',
                shading: 'color',
                silent: true,
                groundPlane: {
                    show: false
                },
                light: {
                    main: {
                        intensity: 0
                    },
                    ambient: {
                        intensity: 0
                    }
                },
                //regions: regionCss,
                viewControl: {
                    distance: 100
                },
                itemStyle: {
                    color: '#fff',
                    borderWidth:0.3
                },
                regionHeight: 0.5
            },*/
            series: [
                {
                type:'map3D',
                map: 'world',
                shading: 'color',
                label:{
                    textStyle:{
                        distance:10,
                        color:'#2874ff'
                    },
                    formatter:function(o){
                        if(o.value)
                            return cnMap[o.name] + " - " + o.value * 10 + "亿吨";
                        return cnMap[o.name];
                    }
                },
                itemStyle: {
                    color: '#fff',
                    borderWidth:0.3
                },
                viewControl: {
                    center:[5,0,0],
                    distance: 80
                },
                boxHeight:20,
                regionHeight: 1,
                data:db
            }/*,{
                type: 'scatter3D',
                coordinateSystem: 'geo3D',
                symbolSize: function(item){
                    return 20;
                },
                itemStyle: {
                    color: 'rgb(253, 235, 59)',
                    opacity: 1
                },
                data: data1
            }*/]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}
//探明结构储量分析
function chart1(data){
    if(data==null||data.length<2)
        return;
    var option = {
        grid:{
            top:'5%',
            bottom:'5%',
        },
        legend:{
            show:true,
            bottom:12,
            itemWidth: 8,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 8,
            },
            data:['欧佩克']
        },
        series: [
            {
            "name": ' ',
            "type": 'pie',
            center: ['50%', '45%'],
            "radius": ['66%', '68%'],
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
                        "fontSize": '28',
                        "fontWeight": 'bold'
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [
                {
                "value": 85,
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
                "value": 15,
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
            "radius": ['48%', '66.1%'],
             center: ['50%', '45%'],
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
                "name": data[0].value + ' %',
                "value": data[0].value,
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
                "value": 100-data[0].value,
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
//区域历史储产比趋势对比
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
        legend:{
            show:true,
            bottom : 10,
            type:'scroll',
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data:data[1]
        },
        grid:{
            top:'10%',
            left:'5%',
            right:'5%',
            bottom:'20%',
            containLabel: true
        },
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
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            data : data[0]
        }],
        yAxis : [{
            name:'10亿吨',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            splitNumber:3,
            splitLine:{
                show:false
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            type : 'value'
        }],
        series : seriesData
    };
    var myChart = $chart.init('#chart2', option, 'bar');
}
//近10年新增探明储量贡献
function chart3(data){
    var dataStyle = {
        normal: {
            label: {
                show: true,
                color: '#fff',
                fontSize: 10,
            },
            labelLine: {
                length: 15,
                length2: 15
            },
        }
    };
    var labelShow = {
        show: true,
        color: '#fff',
        fontSize: 14,
        formatter: [
            '{b| {b} }',
            '({d| {d}% })'
        ].join('\n'),
        rich: {
            d: {
                fontSize: 10,
                color: '#fff'
            },
            b: {
                fontSize: 12,
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
    var seriesData = [], x0 = 360, x1 = 0, rs = [[55,57],[30,55],[55,65],[41,51],[30,50],[30,50]], sa = [121,59.33,19.94,341.25,307.08, 276.60];
    data.forEach(function(d, i){
        var x = 3.6 * d.value;
        x0 = sa[i];
        x1 = 360 - x - x0;
        var arr = [{
            value: x0,
            name: '',
            itemStyle: placeHolderStyle
        }, {
            value: x,
            name: d.name,
            label: labelShow,
        }, {
            value:x1,
            name: '',
            itemStyle: placeHolderStyle
        }];
        var o = {
            name: 'Line '+(i+1),
            type: 'pie',
            clockWise: false,
            radius: rs[i],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data:arr
        };
        seriesData.push(o);
    });
    seriesData.push({
        type: 'bar',
        data: [0],
        coordinateSystem: 'polar',
        name: '06a',
        stack: 'a'
    });
    var option = {
        color: ['#2078d1', '#8a00ec', '#ff00f3', '#fb0065', '#ff941b', '#ac9857'],
        tooltip: {
            show: true,
            formatter: function(param){
                if (param.name.length>0) {
                    return param.name+'<br/>'+Math.round(param.value*10,2)+' 亿吨';
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
            radius: 72,
        },
        legend: {
            show:false
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}
//探明储量TOP10国分布
function chart4(data){
    var option = {
        tooltip:{
            formatter:'{b}: {c}%',
        },
        grid:{
            top:'10%',
            bottom:'10%',
            left:'5%',
            right:'5%',
            containLabel:true,
        },
        xAxis: [{
            type: 'category',
            data: data[1],
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                rotate: 45,
                interval: function(index){
                    if(index<2)
                        return true;
                    return index % 2 == 0;
                },
                textStyle: {
                    color: '#ffffff'
                }
            }
        }],
        yAxis: [{
            splitLine: {
                show: false
            },
            type: 'value',
            splitNumber:3,
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
                    color: '#ffffff',
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