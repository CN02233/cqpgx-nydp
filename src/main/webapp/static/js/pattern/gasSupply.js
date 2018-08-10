$(document).ready(function(){
	getdata('/pattern/gasSupply/chart1.json',chart1);
	getdata('/pattern/gasSupply/chart2.json',chart2);
	getdata('/pattern/gasSupply/chart3.json',chart3);
	getdata('/pattern/gasSupply/chart4.json',chart4);
	getdata('/pattern/gasSupply/chart5.json',chart5);
	main();
});

function chart1(data){
	var pieData = data[3];
	var legendData = data[1];
	option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    color: ['#fd9173', '#f36f8a', '#5f71d2', '#42a4eb', '#4ac7f5'],
		    legend: { //图例组件，颜色和名字
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        x:'center',
		        bottom:'9%',
		        data: data[0],
		        textStyle: {
		            color: '#fff',
		            fontSize: 10,
		        }
		    },    
		    series: [{
		        name: '违规次数',
		        type: 'pie',
		        clockwise: false, //饼图的扇区是否是顺时针排布
		        minAngle: 20, //最小的扇区角度（0 ~ 360）
		        center: ['50%', '40%'], //饼图的中心（圆心）坐标
		        radius: ['40%', '50%'], //饼图的半径
		        avoidLabelOverlap: true, ////是否启用防止标签重叠
		        itemStyle: { //图形样式
		            normal: {
		                borderColor: '#1e2239',
		                borderWidth: 1.5,
		            },
		        },
		        label: {
	                normal: {
	                	color:'#fff',
	                    formatter: '{b}\n{d}%'
	                },
	          
	            },
		        data: pieData
		    }]
		};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	var yData = data[2];
	var barData1 = data[3];
	var barData2 = data[4];
	option = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: { //图例组件，颜色和名字
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        x:'center',
		        bottom:'5%',
		        data: data[0],
		        textStyle: {
		            color: '#fff',
		            fontSize: 10,
		        }
		    },  
		    grid: {
		        left: '3%',
		        right: '8%',
		        bottom: '15%',
		        top:'3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'value',
		            min:-1,
		            splitLine: {
			        	 show: false,
			             lineStyle: {
			                 color: '#fff',
			             }
			         },
			         axisLine: {
				            lineStyle: {
				                color: '#59ebe8'
				            }
				        },
			         splitArea: {
			             show: false
			         },
			         axisLabel: {
			             textStyle: {
			                 color: '#fff',
			                 fontWeight: 'normal',
			                 fontSize: 10
			             },
			             formatter: '{value}',
			         }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'category',
		            axisTick : {show: false},
		            splitLine: {
			        	 show: false,
			             lineStyle: {
			                 color: '#fff',
			             }
			         },
			         axisLine: {
				            lineStyle: {
				                color: '#59ebe8'
				            }
				        },
			         axisLabel: {
			             textStyle: {
			                 color: '#fff',
			                 fontSize: 10
			             }
			         },
		            data : yData
		        }
		    ],
		    series : [
		        {
		            name:'同比增长率',
		            type:'bar',
		            
		            itemStyle: {
		                normal: {
		                	 color: '#00FFFF',
		                }
		            },
		            data:barData1
		        },
		        {
		            name:'产量占比',
		            type:'bar',
		            stack: '总量',
		            
		            itemStyle: {
		                normal: {
		                	 color: '#87CEFA',
		                }
		            },
		            data:barData2
		        }
		    ]
		};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	var xData = data[2];
	var lineData = data[3];
	var barData1 = data[4];
	var barData2 = data[5];
	    var option =  {
	    		 legend: { //图例组件，颜色和名字
	 		        itemGap: 12, //图例每项之间的间隔
	 		        itemWidth: 16,
	 		        itemHeight: 8,
	 		        x:'center',
	 		        bottom:'5%',
	 		        data: data[0],
	 		        textStyle: {
	 		            color: '#fff',
	 		            fontSize: 10,
	 		        }
	 		    },
	 		   grid: {
			        left: '10%',
			        right:'9%',
			        top:'10%',
			        bottom:'35%',
			        //containLabel: true
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
	                    fontSize:10
	                },
	                rotate: 30,
	            },
	            axisLine:{
	                lineStyle:{
	                    color: '#59ebe8'
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
	                    fontSize:10
	                }
	            },
	            axisLine: {
	            	lineStyle:{
	                    color: '#59ebe8'
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
	                    color: '#59ebe8'
	                }
	            },
	            splitLine: {
	                show: false
	            },
	            axisLabel: {
	                show: true,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:10
	                }
	            }
	        }],
	        series: [{
	            name: "产量",
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
	            name: "消费量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#00FFFF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData2,

	        }, {
	            name: "PI",
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
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
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
	            right:'9%',
	            bottom:'30%',
	        },
	        legend: { //图例组件，颜色和名字
 		        itemGap: 12, //图例每项之间的间隔
 		        itemWidth: 16,
 		        itemHeight: 8,
 		        x:'center',
 		        bottom:'5%',
 		        data: data[0],
 		        textStyle: {
 		            color: '#fff',
 		            fontSize: 10,
 		        }
 		    },
		    xAxis: {
		    	type: "category",
		        axisLine: {
		            lineStyle: {
		            	 color: '#59ebe8',
		            }
		        },
		        splitLine: {
		        	show: false,
		            lineStyle: {
		                color: '#59ebe8 ',
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
		                fontSize: 10
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
		                 color: '#59ebe8',
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
		                 fontSize: 10
		             },
		             formatter: '{value}'
		         }
		    },
		    series: [{
		        name: '美国',
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
		        name: '俄罗斯',
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
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
    var xData = data[2];
    var barData = data[3];
	option = {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'none'
	        },
	        formatter: function (params) {
	            return params[0].name + ': ' + params[0].value;
	        }
	    },
	    grid:{
            top:'10%',
            left:'10%',
            right:'9%',
            bottom:'30%',
        },
        legend: { //图例组件，颜色和名字
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        x:'center',
		        bottom:'5%',
		        data: data[0],
		        textStyle: {
		            color: '#fff',
		            fontSize: 10,
		        }
		    },
	    xAxis: {
	    	type: "category",
	        axisLine: {
	            lineStyle: {
	            	 color: '#59ebe8',
	            }
	        },
	        splitLine: {
	        	show: false,
	            lineStyle: {
	                color: '#fff ',
	            }
	        },
	        //boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
	        axisTick: {
            	color: '#0177d4',
                show: true
            },
	        splitArea: {
	            show: false
	        },
	        axisLabel: {
	        	 //interval: 0,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:10
	                },
	                //rotate: 30,
	        },
	        data: xData
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
	                 color: '#59ebe8',
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
	                 fontSize: 10
	             },
	             formatter: '{value}'
	         }
	    },
	    color: ['#00FFFF'],
	    series: [{
	        name: '产量异动',
	        type: 'pictorialBar',
	        //barCategoryGap: '-130%',
	        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
	        itemStyle: {
	            normal: {
	                opacity: 0.5
	            },
	            emphasis: {
	                opacity: 1
	            }
	        },
	        data: barData,
	        z: 10
	    }
	    ]
	};
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function main(){
    var cnMap = {};
    for(var n in _country){
        cnMap[_country[n]] = n;
    }
    getdata('/pattern/index/main.json', function(data){
        var db = data.country;
        for(var i = 0; i < db.length; i++){
            db[i].name = _country[db[i].name];
        }
        var color = ["#070093", "#1c3fbf", "#1482e5", "#70b4eb", "#b4e0f3", "#b9e1f2", "#ffffff"];
        /*var regionCss = [];
        for(var i = 0; i < regionData.length; i++){
            var c = '', v = regionData[i].value;
            if(v < 1)
                c = color[0];
            else if(v >= 100 & v < 200)
                c = color[1];
            else if(v > 60 & v < 100)
                c = color[2];
            else if(v > 30 & v < 61)
                c = color[3];
            else if(v > 0)
                c = color[4];
            else
                c = color[5];
            regionCss.push({
                name:regionData[i].name,
                itemStyle:{
                    color:c
                }
            });
        }*/
        var data1 = db.filter(function(datItem, index){
            return index < 2;
        }).map(function(d,i){
            return {"name": d.name, value: [data.top[i][0], data.top[i][1], 0, d.value]};
        });

        var option = {
            visualMap: {
                type: 'piecewise',
                splitNumber: 6,
                inverse: true,
                seriesIndex:0,
                pieces: [{
                    min: 0,
                    max: 0.99,
                    label:'<10',
                    color: '#fff'
                }, {
                    min: 1,
                    max: 1.99,
                    label:'10-20',
                    color: '#b4e0f3'
                }, {
                    min: 2,
                    max: 4.99,
                    label:'20-50',
                    color: '#70b4eb'
                }, {
                    min: 5,
                    max: 9.99,
                    label:'50-100',
                    color: '#1482e5'
                }, {
                    min: 10,
                    max: 29.99,
                    label:'100-300',
                    color: '#1c3fbf'
                }, {
                    min: 30,
                    label:'>300',
                    color: '#070093'
                }],
                left: 'left',
                top: 'bottom',
                textStyle: {
                    color: '#fff'
                }
            },
            geo3D: {
                map: 'world',
                shading: 'color',
                silent: true,
                groundPlane: {
                    show: false
                },
                light: {
                    main: {
                        intensity: 0
                    },
                    ambient: {
                        intensity: 0
                    }
                },
                //regions: regionCss,
                viewControl: {
                    distance: 100
                },
                itemStyle: {
                    color: '#fff',
                    borderWidth:0.3
                },
                regionHeight: 0.5
            },
            series: [{
                type:'map3D',
                map: 'world',
                shading: 'color',
                label:{
                    textStyle:{
                        distance:10,
                        color:'#2874ff'
                    },
                    formatter:function(o){
                        if(o.value)
                            return cnMap[o.name] + " - " + o.value * 10 + "亿吨";
                        return cnMap[o.name];
                    }
                },
                itemStyle: {
                    color: '#fff',
                    borderWidth:0.3
                },
                viewControl: {
                    distance: 100
                },
                regionHeight: 0.5,
                data:db
            }/*,{
                type: 'scatter3D',
                coordinateSystem: 'geo3D',
                symbolSize: function(item){
                    return 20;
                },
                itemStyle: {
                    color: 'rgb(253, 235, 59)',
                    opacity: 1
                },
                data: data1
            }*/]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}
