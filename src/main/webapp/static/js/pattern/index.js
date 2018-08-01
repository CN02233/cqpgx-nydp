$(document).ready(function(){
    main();
    getdata('/pattern/index/jg1.json',jg1);
    getdata('/pattern/index/pm2.json',pm2);
    getdata('/pattern/index/ls3.json',ls3);
    getdata('/pattern/index/zl4.json',zl4);
});

function main(){
    /*var color = ["#070093", "#1c3fbf", "#1482e5", "#70b4eb", "#b4e0f3", "#ffffff"];
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
            //environment: 'images/datav.jpg',
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
                distance: 50
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
                console.log(JSON.stringify(item));
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
    var myChart = echarts.init($('#main')[0]);*/ 
}

function jg1(data){
    data[0].itemStyle = {
        "normal": {
            "color": new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                "offset": 0,
                "color": '#f125ff'
            }, {
                "offset": 1,
                "color": '#2dcbff'
            }]),
        }
    };
    data[1].itemStyle = {
        "normal": {
            color: 'rgba(0,0,0,0)'
        }
    };
    var option = {
        title: {
            "text": 'PUE',
            "x": '50%',
            "y": '80%',
            "textAlign": "center",
            "textStyle": {
                "fontWeight": 'normal',
                "fontSize": 24,
                "color": "#bcbfff",
            },
        },
        series: [{
            "name": ' ',
            "type": 'pie',
            "radius": ['68%', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": 225,
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
                        "color": new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                            "offset": 0,
                            "color": '#f125ff'
                        }, {
                            "offset": 1,
                            "color": '#2dcbff'
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
            "name": '',
            "type": 'pie',
            "radius": ['50%', '68.1%'],
            "avoidLabelOverlap": false,
            "startAngle": 225,
            "color": ["#fff", "transparent"],
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
                "name": '50',
                "value": 37.5,
                "label": {
                    "normal": {
                        "show": true,
                        "formatter": '{b} %',
                        "textStyle": {
                            "fontSize": 28,
                            "fontWeight": "bold",
                            "color": "#5886f0",
                        },
                        "position": "center"
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                            "offset": 0,
                            "color": '#f125ff'
                        }, {
                            "offset": 1,
                            "color": '#2dcbff'
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
        }

        ]
    };
    var myChart = echarts.init($('#jg1')[0]);
    myChart.setOption(option);
}

function pm2(data){

}

function ls3(data){

}

function zl4(data){

}