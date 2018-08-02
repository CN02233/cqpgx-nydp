$(document).ready(function(){
    main();
    getdata('/pattern/index/chart1.json',chart1);
    getdata('/pattern/index/chart2.json',chart2);
    getdata('/pattern/index/chart3.json',chart3);
    getdata('/pattern/index/chart4.json',chart4);
});

function main(){
    getdata('/pattern/index/main.json', function(data){
        var routes, regionData = [];
        function getAirportCoord(idx) {
            return [data.airports[idx][3], data.airports[idx][4]];
        }
        data.airports.forEach(function(item){
            var b = false;
            for(var i = 0; i <regionData.length; i++){
                if(regionData[i].name == item[2]){
                    regionData[i].value++;
                    b = true;
                    break;
                }
            }
            if(!b){
                regionData.push({"name":item[2], "value":0});
            }
        });
        routes = data.routes.map(function(airline) {
            return [
                getAirportCoord(airline[1]),
                getAirportCoord(airline[2])
            ];
        });

        var color = ["#070093", "#1c3fbf", "#1482e5", "#70b4eb", "#b4e0f3", "#ffffff"];
        var regionCss = [];
        for(var i = 0; i < regionData.length; i++){
            var c = '', v = regionData[i].value;
            if(v >= 200)
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
        }
        var data1 = data.airports.filter(function(datItem, index){
            return index < 100;
        }).map(function (dataItem) {
            return {name:dataItem[1], value:[dataItem[3], dataItem[4], 0, Math.floor((Math.random()*10)+1)]}
        });

        var option = {
            geo3D: {
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
                regions: regionCss,
                viewControl: {
                    distance: 100
                },
                itemStyle: {
                    color: '#fff',
                    borderWidth:0.3
                },
                regionHeight: 0.5
            },
            series: [{
                type: 'scatter3D',
                coordinateSystem: 'geo3D',
                //blendMode: 'lighter',
                symbolSize: function(item){
                    return item[3];
                },
                itemStyle: {
                    color: 'rgb(253, 235, 59)',
                    opacity: 1
                },
                data: data1
            },{
                type: 'lines3D',
                coordinateSystem: 'geo3D',
                effect: {
                    show: true,
                    trailWidth: 2,
                    trailLength: 0.4
                },
                blendMode: 'lighter',
                lineStyle: {
                    width: 0,
                    color: 'rgb(20, 15, 2)',
                    opacity: 1
                },
                data: routes
            }]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
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
            top:0
        }],
        /*dataZoom: [{
            show: true,
            start:1,
            end:10
        }],*/
        xAxis : [{
            type : 'category',
            boundaryGap : false,
            data : data[0]
        }],
        yAxis : [{
            type : 'value'
        }],
        series : seriesData
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){

}

function chart4(data){

}