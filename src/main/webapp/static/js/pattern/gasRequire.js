$(document).ready(function(){
	getdata('/pattern/gasRequire/bidCompMapInfo.json',chart1);
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
	        grid:{
	            top:'10%',
	            left:'12%',
	            right:'25%',
	            bottom:'17%',
	        },
	        legend: { //图例组件，颜色和名字
		        //orient: 'vertical',
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 8,
		        itemHeight: 8,
		        icon: 'rect',
		        orient: 'vertical',
		        left:'right',
		        top:'9%',
		        data: data[0],
		        textStyle: {
		            color: [],
		            fontStyle: 'normal',
		            fontFamily: '微软雅黑',
		            fontSize: 8,
		        }
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
	            axisLabel: {
	                textStyle: {
	                    color: '#fff',
	                    fontStyle: 'normal',
	                    fontSize:8
	                },
	                formatter: '{value}%'
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
	        }],
	        yAxis: [{
	            position: "bottom",
	            type: "category",
	            axisLabel: {
	                interval: 0,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:8
	                },
	                //rotate: 30,
	            },
	            axisLine:{
	                lineStyle:{
	                    color: '#0177d4'
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
		        grid:{
		            top:'18%',
		            left:'10%',
		            right:'10%',
		            bottom:'10%',
		        },
		        legend: { //图例组件，颜色和名字
			        //orient: 'vertical',
			        itemGap: 12, //图例每项之间的间隔
			        itemWidth: 8,
			        itemHeight: 8,
			        icon: 'rect',
			        //orient: 'vertical',
			        left:'right',
			        data: data[0],
			        textStyle: {
			            color: [],
			            fontStyle: 'normal',
			            fontFamily: '微软雅黑',
			            fontSize: 8,
			        }
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
		            axisLabel: {
		                //interval: 0,
		                textStyle: {
		                    color: '#fff',
		                    fontSize:8
		                },
		                //rotate: 30,
		            },
		            axisLine:{
		                lineStyle:{
		                    color: '#0177d4'
		                }
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
		                    fontSize:8
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
		            name: '',
		            type: 'value',
		            position: 'right',
		            axisLabel: {
		                textStyle: {
		                    color: '#fff',
		                    fontStyle: 'normal',
		                    fontSize:8
		                },
		                formatter: '{value}%'
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
			grid:{
	            top:'18%',
	            left:'8%',
	            right:'10%',
	            bottom:'13%',
	        },
	        color:["#FFFFFF","#FFD200","#15C0FF","#7C7DFF","#3729FF","#366DFF"],
		    legend: {
		        itemWidth:20,
		        itemHeight:2,
		        	textStyle: {
	                    color: '#fff',
	                    fontSize:8
	                },
		        data: data[0]
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    xAxis: {
		    	 position: "bottom",
		            type: "category",
		            axisLabel: {
		                //interval: 0,
		                textStyle: {
		                    color: '#fff',
		                    fontSize:8
		                },
		                //rotate: 30,
		            },
		            axisLine:{
		                lineStyle:{
		                    color: '#0177d4'
		                }
		            },
		        data: data[2]
		    },
		    yAxis: {
	            name: '',
	            type: 'value',
	            position: 'left',
	            axisLabel: {
	                textStyle: {
	                    color: '#fff',
	                    fontStyle: 'normal',
	                    fontSize:8
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
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid:{
	            top:'10%',
	            left:'10%',
	            right:'10%',
	            bottom:'13%',
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
	        grid:{
	            top:'19%',
	            left:'12%',
	            right:'7%',
	            bottom:'13%',
	        },
	        legend: { //图例组件，颜色和名字
		        //orient: 'vertical',
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 8,
		        itemHeight: 8,
		        icon: 'rect',
		        //orient: 'vertical',
		        //left:'right',
		        //top:'9%',
		        data: data[0],
		        textStyle: {
		            color: [],
		            fontStyle: 'normal',
		            fontFamily: '微软雅黑',
		            fontSize: 8,
		        }
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
	            axisLabel: {
	                interval: 0,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:8
	                },
	                //rotate: 30,
	            },
	            axisLine:{
	                lineStyle:{
	                    color: '#0177d4'
	                }
	            },
	            data: xData,
	        }],
	        yAxis: [{
	            name: '',
	            type: 'value',
	            position: 'left',
	            max:100,
	            axisLabel: {
	                textStyle: {
	                    color: '#fff',
	                    fontStyle: 'normal',
	                    fontSize:8
	                },
	                formatter: '{value}%'
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
	var geoCoordMap = {
		    '上海': [121.4648, 31.2891],
		    '尼日利亚': [-4.388361, 11.186148],
		    '美国洛杉矶': [-118.24311, 34.052713],
		    '香港邦泰': [114.195466, 22.282751],
		    '美国芝加哥': [-87.801833, 41.870975],
		    '加纳库马西': [-4.62829, 7.72415],
		    '英国曼彻斯特': [-1.657222, 51.886863],
		    '德国汉堡': [10.01959, 54.38474],
		    '哈萨克斯坦阿拉木图': [45.326912, 41.101891],
		    '俄罗斯伊尔库茨克': [89.116876, 67.757906],
		    '巴西': [-48.678945, -10.493623],
		    '埃及达米埃塔': [31.815593, 31.418032],
		    '西班牙巴塞罗纳': [2.175129, 41.385064],
		    '柬埔寨金边': [104.88659, 11.545469],
		    '意大利米兰': [9.189948, 45.46623],
		    '乌拉圭蒙得维的亚': [-56.162231, -34.901113],
		    '莫桑比克马普托': [32.608571, -25.893473],
		    '阿尔及利亚阿尔及尔': [3.054275, 36.753027],
		    '阿联酋迪拜': [55.269441, 25.204514],
		    '匈牙利布达佩斯': [17.108519, 48.179162],
		    '澳大利亚悉尼': [150.993137, -33.675509],
		    '美国加州': [-121.910642, 41.38028],
		    '澳大利亚墨尔本': [144.999416, -37.781726],
		    '墨西哥': [-99.094092, 19.365711],
		    '加拿大温哥华': [-123.023921, 49.311753]
		};
		var BJData = [
		    [{
		        name: '尼日利亚',
		        value: 19100
		    }],
		    [{
		        name: '美国洛杉矶',
		        value: 2370
		    }],
		    [{
		        name: '香港邦泰',
		        value: 3130
		    }],
		    [{
		        name: '美国芝加哥',
		        value: 2350
		    }],
		    [{
		        name: '加纳库马西',
		        value: 5120
		    }],
		    [{
		        name: '英国曼彻斯特',
		        value: 3110
		    }],
		    [{
		        name: '德国汉堡',
		        value: 6280
		    }],
		    [{
		        name: '哈萨克斯坦阿拉木图',
		        value: 7255
		    }],
		    [{
		        name: '俄罗斯伊尔库茨克',
		        value: 8125
		    }],
		    [{
		        name: '巴西',
		        value: 3590
		    }],
		    [{
		        name: '埃及达米埃塔',
		        value: 3590
		    }],
		    [{
		        name: '西班牙巴塞罗纳',
		        value: 3590
		    }],
		    [{
		        name: '柬埔寨金边',
		        value: 3590
		    }],
		    [{
		        name: '意大利米兰',
		        value: 3590
		    }],
		    [{
		        name: '乌拉圭蒙得维的亚',
		        value: 3590
		    }],
		    [{
		        name: '莫桑比克马普托',
		        value: 3590
		    }],
		    [{
		        name: '阿尔及利亚阿尔及尔',
		        value: 3590
		    }],
		    [{
		        name: '阿联酋迪拜',
		        value: 3590
		    }],
		    [{
		        name: '匈牙利布达佩斯',
		        value: 3590
		    }],
		    [{
		        name: '澳大利亚悉尼',
		        value: 3590
		    }],
		    [{
		        name: '美国加州',
		        value: 3590
		    }],
		    [{
		        name: '澳大利亚墨尔本',
		        value: 3590
		    }],
		    [{
		        name: '墨西哥',
		        value: 3590
		    }],
		    [{
		        name: '加拿大温哥华',
		        value: 3590
		    }]
		];
		var ds =
			   [{
			        name: '尼日利亚',
			        value: 19100
			    },
			    {
			        name: '美国洛杉矶',
			        value: 2370
			    },
			    {
			        name: '香港邦泰',
			        value: 3130
			    },
			    {
			        name: '美国芝加哥',
			        value: 2350
			    },
			    {
			        name: '加纳库马西',
			        value: 5120
			    },
			    {
			        name: '英国曼彻斯特',
			        value: 3110
			    },
			    {
			        name: '德国汉堡',
			        value: 6280
			    },
			    {
			        name: '哈萨克斯坦阿拉木图',
			        value: 7255
			    },
			    {
			        name: '俄罗斯伊尔库茨克',
			        value: 8125
			    },
			    {
			        name: '巴西',
			        value: 3590
			    },
			    {
			        name: '埃及达米埃塔',
			        value: 3590
			    },
			    {
			        name: '西班牙巴塞罗纳',
			        value: 3590
			    },
			    {
			        name: '柬埔寨金边',
			        value: 3590
			    },
			    {
			        name: '意大利米兰',
			        value: 3590
			    },
			    {
			        name: '乌拉圭蒙得维的亚',
			        value: 3590
			    },
			    {
			        name: '莫桑比克马普托',
			        value: 3590
			    },
			    {
			        name: '阿尔及利亚阿尔及尔',
			        value: 3590
			    },
			    {
			        name: '阿联酋迪拜',
			        value: 3590
			    },
			    {
			        name: '匈牙利布达佩斯',
			        value: 3590
			    },
			    {
			        name: '澳大利亚悉尼',
			        value: 3590
			    },
			    {
			        name: '美国加州',
			        value: 3590
			    },
			    {
			        name: '澳大利亚墨尔本',
			        value: 3590
			    },
			    {
			        name: '墨西哥',
			        value: 3590
			    },
			    {
			        name: '加拿大温哥华',
			        value: 3590
			    }];
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

		var color = ['#a6c84c', '#ffa022', '#46bee9'];
		var series = [];
		[
		    ['上海', BJData],['尼日利亚', BJData]
		].forEach(function(item, i) {
		    series.push(
		        {
		            type: 'effectScatter',
		            coordinateSystem: 'geo',
		            zlevel: 2,
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
		                return 4 + val[2] / 1000; //圆环大小
		            },
		            itemStyle: {
		                normal: {
		                    show: false,
		                    color: '#f00'
		                }
		            },
		            data: item[1].map(function(dataItem) {
		                return {
		                    name: dataItem[0].name,
		                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
		                };
		            }),
		        },
		        //被攻击点
		        {
		            type: 'scatter',
		            coordinateSystem: 'geo',
		            zlevel: 2,
		            rippleEffect: {
		                period: 4,
		                brushType: 'stroke',
		                scale: 4
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'right',
		                    //offset:[5, 0],
		                    color: '#00ffff',
		                    formatter: '{b}',
		                    textStyle: {
		                        color: "#00ffff"
		                    }
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            symbol: 'pin',
		            symbolSize: 30,
		            itemStyle: {
		                normal: {
		                    show: true,
		                    color: '#9966cc'
		                }
		            },
		            data: [{
		                name: item[0],
		                value: geoCoordMap[item[0]].concat([100]),
		            }],
		        }
		    );
		});

		option = {
		    title: {
		    	show:false,
		        text: '上海',
		        left: 'center',
		        textStyle: {
		            color: '#fff',
		            fontSize: 24
		        },
		        padding: [20, 20, 20, 20]
		    },
		    tooltip: {
		        trigger: 'item',
		        backgroundColor: 'rgba(12, 204, 104, 0.92)',
		        borderColor: '#FFFFCC',
		        showDelay: 0,
		        hideDelay: 0,
		        enterable: true,
		        transitionDuration: 0,
		        extraCssText: 'z-index:100',
		        formatter: function(params, ticket, callback) {
		        	alert(JSON.stringify(param));
		            //根据业务自己拓展要显示的内容
		            var res = "";
		            var name = params.name;
		            var value = params.value[params.seriesIndex + 1];
		            res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
		            return res;
		        }
		    },
		    visualMap: { //图例值控制
		        min: 0,
		        max: 10000,
		        calculable: true,
		        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
		        textStyle: {
		            color: '#fff'
		        }
		    },
		    geo: {
		        map: 'world',
		        aspectScale:0.7,
		        label: {
		            emphasis: {
		                show: false
		            }
		        },
		        roam: true, //是否允许缩放
		        layoutCenter: ['50%', '55%'], //地图位置
		        layoutSize: "140%",
		        itemStyle: {
		            normal: {
		                color: 'rgba(51, 69, 89, .5)', //地图背景色
		                borderColor: 'rgba(100,149,237,1)' //省市边界线
		            },
		            emphasis: {
		                color: 'rgba(37, 43, 61, .5)' //悬浮背景
		            }
		        }
		    },

		    series: series
		};

/*		var counts = option.series[0].data.length; //获取所有闪动圆环数量
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
		}

		setTimeout(function() {
		    autoHoverTip();
		    tv = setInterval(autoHoverTip, counts * 1000);
		}, 500);*/
	var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}