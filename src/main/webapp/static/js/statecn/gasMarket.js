$(document).ready(function(){
    main();
    getdata('/statecn/gasMarket/chart1.json',chart1);
    getdata('/statecn/gasMarket/chart2.json',chart2);
    getdata('/statecn/gasMarket/chart3.json',chart3);
    getdata('/statecn/gasMarket/chart4.json',chart4);
    getdata('/statecn/gasMarket/chart5.json',chart5);
});

function main(){
    getdata('/statecn/gasMarket/main.json', function(data){
        var data1 = data.map(function(o){
            return [o.value[0], o.value[5], o.name];
        });
        var option = {
            legend: {
                show:false,
                data: ['天然气消费'],
                bottom: 10
            },
            visualMap: {
                type: 'piecewise',
                splitNumber: 3,
                inverse: true,
                seriesIndex:0,
                itemWidth: 20,
    	        itemHeight: 12,
                dimension:1,
                pieces: [{
                    max: 11.9,
                    label:'≤12%',
                    color: '#ffffff'
                }, {
                    min: 12,
                    max: 21.9,
                    label:'12%-22%',
                    color: '#b4e0f3'
                }, {
                    min: 22,
                    label:'≥0.22%',
                    color: '#70b4eb'
                }],
                right: 20,
                top: 40,
                textStyle: {
                    color: '#fff'
                }
            },
            title: {
                text: '城燃分布',
                left: 'center',
                top:40,
                textStyle:{
                    color:'#fff'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                top: 60,
                bottom: 40
            },
            xAxis: {
                type: 'value',
                splitLine: {
                    show:false,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show:false,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            series: [{
                name: '天然气消费',
                type: 'scatter',
                symbolSize: function(data) {
                    return data[0] / 5;//Math.sqrt(data[0]);
                },
                label: {
                    normal: {
                        show: true,
                        formatter: function(param) {
                            return param.data[2];
                        },
                        color:'#fff',
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(25, 100, 150, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(129, 227, 238)'
                        }, {
                            offset: 1,
                            color: 'rgb(25, 183, 207)'
                        }])
                    }
                },
                data: data1
            }]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}

function chart1(data){
    var option = {
        tooltip:{},
        grid: {
	        left: '10%',
	        right:'10%',
	        top:'10%',
	        bottom:'25%',
	        //containLabel: true
	    },
	    legend: { //图例组件，颜色和名字
	        itemGap: 12, //图例每项之间的间隔
	        itemWidth: 16,
	        itemHeight: 8,
	        x:'center',
	        bottom:'1%',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },
        xAxis: {
        	 axisLine: {
 	            lineStyle: {
 	                color: '#59ebe8'
 	            }
 	        },
 	       axisLabel: {
 	            inside: false,
 	            textStyle: {
 	                color: '#fff',
 	                fontWeight: 'normal',
 	                fontSize: 10
 	            },
 	        },
            splitLine: {
                show: false
            },
            type: 'category',
            data:data[1]
        },
        yAxis: [{
        	 axisLine: {
  	            lineStyle: {
  	                color: '#59ebe8'
  	            }
  	        },
  	       axisLabel: {
  	            inside: false,
  	            textStyle: {
  	                color: '#fff',
  	                fontWeight: 'normal',
  	                fontSize: 10
  	            },
  	        },
            splitLine:{
                show:false
            },
            type: 'value'
        },{
        	 axisLine: {
  	            lineStyle: {
  	                color: '#59ebe8'
  	            }
  	        },
  	       axisLabel: {
  	            inside: false,
  	            textStyle: {
  	                color: '#fff',
  	                fontWeight: 'normal',
  	                fontSize: 10
  	            },
  	          formatter:function(v){
                  return v + '%';
              }
  	        },
            splitLine:{
                show:false
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
                        color:'#ff0'
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
    var itemStyle = {
        normal: {},
        emphasis: {
            barBorderWidth: 1,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
        }
    };
    for(var i = 0; i < data[3].length; i++)
        data[3][i] = -1*data[3][i];
    var option = {
        color:['#36b8ff','#61ffff','#e1e1e2','#ffa24c'],
        grid: {
	        left: '10%',
	        right:'10%',
	        top:'10%',
	        bottom:'25%',
	        //containLabel: true
	    },
	    legend: { //图例组件，颜色和名字
	        itemGap: 12, //图例每项之间的间隔
	        itemWidth: 16,
	        itemHeight: 8,
	        x:'center',
	        bottom:'1%',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },
        tooltip: {},
        xAxis: {
        	 axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
   	            },
   	        },
            splitLine: {
                show: false
            },
            type: 'category',
            silent: false,
            splitArea: {show: false},
            data:data[1]
        },
        yAxis: [{
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
  	            lineStyle: {
  	                color: '#59ebe8'
  	            }
  	        },
  	       axisLabel: {
  	            inside: false,
  	            textStyle: {
  	                color: '#fff',
  	                fontWeight: 'normal',
  	                fontSize: 10
  	            },
  	        }
        }, {
            invese:true,
            position: 'left',
            nameLocation: 'start',
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
  	            lineStyle: {
  	                color: '#59ebe8'
  	            }
  	        },
  	       axisLabel: {
  	            inside: false,
  	            textStyle: {
  	                color: '#fff',
  	                fontWeight: 'normal',
  	                fontSize: 10
  	            },
  	        },
        },{
        	 axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
   	            },
   	         formatter:function(v){
                 return v + '%';
             }
   	        },
            splitLine:{
                show:false
            },
        }],
        series: [{
            name: data[0][0],
            type: 'bar',
            stack:'one',
            itemStyle: itemStyle,
            data: data[2]
        }, {
            name: data[0][1],
            type: 'bar',
            stack:'one',
            itemStyle: itemStyle,
            data: data[3]
        }, {
            name: data[0][2],
            yAxisIndex:0,
            type: 'line',
            showSymbol:false,
            data: data[4]
        }, {
            name: data[0][3],

            yAxisIndex:2,
            type: 'line',
            data: data[5]
        }]
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
            data:data[i]
        };
        seriesData.push(o);
    }
    var option = {
        tooltip:{},
        color:['#e1e1e2','#ffd300','#7b7cff','#463ffe','#386efe','#ff3481'],
        grid: {
	        left: '10%',
	        right:'3%',
	        top:'10%',
	        bottom:'32%',
	        //containLabel: true
	    },
	    legend: { //图例组件，颜色和名字
	        itemGap: 12, //图例每项之间的间隔
	        itemWidth: 16,
	        itemHeight: 8,
	        x:'center',
	        bottom:'1%',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },
        xAxis: {
        	axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
   	            }
   	        },
            splitLine: {
                show: false
            },
            type: 'category',
            data:$chart.xtime(data[1])
        },
        yAxis: {
        	axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
   	            }
   	        },
            axisTick:{
                show:true
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
    var seriesData = [];
    for(var i = 2; i < data.length; i++){
        var o = {
            name:data[0][i-2],
            type: 'line',
            data: data[i]
        };
        seriesData.push(o);
    }
    var option = {
        tooltip:{},
        color:['#ff3481','#ffa24c','#61ffff','#2874ff','#ac9857','#8121dd'],
        grid: {
	        left: '10%',
	        right:'3%',
	        top:'10%',
	        bottom:'36%',
	        //containLabel: true
	    },
	    legend: { //图例组件，颜色和名字
	        itemGap: 12, //图例每项之间的间隔
	        itemWidth: 16,
	        itemHeight: 8,
	        x:'center',
	        bottom:'1%',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },
        xAxis: {
        	axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
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
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
   	            },
   	         formatter:function(val){ return val + '%'; },
   	        },
            splitLine:{
                show:false
            },
            type: 'value'
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
    var option = {
        tooltip:{
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        color:['#36b8ff','#61ffff','#ff0'],
        grid: {
	        left: '10%',
	        right:'3%',
	        top:'10%',
	        bottom:'27%',
	        //containLabel: true
	    },
	    legend: { //图例组件，颜色和名字
	        itemGap: 12, //图例每项之间的间隔
	        itemWidth: 16,
	        itemHeight: 8,
	        x:'center',
	        bottom:'1%',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },
        xAxis: {
        	axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
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
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
   	            }
   	        },
            splitLine:{
                show:false
            },
            type: 'value'
        },
        series: [
            {
                name:data[0][0],
                type: 'bar',
                data: data[2]
            },
            {
                name:data[0][1],
                type: 'bar',
                data: data[3]
            },
            {
                name:data[0][2],
                type: 'bar',
                data: data[4]
            },
        ]
    };
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
    myChart.on('click', function (params) {
        gourl('gasMarketDetail5');
    });
}