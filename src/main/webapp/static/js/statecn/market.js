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
        /*var data1 = data.top.map(function(o){
            return {
                value: parseFloat(o.value[0])
            };
        });*/
        var province = ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'];
        var gdp = [
            //['第一产业','第二产业','第三产业',‘GDP’]
            [129.79, 4944.44, 20594.9, 25669.13],
            [220.22, 7571.35, 10093.82, 17885.39],
            [3492.81, 15256.93, 13320.71, 32070.45],
            [784.78, 5028.99, 7236.64, 13050.41],
            [1637.39, 8553.63, 7937.08, 18128.1],
            [2173.06, 8606.54, 11467.3, 22246.9],
            [1498.52, 7004.95, 6273.33, 14776.8],
            [2670.46, 4400.69, 8314.94, 15386.09],
            [109.47, 8406.28, 19662.9, 28178.65],
            [4077.18, 34619.5, 38691.6, 77388.28],
            [1965.18, 21194.61, 24091.57, 47251.36],
            [2567.72, 11821.58, 10018.32, 24407.62],
            [2363.22, 14093.47, 12353.89, 28810.58],
            [1904.53, 8829.54, 7764.93, 18499],
            [4929.13, 31343.67, 31751.69, 68024.49],
            [4286.21, 19275.82, 16909.76, 40471.79],
            [3659.33, 14654.38, 14351.67, 32665.38],
            [3578.37, 13341.17, 14631.83, 31551.37],
            [3694.37, 35109.66, 42050.88, 80854.91],
            [2796.8, 8273.66, 7247.18, 18317.64],
            [948.35, 905.95, 2198.9, 4053.2],
            [1303.24, 7898.92, 8538.43, 17740.59],
            [3929.33, 13448.92, 15556.29, 32934.54],
            [1846.19, 4669.53, 5261.01, 11776.73],
            [2195.11, 5690.16, 6903.15, 14788.42],
            [115.78, 429.17, 606.46, 1151.41],
            [1693.85, 9490.72, 8215.02, 19399.59],
            [983.39, 2515.56, 3701.42, 7200.37],
            [221.19, 1249.98, 1101.32, 2572.49],
            [241.6, 1488.44, 1438.55, 3168.59],
            [1648.97, 3647.01, 4353.72, 9649.7]
        ]
        var typeIndex = 1;
        var selectedRange = null;
        var option = null;
        var str = "";
        var data = [];
        var geoCoordMap = {};
        var name = "2016年各省市GDP及各产业占比"
        var mapName = 'china'
// 地图特征
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        for (var i = 0; i < province.length; i++) {
            data.push({
                "name": province[i],
                "value": [{
                    "name": "原油",
                    value: gdp[i][0]
                },
                    {
                        "name": "汽油",
                        value: gdp[i][1]
                    },
                    {
                        "name": "柴油",
                        value: gdp[i][2]
                    }
                ]
            })
        }
        var geoCoordMap = { //为了保证饼图不互相重叠，我对经纬坐标进行了调整
            '上海':  [121.472644,  31.231706],
            '云南':  [102.712251,  24.040609],
            '内蒙古':  [111.670801,  40.818311],
            '北京':  [116.405285,  39.904989],
            // '台湾': [121.509062, 25.044332],
            '吉林':  [125.3245,  43.886841],
            '四川':  [103.065735,  30.659462],
            '天津':  [119.190182,  39.125596],
            '宁夏':  [106.278179,  38.46637],
            '安徽':  [117.283042,  31.86119],
            '山东':  [118.000923,  36.675807],
            '山西':  [112.049248,  37.057014],
            '广东':  [113.280637,  23.125178],
            '广西':  [108.320004,  22.82402],
            '新疆':  [87.617733,  43.792818],
            '江苏':  [119.467413,  33.741544],
            '江西':  [115.892151,  28.676493],
            '河北':  [114.802461,  37.745474],
            '河南':  [113.665412,  33.757975],
            '浙江':  [120.153576,  29.287459],
            '海南':  [110.33119,  20.031971],
            '湖北':  [113.298572,  30.984355],
            '湖南':  [112.12279,  28.19409],
            // '澳门': [113.54909, 22.198951],
            '甘肃':  [103.823557,  36.058039],
            '福建':  [119.306239,  26.075302],
            '西藏':  [91.132212,  29.660361],
            '贵州':  [106.713478,  26.578343],
            '辽宁':  [123.029096,  41.396767],
            '重庆':  [106.504962,  29.933155],
            '陕西':  [108.948024,  34.263161],
            '青海':  [100.578916,  36.623178],
            // '香港': [114.173355, 22.320048],
            '黑龙江':  [126.642464,  46.756967],
        }
