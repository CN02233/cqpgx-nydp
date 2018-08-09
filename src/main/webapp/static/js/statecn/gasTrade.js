$(document).ready(function(){
    main();
    getdata('/statecn/gasTrade/bidCompMapInfo.json',chart1);
    getdata('/statecn/gasTrade/chart2.json',chart2);
    getdata('/statecn/gasTrade/chart3.json',chart3);
    getdata('/statecn/gasTrade/chart4.json',chart4);
});

function main(){
    var cnMap = {};
    for(var n in _country){
        cnMap[_country[n]] = n;
    }
    getdata('/statecn/gasTrade/main.json', function(data){
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
                regions: [
                    {
                        name: "China",
                        itemStyle: {
                            areaColor: "#003CAF"
                        }
                    }
                ],
                aspectScale:1.5,
                roam: true,
                itemStyle: {
                    // normal: {
                    //     areaColor: 'transparent',
                    //     borderColor: '#3fdaff',
                    //     borderWidth: 1,
                    //     shadowColor: 'rgba(63, 218, 255, 0.3)',
                    //     shadowBlur: 10
                    // },
                    normal:{
                        areaColor:"#4574FF"
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            tooltip:{
                formatter:function(params){
                    var showStr = "";
                    if(params.seriesName == '进口量'){
                        showStr = params.name+"<br>进口量："+params.data.value[2]+"<br>占比："+params.data.value[3];
                        return showStr;
                    }else if(params.seriesName == '出口量'){
                        showStr = params.name+"<br>出口量："+params.data.value[2]+"<br>占比："+params.data.value[3];
                        return showStr;
                    }
                    else{
                            return null;
                    }

                }
            },
            series : [
                {
                    name: '出口量',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    symbolSize: function (val) {
                        return 15;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        show:false,
                        position: 'left',
                        formatter:function(params){
                            return params.data.value[2];
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'red',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    },
                    data: data.export
                },
                {
                    name: '进口量',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    data: data.import,
                    symbolSize: function (val) {
                        return 15;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    // label: {
                    //     normal: {
                    //         position: 'left',
                    //         show: true
                    //     }
                    // },
                    itemStyle: {
                        normal: {
                            color: '#F4E925',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    }
                },
                {
                    name:'出口',
                    type:'lines',
                    coordinateSystem: 'geo',
                    large: true,
                    zlevel: 1,
                    largeThreshold: 100,
                    effect: {
                        show: true,
                        constantSpeed: 30,
                        symbol: 'arrow',
                        symbolSize: 8,
                        trailLength: 0,
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            curveness: 0.3
                        }
                    },
                    blendMode: 'lighter',
                    data:convertLines(data.export,true)
                },
                {
                    name:'进口',
                    type:'lines',
                    coordinateSystem: 'geo',
                    large: true,
                    zlevel: 1,
                    largeThreshold: 100,
                    effect: {
                        show: true,
                        constantSpeed: 30,
                        symbol: 'arrow',
                        symbolSize: 8,
                        trailLength: 0,
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            curveness: 0.3
                        }
                    },
                    blendMode: 'lighter',
                    data:convertLines(data.import,false)
                }
            ]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}
function convertLines(d,fromCn){
    var o = [];
    for(var i = 0; i < d.length; i++){
        if(fromCn){
            o.push({
                fromName: "中国",
                toName: d[i].name,
                coords:[ [108.751592, 34.447119],[d[i].value[0],d[i].value[1]] ]
            });
        }else{
            o.push({
                fromName: "中国",
                toName: d[i].name,
                coords:[  [d[i].value[0],d[i].value[1]],[108.751592, 34.447119] ]
            });
        }

    }
    return o;
}

function chart1(data){
    var option = {
        color: ['#ffd653','#6ed5ff','#ff3a83','#2874ff','#ffa24c','#af59ff'],
        tooltip : {
            trigger: 'item',
            formatter:function(params){
                return params.data.name+"<br>进口量："+params.data.value+"<br>占比："+params.data.rate;
            }
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
                name:'其他国家',
                type:'pie',
                radius : [70, 90],
                center : ['50%', '55%'],
                label:{show:false},
                labelLine: {
                    show:false,
                    length: 5,
                    length2: 10
                },
                data:data.others
            },
            {
                name:'TOP3-国家',
                type:'pie',
                radius : [0, 60],
                center : ['50%', '55%'],
                label:{show:false},
                labelLine: {
                    show:false,
                    length: 5,
                    length2: 10
                },
                data:data.top
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){

    var pieSeries = [];

    data.map(function(dataObj,i){
        var pieRadius = 20*(i+1);
        var otherValue = 100 - dataObj.value;
        pieSeries.push({
            type:'pie',
            radius : [pieRadius, pieRadius+10],
            center : ['50%', '55%'],
            label:{show:false},
            labelLine: {
                show:false,
                length: 5,
                length2: 10
            },
            data:[dataObj,{value:otherValue}]
        });
    });

    var option = {
        color: ['#ffd653','#6ed5ff','#ff3a83','#2874ff','#ffa24c','#af59ff'],
        tooltip : {
            trigger: 'item',
            formatter:function(params){
                if(params.data.name==null||typeof params.data.name == 'undefined')
                    return null;
                return params.data.name+"<br>进口量："+params.data.value+"<br>占比："+params.data.rate;
            }
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
        series : pieSeries
    };

    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
    var option = {
        tooltip:{
            formatter:function(params){
                var data = params.data;
                var val = data.value;
                var year = data.year;
                return "设计输气能力："+val+"亿方/年：<br>预计投产年份："+year;
            }
        },
        color:['#366DFF','#15C0FE','#FFD200','#FFFFFF'],
        grid:{
            top:40,
            bottom:30
        },
        // legend:{
        //     left : 40,
        //     textStyle:{
        //         color:'#fff'
        //     },
        //     data:data[0]
        // },
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
            data:data[0]
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
        }],
        series: [
            {
                type: 'bar',
                stack:'bar-group',
                barWidth:20,
                data: data[1]
            }
        ]
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
    var option = {
        tooltip:{},
        color:['#366DFF','#15C0FE','#FFD200','#FFFFFF'],
        grid:{
            top:40,
            bottom:30
        },
        legend:{
            left : 40,
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
            data:data[4]
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
        }],
        series: [
            {
                name:data[0][0],
                type: 'bar',
                stack:'bar-group',
                barWidth:30,
                data: data[1]
            },
            {
                name:data[0][1],
                type: 'bar',
                stack:'bar-group',
                data: data[2]
            },
            {
                name:data[0][2],
                type: 'bar',
                stack:'bar-group',
                data: data[3]
            },
            {
                name:data[0][3],
                type: 'bar',
                stack:'bar-group',
                data: data[4]
            }
        ]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}