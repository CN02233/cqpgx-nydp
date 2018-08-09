$(document).ready(function(){
    // main();
    getdata('/statecn/invest/main.json',mapChart);
    getdata('/statecn/invest/bidCompMapInfo.json',chart1);
    getdata('/statecn/invest/chart2.json',chart2);
    getdata('/statecn/invest/chart3.json',chart3);
});

function mapChart(data){
    var color = ["#3FBBFA", "#309FFC", "#1154FF", "#2C2D57"];
    var regionCss = [{name:"China", itemStyle:{color:'#ffa24c'}}];

    var regions = [];
    data[1].map(function(areaData,i){
        var value = areaData[2];
        var colorIndex = Math.floor(value/300);
        console.log(colorIndex);
        regions.push({
            name: data[0][i],
            itemStyle: {
                areaColor: color[colorIndex]
            }
        });
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
            emphasis:{
                label:{
                    position:'left',
                    show:false,
                    formatter:'{c}'
                }
            },
            roam: true,
            regions: regions,
            itemStyle: {
                normal: {
                    areaColor: '#5DF1F9',
                    borderColor: 'white',
                    borderWidth:1
                }
            }
            // itemStyle: {
            //     normal: {
            //         areaColor: 'transparent',
            //         borderColor: '#3fdaff',
            //         borderWidth: 1,
            //         shadowColor: 'rgba(63, 218, 255, 0.3)',
            //         shadowBlur: 10
            //     },
            //     emphasis: {
            //         areaColor: '#2B91B7',
            //     }
            // }
        },
        tooltip:{
            formatter:function(params){
                var updateCount = "累计至2017:"+params.data[2];
                var totalCount = "新增产能:"+params.data[3];
                return updateCount+"<br>"+totalCount
            }
        },
        series : [
            {
                name: '新增产能',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: data[1],
                // data: [],
                symbolSize: function (val) {
                    return 15;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {normal: { position: 'left', show: false }},
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
}

function chart1(data){
    var option = {
        tooltip:{},
        grid:{left:40},
        legend:{
            left : 50,
            icon: 'rect', //设置图例的图形形状，circle为圆，rect为矩形
            itemWidth: 15, //图例标记的图形宽度[ default: 25 ]
            // itemHeight: 5, //图例标记的图形高度。[ default: 14 ]
            // itemGap: 13, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。[ default: 10 ]
            data: data[0],
            // right: '4%', //图例组件离容器右侧的距离
            textStyle: {
                // fontSize: 6,
                color: '#F1F1F3'
            }
        },
        color:['#69D5FF','#216EFF','#FFA33E'],
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
            // axisLabel: {
            //     textStyle: {
            //         color: '#fff'
            //     },
            //     formatter:function(v){
            //         return v + '%';
            //     }
            // },
            type: 'value'
        },
        series: [
            {
                name:data[0][0],
                type:'line',
                symbolSize:0,
                // itemStyle:{
                //     normal:{
                //         color:'#8121dd'
                //     }
                // },
                data: data[1]
            },
            {
                name:data[0][1],
                type:'line',
                symbolSize:0,
                // itemStyle:{
                //     normal:{
                //         color:'#8121dd'
                //     }
                // },
                data: data[2]
            },
            {
                name:data[0][2],
                type:'line',
                symbolSize:0,
                // itemStyle:{
                //     normal:{
                //         color:'#8121dd'
                //     }
                // },
                data: data[3]
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
    var seriesData = [];
    for(var i = 0; i < data[0].length; i++){
        var o = {
            name:data[0][i],
            type:'bar',
            stack: 'barGroup',
            barWidth:15,
            areaStyle:{},
            data:data[i+2]
        };
        seriesData.push(o);
    }
    var option = {
        tooltip:{},
        grid:{left:40},
        color:['#FFD743','#2AB7FF','#30FFFE','#216FFF'],
        legend:{
            left : 50,
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
            axisTick:{
                show:false
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
            splitLine: {
                show: false
            },
            axisTick:{
                show:false
            },
            type: 'value'
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
    var seriesData = [];
    for(var i = 0; i < data[0].length; i++){
        var o = {
            name:data[0][i],
            type:'bar',
            stack: 'barGroup',
            barWidth:15,
            areaStyle:{},
            data:data[i+2]
        };
        seriesData.push(o);
    }
    var option = {
        tooltip:{},
        grid:{left:40},
        color:['#28B7FF','#FFA33F','#FFD844'],
        legend:{
            left : 50,
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
            axisTick:{
                show:false
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
            splitLine: {
                show: false
            },
            axisTick:{
                show:false
            },
            type: 'value'
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}
