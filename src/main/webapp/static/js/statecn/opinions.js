$(document).ready(function(){
    getdata('/statecn/opinions/bidCompMapInfo.json',chart1);
    getdata('/statecn/opinions/chart2.json',chart2);
    getdata('/statecn/opinions/chart3.json',chart3);
    getdata('/statecn/opinions/chart4.json',chart4);
    getdata('/statecn/opinions/chart5.json',chart5);
    getdata('/statecn/opinions/chart6.json',chart6);
    getdata('/statecn/opinions/main.json',main);
});

function chart1(data){
	option = {
			grid:{
	            top:'18%',
	            left:'10%',
	            right:'10%',
	            bottom:'16%',
	        },
	        color:["#28B7FF","#57FFFF","#226FFF"],
		    legend: {
		        //bottom:30,
		        //itemGap:30,
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
		        name: '石油上游',
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
		                color:'#28B7FF'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#28B7FF',
		                opacity:1
		            }
		        },
		        data: data[3]
		    }, {
		        name: '石油中游',
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
		                color:'#57FFFF'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#57FFFF',
		                 opacity:1
		            }
		        },
		        data: data[4]
		    },{
		        name: '石油下游',
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
		                color:'#226FFF'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#226FFF',
		                 opacity:1
		            }
		        },
		        data: data[5]
		    }]
		};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}


