$(document).ready(function(){
	getdata('/market/gasMarket/gasMarketDetail5.json',function(d){
		chart1(d.x,d.data1);
		//chart2(d.x,d.data2);
		//chart3(d.x,d.data3);
		//chart4(d.x,d.data4);
		//chart5(d.x,d.data5);
		//chart6(d.x,d.data6);

	});
});

function chart1(xdata, data){
	var lineData1 = data[3];
	var lineData2 = data[4];
	var option =  {
		grid:{
			top:'10%',
			left:'10%',
			right:'10%',
			bottom:'20%',
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		xAxis: [{
			type: "category",
			axisLine: {
				lineStyle: {
					 color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false
			},
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisTick: {
				color: '#0177d4',
				show: true
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 8
				},
			},
			data: xdata,
		}],
		yAxis: [{
			name: '',
			type: 'value',
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontSize:6
				}
			},
			axisLine: {
				show:false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			}
		}],
		series: [
			{
				name: '日K',
				type: 'candlestick',
				data: data,
				markPoint: {
					label: {
						normal: {
							formatter: function (param) {
								return param != null ? Math.round(param.value) : '';
							}
						}
					},
					data: [
						{
							name: 'XX标点',
							coord: ['2013/5/31', 2300],
							value: 2300,
							itemStyle: {
								normal: {color: 'rgb(41,60,85)'}
							}
						},
						{
							name: 'highest value',
							type: 'max',
							valueDim: 'highest'
						},
						{
							name: 'lowest value',
							type: 'min',
							valueDim: 'lowest'
						},
						{
							name: 'average value on close',
							type: 'average',
							valueDim: 'close'
						}
					],
					tooltip: {
						formatter: function (param) {
							return param.name + '<br>' + (param.data.coord || '');
						}
					}
				},
				markLine: {
					symbol: ['none', 'none'],
					data: [
						{
							name: 'min line on close',
							type: 'min',
							valueDim: 'close'
						},
						{
							name: 'max line on close',
							type: 'max',
							valueDim: 'close'
						}
					]
				}
			},
			{
			name: "SC首行成交量",
			type: "line",
			//smooth: true,//值为true折线平滑    值为false折线曲折
			symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
			showSymbol: false,//true 为拐点处有点  false 为没有
			//symbolSize:7,//拐点  点的大小
			lineStyle:{
				width:2
			},
			itemStyle: {
				normal: {
					color: '#00FFFF'
				},
			},
			data: lineData1,

		}, {
			name: "SC首行合约结算价",
			type: "line",
			symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
			showSymbol: false,//true 为拐点处有点  false 为没有
			yAxisIndex: 1,
			lineStyle:{
				width:2
			},
			itemStyle: {
				normal: {
					color: '#E9DC37'
				},
			},
			data: lineData2,
		}]
	};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid:{
	            top:'10%',
	            left:'10%',
	            right:'10%',
	            bottom:'20%',
	        },
		    xAxis: {
		    	type: "category",
		        axisLine: {
		            lineStyle: {
		            	 color: 'rgba(255,255,255,0.6)',
		            }
		        },
		        splitLine: {
		        	show: false,
		            lineStyle: {
		                color: '#fff ',
		            }
		        },
		        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
		        axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontWeight: 'normal',
		                fontSize: 8
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
		    	 min:410,
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: 'rgba(255,255,255,0.6)',
		             }
		         },
		         splitLine: {
		        	 show: false,
		             lineStyle: {
		                 color: '#fff',
		             }
		         },
		         axisLabel: {
		             textStyle: {
		                 color: '#fff',
		                 fontWeight: 'normal',
		                 fontSize: 8
		             },
		             formatter: '{value}'
		         }
		    },
		    series: [{
		        name: '2018/6/22',
		        type: 'line',
		        smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        itemStyle: {
	                normal: {
	                    color: '#54FF9F'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: '2018/6/15',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#FFD700'
	                },
	            },
		        data: lineData2
		    }]
		};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	 var option =  {
		        grid:{
		            top:'10%',
		            left:'10%',
		            right:'10%',
		            bottom:'20%',
		        },
		        tooltip: {
		            trigger: 'axis',
		            axisPointer: { // 坐标轴指示器，坐标轴触发有效
		                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		            }
		        },
		        xAxis: [{
		        	type: "category",
		            axisLine: {
		                lineStyle: {
		                	 color: 'rgba(255,255,255,0.6)',
		                }
		            },
		            splitLine: {
		            	show: false,
		                lineStyle: {
		                    color: '#fff ',
		                }
		            },
		            boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
		            axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		            splitArea: {
		                show: false
		            },
		            axisLabel: {
		                inside: false,
		                textStyle: {
		                    color: '#fff',
		                    fontWeight: 'normal',
		                    fontSize: 8
		                },
		            },
		            data: xData,
		        }],
		        yAxis: [{
		            name: '',
		            type: 'value',
		            position: 'left',
		            axisLabel: {
		                textStyle: {
		                    color: '#fff',
		                    fontStyle: 'normal',
		                    fontSize:6
		                }
		            },
		            axisLine: {
		            	lineStyle:{
		                    color: '#0177d4'
		                }
		            },
		            axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		            splitLine: {
		                show: false
		            }
		        },{
		            type: "value",
		            position: 'right',
		            axisLine: {
		            	lineStyle:{
		                    color: '#fff'
		                }
		            },
		            axisTick: {
		                show: true
		            },
		            axisLine: {
		            	lineStyle:{
		                    color: '#0177d4'
		                }
		            },
		            splitLine: {
		                show: false
		            },
		            axisLabel: {
		                show: true,
		                formatter: function(param) {
		                    return param + '%';
		                },
		                textStyle: {
		                    color: '#fff',
		                    fontSize:6
		                }
		            }
		        }],
		        series: [{
		            name: "期货持仓总量",
		            type: "line",
		            //smooth: true,
			        symbol:'circle',
			        showSymbol: false,
		            itemStyle: {
		                normal: {
		                    color: '#4876FF'
		                },
		            },
		            data: lineData1,

		        }, {
		            name: "非商业净多仓占比",
		            type: "line",
		            //smooth: true,
			        symbol:'circle',
			        showSymbol: false,
		            yAxisIndex: 1,
		            itemStyle: {
		                normal: {
		                    color: '#E9DC37'
		                },
		            },
		            data: lineData2,

		        }]
		    }
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid:{
	            top:'10%',
	            left:'10%',
	            right:'10%',
	            bottom:'20%',
	        },
		    xAxis: {
		    	type: "category",
		        axisLine: {
		            lineStyle: {
		            	 color: 'rgba(255,255,255,0.6)',
		            }
		        },
		        splitLine: {
		        	show: false,
		            lineStyle: {
		                color: '#fff ',
		            }
		        },
		        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
		        axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontWeight: 'normal',
		                fontSize: 8
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: 'rgba(255,255,255,0.6)',
		             }
		         },
		         splitLine: {
		        	 show: false,
		             lineStyle: {
		                 color: '#fff',
		             }
		         },
		         axisLabel: {
		             textStyle: {
		                 color: '#fff',
		                 fontWeight: 'normal',
		                 fontSize: 8
		             },
		             formatter: '{value}'
		         }
		    },
		    series: [{
		        name: 'CL1-CL3',
		        type: 'line',
		        symbol:'circle',
		        showSymbol: false,
		        smooth: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#97FFFF'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: 'CL1-CL6',
		        type: 'line',
		        //smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:1.5
		        },
		        itemStyle: {
	                normal: {
	                    color: '#8A2BE2'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: 'CL1-CLl2',
		        type: 'line',
		        symbol:'circle',
		        showSymbol: false,
		        //smooth: true,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#EEC900'
	                },
	            },
		        data: lineData3
		    }]
		};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid:{
	            top:'10%',
	            left:'10%',
	            right:'10%',
	            bottom:'20%',
	        },
		    xAxis: {
		    	type: "category",
		        axisLine: {
		            lineStyle: {
		            	 color: 'rgba(255,255,255,0.6)',
		            }
		        },
		        splitLine: {
		        	show: false,
		            lineStyle: {
		                color: '#fff ',
		            }
		        },
		        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
		        axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontWeight: 'normal',
		                fontSize: 8
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: 'rgba(255,255,255,0.6)',
		             }
		         },
		         splitLine: {
		        	 show: false,
		             lineStyle: {
		                 color: '#fff',
		             }
		         },
		         axisLabel: {
		             textStyle: {
		                 color: '#fff',
		                 fontWeight: 'normal',
		                 fontSize: 8
		             },
		             formatter: '{value}'
		         }
		    },
		    series: [{
		        name: 'CO1-CO3',
		        type: 'line',
		        smooth: false,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#97FFFF'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: 'CO1-CO6',
		        type: 'line',
		        smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#8A2BE2'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: 'CO1-CO12',
		        type: 'line',
		        smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#EEC900'
	                },
	            },
		        data: lineData3
		    }]
		};
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function chart6(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid:{
	            top:'10%',
	            left:'10%',
	            right:'10%',
	            bottom:'20%',
	        },
		    xAxis: {
		    	type: "category",
		        axisLine: {
		            lineStyle: {
		            	 color: 'rgba(255,255,255,0.6)',
		            }
		        },
		        splitLine: {
		        	show: false,
		            lineStyle: {
		                color: '#fff ',
		            }
		        },
		        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
		        axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontWeight: 'normal',
		                fontSize: 8
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: 'rgba(255,255,255,0.6)',
		             }
		         },
		         splitLine: {
		        	 show: false,
		             lineStyle: {
		                 color: '#fff',
		             }
		         },
		         axisLabel: {
		             textStyle: {
		                 color: '#fff',
		                 fontWeight: 'normal',
		                 fontSize: 8
		             },
		             formatter: '{value}'
		         }
		    },
		    series: [{
		        name: 'Brent-WTI',
		        type: 'line',
		        smooth: false,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#97FFFF'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: 'Brent-Dubai',
		        type: 'line',
		        smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#8A2BE2'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: 'LLS-WTI',
		        type: 'line',
		        smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#EEC900'
	                },
	            },
		        data: lineData3
		    }]
		};
	var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}