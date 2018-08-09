$(document).ready(function(){
	main();
	chart1();
	chart2();
	getdata('/pattern/supply/chart3.json',chart3);
	chart4();
	chart5();
});

function chart1(){
	option = {
		    //backgroundColor: '#394056',
		    tooltip: {
		        trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
		        axisPointer: {
		            lineStyle: {
		                color: '#57617B'
		            }
		        }
		    },
		    legend: {
		        icon: 'rect', //设置图例的图形形状，circle为圆，rect为矩形
		        itemWidth: 14, //图例标记的图形宽度[ default: 25 ] 
		        itemHeight: 5, //图例标记的图形高度。[ default: 14 ] 
		        itemGap: 13, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。[ default: 10 ] 
		        data: ['产量', '储量', '储采比'],
		        right: '4%', //图例组件离容器右侧的距离
		        textStyle: {
		            fontSize: 6,
		            color: '#F1F1F3'
		        }
		    },
		    grid: {
		        left: '3%', //grid 组件离容器左侧的距离。
		        right: '4%', //grid 组件离容器右侧的距离。
		        top: '10%', //grid 组件离容器上侧的距离。
		        bottom: '3%', //grid 组件离容器下侧的距离。
		        containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ] 
		    },
		    xAxis: [{
		        type: 'category',
		        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
		        axisLine: {
		            lineStyle: {
		                color: '#57617B' //坐标轴线线的颜色。
		            }
		        },
		        axisLabel: {
	                textStyle: {
				                    color: '#fff',
				                    fontSize:6
				                },
				    //interval: 0
		        },
	            //去掉辅助线
			    splitLine: {
		            show: false
		        },
		        data: ['1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年']
		    }],
		    yAxis: [{
		        type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
		        //name: '千桶/日', //坐标轴名称。
		        axisTick: {
		            show: false //是否显示坐标轴刻度
		        },
		        axisLine: {
		            lineStyle: {
		                color: '#57617B' //坐标轴线线的颜色
		            }
		        },
		        axisLabel: {
		            //margin: 10, //刻度标签与轴线之间的距离
		            textStyle: {
		                color: '#fff',
		                fontSize: 6 //文字的字体大小
		            }
		        },
		        //去掉辅助线
			    splitLine: {
		            show: false
		        },
		        /*splitLine: {
		            lineStyle: {
		                color: '#57617B' //分隔线颜色设置
		            }
		        }*/
		    },
		    {
		        type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
		        //name: '单位', //坐标轴名称。
		        axisTick: {
		            show: false //是否显示坐标轴刻度
		        },
		        axisLine: {
		            lineStyle: {
		                color: '#57617B' //坐标轴线线的颜色
		            }
		        },
		        axisLabel: {
		            //margin: 10, //刻度标签与轴线之间的距离
		            textStyle: {
		                color: '#fff',
		                fontSize: 6 //文字的字体大小
		            }
		        },
		        //去掉辅助线
			    splitLine: {
		            show: false
		        },
		        /*splitLine: {
		            lineStyle: {
		                color: '#57617B' //分隔线颜色设置
		            }
		        }*/
		    },
		    {
		        type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
		        //name: '单位', //坐标轴名称。
		        axisTick: {
		            show: false //是否显示坐标轴刻度
		        },
		        axisLine: {
		            lineStyle: {
		                color: '#57617B' //坐标轴线线的颜色
		            }
		        },
		        axisLabel: {
		            //margin: 10, //刻度标签与轴线之间的距离
		            textStyle: {
		                color: '#fff',
		                fontSize: 6 //文字的字体大小
		            }
		        },
		        //去掉辅助线
			    splitLine: {
		            show: false
		        },
		        /*splitLine: {
		            lineStyle: {
		                color: '#57617B' //分隔线颜色设置
		            }
		        }*/
		    }],
		    series: [{
		        name: '产量', //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
		        yAxisIndex: 0,
		        type: 'line',
		        smooth: true, //是否平滑曲线显示
		        symbol: 'circle', //标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
		        symbolSize: 5, //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ] 
		        showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
		        lineStyle: { //线条样式
		            normal: {
		                width: 1 //线宽。[ default: 2 ] 
		            }
		        },
		        areaStyle: { //区域填充样式
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
		                    offset: 0, // 0% 处的颜色
		                    color: 'rgba(137, 189, 27, 0.3)'
		                }, {
		                    offset: 0.8, // 80% 处的颜色
		                    color: 'rgba(137, 189, 27, 0)'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
		                shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
		            }
		        },
		        itemStyle: { //折线拐点标志的样式
		            normal: {
		                color: 'rgb(137,189,27)',
		                borderColor: 'rgba(137,189,2,0.27)', //图形的描边颜色。支持的格式同 color
		                borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ] 

		            }
		        },
		        data: [2777.5679,2831.3882,2844.6809,2892.4381,2933.6066,2992.6482,3174.7311,3215.7614,3216.7655,3217.5688,3256.8432,3310.1477,3351.0350,3405.6385,3485.7755,3641.9637,3710.5002,3741.6778,3813.9953,3805.3745,4076.9661,4074.1847,4155.2288,4216.4426,4245.9577,4308.8351,3999.1559,3845.9405]
		    }, {
		        name: '储量',
		        yAxisIndex: 1,
		        type: 'line',
		        smooth: true,
		        symbol: 'circle',
		        symbolSize: 5,
		        showSymbol: false,
		        lineStyle: {
		            normal: {
		                width: 1
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: 'rgba(0, 136, 212, 0.3)'
		                }, {
		                    offset: 0.8,
		                    color: 'rgba(0, 136, 212, 0)'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		                shadowBlur: 10
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: 'rgb(0,136,212)',
		                borderColor: 'rgba(0,136,212,0.2)',
		                borderWidth: 12

		            }
		        },
		        data: [16.0197,15.5132,15.1931,16.4353,16.2579,16.3551,16.4445,17.0215,17.4228,15.1119,15.1903,15.4115,15.5087,15.4757,18.2589,18.2497,20.2203,20.7625,21.1869,21.6176,23.2680,23.7468,24.4278,24.6825,25.1665,25.6265,25.6638,25.6638]
		    }, {
		        name: '储采比',
		        yAxisIndex: 1,
		        type: 'line',
		        smooth: true,
		        symbol: 'circle',
		        symbolSize: 5,
		        showSymbol: false,
		        lineStyle: {
		            normal: {
		                width: 1
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: 'rgba(219, 50, 51, 0.3)'
		                }, {
		                    offset: 0.8,
		                    color: 'rgba(219, 50, 51, 0)'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		                shadowBlur: 10
		            }
		        },
		        itemStyle: {
		            normal: {

		                color: 'rgb(219,50,51)',
		                borderColor: 'rgba(219,50,51,0.2)',
		                borderWidth: 12
		            }
		        },
		        data: [15.8015,15.0110,14.6326,15.5676,15.1835,14.9728,14.1912,14.5018,14.8391,12.8676,12.7784,12.7557,12.6795,12.4497,14.3510,13.7286,14.9301,15.2027,15.2193,15.5639,15.6361,15.9688,16.1064,16.0380,16.2388,16.2943,17.5817,18.2821]
		    }, ]
		};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
    setH('chart1');
}