function chart2(data){
	option = {
			grid:{
	            top:'18%',
	            left:'10%',
	            right:'10%',
	            bottom:'16%',
	        },
	        color:["#FFD844","#226FFF","#FFF8DA"],
		    legend: {
		        //bottom:30,
		        //itemGap:30,
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
		        name: '天然气上游',
		        type: 'line',
		        z:5,
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
		            normal: {
		                 opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#FFD844'
		            }
		        },
		       areaStyle: {
		            normal: {
		                color: '#FFD844',
		                opacity:1
		            }
		        },
		        data: data[3]
		    }, {
		        name: '天然气中游',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
		            normal: {
		                 opacity:0
		            }
		        },
		        lineStyle:{
		            normal:{
		                color:'#226FFF'
		            }
		        },
		       /* areaStyle: {
		            normal: {
		                color: '#57FFFF',
		                 opacity:1
		            }
		        },*/
		        data: data[4]
		    },{
		        name: '天然气下游',
		        type: 'line',
		        z:3,
		        smooth: true,//值为true折线平滑    值为false折线曲折
			    symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
			    showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
		            normal: {
		                opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#FFF8DA'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#FFF8DA',
		                 opacity:1
		            }
		        },
		        data: data[5]
		    }]
		};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	var lineData4 = data[6];
	var lineData5 = data[7];
	var lineData6 = data[8];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid:{
	            top:'18%',
	            left:'10%',
	            right:'10%',
	            bottom:'16%',
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
		        name: '风能',
		        type: 'line',
		        //smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        itemStyle: {
	                normal: {
	                    color: '#FFC000'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: '核能',
		        type: 'line',
		       // smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#A5A5A5'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: '煤炭',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#70AD47'
	                },
	            },
		        data: lineData3
		    },
		    {
		        name: '石油',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#5B9BD5'
	                },
	            },
		        data: lineData4
		    },
		    {
		        name: '太阳能',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#ED7D31'
	                },
	            },
		        data: lineData5
		    },
		    {
		        name: '天然气',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#4472C4'
	                },
	            },
		        data: lineData6
		        }]
		};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	option = {
		    color: ['rgba(245, 166, 35, 1)', 'rgba(19, 173, 255, 1)','rgba(167,83,223,1)'],
		    legend: {
		        show: true,
		        icon: 'circle',
		        bottom: 45,
		        center: 0,
		        itemWidth: 8,
		        itemHeight: 8,
		        textStyle: {
		            fontSize: 14,
		            color: '#ade3ff'
		        },
		        data: data[0]
		    },
		    radar: [{
		        indicator: data[2],
		        textStyle: {
		            color: 'red'
		        },
		        center: ['50%', '50%'],
		        radius: '60%',
		        startAngle: 90,
		        splitNumber: 4,
		        shape: 'circle',
		        name: {
		            formatter: '{value}',
		            textStyle: {
		                fontSize: 14,
		                color: '#ffffff'
		            }
		        },
		        splitArea: {
		            areaStyle: {
		                color: ['transparent',
		                    'transparent)', 'rgba(114, 172, 209, 0)',
		                    'transparent', 'rgba(114, 172, 209, 0)'
		                ],
		            }
		        },
		        axisLine: {
		            lineStyle: {
		                color: '#2770ab'
		            }
		        },
		        splitLine: {
		            lineStyle: {
		                color: '#2770ab'
		            }
		        }
		    }, ],
		    series: [{
		        name: '雷达图',
		        type: 'radar',
		        itemStyle: {
		            emphasis: {
		                lineStyle: {
		                    width: 4
		                }
		            }
		        },
		        data: [{
		            name: '上游',
		            value: data[3],
		            areaStyle: {
		                normal: {
		                    color: 'rgba(245, 166, 35, 0.4)'
		                }
		            },
		            //symbolSize: 2.5,
		            label: {
		                normal: {
		                    position: 'outside',
		                    formatter: '{b} {d}% ',
		                    textStyle: {
		                        color: '#fff',
		                        fontSize: 8
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    borderColor: 'rgba(245, 166, 35, 1)',
		                    borderWidth: 2.5,
		                }
		            },
		            lineStyle: {
		                normal: {
		                    opacity: 0.5
		                }
		            }
		        }, {
		            name: '中游',
		            value: data[4],
		            //symbolSize: 2.5,
		            itemStyle: {
		                normal: {
		                    borderColor: 'rgba(19, 173, 255, 1)',
		                    borderWidth: 2.5,
		                }
		            },
		            label: {
		                normal: {
		                    position: 'outside',
		                    formatter: '{b} {d}% ',
		                    textStyle: {
		                        color: '#fff',
		                        fontSize: 8
		                    }
		                }
		            },
		            areaStyle: {
		                normal: {
		                    color: 'rgba(19, 173, 255, 0.5)'
		                }
		            },
		            lineStyle: {
		                normal: {
		                    opacity: 0.5
		                }
		            }
		        },{
		            name: '下游',
		            value: data[5],
		            //symbolSize: 2.5,
		            itemStyle: {
		                normal: {
		                    borderColor: 'rgba(19, 173, 255, 1)',
		                    borderWidth: 2.5,
		                }
		            },
		            label: {
		                normal: {
		                    position: 'outside',
		                    formatter: '{b} {d}% ',
		                    textStyle: {
		                        color: '#fff',
		                        fontSize: 8
		                    }
		                }
		            },
		            areaStyle: {
		                normal: {
		                    color: 'rgba(19, 173, 255, 0.5)'
		                }
		            },
		            lineStyle: {
		                normal: {
		                    opacity: 0.5
		                }
		            }
		        }]
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
	var lineData4 = data[6];
	var lineData5 = data[7];
	var lineData6 = data[8];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid:{
	            top:'18%',
	            left:'10%',
	            right:'10%',
	            bottom:'16%',
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
		        name: '风能',
		        type: 'line',
		        //smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        itemStyle: {
	                normal: {
	                    color: '#FFC000'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: '核能',
		        type: 'line',
		       // smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#A5A5A5'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: '煤炭',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#70AD47'
	                },
	            },
		        data: lineData3
		    },
		    {
		        name: '石油',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#5B9BD5'
	                },
	            },
		        data: lineData4
		    },
		    {
		        name: '太阳能',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#ED7D31'
	                },
	            },
		        data: lineData5
		    },
		    {
		        name: '天然气',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#4472C4'
	                },
	            },
		        data: lineData6
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
	var lineData4 = data[6];
	var lineData5 = data[7];
	var lineData6 = data[8];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid:{
	            top:'18%',
	            left:'10%',
	            right:'10%',
	            bottom:'16%',
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
		    	 min:0.6,
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
		             formatter: '{value}%'
		         }
		    },
		    series: [{
		        name: '风能',
		        type: 'line',
		        //smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        itemStyle: {
	                normal: {
	                    color: '#FFC000'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: '核能',
		        type: 'line',
		       // smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#A5A5A5'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: '煤炭',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#70AD47'
	                },
	            },
		        data: lineData3
		    },
		    {
		        name: '石油',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#5B9BD5'
	                },
	            },
		        data: lineData4
		    },
		    {
		        name: '太阳能',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#ED7D31'
	                },
	            },
		        data: lineData5
		    },
		    {
		        name: '天然气',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#4472C4'
	                },
	            },
		        data: lineData6
		        }]
		};
	var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}

