$(document).ready(function(){
    main();
    chart1();
    chart2();
    chart3();
    chart4();
    chart5();
});

function main(){
    getdata('/statecn/market/main.json', function(data){
        var color = ["#070093", "#1c3fbf", "#1482e5", "#70b4eb", "#b4e0f3", "#b9e1f2", "#ffffff"];
        var regionCss = [{name:"China", itemStyle:{color:'#ffa24c'}}];
        /*for(var i = 0; i < regionData.length; i++){
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
        var data1 = data.top.map(function(o){
            return {
                value: parseFloat(o.value[0])
            };
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
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: 'transparent',
                        borderColor: '#3fdaff',
                        borderWidth: 1,
                        shadowColor: 'rgba(63, 218, 255, 0.3)',
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            series : [
                {
                    name: '进口量',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: data1,
                    symbolSize: function (val) {
                        return 15;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            position: 'left',
                            show: true
                        }
                    },
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
    });
}

function chart1(data){

	var option =  {
	    legend: {
	        data:['产量','天然气储产比'],
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
	        data: ['1980年','1981年','1982年','1983年','1984年','1985年','1986年','1987年','1988年','1989年','1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
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
	        name: "产量",
	        type: "bar",
	        barWidth: '30%',
	        itemStyle: {
	            normal: {
	            	 color: '#1E90FF',
	            	 barBorderRadius: 50,
	            },
	        },
	        data: [14.4,12.8,12.0,12.3,12.5,13.0,13.9,14.0,14.4,15.2,15.4,15.6,15.9,16.9,17.7,18.1,20.3,22.9,23.5,25.4,27.4,30.6,32.9,35.3,41.8,49.7,59.0,69.8,80.9,85.9,96.5,106.2,111.5,121.8,131.2,135.7,137.9,149.2],

	    }, {
	        name: "天然气储产比",
	        type: "line",
	        yAxisIndex: 1,
	        itemStyle: {
	            normal: {
	                color: '#E9DC37'
	            },
	        },
	        data: [49.25,54.90,72.01,71.51,71.58,67.44,62.86,64.36,64.66,67.96,65.30,64.67,88.59,99.65,95.09,93.02,58.19,51.11,58.72,54.25,50.25,45.10,38.82,38.16,34.93,31.11,28.75,32.57,33.49,33.37,28.45,27.59,28.17,27.70,27.26,34.49,39.72,36.73],

	    }]
	};
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
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
		          "name": "中国",
		          "icon": "circle",
		          "textStyle": {
		            "color": "#F1F1F3",
		            fontSize: 6
		          }
		        },
		        {
		          "name": "世界",
		          "icon": "circle",
		          "textStyle": {
		            "color": "#F1F1F3",
		            fontSize: 6
		          }
		        },
		        {
		          "name": "中国天然气探明储量占比",
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
		        "data": ['1980年','1981年','1982年','1983年','1984年','1985年','1986年','1987年','1988年','1989年','1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
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
		        "name": "中国",
		        "type": "bar",
		        "data": [0.7,0.7,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.0,1.0,1.0,1.4,1.7,1.7,1.7,1.2,1.2,1.4,1.4,1.4,1.4,1.3,1.3,1.5,1.5,1.7,2.3,2.7,2.9,2.7,2.9,3.1,3.4,3.6,4.7,5.5,5.5],
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
		                  "color": "rgba(239,206,232,0.7)"
		                },
		                {
		                  "offset": 0.5,
		                  "color": "rgba(243,215,181,0.7)"
		                },
		                {
		                  "offset": 1,
		                  "color": "rgba(253,255,223,0.3)"
		                }
		              ],
		              "globalCoord": false
		            }
		          }
		        }
		      },
		      {
		        "name": "世界",
		        "type": "bar",
		        "data": [71.6,74.2,76.7,78.3,81.0,83.3,89.3,91.8,95.7,106.5,109.3,115.5,118.4,119.8,120.7,121.2,124.4,128.1,131.6,134.7,140.9,155.4,157.0,157.6,158.2,159.0,160.0,163.5,171.9,172.5,180.1,190.8,190.3,191.9,193.2,191.5,193.1,193.5],
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
		                  "color": "rgba(218,249,202,0.3)"
		                },
		                {
		                  "offset": 0.5,
		                  "color": "rgba(199,179,229,0.6)"
		                },
		                {
		                  "offset": 1,
		                  "color": "rgba(121,232,208,0.9)"
		                }
		              ],
		              "globalCoord": false
		            }
		          }
		        },
		        "barGap": "0"
		      },
		      {
		        "name": "中国天然气探明储量占比",
		        "type": "line",
		        symbol: 'circle',
		        "yAxisIndex": 1,
		        "data": [1.0,0.9,1.1,1.1,1.1,1.1,1.0,1.0,1.0,1.0,0.9,0.9,1.2,1.4,1.4,1.4,0.9,0.9,1.0,1.0,1.0,0.9,0.8,0.9,0.9,1.0,1.1,1.4,1.6,1.7,1.5,1.5,1.7,1.8,1.9,2.4,2.8,2.8],
		        "itemStyle": {
		          "normal": {
		            "color": "#86E65A"
		          }
		        },
		        "smooth": true
		      }
		    ]
		};
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(){
	option = 
	{
	    //backgroundColor:'#ffffff',
	    
	    color: ['#99CCCC','#FFCC99','#FFCC99','#996699','#FF9999','#FFFF99','#CCCCFF'],
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
	        data: ['2000', '2005', '2010', '2015'],
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
	            /*itemStyle: {
	                normal: {
	                    color: '#3CB371'
	                }
	            },*/
	            data: [29.43,17.80,12.54,8.45]
	        },
	        {
	            name: '制造业',
	            type: 'bar',
	            stack: '总量',
	            /*itemStyle: {
	                normal: {
	                    color: '#3fa7d3'
	                }
	            },*/
	            data: [48.46,46.91,33.45,37.20]
	        },
	        {
	            name: '电力生产',
	            type: 'bar',
	            stack: '总量',
	            /*itemStyle: {
	                normal: {
	                    color: '#FF6347'
	                }
	            },*/
	            data: [3.32,5.59,17.68,18.26]
	        },
	        {
	            name: '交运仓储',
	            type: 'bar',
	            stack: '总量',
	            /*itemStyle: {
	                normal: {
	                    color: '#FF1347'
	                }
	            },*/
	            data: [3.60,8.13,9.98,12.30]
	        },
	        {
	            name: '其他行业',
	            type: 'bar',
	            stack: '总量',
	            /*itemStyle: {
	                normal: {
	                    color: '#FF2347'
	                }
	            },*/
	            data: [0.60,2.27,2.59,2.51]
	        },
	        {
	            name: '生活消费',
	            type: 'bar',
	            stack: '总量',
	            /*itemStyle: {
	                normal: {
	                    color: '#FF3347'
	                }
	            },*/
	            data: [13.19,16.99,21.22,18.63]
	        },
	        {
	            name: '批发零售业',
	            type: 'bar',
	            stack: '总量',
	            /*itemStyle: {
	                normal: {
	                    color: '#FF4347'
	                }
	            },*/
	            data: [1.40,2.31,2.55,2.66]
	        }
	    ]    

	};
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(){
	
	var option = {
	        tooltip:{},
	        legend:{
	            y : 'left',
	            textStyle:{
	                color:'#fff',
	                fontSize: 6
	            },
	            data:['产量','生产指数PI']
	        },
	        grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        top: '10%',
		        containLabel: true
		    },
	        xAxis: {
	            axisLabel: {
	                textStyle: {
	                    color: '#fff',
	                    fontSize: 6
	                }
	            },
	            splitLine: {
	                show: false
	            },
	            type: 'category',
	            data:['1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
	        },
	        yAxis: [{
	            axisLine: {
	                show: false
	            },
	            splitLine:{
	                show:false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#fff',
	                    fontSize: 6
	                }
	            },
	            type: 'value'
	        },{
	            axisLine: {
	                show: false
	            },
	            splitLine:{
	                show:false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#fff',
	                    fontSize: 6
	                },
	                formatter:function(v){
	                    return v + '%';
	                }
	            },
	            type: 'value'
	        }],
	        series: [
	            {
	                name:'产量',
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
	                data: [13.3,13.4,13.7,14.5,15.2,15.6,17.4,19.7,20.2,21.8,23.6,26.3,28.3,30.3,35.9,42.7,50.7,60.0,69.6,73.9,83.0,91.3,95.9,104.7,112.8,116.7,118.6,128.3]
	            },
	            {
	                name:'生产指数PI',
	                yAxisIndex:1,
	                type:'line',
	                itemStyle:{
	                    normal:{
	                        color:'#8121dd'
	                    }
	                },
	                data: [100.00,100.00,100.00,100.00,100.00,101.18,108.20,115.57,114.92,117.23,111.01,110.57,111.91,103.26,104.51,105.82,102.13,98.18,98.78,95.25,88.68,78.55,73.89,70.87,69.64,69.68,65.86,62.05]
	            }
	        ]
	    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(){
	
	
	
	option = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    //color:['#8fc31f','#f35833','#00ccff','#ffcc00'],
		    color:['rgba(236,247,82,0.5)','rgba(121,232,208,0.6)','rgba(255,184,184,0.7)','rgba(36,209,151,0.8)'],
		    
		    /*legend: {
		        orient: 'vertical',
		        x: 'right',
		        data: ['中石油','中石化','中海油','其他'],
		        formatter:function(name){
		        	var oa = option.series[0].data;
		        	var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
		        	for(var i = 0; i < option.series[0].data.length; i++){
	                    if(name==oa[i].name){
	                    	return name + '     ' + oa[i].value + '     ' + (oa[i].value/num * 100).toFixed(2) + '%';
	                    }
		        	}
		        }
		    },*/
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        top: '10%',
		        containLabel: true
		    },
		    series : [
		        {
		            name: '国内天然气产量构成',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '50%'],
		            data:[
		                {value:70, name:'中石油'},
		                {value:17, name:'中石化'},
		                {value:10, name:'中海油'},
		                {value:3, name:'其他'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            },
		            itemStyle: {
		                normal: {
		                    label:{ 
	                            show: true, 
	                            //position:'inside',
	                            formatter: '{b} : {c} ({d}%)' 
	                        }
		                },
	                    labelLine :{show:true}
		            }
		        }
		    ]
		};
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}