function chart2(){
	
	
	
	
	option = {
		    "tooltip": {
		      "trigger": "axis",
		      "axisPointer": {
		        "type": "cross",
		        "crossStyle": {
		          "color": "#384757"
		        }
		      }
		    },
		    "legend": {
		      "data": [
		        {
		          "name": "产量",
		          "icon": "circle",
		          "textStyle": {
		            "color": "#F1F1F3",
		            fontSize: 6
		          }
		        },
		        {
		          "name": "消费量",
		          "icon": "circle",
		          "textStyle": {
		            "color": "#F1F1F3",
		            fontSize: 6
		          }
		        },
		        {
		          "name": "PI",
		          "icon": "circle",
		          "textStyle": {
		            "color": "#F1F1F3",
		            fontSize: 6
		          }
		        }
		      ],
		      "top": "10%",
		      "textStyle": {
		        "color": "#fff"
		      }
		    },
		    "xAxis": [
		      {
		        "type": "category",
		        "data": ['1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'
		        ],
		        "axisPointer": {
		          "type": "shadow"
		        },
		        "axisLabel": {
		          "show": true,
		          "textStyle": {
		            "color": "#fff",
		            fontSize: 6
		          }
		        },
		        //去掉辅助线
			    "splitLine": {
		            "show": false
		        },
		      }
		    ],
		    "yAxis": [
		      {
		        "type": "value",
		        //"name": "千桶/日",
		        "nameTextStyle": {
		          "color": "#7d838b"
		        },
		        "axisLabel": {
		          "show": true,
		          "textStyle": {
		            color: '#fff',
		            fontSize:6
		          }
		        },
		        //去掉辅助线
			    "splitLine": {
		            "show": false
		        },
		        /*
		        "splitLine": {
		          "lineStyle": {
		            "color": "#7d838b"
		          }
		        }
		        */
		        "axisLine": {
			          "show": true
			        },
		      },
		      {
		        "type": "value",
		        //"name": "完成率",
		        "show": true,
		        "axisLabel": {
		          "show": true,
		          formatter: '{value} %',
		          "textStyle": {
		            color: '#fff',
		            fontSize:6
		          }
		        },
		        //去掉辅助线
			    splitLine: {
		            show: false
		        },
		      }
		    ],
		    grid: {
		        left: '3%', //grid 组件离容器左侧的距离。
		        right: '4%', //grid 组件离容器右侧的距离。
		        top: '10%', //grid 组件离容器上侧的距离。
		        bottom: '3%', //grid 组件离容器下侧的距离。
		        containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ] 
		    },
		    "series": [
		      {
		        "name": "产量",
		        "type": "bar",
		        "data": [2778,2831,2845,2892,2934,2993,3175,3216,3217,3218,3257,3310,3351,3406,3486,3642,3711,3742,3814,3805,4077,4074,4155,4216,4246,4309,3999,3846],
		        "barWidth": "auto",
		        "itemStyle": {
		          "normal": {
		            "color": {
		              "type": "linear",
		              "x": 0,
		              "y": 0,
		              "x2": 0,
		              "y2": 1,
		              "colorStops": [
		                {
		                  "offset": 0,
		                  "color": "rgba(255,37,117,0.7)"
		                },
		                {
		                  "offset": 0.5,
		                  "color": "rgba(0,133,245,0.7)"
		                },
		                {
		                  "offset": 1,
		                  "color": "rgba(0,133,245,0.3)"
		                }
		              ],
		              "globalCoord": false
		            }
		          }
		        }
		      },
		      {
		        "name": "消费量",
		        "type": "bar",
		        "data": [2297,2491,2705,3013,3069,3342,3660,4007,4139,4387,4697,4810,5205,5795,6755,6900,7432,7808,7941,8278,9436,9796,10230,10734,11209,11986,12302,12799],
		        "barWidth": "auto",
		        "itemStyle": {
		          "normal": {
		            "color": {
		              "type": "linear",
		              "x": 0,
		              "y": 0,
		              "x2": 0,
		              "y2": 1,
		              "colorStops": [
		                {
		                  "offset": 0,
		                  "color": "rgba(0,120,30,0.7)"
		                },
		                {
		                  "offset": 0.5,
		                  "color": "rgba(50,60,130,0.7)"
		                },
		                {
		                  "offset": 1,
		                  "color": "rgba(150,60,190,0.3)"
		                }
		              ],
		              "globalCoord": false
		            }
		          }
		        },
		        "barGap": "0"
		      },
		      {
		        "name": "PI",
		        "type": "line",
		        symbol: 'circle',
		        "yAxisIndex": 1,
		        "data": [120.9,113.7,105.2,96.0,95.6,89.5,86.7,80.2,77.7,73.3,69.3,68.8,64.4,58.8,51.6,52.8,49.9,47.9,48.0,46.0,43.2,41.6,40.6,39.3,37.9,35.9,32.5,30.0],
		        "itemStyle": {
		          "normal": {
		            "color": "#ffaa00"
		          }
		        },
		        "smooth": true
		      }
		    ]
		};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
    setH('chart2');
}

