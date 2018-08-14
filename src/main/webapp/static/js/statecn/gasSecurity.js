$(document).ready(function(){
	main();
    getdata('/statecn/gasSecurity/chart1.json',chart1);
    getdata('/statecn/gasSecurity/chart2.json',chart2);
    getdata('/statecn/gasSecurity/chart3.json',chart3);
    getdata('/statecn/gasSecurity/chart4.json',chart4);
    getdata('/statecn/gasSecurity/chart5.json',chart5);
    getdata('/statecn/gasSecurity/chart6.json',chart6);
//    getdata('/statecn/security/chart2.json',chart2);
//    getdata('/statecn/security/chart3.json',chart3);
//    getdata('/statecn/security/chart4.json',chart4);
//    getdata('/statecn/security/chart5.json',chart5);
//    getdata('/statecn/security/chart6.json',chart6);
//	getdata('/statecn/security/main.json',main);
});

function main(data){
	var myRate1 = 1000;
	option = {
	   title: [{
	        x: "23%",
	        bottom: 90,
	        text: '天然气对外依赖度',
	        textStyle: {
	            fontWeight: 'normal',
	            fontSize: 20,
	            color: "#fff"
	        },
	    }, {
	        x: "60.5%",
	        bottom: 90,
	        text: '储量接替率',
	        textStyle: {
	            fontWeight: 'normal',
	            fontSize: 20,
	            color: "#fff"
	        },
	    },{
	        x: "3%",
	        bottom: 70,
	        text: '单一进口管道油气国家集中度',
	        textStyle: {
	            fontWeight: 'normal',
	            fontSize: 14,
	            color: "#fff"
	        },
	    },{
	        x: "73%",
	        bottom: 70,
	        text: '单一进口LNG油气国家集中度',
	        textStyle: {
	            fontWeight: 'normal',
	            fontSize: 14,
	            color: "#fff"
	        },
	    }],
	    tooltip: {
	        show: true,
	        formatter:'{a}: {c} %',

	    },
	    series: [{
	        type: 'gauge',
	        center: ['34%', '50%'], // 默认全局居中  
	        radius: '50%',
	        splitNumber: 10, //刻度数量
	        min: 0,
	        max: 100,
	        startAngle: 220,
	        endAngle: -40,
	        clockwise: true,
	        axisLine: {
	            show: true,
	            lineStyle: {
	                width: 2,
	                shadowBlur: 0,
	                color: [
	                    [1, '#03B7C9']
	                ]
	            }
	        },
	        axisTick: {
	            show: true,
	            lineStyle: {
	                color: '#03B7C9',
	                width: 1
	            },
	            length: -5,
	            splitNumber: 10
	        },
	        splitLine: {
	            show: true,
	            length: -8,
	            lineStyle: {
	                color: '#03B7C9',
	            }
	        },
	        axisLabel: {
	            distance: -20,
	            textStyle: {
	                color: "#03B7C9",
	                fontSize: "10",
	                fontWeight: "bold"
	            }
	        },
	        pointer: { //仪表盘指针
	            show: 0
	        },
	        detail: {
	            show: false
	        },
	        data: [{
	            name: "",
	            value: myRate1
	        }]
	    }, {
	    	startAngle: 220,
	        endAngle: -40,
	        type: 'gauge',
	        center: ['34%', '50%'], // 默认全局居中  
	        radius: '45%',
	        min: 0,
	        max: 100,
	        splitNumber: 0,
	        axisLine: { // 坐标轴线  
	            lineStyle: {
	                color: [
	                    [0.66, '#dddddd'],
	                    [1, '#dddddd']
	                ], // 属性lineStyle控制线条样式  
	                width: 4
	            }
	        },


	        axisLabel: { // 坐标轴小标记  
	            textStyle: { // 属性lineStyle控制线条样式  
	                fontWeight: 'bolder',
	                fontSize: 16,
	                color: 'rgba(30,144,255,0)',
	            }
	        },
	        splitLine: { // 分隔线  
	            length: 10, // 属性length控制线长  
	            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
	                width: 0,
	                color: '#444'
	            }
	        },
	        pointer: { // 分隔线 指针  
	            color: '#666666',
	            width: 0,
	            length: 230
	        },
	        detail: {
	            show: false
	        },

	    }, {
	        name: '天然气对外依赖度',
	        type: 'gauge',
	        startAngle: 220,
	        endAngle: -40,
	        radius: '40%',
	        center: ['34%', '50%'], // 默认全局居中  
	        min: 0,
	        max: 100,
	        axisLine: {
	            show: false,
	            lineStyle: {
	                width: 5,
	                shadowBlur: 0,
	                color: [
	                    [0.2, '#00FAFC'],
	                    [0.4, '#3BD542'],
	                    [0.6, '#E3F424'],
	                    [0.8, '#7E48DA'],
	                    [1, '#E531A8']
	                ]
	            }
	        },
	        axisTick: {
	            show: false,

	        },
	        splitLine: {
	            show: false,
	            length: 20,

	        },

	        axisLabel: {
	            show: false
	        },
	        pointer: {
	            show: true,
	        },
	        detail: {
	            show: true,
	            offsetCenter: [0, '40%'],
	            formatter:'{value}%',
	            textStyle: {
	                fontSize: 20
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: "#03B7C9",

	            }
	        },
	        data: [{
	            value: 68.4
	        }]
	    },{
	        type: 'gauge',
	        center: ['66%', '50%'], // 默认全局居中  
	        radius: '50%',
	        splitNumber: 10, //刻度数量
	        min: 200,
	        max: 0,
	        startAngle: 220,
	        endAngle: -40,
	        clockwise: true,
	        axisLine: {
	            show: true,
	            lineStyle: {
	                width: 2,
	                shadowBlur: 0,
	                color: [
	                    [1, '#03B7C9']
	                ]
	            }
	        },
	        axisTick: {
	            show: true,
	            lineStyle: {
	                color: '#03B7C9',
	                width: 1
	            },
	            length: -5,
	            splitNumber: 10
	        },
	        splitLine: {
	            show: true,
	            length: -8,
	            lineStyle: {
	                color: '#03B7C9',
	            }
	        },
	        axisLabel: {
	            distance: -20,
	            textStyle: {
	                color: "#03B7C9",
	                fontSize: "10",
	                fontWeight: "bold"
	            }
	        },
	        pointer: { //仪表盘指针
	            show: 0
	        },
	        detail: {
	            show: false
	        },
	        data: [{
	            name: "",
	            value: myRate1
	        }]
	    }, {
	    	startAngle: 220,
	        endAngle: -40,
	        type: 'gauge',
	        center: ['66%', '50%'], // 默认全局居中  
	        radius: '45%',
	        min: 200,
	        max: 0,
	        splitNumber: 0,
	        axisLine: { // 坐标轴线  
	            lineStyle: {
	                color: [
	                    [0.66, '#dddddd'],
	                    [1, '#dddddd']
	                ], // 属性lineStyle控制线条样式  
	                width: 4
	            }
	        },


	        axisLabel: { // 坐标轴小标记  
	            textStyle: { // 属性lineStyle控制线条样式  
	                fontWeight: 'bolder',
	                fontSize: 16,
	                color: 'rgba(30,144,255,0)',
	            }
	        },
	        splitLine: { // 分隔线  
	            length: 10, // 属性length控制线长  
	            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
	                width: 0,
	                color: '#444'
	            }
	        },
	        pointer: { // 分隔线 指针  
	            color: '#666666',
	            width: 0,
	            length: 230
	        },
	        detail: {
	            show: false
	        },

	    }, {
	        name: '储量接替率',
	        type: 'gauge',
	        startAngle: 220,
	        endAngle: -40,
	        radius: '40%',
	        center: ['66%', '50%'], // 默认全局居中  
	        min: 200,
	        max: 0,
	        axisLine: {
	            show: false,
	            lineStyle: {
	                width: 5,
	                shadowBlur: 0,
	                color: [
	                    [0.2, '#00FAFC'],
	                    [0.4, '#3BD542'],
	                    [0.6, '#E3F424'],
	                    [0.8, '#7E48DA'],
	                    [1, '#E531A8']
	                ]
	            }
	        },
	        axisTick: {
	            show: false,

	        },
	        splitLine: {
	            show: false,
	            length: 20,

	        },

	        axisLabel: {
	            show: false
	        },
	        pointer: {
	            show: true,
	        },
	        detail: {
	            show: true,
	            offsetCenter: [0, '40%'],
	            formatter:'{value}%',
	            textStyle: {
	                fontSize: 20
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: "#03B7C9",

	            }
	        },
	        data: [{
	            value: 118.21
	        }]
	    },{
	        type: 'gauge',
	        center: ['14%', '55%'], // 默认全局居中  
	        radius: '29%',
	        splitNumber: 10, //刻度数量
	        min: 0,
	        max: 100,
	        startAngle: 280,
	        endAngle: 80,
	        clockwise: true,
	        axisLine: {
	            show: true,
	            lineStyle: {
	                width: 2,
	                shadowBlur: 0,
	                color: [
	                    [1, '#03B7C9']
	                ]
	            }
	        },
	        axisTick: {
	            show: true,
	            lineStyle: {
	                color: '#03B7C9',
	                width: 1
	            },
	            length: -4,
	            splitNumber: 10
	        },
	        splitLine: {
	            show: true,
	            length: -6,
	            lineStyle: {
	                color: '#03B7C9',
	            }
	        },
	        axisLabel: {
	            distance: -20,
	            textStyle: {
	                color: "#03B7C9",
	                fontSize: "10",
	                fontWeight: "bold"
	            }
	        },
	        pointer: { //仪表盘指针
	            show: 0
	        },
	        detail: {
	            show: false
	        },
	        data: [{
	            name: "",
	            value: myRate1
	        }]
	    }, {
	        type: 'gauge',
	        center: ['14%', '55%'], // 默认全局居中  
	        radius: '26%',
	        min: 0,
	        max: 100,
	        startAngle: 280,
	        endAngle: 80,
	        splitNumber: 0,
	        axisLine: { // 坐标轴线  
	            lineStyle: {
	                color: [
	                    [0.66, '#dddddd'],
	                    [1, '#dddddd']
	                ], // 属性lineStyle控制线条样式  
	                width: 4
	            }
	        },


	        axisLabel: { // 坐标轴小标记  
	            textStyle: { // 属性lineStyle控制线条样式  
	                fontWeight: 'bolder',
	                fontSize: 16,
	                color: 'rgba(30,144,255,0)',
	            }
	        },
	        splitLine: { // 分隔线  
	            length: 10, // 属性length控制线长  
	            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
	                width: 0,
	                color: '#444'
	            }
	        },
	        pointer: { // 分隔线 指针  
	            color: '#666666',
	            width: 0,
	            length: 230
	        },
	        detail: {
	            show: false
	        },

	    }, {
	        name: '单一进口管道油气国家集中度',
	        type: 'gauge',
	        startAngle: 280,
	        endAngle: 80,
	        radius: '23%',
	        center: ['14%', '55%'], // 默认全局居中  
	        min: 0,
	        max: 100,
	        axisLine: {
	            show: false,
	            lineStyle: {
	                width: 5,
	                shadowBlur: 0,
	                color: [
	                    [0.2, '#00FAFC'],
	                    [0.4, '#3BD542'],
	                    [0.6, '#E3F424'],
	                    [0.8, '#7E48DA'],
	                    [1, '#E531A8']
	                ]
	            }
	        },
	        axisTick: {
	            show: false,

	        },
	        splitLine: {
	            show: false,
	            length: 20,

	        },

	        axisLabel: {
	            show: false
	        },
	        pointer: {
	            show: true,
	        },
	        detail: {
	            show: true,
	            offsetCenter: ['20%', '40%'],
	            formatter:'{value}%',
	            textStyle: {
	                fontSize: 20
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: "#03B7C9",

	            }
	        },
	        data: [{
	            value: 80.40
	        }]
	    }, {
	        type: 'gauge',
	        center: ['86%', '55%'], // 默认全局居中  
	        radius: '29%',
	        splitNumber: 10, //刻度数量
	        min: 100,
	        max: 0,
	        startAngle: 100,
	        endAngle: -100,
	        clockwise: true,
	        axisLine: {
	            show: true,
	            lineStyle: {
	                width: 2,
	                shadowBlur: 0,
	                color: [
	                    [1, '#03B7C9']
	                ]
	            }
	        },
	        axisTick: {
	            show: true,
	            lineStyle: {
	                color: '#03B7C9',
	                width: 1
	            },
	            length: -4,
	            splitNumber: 10
	        },
	        splitLine: {
	            show: true,
	            length: -6,
	            lineStyle: {
	                color: '#03B7C9',
	            }
	        },
	        axisLabel: {
	            distance: -20,
	            textStyle: {
	                color: "#03B7C9",
	                fontSize: "10",
	                fontWeight: "bold"
	            }
	        },
	        pointer: { //仪表盘指针
	            show: 0
	        },
	        detail: {
	            show: false
	        },
	        data: [{
	            name: "",
	            value: myRate1
	        }]
	    }, {
	        type: 'gauge',
	        center: ['86%', '55%'], // 默认全局居中  
	        radius: '26%',
	        min: 0,
	        max: 100,
	        startAngle: 100,
	        endAngle: -100,
	        splitNumber: 0,
	        axisLine: { // 坐标轴线  
	            lineStyle: {
	                color: [
	                    [0.66, '#dddddd'],
	                    [1, '#dddddd']
	                ], // 属性lineStyle控制线条样式  
	                width: 4
	            }
	        },


	        axisLabel: { // 坐标轴小标记  
	            textStyle: { // 属性lineStyle控制线条样式  
	                fontWeight: 'bolder',
	                fontSize: 16,
	                color: 'rgba(30,144,255,0)',
	            }
	        },
	        splitLine: { // 分隔线  
	            length: 10, // 属性length控制线长  
	            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
	                width: 0,
	                color: '#444'
	            }
	        },
	        pointer: { // 分隔线 指针  
	            color: '#666666',
	            width: 0,
	            length: 230
	        },
	        detail: {
	            show: false
	        },

	    }, {
	        name: '单一进口LNG油气国家集中度',
	        type: 'gauge',
	        startAngle: 100,
	        endAngle: -100,
	        radius: '23%',
	        center: ['86%', '55%'], // 默认全局居中  

	        min: 0,
	        max: 100,

	        axisLine: {
	            show: false,
	            lineStyle: {
	                width: 5,
	                shadowBlur: 0,
	                color: [
	                    [0.2, '#00FAFC'],
	                    [0.4, '#3BD542'],
	                    [0.6, '#E3F424'],
	                    [0.8, '#7E48DA'],
	                    [1, '#E531A8']
	                ]
	            }
	        },
	        axisTick: {
	            show: false,

	        },
	        splitLine: {
	            show: false,
	            length: 20,

	        },

	        axisLabel: {
	            show: false
	        },
	        pointer: {
	            show: true,
	        },
	        detail: {
	            show: true,
	            offsetCenter: [0, '40%'],
	            formatter:'{value}%',
	            textStyle: {
	                fontSize: 20
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: "#03B7C9",

	            }
	        },
	        data: [{
	            value: 45.1
	        }]
	    }]
	};
	var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}

