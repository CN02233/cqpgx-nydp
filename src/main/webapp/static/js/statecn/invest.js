$(document).ready(function(){
    // main();
    getdata('/statecn/invest/main.json',mapChart);
    getdata('/statecn/invest/chart1.json',chart1);
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
    		tooltip: {
    	        trigger: 'axis',
    	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
    	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    	        }
    	    },  
        grid:{left:40},
        legend: { //图例组件，颜色和名字
	        itemGap: 12, //图例每项之间的间隔
	        itemWidth: 16,
	        itemHeight: 8,
	        x:'center',
	        bottom:'4%',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },    
	    grid: {
	        left: '12%',
	        right:'10%',
	        top:'10%',
	        bottom:'34%',
	        //containLabel: true
	    },
        color:['#69D5FF','#216EFF','#FFA33E'],
        xAxis: {
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            splitLine: {
                show: false
            },
            type: 'category',
            data:data[1]
        },
        yAxis: {
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            splitLine: {
                show: false
            },
            type: 'value'
        },
        series: [
            {
                name:data[0][0],
                type:'line',
                symbolSize:0,
                data: data[1]
            },
            {
                name:data[0][1],
                type:'line',
                symbolSize:0,
                data: data[2]
            },
            {
                name:data[0][2],
                type:'line',
                symbolSize:0,
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
    		tooltip: {
    	        trigger: 'axis',
    	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
    	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    	        }
    	    },  
        color:['#FFD743','#2AB7FF','#30FFFE','#216FFF'],
        legend: { //图例组件，颜色和名字
	        itemGap: 12, //图例每项之间的间隔
	        itemWidth: 16,
	        itemHeight: 8,
	        x:'center',
	        bottom:'4%',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },    
	    grid: {
	        left: '12%',
	        right:'10%',
	        top:'10%',
	        bottom:'34%',
	        //containLabel: true
	    },
        xAxis: {
        	axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            splitLine: {
                show: false
            },
            axisTick:{
                show:true
            },
            type: 'category',
            data:data[1]
        },
        yAxis: {
        	axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            splitLine: {
                show: false
            },
            axisTick:{
                show:true
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
    		tooltip: {
    	        trigger: 'axis',
    	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
    	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    	        }
    	    },   		
        color:['#28B7FF','#FFA33F','#FFD844'],
        legend: { //图例组件，颜色和名字
	        itemGap: 12, //图例每项之间的间隔
	        itemWidth: 16,
	        itemHeight: 8,
	        x:'center',
	        bottom:'4%',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },    
	    grid: {
	        left: '12%',
	        right:'10%',
	        top:'10%',
	        bottom:'34%',
	        //containLabel: true
	    },
        xAxis: {
        	axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            splitLine: {
                show: false
            },
            axisTick:{
                show:true
            },
            type: 'category',
            data:data[1]
        },
        yAxis: {
        	axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            splitLine: {
                show: false
            },
            axisTick:{
                show:true
            },
            type: 'value'
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}