function main(das){
	var myChart = echarts.init($('#main')[0]);
	var province = das.name;
	var gdp = das.pie;
	var typeIndex = 1;
	var selectedRange = null;
	var option = null;
	var str = "";
	var data = [];
	var geoCoordMap = {};
	//var name = "2016年各省市GDP及各产业占比"
	var mapName = 'china'
	//var mapFeatures = echarts.getMap(mapName).geoJson.features;
	for (var i = 0; i < province.length; i++) {
	    data.push({
	        "name": province[i],
	        "value": [{
	                "name": '风能',
	                value: gdp[i][0]
	            },
	            {
	                "name": '核能',
	                value: gdp[i][1]
	            },
	            {
	                "name": '煤炭',
	                value: gdp[i][2]
	            },
	            {
	                "name": '石油',
	                value: gdp[i][3]
	            },
	            {
	                "name": '太阳能',
	                value: gdp[i][4]
	            },
	            {
	                "name": '天然气',
	                value: gdp[i][5]
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


	/*变换地图数据（格式）：pie*/
	function convertMapDta(type, data) {
	    var mapData = [];
	    for (var i = 0; i < data.length; i++) {
	        mapData.push({
	            'name': province[i],
	            "value": gdp[i][6]
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
	        var randomValue = 10;
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
	                color:["#08970b","#00c6ff","#f7ff00","#18249c","#d7831c","#f24c14"],
	                tooltip: {
	                    formatter: function(params) {
	                        return params.seriesName + "<br/>" + params.name + " : " + params.value;
	                    }
	                },
	                radius: radius,
	                center: p,
	                data: vr,
	                zlevel: 4,
	                tooltip: {
	                    formatter: '{a}<br/>{b}: {c} ({d}%)'
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
	        //text: name,
	        left: 'center',
	        textStyle: {
	            color: 'black'
	        }
	    },
	    legend: {
	        data: das.legend,
	        orient: 'vertical',
	        top: '10%',
	        left: '5%',
	        textStyle:{
                color:'#fff'
            },
	        zlevel: 4
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: function(params) {
	        	//alert(JSON.stringify(params));
	            if (params.value) {
	            	var a = params.dataIndex
	                return params.name + "<br/>" + "新增总量: " + params.value+'<br/>'
	                +'风能：'+gdp[a][0]+'<br/>'
	                +'核能：'+gdp[a][1]+'<br/>'
	                +'煤炭：'+gdp[a][2]+'<br/>'
	                +'石油：'+gdp[a][3]+'<br/>'
	                +'太阳能：'+gdp[a][4]+'<br/>'
	                +'天然气：'+gdp[a][5];
	            }
	        }
	    },
	    visualMap: {
	        type: 'continuous',
	        show: true,
	        min: 0,
	        max: 100000,
	        left: '5%',
	        top: 'bottom',
	        text: ['高', '低'], // 文本，默认为数值文本
	        calculable: true,
	        // seriesIndex: [0],
	        textStyle:{
                color:'#fff'
            },
            inRange: {
                color: ["#ffffff","#70b4eb","#1482e5", "#070093" ]
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
	            layoutCenter: ['30%', '30%'],
	// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
	            layoutSize: 0.3,
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
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
	/*pie*/
	addPie(myChart, data);

	myChart.setOption(option, true);

	/*饼图跟着地图移动:pie*/
	myChart.on('georoam', function(params) {
	    resetPie(myChart, params, geoCoordMap, typeIndex);
	});
	myChart.on('datarangeselected', function(params) {
	    resetPie(myChart, params, geoCoordMap, typeIndex);
	});
	window.addEventListener("resize", function() {
	    myChart.resize();
	    resetPie(myChart, 0, geoCoordMap);
	})


	myChart.setOption(option);
}