function chart3(data){
	var xData = data[1];
	var lineData1 = data[2];
	var lineData2 = data[3];
	var barData = data[4];
	option = {
			
			color: ["#67E0E3", "#37A2DA", "#FFDB5C", "#fb7293", "#E690D1", "#9d96f5", "#96BFFF"],
			textStyle: {
		        color: 'white'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['石油','天然气','煤炭','核能','水电','其他可再生能源'],
		        textStyle: {
				            color: 'white',
				            fontSize: 6
					    	}
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        top: '20%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
		            axisLabel: {
			                textStyle: {
						                    color: '#fff',
						                    fontSize:6
						                }
		            },
		            //去掉辅助线
				    splitLine: {
			            show: false
			        }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel: {
			                formatter: '{value}',
			                textStyle: {
						                    color: '#fff',
						                    fontSize:6
						                }
		            },
		            //去掉辅助线
				    splitLine: {
			            show: false
			        }
		        }
		    ],
		    series : [
		        {
		            name:'石油',
		            type:'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[148.8,150.8,163.4,179.1,195.5,200.8,213.7,228.8,234.0,252.8,281.7,329.0,334.9,359.9,377.7,385.5,400.0,455.2,472.1,494.9,516.8,538.1,573.5,587.2,608.4]
		        },
		        {
		            name:'天然气',
		            type:'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[14.5,15.2,15.4,16.1,17.0,17.6,18.6,21.2,23.8,25.3,29.4,34.4,40.4,49.7,61.1,70.4,77.6,93.6,116.2,129.7,147.8,162.0,167.4,180.1,206.7]
		        },
		        {
		            name:'煤炭',
		            type:'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[616.5,657.1,665.2,696.1,682.0,676.8,696.4,706.1,742.5,814.1,970.2,1131.2,1324.6,1454.7,1584.2,1609.3,1685.8,1748.9,1903.9,1927.8,1969.1,1954.5,1914.0,1889.1,1892.6]
		        },
		        {
		            name:'核能',
		            type:'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[0.4,3.3,2.9,3.2,3.3,3.2,3.4,3.8,4.0,5.7,9.8,11.4,12.0,12.4,14.1,15.5,15.9,16.7,19.5,22.0,25.3,30.0,38.6,48.3,56.2]
		        },
		        {
		            name:'水电',
		            type:'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            label: {
		                normal: {
		                    //show: true,
		                    position: 'top'
		                }
		            },
		            areaStyle: {normal: {}},
		            data:[34.4,37.9,43.1,42.5,44.3,45.0,44.5,50.3,62.8,65.2,64.2,80.0,89.8,98.6,109.8,144.1,139.3,161.0,155.7,195.2,205.8,237.8,252.2,261.0,261.5]
		        },
		        {
		            name:'其他可再生能源',
		            type:'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            label: {
		                normal: {
		                    //show: true,
		                    position: 'top'
		                }
		            },
		            areaStyle: {normal: {}},
		            data:[0.1,0.2,0.8,0.4,0.7,0.6,0.7,0.7,0.7,0.8,0.8,0.9,1.7,2.5,3.5,6.4,11.0,15.9,22.8,29.4,42.3,51.1,64.1,81.7,106.7]
		        }
		    ]
		};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
    setH('chart3');
}

