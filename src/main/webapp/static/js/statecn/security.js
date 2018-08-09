$(document).ready(function(){
    getdata('/statecn/security/bidCompMapInfo.json',chart1);
    getdata('/statecn/security/chart2.json',chart2);
    getdata('/statecn/security/chart3.json',chart3);
    getdata('/statecn/security/chart4.json',chart4);
    getdata('/statecn/security/chart5.json',chart5);
    getdata('/statecn/security/chart6.json',chart6);
	getdata('/statecn/security/main.json',main);
});

function main(data){
	option = {
		    tooltip : {
		        formatter: "{a} <br/>{c} {b}"
		    },
		    series : [
		        {
		            name: '石油对外依赖度',
		            type: 'gauge',
		            z: 3,
		            min: 0,
		            max: 100,
		            splitNumber: 10,
		            radius: '80%',
		            axisLine: {            // 坐标轴线
		                lineStyle: {
		                	color:[[0.3,'#00CD00'],[0.7,'#0000FF'],[1,'#FF4500']],// 属性lineStyle控制线条样式
		                    width: 10
		                }
		            },
		            axisTick: {            // 坐标轴小标记
		                length: 15,        // 属性length控制线长
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: 'auto'
		                }
		            },
		            splitLine: {           // 分隔线
		                length: 20,         // 属性length控制线长
		                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
		                    color: 'auto'
		                }
		            },
		            title : {
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    fontWeight: 'bolder',
		                    fontSize: 20,
		                    fontStyle: 'italic',
		                    color:'#fff'
		                }
		            },
		            detail : {
		            	formatter:'{value}%',
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    fontWeight: 'bolder'
		                }
		            },
		            data:[data[0]]
		        },
		        {
		            name: '石油进口集中度',
		            type: 'gauge',
		            center: ['26%', '55%'],    // 默认全局居中
		            radius: '65%',
		            min:0,
		            max:100,
		            endAngle:45,
		            splitNumber:10,
		            axisLine: {            // 坐标轴线
		                lineStyle: {       // 属性lineStyle控制线条样式
		                	color:[[0.3,'#00CD00'],[0.7,'#0000FF'],[1,'#FF4500']],
		                    width: 8
		                }
		            },
		            axisTick: {            // 坐标轴小标记
		                length:12,        // 属性length控制线长
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: 'auto'
		                }
		            },
		            splitLine: {           // 分隔线
		                length:20,         // 属性length控制线长
		                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
		                    color: 'auto'
		                }
		            },
		            pointer: {
		                width:5
		            },
		            title: {
		                offsetCenter: [0, '-30%'], 
		                textStyle: {
		                    color:'#fff'
		                }
		            },
		            detail: {
		            	formatter:'{value}%',
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    fontWeight: 'bolder'
		                }
		            },
		            data:[data[1]]
		        },
		        {
		            name: '储量接替率',
		            type: 'gauge',
		            center: ['73%', '50%'],    // 默认全局居中
		            radius: '55%',
		            min: 0,
		            max: 2,
		            startAngle: 135,
		            endAngle: 45,
		            splitNumber: 2,
		            axisLine: {            // 坐标轴线
		                lineStyle: {       // 属性lineStyle控制线条样式
		                	color:[[0.3,'#00CD00'],[0.7,'#0000FF'],[1,'#FF4500']],
		                    width: 8
		                }
		            },
		            axisTick: {            // 坐标轴小标记
		                splitNumber: 5,
		                length: 10,        // 属性length控制线长
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: 'auto'
		                }
		            },
		            axisLabel: {
		                formatter:function(v){
		                    switch (v + '') {
		                        case '0' : return 'E';
		                        case '1' : return 'Gas';
		                        case '2' : return 'F';
		                    }
		                }
		            },
		            splitLine: {           // 分隔线
		                length: 15,         // 属性length控制线长
		                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
		                    color: 'auto'
		                }
		            },
		            pointer: {
		                width:2
		            },
		            title : {
		                show: false
		            },
		            detail : {
		                show: false
		            },
		            data:[{value: 0.5, name: 'gas'}]
		        },
		        {
		            name: '水表',
		            type: 'gauge',
		            center : ['73%', '50%'],    // 默认全局居中
		            radius : '55%',
		            min: 0,
		            max: 2,
		            startAngle: 315,
		            endAngle: 225,
		            splitNumber: 2,
		            axisLine: {            // 坐标轴线
		                lineStyle: {       // 属性lineStyle控制线条样式
		                	color:[[0.3,'#00CD00'],[0.7,'#0000FF'],[1,'#FF4500']],
		                    width: 8
		                }
		            },
		            axisTick: {            // 坐标轴小标记
		                show: false
		            },
		            axisLabel: {
		                formatter:function(v){
		                    switch (v + '') {
		                        case '0' : return 'H';
		                        case '1' : return 'Water';
		                        case '2' : return 'C';
		                    }
		                }
		            },
		            splitLine: {           // 分隔线
		                length: 15,         // 属性length控制线长
		                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
		                    color: 'auto'
		                }
		            },
		            pointer: {
		                width:2
		            },
		            title: {
		                show: false
		            },
		            detail: {
		                show: false
		            },
		            data:[{value: 0.5, name: 'gas'}]
		        }
		    ]
		};
	var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}

function chart1(data){
	var xData = data[2];
	var lineData = data[3];
	option = {
		    tooltip: {
		        trigger: 'axis',
		        formatter: '{a}</br>{b} ：{c} %'
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
		    },
		    series: [
		    {
		        name: '原油对外依存度',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#FFD700'
	                },
	            },
		        data: lineData
		    }]
		};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	var xData = data[2];
	var lineData = data[4];
	var barData = data[3];
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
	            name: "石油消费总量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData,

	        }, {
	            name: "石油消费比重",
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
		        name: '能源消费强度',
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
		        name: '增长率',
		        type: 'line',
		        yAxisIndex: 1,
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
	var barData = data[3];
	var lineData = data[4];
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
	            name: "需求-供给",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData,

	        }, {
	            name: "需求-供给变化",
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
	            name: "石油产量",
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
	            name: "石油消费量",
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
	            name: "石油供需比",
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
	var barData3 = data[5];
	var lineData = data[6];
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
	            min:90,
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
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData1,

	        },{
	            name: "查明储量",
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
	            name: "消耗储量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData3,

	        },{
	            name: "储量接替率",
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
	var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}