function chart1(data){
	var xData = data[2];
	var barData = data[3];
	var lineData = data[4];
	option = {
		    tooltip: {
		        trigger: 'axis',
		        //formatter: '{a}</br>{b} ：{c} %'
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
		    yAxis: [{
		    	 type: 'value',
		    	 min:20,
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
		    },{
		    	 type: 'value',
		    	 min:20,
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
		    }],
		    series: [{
	            name: "进口量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData,

	        },{
	            name: "对外依赖度",
	            type: "line",
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                    color: '#E9DC37'
	                },
	            },
	            data: lineData,

	        }]
		};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	var xData = data[2];
	var lineData = data[6];
	var barData1 = data[3];
	var barData2 = data[4];
	var barData3 = data[5];
	    var option =  {
	        grid:{
	            top:'7%',
	            left:'10%',
	            right:'10%',
	            bottom:'25%',
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
	                rotate: 30,
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
	            type: "value",
	            position: 'right',
	            min:16,
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
	            	formatter: '{value}%',
	                show: true,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:8
	                }
	            }
	        }],
	        series: [{
	            name: "新增查明储量",
	            type: "bar",
	            barWidth: '20%',
	            itemStyle: {
	                normal: {
	                	 color: '#003AC4',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData1,

	        },{
	            name: "查明储量",
	            type: "bar",
	            barWidth: '20%',
	            itemStyle: {
	                normal: {
	                	 color: '#366DFF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData2,

	        },{
	            name: "消耗储量",
	            type: "bar",
	            barWidth: '20%',
	            itemStyle: {
	                normal: {
	                	 color: '#15C0FE',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData3,

	        }, {
	            name: "储量接替率",
	            type: "line",
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                    color: '#fff'
	                },
	            },
	            data: lineData,

	        }]
	    }
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	option = {
		    tooltip: {
		        trigger: 'axis',
		        //formatter: '{a}</br>{b} ：{c} %'
		    },
		    grid:{
	            top:'12%',
	            left:'12%',
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
		    yAxis: [{
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
		             formatter: '{value}%'
		         }
		    }],
		    series: [
		    {
		        name: '生产增长率',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#00EE76'
	                },
	            },
		        data: lineData1
		    },{
		        name: '消费增长率',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#00FFFF'
	                },
	            },
		        data: lineData2
		    }]
		};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var xData = data[2];
	var barData1 = data[3];
	var barData2 = data[4];
	var lineData = data[5];
	    var option =  {
	        grid:{
	            top:'7%',
	            left:'12%',
	            right:'12%',
	            bottom:'25%',
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
	                rotate: 30,
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
	            //min:36,
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
	                formatter: '{value}%',
	                textStyle: {
	                    color: '#fff',
	                    fontSize:8
	                }
	            }
	        }],
	        series: [{
	            name: "中国",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#00bfff',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData1,

	        },{
	            name: "美国",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData2,

	        },{
	            name: "中国与美国比较",
	            type: "line",
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                    color: '#E9DC37'
	                },
	            },
	            data: lineData,

	        }]
	    }
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
	var xData = data[2];
	var lineData = data[5];
	var barData1 = data[3];
	var barData2 = data[4];
	    var option =  {
	        grid:{
	            top:'7%',
	            left:'10%',
	            right:'10%',
	            bottom:'25%',
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
	                rotate: 30,
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
	           // min:36,
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
	            	 formatter: '{value}%',
	                show: true,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:8
	                }
	            }
	        }],
	        series: [{
	            name: "天然气产量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData1,

	        },{
	            name: "天然气消费量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData2,

	        },{
	            name: "天然气供需比",
	            type: "line",
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                    color: '#E9DC37'
	                },
	            },
	            data: lineData,

	        }]
	    }
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}


function chart6(data){
	var xData = data[2];
	var barData1 = data[3];
	var barData2 = data[4];
	var lineData = data[5];
	    var option =  {
	        grid:{
	            top:'7%',
	            left:'10%',
	            right:'12%',
	            bottom:'25%',
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
	                rotate: 30,
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
	           // min:36,
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
	            	 formatter: '{value}%',
	                show: true,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:8
	                }
	            }
	        }],
	        series: [{
	            name: "储气库工作气量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#226FFF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData1,

	        },{
	            name: "消费量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#7C7DFF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData2,

	        },{
	            name: "工作气量占消费量比重",
	            type: "line",
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                    color: '#15BEFB'
	                },
	            },
	            data: lineData,

	        }]
	    }
	var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}