function chart4(){
	option = {
		    //backgroundColor: "#fff",
		    color: ["#37A2DA", "#E062AE", "#96BFFF"],
		    //color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
		    
		    textStyle: {
		        color: 'white',
		        fontSize: 6
			},
		    tooltip: {
		        trigger: 'axis',
		    },
		    legend: {
		        data:['太阳能','风能','地热、生物能'],
		        textStyle: {
		            color: 'white',
		            fontSize: 6
			    	}
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        top: '10%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
		        axisLabel: {
	                textStyle: {
				                    color: '#fff',
				                    fontSize:6
	                }
		        },
		        //去掉辅助线
			    splitLine: {
		            show: false
		        },
		    },
		    yAxis: {
		        type: 'value',
		        //去掉辅助线
			    splitLine: {
		            show: false
		        },
		        axisLabel: {
	                textStyle: {
				                    color: '#fff',
				                    fontSize:6
	                }
		        }
		    },
		    series: [{
		        name:'太阳能',
		        type: 'line',
		        smooth: true,
		         stack: '总量',
		        symbolSize: 1,
		        symbol: 'circle',
		        areaStyle: {
		            normal: {
		                opacity: "0.4",
		            }
		        },
		        data: [0.1,0.1,0.1,0.1,0.1,0.2,0.3,0.7,2.6,3.6,8.4,23.5,43.6,61.7,108.2]
		    }, {
		        name:'风能',
		        type: 'line',
		        smooth: true,
		         stack: '总量',
		        symbolSize: 1,
		        symbol: 'circle',
		        areaStyle: {
		            normal: {
		                opacity: "0.4",
		            }
		        },
		        data: [1.0,1.3,1.9,3.7,5.5,13.1,27.6,44.6,70.3,96.0,141.2,156.1,185.8,237.1,286.1]
		    }, {
		        name:'地热、生物能',
		        type: 'line',
		        smooth: true,
		         stack: '总量',
		        symbolSize: 1,
		        symbol: 'circle',
		        areaStyle: {
		            normal: {
		                opacity: "0.4",
		            }
		        },
		        data: [2.5,2.5,5.3,7.1,9.9,14.9,20.9,24.9,27.7,30.5,37.3,46.4,54.1,62.1,77.4]
		    }]
		};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
    setH('chart4');
}

