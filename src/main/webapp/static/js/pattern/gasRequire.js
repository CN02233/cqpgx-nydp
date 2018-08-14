$(document).ready(function(){
	getdata('/pattern/gasRequire/chart1.json',chart1);
	getdata('/pattern/gasRequire/chart2.json',chart2);
	getdata('/pattern/gasRequire/chart3.json',chart3);
	getdata('/pattern/gasRequire/chart4.json',chart4);
	getdata('/pattern/gasRequire/chart5.json',chart5);
    main();
});

function chart1(data){
	var xData = data[2];
	var barData1 = data[3];
	var barData2 = data[4];
	var barData3 = data[5];
	var barData4 = data[6];
	var barData5 = data[7];
	var barData6 = data[8];
	var barData7 = data[9];
	    var option =  {
	    	textStyle: {
		        color: '#59ebe8'
		    },
	    	grid:{ //网格按实际来调
	            top:'10%',
	            bottom:'5%',
	            left:'5%',
	            right:'5%',
	            containLabel: true
	        },
	        legend: {
	        	show:true,
	            bottom : 15,
	            itemGap: 12, //图例每项之间的间隔
	            itemWidth: 16, //图例宽度
	            itemHeight: 8, //图例高度
	            textStyle: {
	                color:'fff',
	                fontFamily: '微软雅黑',
	                fontSize: 10,
	            },
		        data:['北美洲','中南美洲','欧洲','独联体','中东','非洲','亚太地区']
		    },
	        tooltip: {
	            trigger: 'axis',
	            axisPointer: { // 坐标轴指示器，坐标轴触发有效
	                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	            }
	        },
	        xAxis: [{
	            name: '',
	            type: 'value',
	            position: 'left',
	            max:100,
	            axisLine: {
	                lineStyle: {
	                    color: '#38b8ff'
	                }
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#ffffff',
	                    fontSize: 10
	                },
	                formatter: '{value}%'
	            },
	            //单位
	            axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
	            splitLine: {
	                show: false
	            }
	        }],
	        yAxis: [{
	            position: "bottom",
	            type: "category",
	            axisLine: {
	                lineStyle: {
	                    color: '#38b8ff'
	                }
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#ffffff',
	                    fontSize: 10
	                }
	            },
	            data: xData,
	        }],
	        series: [{
	            name: "北美洲",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#4C2FFF'
	                },
	            },
	            data: barData1,

	        },{
	            name: "中南美洲",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#FFFFFF'
	                },
	            },
	            data: barData2,

	        },{
	            name: "欧洲",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#FFD200'
	                },
	            },
	            data: barData3,

	        },{
	            name: "独联体",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#15C0FF'
	                },
	            },
	            data: barData4,

	        },{
	            name: "中东",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#7C7DFF'
	                },
	            },
	            data: barData5,

	        },{
	            name: "非洲",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#3729FF'
	                },
	            },
	            data: barData6,

	        },{
	            name: "亚太地区",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#366DFF'
	                },
	            },
	            data: barData7,

	        }]
	    }
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	var xData = data[2];
	var barData = data[5];
	var lineData1 = data[3];
	var lineData2 = data[4];
	 var option =  {
			 	textStyle: {
			        color: '#59ebe8'
			    },
			 	grid:{ //网格按实际来调
		            top:'10%',
		            bottom:'5%',
		            left:'5%',
		            right:'5%',
		            containLabel: true
		        },
		        legend: {
		        	show:true,
		            bottom : 15,
		            itemGap: 12, //图例每项之间的间隔
		            itemWidth: 16, //图例宽度
		            itemHeight: 8, //图例高度
		            textStyle: {
		                color:'fff',
		                fontFamily: '微软雅黑',
		                fontSize: 10,
		            },
		            data: ['消费量','占比','增长率'],
			    },
		        tooltip: {
		            trigger: 'axis',
		            axisPointer: { // 坐标轴指示器，坐标轴触发有效
		                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		            }
		        },
		        xAxis: [{
		            position: "bottom",
		            type: "category",
		            axisLine: {
		                lineStyle: {
		                    color: '#38b8ff'
		                }
		            },
		            axisLabel: {
		                textStyle: {
		                    color: '#ffffff',
		                    fontSize: 10
		                }
		            },
		            data: xData,
		        }],
		        yAxis: [{
		        	type: 'value',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            		name:'百万吨石油当量',
            		nameGap:-5,
            		nameTextStyle:{
				    	padding:[0,0,0,45],
				    	align:'center',
				    	color:'#fff',
					},
		            position: 'left',
		            axisLine: {
		                lineStyle: {
		                    color: '#38b8ff'
		                }
		            },
		            axisLabel: {
		                textStyle: {
		                    color: '#ffffff',
		                    fontSize: 10
		                }
		            },
		            //单位
		            axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		            splitLine: {
		                show: false
		            }
		        },{
		            name: '',
		            type: 'value',
		            position: 'right',
		            axisLine: {
		                lineStyle: {
		                    color: '#38b8ff'
		                }
		            },
		            axisLabel: {
		                textStyle: {
		                    color: '#ffffff',
		                    fontSize: 10
		                },
		                formatter: '{value}%'
		            },
		            //单位
		            axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		            splitLine: {
		                show: false
		            }
		        }],
		        series: [{
		            name: '消费量',
		            type: 'pictorialBar',
		            symbol: 'rect',
		            itemStyle: {
		                normal: {
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1,
		                        [
		                            {offset: 0, color: 'rgba(53,108,255,0.8)'},
		                            {offset: 0.4, color: 'rgba(53,108,255,0.6)'},
		                            {offset: 1, color: 'rgba(53,108,255,0.2)'}
		                        ]
		                    )
		                }
		            },
		            symbolRepeat: true,
		            symbolSize: [12, 4],
		            symbolMargin: 1,
		            z: -10,
		            data: barData
		        },{
			        name: '占比',
			        type: 'line',
			        smooth: true,//值为true折线平滑    值为false折线曲折
			        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
			        showSymbol: false,//true 为拐点处有点  false 为没有
			        yAxisIndex: 1,
			        itemStyle: {
		                normal: {
		                    color: '#FFD700'
		                },
		            },
			        data: lineData1
			    }, {
			        name: '增长率',
			        type: 'line',
			        smooth: true,//值为true折线平滑    值为false折线曲折
			        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
			        showSymbol: false,//true 为拐点处有点  false 为没有
			        yAxisIndex: 1,
			        itemStyle: {
		                normal: {
		                    color: '#00afff'
		                },
		            },
			        data: lineData2
			    }]
		    }
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	option = {
			textStyle: {
		        color: '#59ebe8'
		    },
			grid:{ //网格按实际来调
	            top:'10%',
	            bottom:'5%',
	            left:'5%',
	            right:'5%',
	            containLabel: true
	        },
	        color:["#FFFFFF","#FFD200","#15C0FF","#7C7DFF","#3729FF","#366DFF"],
		    legend: {
		    	show:true,
	            bottom : 15,
	            itemGap: 12, //图例每项之间的间隔
	            itemWidth: 16, //图例宽度
	            itemHeight: 8, //图例高度
	            textStyle: {
	                color:'fff',
	                fontFamily: '微软雅黑',
	                fontSize: 10,
	            },
	            data: ['石油','天然气','煤炭','核能','水电','其他可再生能源'],
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    xAxis: {
		    	 position: "bottom",
	             type: "category",
	             axisLine: {
	                 lineStyle: {
	                     color: '#38b8ff'
	                 }
	             },
	             axisLabel: {
	                 textStyle: {
	                     color: '#ffffff',
	                     fontSize: 10
	                 }
	             },
		        data: data[2]
		    },
		    yAxis: {
		    	type: 'value',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        		name:'百万吨石油当量',
        		nameGap:-5,
        		nameTextStyle:{
			    	padding:[0,0,0,45],
			    	align:'center',
			    	color:'#fff',
				},
	            position: 'left',
	            axisLine: {
	                lineStyle: {
	                    color: '#38b8ff'
	                }
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#ffffff',
	                    fontSize: 10
	                }
	            },
	            //单位
	            axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
	            splitLine: {
	                show: false
	            }
	        },
		    series: [{
		        name: '石油',
		        type: 'line',
		      //  z:5,
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                 opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#FFFFFF'
		               // opacity:0
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#FFFFFF',
		                opacity:1
		             //   shadowColor: 'rgba(0, 0, 0, 0.5)',
		            //    shadowBlur: 10
		            }
		        },
		        data: data[3]
		    }, {
		        name: '天然气',
		        type: 'line',
		      //  z:4,
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                 opacity:0
		            }
		        },
		        lineStyle:{
		            normal:{
		                color:'#FFD200'
		               // opacity:0
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#FFD200',
		                 opacity:1
		        //        shadowColor: 'rgba(0, 0, 0, 0.5)',
		        //        shadowBlur: 10
		            }
		        },
		        data: data[4]
		    },{
		        name: '煤炭',
		        type: 'line',
		      //  z:3,
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#15C0FF'
		               // opacity:0
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#15C0FF',
		                 opacity:1
		           //     shadowColor: 'rgba(0, 0, 0, 0.5)',
		          //      shadowBlur: 10
		            }
		        },
		        data: data[5]
		    }, {
		        name: '核能',
		        type: 'line',
		     //   z:2,
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#7C7DFF'
		               // opacity:0
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#7C7DFF',
		                 opacity:1
		            //    shadowColor: 'rgba(0, 0, 0, 0.5)',
		            //    shadowBlur: 10
		            }
		        },
		        data: data[6]
		    }, {
		        name: '水电',
		        type: 'line',
		    //    z:1,
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                 opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#3729FF'
		              //  opacity:0
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#3729FF',
		                 opacity:1
		             //   shadowColor: 'rgba(0, 0, 0, 0.5)',
		             //   shadowBlur: 10
		            }
		        },
		        data: data[7]
		    }, {
		        name: '其他可再生能源',
		        type: 'line',
		    //    z:1,
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                 opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#366DFF'
		              //  opacity:0
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#366DFF',
		                 opacity:1
		             //   shadowColor: 'rgba(0, 0, 0, 0.5)',
		             //   shadowBlur: 10
		            }
		        },
		        data: data[8]
		    }]
		};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	var lineData4 = data[6];
	option = {
			textStyle: {
		        color: '#59ebe8'
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		    	show:true,
	            bottom : 15,
	            itemGap: 12, //图例每项之间的间隔
	            itemWidth: 16, //图例宽度
	            itemHeight: 8, //图例高度
	            textStyle: {
	                color:'fff',
	                fontFamily: '微软雅黑',
	                fontSize: 10,
	            },
	            data: ['美国天然气消费增长率','中国天然气消费增长率','美国GDP增长率','中国GDP增长率']
		    },
		    
		    grid:{ //网格按实际来调
	            top:'10%',
	            bottom:'5%',
	            left:'5%',
	            right:'5%',
	            containLabel: true
	        },
		    xAxis: {
		    	type: "category",
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
		        axisLine: {
	                lineStyle: {
	                    color: '#38b8ff'
	                }
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#ffffff',
	                    fontSize: 10
	                }
	            },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         splitLine: {
		        	 show: false,
		             lineStyle: {
		                 color: '#fff',
		             }
		         },
		         axisLine: {
		                lineStyle: {
		                    color: '#38b8ff'
		                }
	             },
	             axisLabel: {
	            	 	textStyle: {
	                    color: '#ffffff',
	                    fontSize: 10
	                },
	                formatter: '{value}%'
	             },
	             //单位
		    },
		    series: [{
		        name: '美国天然气消费增长率',
		        type: 'line',
		        //smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        itemStyle: {
	                normal: {
	                    color: '#bf9bd7'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: '中国天然气消费增长率',
		        type: 'line',
		       // smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#47adf2'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: '美国GDP增长率',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        lineStyle:{
	                type:'dotted'
	            },
		        itemStyle: {
	                normal: {
	                    color: '#FFD700'
	                },
	            },
		        data: lineData3
		    },
		    {
		        name: '中国GDP增长率',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        lineStyle:{
	                type:'dotted'
	            },
		        itemStyle: {
	                normal: {
	                    color: '#2328e2'
	                },
	            },
		        data: lineData4
		    }]
		};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
	var xData = data[2];
	var barData1 = data[3];
	var barData2 = data[4];
	var barData3 = data[5];
	var barData4 = data[6];
	var barData5 = data[7];
	var barData6 = data[8];
	    var option =  {
    		textStyle: {
		        color: '#59ebe8'
		    },
	    	grid:{ //网格按实际来调
	            top:'10%',
	            bottom:'5%',
	            left:'5%',
	            right:'5%',
	            containLabel: true
	        },
	        legend: {
	        	show:true,
	            bottom : 15,
	            itemGap: 12, //图例每项之间的间隔
	            itemWidth: 16, //图例宽度
	            itemHeight: 8, //图例高度
	            textStyle: {
	                color:'fff',
	                fontFamily: '微软雅黑',
	                fontSize: 10,
	            },
	            data: ['石油','天然气','煤炭','核能','水电','其他可再生能源']
		    },
	        tooltip: {
	            trigger: 'axis',
	            axisPointer: { // 坐标轴指示器，坐标轴触发有效
	                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	            }
	        },
	        xAxis: [{
	            position: "bottom",
	            type: "category",
	            axisLine: {
	                lineStyle: {
	                    color: '#38b8ff'
	                }
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#ffffff',
	                    fontSize: 10
	                }
	            },
	            data: xData,
	        }],
	        yAxis: [{
	            name: '',
	            type: 'value',
	            position: 'left',
	            max:100,
	            axisLine: {
	                lineStyle: {
	                    color: '#38b8ff'
	                }
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#ffffff',
	                    fontSize: 10
	                },
	                formatter: '{value}%'
	            },
	            //单位
	            axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
	            splitLine: {
	                show: false
	            }
	        }],
	        series: [{
	            name: "石油",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#4C2FFF'
	                },
	            },
	            data: barData1,

	        },{
	            name: "天然气",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#FFFFFF'
	                },
	            },
	            data: barData2,

	        },{
	            name: "煤炭",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#FFD200'
	                },
	            },
	            data: barData3,

	        },{
	            name: "核能",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#15C0FF'
	                },
	            },
	            data: barData4,

	        },{
	            name: "水电",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#7C7DFF'
	                },
	            },
	            data: barData5,

	        },{
	            name: "其他可再生能源",
	            type: "bar",
	            barWidth: '30%',
	            stack:'1',
	            itemStyle: {
	                normal: {
	                	 color: '#3729FF'
	                },
	            },
	            data: barData6,

	        }]
	    }
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function main(data){
	var BJData = [
	  		    [{
			        name: '中国',
			        value: 26.65  
			    }, {
			        name: '中国'
			    }],
			    [{
			        name: '伊朗',
			        value: 11.25 
			    }, {
			        name: '中国'
			    }],
			    [{
			        name: '土耳其',
			        value: 6.22 
			    }, {
			        name: '中国'
			    }],
			    [{
			        name: '埃及',
			        value: 5.69 
			    }, {
			        name: '中国'
			    }],
			    [{
			        name: '加拿大',
			        value: 5.41 
			    }, {
			        name: '中国'
			    }],
			    [{
			        name: '沙特阿拉伯',
			        value: 5.25 
			    }, {
			        name: '中国'
			    }],
			    [{
			        name: '德国',
			        value: 4.53 
			    }, {
			        name: '中国'
			    }],
			    [{
			        name: '俄罗斯',
			        value: 3.92  
			    }, {
			        name: '中国'
			    }],
			    [{
			        name: '卡塔尔',
			        value: 3.70 
			    }, {
			        name: '中国'
			    }],
			    [{
			        name: '意大利',
			        value: 3.50 
			    }, {
			        name: '中国'
			    }],
			    [{
			        name: '印度',
			        value: 2.89 
			    }, {
			        name: '中国'
			    }]
			];
	
	var  xxx =  [{"name":"中国","value":[116.2,39.55,26.65]},
	             {"name":"伊朗","value":[51.3,35.44,11.25]},
	             {"name":"土耳其","value":[32.54,39.57,6.22]},
	             {"name":"埃及","value":[31.14,30.01,5.69]},
	             {"name":"加拿大","value":[-75.42,45.27,5.41]},
	             {"name":"沙特阿拉伯","value":[46.42,24.41,5.25]},
	             {"name":"德国","value":[13.25,52.3,4.53]},
	             {"name":"俄罗斯","value":[37.35,55.45,3.92]},
	             {"name":"卡塔尔","value":[51.35,25.15,3.70]},
	             {"name":"意大利","value":[12.29,41.54,3.50]},
	             {"name":"印度","value":[77.13,28.37,2.89]}
	             ];
	
	var as =[{name:"中国",value:["206.74 ","26.65 ","28.96"]},
	         {name:"伊朗",value:["184.38 ","11.25 ","12.22"]},
	         {name:"土耳其",value:["44.42 ","6.22 ","6.76"]},
	         {name:"埃及",value:["48.13 ","5.69 ","6.19"]},
	         {name:"加拿大",value:["99.52 ","5.41 ","5.87"]},
	         {name:"沙特阿拉伯",value:["95.81 ","5.25 ","5.71"]},
	         {name:"德国",value:["77.52 ","4.53 ","4.93"]},
	         {name:"俄罗斯",value:["365.22 ","3.92 ","4.26"]},
	         {name:"卡塔尔",value:["40.75 ","3.70 ","4.02"]},
	         {name:"意大利",value:["62.00 ","3.50 ","3.80"]},
	         {name:"印度",value:["46.60 ","2.89 ","3.15"]}];
	
	/*var sds = []
	for (var j = 0; j < xxx.length; j++) {
		for (var k = 0; k < BJData.length; k++) {
			if (xxx[j].name == BJData[k][0].name) {
				xxx[j].value.push(BJData[k][0].value);
				sds.push(xxx[j]);
			}
		}
	}*/
	//alert(JSON.stringify(sds));

	var ddd =  [{"name":"美国","value":1.96},
	            {"name":"加拿大","value":2.72},
	            {"name":"墨西哥","value":0.58},
	            {"name":"阿根廷","value":0.94},
	            {"name":"巴西","value":0.16},
	            {"name":"智利","value":0.29},
	            {"name":"哥伦比亚","value":0.18},
	            {"name":"厄瓜多尔","value":0.03},
	            {"name":"秘鲁","value":0.18},
	            {"name":"特立尼达和多巴哥","value":11.57},
	            {"name":"委内瑞拉","value":1.01},
	            {"name":"中美洲","value":0.00},
	            {"name":"其他加勒比海国家","value":0.07},
	            {"name":"其他中南美洲国家","value":0.14},
	            {"name":"奥地利","value":0.89},
	            {"name":"比利时","value":1.23},
	            {"name":"保加利亚","value":0.39},
	            {"name":"克罗地亚","value":0.55},
	            {"name":"塞浦路斯","value":0.00},
	            {"name":"捷克共和国","value":0.68},
	            {"name":"丹麦","value":0.48},
	            {"name":"爱沙尼亚","value":0.30},
	            {"name":"芬兰","value":0.29},
	            {"name":"法国","value":0.59},
	            {"name":"德国","value":0.94},
	            {"name":"希腊","value":0.37},
	            {"name":"匈牙利","value":0.88},
	            {"name":"冰岛","value":0.00},
	            {"name":"爱尔兰","value":0.91},
	            {"name":"意大利","value":1.04},
	            {"name":"拉脱维亚","value":0.53},
	            {"name":"立陶宛","value":0.66},
	            {"name":"卢森堡","value":1.19},
	            {"name":"马其顿","value":0.11},
	            {"name":"荷兰","value":1.82},
	            {"name":"挪威","value":0.73},
	            {"name":"波兰","value":0.43},
	            {"name":"葡萄牙","value":0.51},
	            {"name":"罗马尼亚","value":0.52},
	            {"name":"斯洛伐克","value":0.71},
	            {"name":"斯洛文尼亚","value":0.36},
	            {"name":"西班牙","value":0.59},
	            {"name":"瑞典","value":0.07},
	            {"name":"瑞士","value":0.32},
	            {"name":"土耳其","value":0.55},
	            {"name":"英国","value":1.02},
	            {"name":"其他欧洲国家","value":0.01},
	            {"name":"阿塞拜疆","value":0.93},
	            {"name":"白俄罗斯","value":1.63},
	            {"name":"哈萨克斯坦","value":0.76},
	            {"name":"俄罗斯","value":2.54},
	            {"name":"土库曼斯坦","value":4.24},
	            {"name":"乌克兰","value":0.58},
	            {"name":"乌兹别克斯坦","value":1.12},
	            {"name":"其他独联体国家","value":1.06},
	            {"name":"伊朗","value":2.27},
	            {"name":"伊拉克","value":0.27},
	            {"name":"以色列","value":1.02},
	            {"name":"科威特","value":4.61},
	            {"name":"阿曼","value":4.32},
	            {"name":"卡塔尔","value":15.44},
	            {"name":"沙特阿拉伯","value":2.91},
	            {"name":"阿联酋","value":6.54},
	            {"name":"其他中东国家","value":0.21},
	            {"name":"阿尔及利亚","value":0.81},
	            {"name":"埃及","value":0.49},
	            {"name":"摩洛哥","value":0.03},
	            {"name":"南非","value":0.07},
	            {"name":"东非","value":0.02},
	            {"name":"中非","value":0.73},
	            {"name":"西非","value":0.09},
	            {"name":"其他北非国家","value":0.61},
	            {"name":"其他南非国家","value":0.00},
	            {"name":"澳大利亚","value":1.47},
	            {"name":"孟加拉国","value":0.14},
	            {"name":"中国","value":0.15},
	            {"name":"中国香港","value":0.37},
	            {"name":"印度","value":0.03},
	            {"name":"印度尼西亚","value":0.13},
	            {"name":"日本","value":0.79},
	            {"name":"马来西亚","value":1.16},
	            {"name":"新西兰","value":0.89},
	            {"name":"巴基斯坦","value":0.18},
	            {"name":"菲律宾","value":0.03},
	            {"name":"新加坡","value":1.83},
	            {"name":"韩国","value":0.83},
	            {"name":"斯里兰卡","value":0.00},
	            {"name":"中国台湾","value":0.81},
	            {"name":"泰国","value":0.62},
	            {"name":"越南","value":0.09},
	            {"name":"其他亚太地区国家","value":0.03}];
	
	
	    
	    var nameMap = {
				'Afghanistan':'阿富汗',
				'Albania':'阿尔巴尼亚',
				'Algeria':'阿尔及利亚',
				'Andorra':'安道尔',
				'Angola':'安哥拉',
				'Antarctica':'南极洲',
				'Antigua and Barbuda':'安提瓜和巴布达',
				'Argentina':'阿根廷',
				'Armenia':'亚美尼亚',
				'Australia':'澳大利亚',
				'Austria':'奥地利',
				'Azerbaijan':'阿塞拜疆',
				'The Bahamas':'巴哈马',
				'Bahrain':'巴林',
				'Bangladesh':'孟加拉国',
				'Barbados':'巴巴多斯',
				'Belarus':'白俄罗斯',
				'Belgium':'比利时',
				'Belize':'伯利兹',
				'Benin':'贝宁',
				'Bermuda':'百慕大',
				'Bhutan':'不丹',
				'Bolivia':'玻利维亚',
				'Bosnia and Herzegovina':'波斯尼亚和黑塞哥维那',
				'Botswana':'博茨瓦纳',
				'Brazil':'巴西',
				'Brunei':'文莱',
				'Bulgaria':'保加利亚',
				'Burkina Faso':'布基纳法索',
				'Burundi':'布隆迪',
				'Cambodia':'柬埔寨',
				'Cameroon':'喀麦隆',
				'Canada':'加拿大',
				'Cape Verde':'佛得角',
				'Central African Republic':'中非共和国',
				'Chad':'乍得',
				'Chile':'智利',
				'China':'中国',
				'Colombia':'哥伦比亚',
				'Comoros':'科摩罗',
				'Republic of the Congo':'刚果共和国',
				'Costa Rica':'哥斯达黎加',
				'Croatia':'克罗地亚',
				'Cuba':'古巴',
				'Cyprus':'塞浦路斯',
				'Czech Republic':'捷克共和国',
				'Denmark':'丹麦',
				'Djibouti':'吉布提',
				'Dominica':'多米尼加',
				'Dominican Republic':'多明尼加共和国',
				'Ecuador':'厄瓜多尔',
				'Egypt':'埃及',
				'El Salvador':'萨尔瓦多',
				'Equatorial Guinea':'赤道几内亚',
				'Eritrea':'厄立特里亚',
				'Estonia':'爱沙尼亚',
				'Ethiopia':'埃塞俄比亚',
				'Falkland Islands':'福克兰群岛',
				'Faroe Islands':'法罗群岛',
				'Fiji':'斐济',
				'Finland':'芬兰',
				'France':'法国',
				'French Guiana':'法属圭亚那',
				'French Southern and Antarctic Lands':'法属南半球和南极领地',
				'Gabon':'加蓬',
				'Gambia':'冈比亚',
				'Gaza Strip':'加沙',
				'Georgia':'格鲁吉亚',
				'Germany':'德国',
				'Ghana':'加纳',
				'Greece':'希腊',
				'Greenland':'格陵兰',
				'Grenada':'格林纳达',
				'Guadeloupe':'瓜德罗普',
				'Guatemala':'危地马拉',
				'Guinea':'几内亚',
				'Guinea Bissau':'几内亚比绍',
				'Guyana':'圭亚那',
				'Haiti':'海地',
				'Honduras':'洪都拉斯',
				'Hong Kong':'香港',
				'Hungary':'匈牙利',
				'Iceland':'冰岛',
				'India':'印度',
				'Indonesia':'印尼',
				'Iran':'伊朗',
				'Iraq':'伊拉克',
				'Iraq-Saudi Arabia Neutral Zone':'伊拉克阿拉伯中立区',
				'Ireland':'爱尔兰',
				'Isle of Man':'马恩岛',
				'Israel':'以色列',
				'Italy':'意大利',
				'Ivory Coast':'科特迪瓦',
				'Jamaica':'牙买加',
				'Jan Mayen':'扬马延岛',
				'Japan':'日本',
				'Jordan':'约旦',
				'Kazakhstan':'哈萨克斯坦',
				'Kenya':'肯尼亚',
				'Kerguelen':'凯尔盖朗群岛',
				'Kiribati':'基里巴斯',
				'North Korea':'北朝鲜',
				'South Korea':'韩国',
				'Kuwait':'科威特',
				'Kyrgyzstan':'吉尔吉斯斯坦',
				'Laos':'老挝',
				'Latvia':'拉脱维亚',
				'Lebanon':'黎巴嫩',
				'Lesotho':'莱索托',
				'Liberia':'利比里亚',
				'Libya':'利比亚',
				'Liechtenstein':'列支敦士登',
				'Lithuania':'立陶宛',
				'Luxembourg':'卢森堡',
				'Macau':'澳门',
				'Macedonia':'马其顿',
				'Madagascar':'马达加斯加',
				'Malawi':'马拉维',
				'Malaysia':'马来西亚',
				'Maldives':'马尔代夫',
				'Mali':'马里',
				'Malta':'马耳他',
				'Martinique':'马提尼克',
				'Mauritania':'毛里塔尼亚',
				'Mauritius':'毛里求斯',
				'Mexico':'墨西哥',
				'Moldova':'摩尔多瓦',
				'Monaco':'摩纳哥',
				'Mongolia':'蒙古',
				'Morocco':'摩洛哥',
				'Mozambique':'莫桑比克',
				'Myanmar':'缅甸',
				'Namibia':'纳米比亚',
				'Nepal':'尼泊尔',
				'Netherlands':'荷兰',
				'New Caledonia':'新喀里多尼亚',
				'New Zealand':'新西兰',
				'Nicaragua':'尼加拉瓜',
				'Niger':'尼日尔',
				'Nigeria':'尼日利亚',
				'Northern Mariana Islands':'北马里亚纳群岛',
				'Norway':'挪威',
				'Oman':'阿曼',
				'Pakistan':'巴基斯坦',
				'Panama':'巴拿马',
				'Papua New Guinea':'巴布亚新几内亚',
				'Paraguay':'巴拉圭',
				'Peru':'秘鲁',
				'Philippines':'菲律宾',
				'Poland':'波兰',
				'Portugal':'葡萄牙',
				'Puerto Rico':'波多黎各',
				'Qatar':'卡塔尔',
				'Reunion':'留尼旺岛',
				'Romania':'罗马尼亚',
				'Russia':'俄罗斯',
				'Rwanda':'卢旺达',
				'San Marino':'圣马力诺',
				'Sao Tome and Principe':'圣多美和普林西比',
				'Saudi Arabia':'沙特阿拉伯',
				'Senegal':'塞内加尔',
				'Seychelles':'塞舌尔',
				'Sierra Leone':'塞拉利昂',
				'Singapore':'新加坡',
				'Slovakia':'斯洛伐克',
				'Slovenia':'斯洛文尼亚',
				'Solomon Islands':'所罗门群岛',
				'Somalia':'索马里',
				'South Africa':'南非',
				'Spain':'西班牙',
				'Sri Lanka':'斯里兰卡',
				'St. Christopher-Nevis':'圣',
				'St. Lucia':'圣露西亚',
				'St. Vincent and the Grenadines':'圣文森特和格林纳丁斯',
				'Sudan':'苏丹',
				'Suriname':'苏里南',
				'Svalbard':'斯瓦尔巴特群岛',
				'Swaziland':'斯威士兰',
				'Sweden':'瑞典',
				'Switzerland':'瑞士',
				'Syria':'叙利亚',
				'Taiwan':'台湾',
				'Tajikistan':'塔吉克斯坦',
				'United Republic of Tanzania':'坦桑尼亚',
				'Thailand':'泰国',
				'Togo':'多哥',
				'Tonga':'汤加',
				'Trinidad and Tobago':'特里尼达和多巴哥',
				'Tunisia':'突尼斯',
				'Turkey':'土耳其',
				'Turkmenistan':'土库曼斯坦',
				'Turks and Caicos Islands':'特克斯和凯科斯群岛',
				'Uganda':'乌干达',
				'Ukraine':'乌克兰',
				'United Arab Emirates':'阿联酋',
				'United Kingdom':'英国',
				'United States':'美国',
				'Uruguay':'乌拉圭',
				'Uzbekistan':'乌兹别克斯坦',
				'Vanuatu':'瓦努阿图',
				'Venezuela':'委内瑞拉',
				'Vietnam':'越南',
				'Western Sahara':'西撒哈拉',
				'Western Samoa':'西萨摩亚',
				'Yemen':'也门',
				'Yugoslavia':'南斯拉夫',
				'Democratic Republic of the Congo':'刚果民主共和国',
				'Zambia':'赞比亚',
				'Zimbabwe':'津巴布韦',
				'South Sudan':'南苏丹',
				'Somaliland':'索马里兰',
				'Montenegro':'黑山',
				'Kosovo':'科索沃',
				'Republic of Serbia':'塞尔维亚',

				};
	var convertData = function(data) {
	    var res = [];
	    for (var i = 0; i < data.length; i++) {
	        var dataItem = data[i];
	        var fromCoord = geoCoordMap[dataItem[0].name];
	        var toCoord = geoCoordMap[dataItem[1].name];
	        if (fromCoord && toCoord) {
	            res.push([{
	                coord: fromCoord,
	                value: dataItem[0].value
	            }, {
	                coord: toCoord,
	            }]);
	        }
	    }
	    return res;
	};
	 // color: ["#b9e1f2", "#b4e0f3", "#70b4eb", "#1482e5", "#1c3fbf","#070093"],
	for (var i = 0; i < ddd.length; i++) {
		if (ddd[i].value <=0.1) {
			ddd[i].itemStyle= {
                normal: {
                	color:'#b9e1f2',
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                }
            };
		}else if (ddd[i].value >0.1&&ddd[i].value <=0.2) {
			ddd[i].itemStyle= {
	                normal: {
	                	color:'#b4e0f3',
	                    areaColor: '#031525',
	                    borderColor: '#3B5077',
	                }
	            };
		}else if (ddd[i].value >0.2&&ddd[i].value <=0.3) {
			ddd[i].itemStyle= {
	                normal: {
	                	color:'#70b4eb',
	                    areaColor: '#031525',
	                    borderColor: '#3B5077',
	                }
	            };
		}else if (ddd[i].value >0.3&&ddd[i].value <=1) {
			ddd[i].itemStyle= {
	                normal: {
	                	color:'#1482e5',
	                    areaColor: '#031525',
	                    borderColor: '#3B5077',
	                }
	            };
		}else if (ddd[i].value >1&&ddd[i].value <=5) {
			ddd[i].itemStyle= {
	                normal: {
	                	color:'#1c3fbf',
	                    areaColor: '#031525',
	                    borderColor: '#3B5077',
	                }
	            };
		}else if (ddd[i].value >5) {
			ddd[i].itemStyle= {
	                normal: {
	                	color:'#070093',
	                    areaColor: '#031525',
	                    borderColor: '#3B5077',
	                }
	            };
		}
	}
	 /*var dColor = function (value){
		 var co = ''
		 if (value <0.1) {
			co = '#00ff42';
		}else if (value >= 0.1 && value<0.2) {
			co = '#efff00';
		}else if (value >= 0.2 && value<0.3) {
			co = '#ffd100';
		}else if (value >0.3) {
			co = '#ff8c00';
		}
	 }   */

	var color = ['#a6c84c', '#ffa022', '#46bee9'];
	var series = [];
	[
	    ['中国', BJData]
	].forEach(function(item, i) {
	    series.push({
	            type: 'map',
	            map: 'world',
	            geoIndex: 0,
	            aspectScale: 0.75, //长宽比
	            showLegendSymbol: false, // 存在legend时显示
	            label: {
	                normal: {
	                    show: false
	                },
	                emphasis: {
	                    show: false,
	                    textStyle: {
	                        color: '#fff'
	                    }
	                }
	            },
	            roam: true,
	            animation: false,
	            data: ddd
	        },

	        {
	            type: 'effectScatter',
	            coordinateSystem: 'geo',
	            //zlevel: 2,
	            rippleEffect: { //涟漪特效
	                period: 4, //动画时间，值越小速度越快
	                brushType: 'stroke', //波纹绘制方式 stroke, fill
	                scale: 4 //波纹圆环最大限制，值越大波纹越大
	            },
	            label: {
	                normal: {
	                    show: true,
	                    position: 'right', //显示位置
	                    offset: [5, 0], //偏移设置
	                    formatter: '{b}' //圆环显示文字
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            symbol: 'circle',
	            symbolSize: function(val) {
	                return 20 + val[2] / 80; //圆环大小
	            },
	            itemStyle: {
	                normal: {
	                    show: false,
	                    color: function (v) {
	                    	var co = ''
	               			 if (v.value[2] <0.1) {
	               				co = '#00ff42';
	               			}else if (v.value[2] >= 0.1 && v.value[2]<0.2) {
	               				co = '#efff00';
	               			}else if (v.value[2] >= 0.2 && v.value[2]<0.3) {
	               				co = '#ffd100';
	               			}else if (v.value[2] >0.3) {
	               				co = '#ff8c00';
	               			}
	                    	return co;
	                    }
	                }
	            },
	            data: xxx
	        },
	        {
	        	type:'pie',
	        	radius: 0,
	        	color: ["#b9e1f2", "#b4e0f3", "#70b4eb", "#1482e5", "#1c3fbf","#070093"],
	        	 itemStyle:{
	                 normal: {
	                     show:false,
	                }
	            },
	            label: {
	                normal: {
	                     show:false,
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	        	data:[{name:"<0.1",value:1},
	        	      {name:"0.1-0.19",value:1},
	        	      {name:"0.2-0.29",value:1},
	        	      {name:"0.3-0.99",value:1},
	        	      {name:"1-4.99",value:1},
	        	      {name:">=5",value:1}
	        	      ]
	        }
	    );
	});

	option = {
	    tooltip: {
	        trigger: 'item',
	        borderColor: '#FFFFCC',
	        showDelay: 0,
	        hideDelay: 0,
	        enterable: true,
	        transitionDuration: 0,
	        extraCssText: 'z-index:100',
	        formatter: function(params) {
	        	//alert(JSON.stringify(params));
	            //根据业务自己拓展要显示的内容
	            var res = "";
	            var name = params.name;
	            var value = params.value;
	            var value1 = '';
	            //alert(value.length);
	            //alert(JSON.stringify(value.length));
	            for (var a = 0; a < as.length; a++) {
					if (as[a].name == name) {
						value1 = '<br/>2017年消费总量：'+as[a].value[0]+'(百万吨原油当量)<br/>比上年增长量：'
						+as[a].value[0]+'(百万吨原油当量)<br/>占总增量百分比：'+as[a].value[0]+'%';
					}
				}
	            res = "<span style='color:#fff;'>" + name + "</span><br/>人均消费量：" + value+'(吨原油当量)'+value1;
	           
	           
	            	return res;
	        }
	    },
	    legend: [{
            data: ["<0.1","0.1-0.19","0.2-0.29","0.3-0.99","1-4.99",">=5"],
            orient: 'vertical',
            color: ["#b9e1f2", "#b4e0f3", "#70b4eb", "#1482e5", "#1c3fbf","#070093"],
            bottom: '2%',
            left: 'left',
            itemHeight:10,
            itemWidth:20,
            textStyle:{
                color:'#fff'
            },
            zlevel: 4
        },/*{
            data: ["<0.1","0.11-0.2","0.21-0.3",">0.3"],
            orient: 'vertical',
            bottom: '2%',
            left: 'right',
            itemHeight:10,
            itemWidth:20,
            textStyle:{
                color:'#fff'
            },
            zlevel: 4
        }*/],
	   /*visualMap: { //图例值控制
	        min: 0,
	        max: 700,
	        calculable: true,
	        color: ["#070093", "#1c3fbf", "#1482e5", "#70b4eb", "#b4e0f3", "#b9e1f2", "#ffffff"],
	        textStyle: {
	            color: '#fff'
	        }
	    },*/
	    geo: {
	        map: 'world',
	        aspectScale: 0.9, //长宽比
	         nameMap: nameMap,
	        label: {
	            emphasis: {
	                show: false
	            }
	        },
	        roam: true, //是否允许缩放
	        layoutCenter: ['50%', '50%'], //地图位置
	        layoutSize: "180%",
	        itemStyle: {
	            normal: {
	                color: '#fff', //地图背景色
	                borderColor: 'rgba(100,149,237,1)' //省市边界线
	            },
	            emphasis: {
	                color: 'rgba(37, 43, 61, .5)' //悬浮背景
	            }
	        }
	    },

	    series: series
	};
	var myChart = echarts.init($('#main')[0]);
	/*var counts = option.series[0].data.length; //获取所有闪动圆环数量
	var dataIndex = 0;
	//让圆环的提示框自动触发轮播显示
	function autoHoverTip() {
	    for (var i = 0; i < counts; i++) {
	        (function(i) {
	            ts = setTimeout(function() {
	                myChart.dispatchAction({
	                    type: 'showTip',
	                    seriesIndex: 1,
	                    dataIndex: i
	                });
	            }, 5000 * i);
	        })(i);
	    }
	}*/

	/*setTimeout(function() {
	    autoHoverTip();
	    tv = setInterval(autoHoverTip, counts * 1000);
	}, 500);*/
myChart.setOption(option);
}