// 地理坐标图(打印出来方便查看)
        console.log("===========geoCoordMap===============");
        for (var i in geoCoordMap) {
            console.log(geoCoordMap[i]);
        }
        console.log(geoCoordMap);
        console.log("==============data===============");
        console.log(data);

        /*变换地图数据（格式）：pie*/
        function convertMapDta(type, data) {
            var mapData = [];
            for (var i = 0; i < data.length; i++) {
                mapData.push({
                    'name': province[i],
                    "value": gdp[i][3]
                })
            }
            return mapData;
        }
        /*resetPie*/
        function resetPie(myChart, params, geoCoordMap, typeIndex) {
            var op = myChart.getOption();
            var ops = op.series;
            ops.forEach(function(v, i) {
                if (i > 0) {
                    var geoCoord = geoCoordMap[v.name];
                    var p = myChart.convertToPixel({
                        seriesIndex: 0
                    }, geoCoord);
                    v.center = p;
                    if (params != 0 && params.zoom) {
                        v.radius = v.radius * params.zoom;
                    }
                    if (params != 0 && params.selected) {
                        var rangeFirstNumber = params.selected[0];
                        var rangeSecondNumber = params.selected[1];
                        var pd = v.data[typeIndex].value;
                        if (pd < rangeFirstNumber || pd > rangeSecondNumber) {
                            v.itemStyle.normal.opacity = 0;
                        } else {
                            v.itemStyle.normal.opacity = 1;
                        }
                    }
                }
            });
            myChart.setOption(op, true);
        }

        /*addPie*/
        function addPie(chart, data) {
            var op = chart.getOption();
            var sd = option.series;
            for (var i = 0; i < data.length; i++) {
                var randomValue = 15;
                var radius = randomValue;
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    var vr = [];
                    (data[i].value).map(function(v) {
                        vr.push({
                            name: v.name,
                            value: v.value,
                            visualMap: false
                        }); //饼图的数据不进行映射
                    });
                    var p = chart.convertToPixel({
                        seriesIndex: 0
                    }, geoCoord);
                    sd.push({
                        name: data[i].name,
                        type: 'pie',
                        // roseType: 'radius',
                        tooltip: {
                            formatter: function(params) {
                                return params.seriesName + "<br/>" + params.name + " : " + params.value + ' 亿元';
                            }
                        },
                        radius: radius,
                        center: p,
                        data: vr,
                        zlevel: 4,
                        tooltip: {
                            formatter: '{a}<br/>{b}: {c}亿元 ({d}%)'
                        },
                        label: {
                            normal: {
                                show: false,
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            opacity: 1
                        }
                    });
                }
            }
            return sd;
        };


        /* 指定图表的配置项和数据:pie*/
        var option = {
            title: {
                text: name,
                left: 'center',
                textStyle: {
                    color: 'black'
                }
            },
            legend: {
                data: ["原油","汽油","柴油"],
                orient: 'vertical',
                top: '10%',
                left: 'left',
                textStyle:{
                    color:'#fff'
                },
                zlevel: 4
            },
            toolbox: {
                feature: {
                    saveAsImage: {
                        pixelRatio: 5
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if (params.value) {
                        return params.name + "<br/>" + "GDP: " + params.value + "亿元";
                    }
                }
            },
            visualMap: {
                type: 'continuous',
                show: true,
                min: 0,
                max: 100000,
                left: 'left',
                top: 'bottom',
                text: ['高    (亿吨)', '低    (亿吨)'], // 文本，默认为数值文本
                calculable: true,
                // seriesIndex: [0],
                inRange: {
                    color: color
                },
                textStyle:{
                    color:'#fff'
                },
            },
            series: [{
                name: 'chinaMap',
                type: 'map',
                mapType: mapName,
                roam: true,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true
                    }
                },
                geo: {
                    show: true,
                    map: mapName,
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
                            areaColor: '#031525',
                            borderColor: '#3B5077',
                        },
                        emphasis: {
                            areaColor: '#2B91B7',
                        }
                    }
                },

                data: convertMapDta(province[typeIndex], data),
                zlevel: 3
            }]
        };
        var myChart = echarts.init($('#main')[0]);
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
        /*pie*/
        addPie(myChart, data);

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