function main(){
	option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: function (params) {
	            var value = (params.value + '').split('.');
	            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
	                    + '.' + value[1];
	            return params.seriesName + '<br/>' + params.name + ' : ' + value;
	        }
	    },
	    visualMap: {
	        min: 0,
	        max: 1000000,
	        text:['High','Low'],
	        realtime: false,
	        calculable: true,
	        color: ['orangered','yellow','lightskyblue']
	    },
	    series: [
	        {
	            name: 'World Population (2010)',
	            type: 'map',
	            mapType: 'world',
	            roam: true,
	            itemStyle:{
	                emphasis:{label:{show:true}}
	            },
	            data:[
	                {name: 'Afghanistan', value: 28397.812},
	                {name: 'Angola', value: 19549.124},
	                {name: 'Albania', value: 3150.143},
	                {name: 'United Arab Emirates', value: 8441.537},
	                {name: 'Argentina', value: 40374.224},
	                {name: 'Armenia', value: 2963.496},
	                {name: 'French Southern and Antarctic Lands', value: 268.065},
	                {name: 'Australia', value: 22404.488},
	                {name: 'Austria', value: 8401.924},
	                {name: 'Azerbaijan', value: 9094.718},
	                {name: 'Burundi', value: 9232.753},
	                {name: 'Belgium', value: 10941.288},
	                {name: 'Benin', value: 9509.798},
	                {name: 'Burkina Faso', value: 15540.284},
	                {name: 'Bangladesh', value: 151125.475},
	                {name: 'Bulgaria', value: 7389.175},
	                {name: 'The Bahamas', value: 66402.316},
	                {name: 'Bosnia and Herzegovina', value: 3845.929},
	                {name: 'Belarus', value: 9491.07},
	                {name: 'Belize', value: 308.595},
	                {name: 'Bermuda', value: 64.951},
	                {name: 'Bolivia', value: 716.939},
	                {name: 'Brazil', value: 195210.154},
	                {name: 'Brunei', value: 27.223},
	                {name: 'Bhutan', value: 716.939},
	                {name: 'Botswana', value: 1969.341},
	                {name: 'Central African Republic', value: 4349.921},
	                {name: 'Canada', value: 34126.24},
	                {name: 'Switzerland', value: 7830.534},
	                {name: 'Chile', value: 17150.76},
	                {name: 'China', value: 1359821.465},
	                {name: 'Ivory Coast', value: 60508.978},
	                {name: 'Cameroon', value: 20624.343},
	                {name: 'Democratic Republic of the Congo', value: 62191.161},
	                {name: 'Republic of the Congo', value: 3573.024},
	                {name: 'Colombia', value: 46444.798},
	                {name: 'Costa Rica', value: 4669.685},
	                {name: 'Cuba', value: 11281.768},
	                {name: 'Northern Cyprus', value: 1.468},
	                {name: 'Cyprus', value: 1103.685},
	                {name: 'Czech Republic', value: 10553.701},
	                {name: 'Germany', value: 83017.404},
	                {name: 'Djibouti', value: 834.036},
	                {name: 'Denmark', value: 5550.959},
	                {name: 'Dominican Republic', value: 10016.797},
	                {name: 'Algeria', value: 37062.82},
	                {name: 'Ecuador', value: 15001.072},
	                {name: 'Egypt', value: 78075.705},
	                {name: 'Eritrea', value: 5741.159},
	                {name: 'Spain', value: 46182.038},
	                {name: 'Estonia', value: 1298.533},
	                {name: 'Ethiopia', value: 87095.281},
	                {name: 'Finland', value: 5367.693},
	                {name: 'Fiji', value: 860.559},
	                {name: 'Falkland Islands', value: 49.581},
	                {name: 'France', value: 63230.866},
	                {name: 'Gabon', value: 1556.222},
	                {name: 'United Kingdom', value: 62066.35},
	                {name: 'Georgia', value: 4388.674},
	                {name: 'Ghana', value: 24262.901},
	                {name: 'Guinea', value: 10876.033},
	                {name: 'Gambia', value: 1680.64},
	                {name: 'Guinea Bissau', value: 10876.033},
	                {name: 'Equatorial Guinea', value: 696.167},
	                {name: 'Greece', value: 11109.999},
	                {name: 'Greenland', value: 56.546},
	                {name: 'Guatemala', value: 14341.576},
	                {name: 'French Guiana', value: 231.169},
	                {name: 'Guyana', value: 786.126},
	                {name: 'Honduras', value: 7621.204},
	                {name: 'Croatia', value: 4338.027},
	                {name: 'Haiti', value: 9896.4},
	                {name: 'Hungary', value: 10014.633},
	                {name: 'Indonesia', value: 240676.485},
	                {name: 'India', value: 1205624.648},
	                {name: 'Ireland', value: 4467.561},
	                {name: 'Iran', value: 240676.485},
	                {name: 'Iraq', value: 30962.38},
	                {name: 'Iceland', value: 318.042},
	                {name: 'Israel', value: 7420.368},
	                {name: 'Italy', value: 60508.978},
	                {name: 'Jamaica', value: 2741.485},
	                {name: 'Jordan', value: 6454.554},
	                {name: 'Japan', value: 127352.833},
	                {name: 'Kazakhstan', value: 15921.127},
	                {name: 'Kenya', value: 40909.194},
	                {name: 'Kyrgyzstan', value: 5334.223},
	                {name: 'Cambodia', value: 14364.931},
	                {name: 'South Korea', value: 51452.352},
	                {name: 'Kosovo', value: 97.743},
	                {name: 'Kuwait', value: 2991.58},
	                {name: 'Laos', value: 6395.713},
	                {name: 'Lebanon', value: 4341.092},
	                {name: 'Liberia', value: 3957.99},
	                {name: 'Libya', value: 6040.612},
	                {name: 'Sri Lanka', value: 20758.779},
	                {name: 'Lesotho', value: 2008.921},
	                {name: 'Lithuania', value: 3068.457},
	                {name: 'Luxembourg', value: 507.885},
	                {name: 'Latvia', value: 2090.519},
	                {name: 'Morocco', value: 31642.36},
	                {name: 'Moldova', value: 103.619},
	                {name: 'Madagascar', value: 21079.532},
	                {name: 'Mexico', value: 117886.404},
	                {name: 'Macedonia', value: 507.885},
	                {name: 'Mali', value: 13985.961},
	                {name: 'Myanmar', value: 51931.231},
	                {name: 'Montenegro', value: 620.078},
	                {name: 'Mongolia', value: 2712.738},
	                {name: 'Mozambique', value: 23967.265},
	                {name: 'Mauritania', value: 3609.42},
	                {name: 'Malawi', value: 15013.694},
	                {name: 'Malaysia', value: 28275.835},
	                {name: 'Namibia', value: 2178.967},
	                {name: 'New Caledonia', value: 246.379},
	                {name: 'Niger', value: 15893.746},
	                {name: 'Nigeria', value: 159707.78},
	                {name: 'Nicaragua', value: 5822.209},
	                {name: 'Netherlands', value: 16615.243},
	                {name: 'Norway', value: 4891.251},
	                {name: 'Nepal', value: 26846.016},
	                {name: 'New Zealand', value: 4368.136},
	                {name: 'Oman', value: 2802.768},
	                {name: 'Pakistan', value: 173149.306},
	                {name: 'Panama', value: 3678.128},
	                {name: 'Peru', value: 29262.83},
	                {name: 'Philippines', value: 93444.322},
	                {name: 'Papua New Guinea', value: 6858.945},
	                {name: 'Poland', value: 38198.754},
	                {name: 'Puerto Rico', value: 3709.671},
	                {name: 'North Korea', value: 1.468},
	                {name: 'Portugal', value: 10589.792},
	                {name: 'Paraguay', value: 6459.721},
	                {name: 'Qatar', value: 1749.713},
	                {name: 'Romania', value: 21861.476},
	                {name: 'Russia', value: 21861.476},
	                {name: 'Rwanda', value: 10836.732},
	                {name: 'Western Sahara', value: 514.648},
	                {name: 'Saudi Arabia', value: 27258.387},
	                {name: 'Sudan', value: 35652.002},
	                {name: 'South Sudan', value: 9940.929},
	                {name: 'Senegal', value: 12950.564},
	                {name: 'Solomon Islands', value: 526.447},
	                {name: 'Sierra Leone', value: 5751.976},
	                {name: 'El Salvador', value: 6218.195},
	                {name: 'Somaliland', value: 9636.173},
	                {name: 'Somalia', value: 9636.173},
	                {name: 'Republic of Serbia', value: 3573.024},
	                {name: 'Suriname', value: 524.96},
	                {name: 'Slovakia', value: 5433.437},
	                {name: 'Slovenia', value: 2054.232},
	                {name: 'Sweden', value: 9382.297},
	                {name: 'Swaziland', value: 1193.148},
	                {name: 'Syria', value: 7830.534},
	                {name: 'Chad', value: 11720.781},
	                {name: 'Togo', value: 6306.014},
	                {name: 'Thailand', value: 66402.316},
	                {name: 'Tajikistan', value: 7627.326},
	                {name: 'Turkmenistan', value: 5041.995},
	                {name: 'East Timor', value: 10016.797},
	                {name: 'Trinidad and Tobago', value: 1328.095},
	                {name: 'Tunisia', value: 10631.83},
	                {name: 'Turkey', value: 72137.546},
	                {name: 'United Republic of Tanzania', value: 44973.33},
	                {name: 'Uganda', value: 33987.213},
	                {name: 'Ukraine', value: 46050.22},
	                {name: 'Uruguay', value: 3371.982},
	                {name: 'United States of America', value: 312247.116},
	                {name: 'Uzbekistan', value: 27769.27},
	                {name: 'Venezuela', value: 236.299},
	                {name: 'Vietnam', value: 89047.397},
	                {name: 'Vanuatu', value: 236.299},
	                {name: 'West Bank', value: 13.565},
	                {name: 'Yemen', value: 22763.008},
	                {name: 'South Africa', value: 51452.352},
	                {name: 'Zambia', value: 13216.985},
	                {name: 'Zimbabwe', value: 13076.978}
	            ]
	        }
	    ]
	};
var myChart = echarts.init($('#main')[0]);
myChart.setOption(option);
setH('main');
}

function chart5(){
	//json数据
	option = 
	{
	    //backgroundColor:'#ffffff',
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
	            color: '#fafafa'
	        }

	    },
	    title: {
	        text: '',
	        subtext: ''
	    },
	    /*
	    legend: {
	        data: ['采掘业','制造业','电力生产','交运仓储','其他行业','生活消费','批发零售业'],
	        textStyle: {
	            color: 'white',
	            fontSize: 6
		    	}
	    },
	    */
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        top: '10%',
	        containLabel: true
	    },
	    /*toolbox: {
	        show: true,
	        feature: {
	            mark: {
	                show: true
	            },
	            dataView: {
	                show: true,
	                readOnly: false
	            },
	            magicType: {
	                show: true,
	                type: ['stack', 'tiled']
	            },
	            restore: {
	                show: true
	            },
	            saveAsImage: {
	                show: true
	            }
	        }
	    },*/
	    calculable: true,
	    yAxis: [{
	        type: 'category',
	        data: ['2003', '2007', '2012', '2016'],
	        axisLabel: {
		                textStyle: {
					                    color: '#fff',
					                    fontSize:6
					                }
		            },
            //去掉辅助线
		    splitLine: {
	            show: false
	        },
	    }],
	    xAxis: [{
	        //name: '量化评定主体数',
	        type: 'value',
	        max: 100,
	        axisLabel: {
			        	formatter: '{value} %',
		                textStyle: {
					                    color: '#fff',
					                    fontSize:6
					                }
            },
            //去掉辅助线
		    splitLine: {
	            show: false
	        },
	    }],

	    series: [
	        {
	            name: '采掘业',
	            type: 'bar',
	            stack: '总量',
	            itemStyle: {
	                normal: {
	                    color: '#3CB371'
	                }
	            },
	            data: [24.03,12.94,9.55,7.40]
	        },
	        {
	            name: '制造业',
	            type: 'bar',
	            stack: '总量',
	            itemStyle: {
	                normal: {
	                    color: '#3fa7d3'
	                }
	            },
	            data: [51.72,43.96,39.20,37.14]
	        },
	        {
	            name: '电力生产',
	            type: 'bar',
	            stack: '总量',
	            itemStyle: {
	                normal: {
	                    color: '#FF6347'
	                }
	            },
	            data: [3.40,11.32,16.05,19.97]
	        },
	        {
	            name: '交运仓储',
	            type: 'bar',
	            stack: '总量',
	            itemStyle: {
	                normal: {
	                    color: '#FF1347'
	                }
	            },
	            data: [2.02,6.67,10.57,12.28]
	        },
	        {
	            name: '其他行业',
	            type: 'bar',
	            stack: '总量',
	            itemStyle: {
	                normal: {
	                    color: '#FF2347'
	                }
	            },
	            data: [0.00,2.29,2.25,2.32]
	        },
	        {
	            name: '生活消费',
	            type: 'bar',
	            stack: '总量',
	            itemStyle: {
	                normal: {
	                    color: '#FF3347'
	                }
	            },
	            data: [16.81,20.39,19.73,18.30]
	        },
	        {
	            name: '批发零售业',
	            type: 'bar',
	            stack: '总量',
	            itemStyle: {
	                normal: {
	                    color: '#FF4347'
	                }
	            },
	            data: [2.03,2.43,2.65,2.59]
	        }
	    ]    

	};
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
    setH('chart5');
}

function setH(id){
	var ids ='#'+ id+' div';
	$(ids).css('height','100%');
	$(ids).css('width','100%');
	$('canvas').css('height','100%');
	$('canvas').css('width','100%');
}