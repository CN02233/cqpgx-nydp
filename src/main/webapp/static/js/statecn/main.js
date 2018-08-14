$(document).ready(function(){
    getdata('/statecn/main/chart1.json',chart1);
    getdata('/statecn/main/chart2.json',chart2);
    getdata('/statecn/main/chart3.json',chart3);
    getdata('/statecn/main/main.json',main);
    getdata('/statecn/main/chart41.json',chart41);
    getdata('/statecn/main/chart42.json',chart42);
    getdata('/statecn/main/chart43.json',chart43);

});

function chart1(data){
	var xData = data[2];
	var lineData = data[4];
	var barData = data[3];
	    var option =  {
	    		 legend: { //图例组件，颜色和名字
	 		        itemGap: 12, //图例每项之间的间隔
	 		        itemWidth: 16,
	 		        itemHeight: 8,
	 		        x:'center',
	 		        bottom:'2%',
	 		        data: data[0],
	 		        textStyle: {
	 		            color: '#fff',
	 		            fontSize: 10,
	 		        }
	 		    },    
	 		    grid: {
	 		        left: '10%',
	 		        right:'10%',
	 		        top:'10%',
	 		        bottom:'34%',
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
	            axisLabel: {
	                //interval: 0,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:10
	                },
	                rotate: 30,
	            },
	            axisLine:{
	                lineStyle:{
	                    color: '#38b8ff'
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
	                    fontSize:10
	                }
	            },
	            axisLine: {
	            	lineStyle:{
	                    color: '#38b8ff'
	                }
	            },
	            axisTick: {
	            	color: '#38b8ff',
	                show: true
	            },
	            splitLine: {
	                show: false
	            }
	        },{
	            type: "value",
	            position: 'right',
	            //min:16,
	            axisLine: {
	            	lineStyle:{
	                    color: '#38b8ff'
	                }
	            },
	            axisTick: {
	                show: true
	            },
	            splitLine: {
	                show: false
	            },
	            axisLabel: {
	            	formatter: '{value}%',
	                show: true,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:10
	                }
	            }
	        }],
	        series: [{
	            name: "企业数",
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
	            name: "企业数占比",
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
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}


function chart2(data){
	var xData = data[2];
	var barData1 = data[3];
	var barData2 = data[4];
	var barData3 = data[5];
	var barData4 = data[6];
	    var option =  {
	    		legend: { //图例组件，颜色和名字
	 		        itemGap: 12, //图例每项之间的间隔
	 		        itemWidth: 16,
	 		        itemHeight: 8,
	 		        x:'center',
	 		        bottom:'2%',
	 		        data: data[0],
	 		        textStyle: {
	 		            color: '#fff',
	 		            fontSize: 10,
	 		        }
	 		    },    
	 		    grid: {
	 		        left: '10%',
	 		        right:'5%',
	 		        top:'10%',
	 		        bottom:'34%',
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
	                //interval: 0,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:10
	                },
	                rotate: 30,
	            },
	            axisLine:{
	                lineStyle:{
	                    color: '#38b8ff'
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
	                    fontSize:10
	                }
	            },
	            axisLine: {
	            	lineStyle:{
	                    color: '#38b8ff'
	                }
	            },
	            axisTick: {
	            	color: '#38b8ff',
	                show: true
	            },
	            splitLine: {
	                show: false
	            }
	        }],
	        series: [{
	            name: "大型企业数",
	            type: "bar",
	            barWidth: '30%',
	            stack: '1',
	            itemStyle: {
	                normal: {
	                	 color: '#BBFFFF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData1,

	        },{
	            name: "中型企业数",
	            type: "bar",
	            barWidth: '30%',
	            stack: '1',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData2,

	        },{
	            name: "小型企业数",
	            type: "bar",
	            barWidth: '30%',
	            stack: '1',
	            itemStyle: {
	                normal: {
	                	 color: '#00F5FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData3,

	        },{
	            name: "微型企业数",
	            type: "bar",
	            barWidth: '30%',
	            stack: '1',
	            itemStyle: {
	                normal: {
	                	 color: '#FFD700',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData4,

	        }]
	    }
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	option = {
		    tooltip: {
	        show:"true",
	        trigger: 'item',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	        }
	        },
	        legend: { //图例组件，颜色和名字
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        x:'center',
		        bottom:'4%',
		        data: data[0],
		        textStyle: {
		            color: '#fff',
		            fontSize: 10,
		        }
		    },    
		    grid: {
		        left: '12%',
		        right:'5%',
		        top:'10%',
		        bottom:'34%',
		        //containLabel: true
		    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: data[2],
        axisLine: {
            lineStyle: {
                color: '#38b8ff'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 10
        }
    }],
    yAxis: [{
	    	 nameTextStyle: {
	             color: '#fff',
	             fontSize: 10
	         },
	         axisLine: {
		            lineStyle: {
		                color: '#38b8ff'
		            }
		        },
	         axisLabel: {
	             color: '#fff',
	             fontSize: 10,
	             formatter: '{value}%'
	         },
	         splitLine: {
	             show:false,
	             lineStyle: {
	                 color: '#0177d4'
	             }
	         }
	        }],
	    series: [{
            name:'总资产收入率',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(199, 37, 50,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(199, 37, 50,0.2)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {
                normal: {
                	color:'#00F5FF',
                	areaStyle: {type: 'default'}}    
            },
            data:data[3]
        },
         {
            name:'总资产利润率',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(19, 37, 250,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(19, 37, 250,0.2)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {
            	normal: {
            	color:'#0000FF',	
            	areaStyle: {type: 'default'}}},
            data:data[4]
        }]
	};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);	
}

function chart41(data){
	 var option =  {
			 legend: { //图例组件，颜色和名字
			        itemGap: 12, //图例每项之间的间隔
			        itemWidth: 16,
			        itemHeight: 8,
			        x:'center',
			        bottom:'4%',
			        data: data[0],
			        textStyle: {
			            color: '#fff',
			            fontSize: 10,
			        }
			    },    
			    grid: {
			        left: '12%',
			        right:'2%',
			        top:'10%',
			        bottom:'34%',
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
		                //interval: 0,
		                textStyle: {
		                    color: '#fff',
		                    fontSize:10
		                },
		                //rotate: 30,
		            },
		            axisLine:{
		                lineStyle:{
		                    color: '#38b8ff'
		                }
		            },
		            data: data[2],
		        }],
		        yAxis: [{
		            name: '',
		            type: 'value',
		            position: 'left',
		            axisLabel: {
		            	formatter:'{value}%',
		                textStyle: {
		                    color: '#fff',
		                    fontSize:10
		                }
		            },
		            axisLine: {
		            	lineStyle:{
		                    color: '#38b8ff'
		                }
		            },
		            axisTick: {
		            	color: '#38b8ff',
		                show: true
		            },
		            splitLine: {
		                show: false
		            }
		        }],
		        series: [{
		            name: '亏损面',
		            type: 'pictorialBar',
		            symbol: 'rect',
		            barWidth: '60%',
		            itemStyle: {
		                normal: {
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1,
		                        [
		                            {offset: 0, color: 'rgba(0,245,255,0.8)'},
		                            {offset: 0.4, color: 'rgba(0,245,255,0.6)'},
		                            {offset: 1, color: 'rgba(0,245,255,0.2)'}
		                        ]
		                    )
		                }
		            },
		            symbolRepeat: true,
		            //symbolSize: [12, 4],
		            symbolMargin: 1,
		            z: -10,
		            data: data[3]
		        }]
		    }
	var myChart = echarts.init($('#chart41')[0]);
	 myChart.setOption(option);	
}

function chart42(data){
	 var option =  {
			 legend: { //图例组件，颜色和名字
			        itemGap: 12, //图例每项之间的间隔
			        itemWidth: 16,
			        itemHeight: 8,
			        x:'center',
			        bottom:'4%',
			        data: data[0],
			        textStyle: {
			            color: '#fff',
			            fontSize: 10,
			        }
			    },    
			    grid: {
			        left: '21%',
			        right:'2%',
			        top:'10%',
			        bottom:'34%',
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
		                //interval: 0,
		                textStyle: {
		                    color: '#fff',
		                    fontSize:10
		                },
		                //rotate: 30,
		            },
		            axisLine:{
		                lineStyle:{
		                    color: '#38b8ff'
		                }
		            },
		            data: data[2],
		        }],
		        yAxis: [{
		            name: '',
		            type: 'value',
		            position: 'left',
		            axisLabel: {
		            	formatter:function (v) {
		            		return v/100000 + '万%';
		            	},
		                textStyle: {
		                    color: '#fff',
		                    fontSize:10
		                }
		            },
		            axisLine: {
		            	lineStyle:{
		                    color: '#38b8ff'
		                }
		            },
		            axisTick: {
		            	color: '#38b8ff',
		                show: true
		            },
		            splitLine: {
		                show: false
		            }
		        }],
		        series: [{
		            name: '亏损深度',
		            type: 'pictorialBar',
		            symbol: 'rect',
		            barWidth: '60%',
		            itemStyle: {
		                normal: {
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1,
		                        [
		                            {offset: 0, color: 'rgba(0,245,255,0.8)'},
		                            {offset: 0.4, color: 'rgba(0,245,255,0.6)'},
		                            {offset: 1, color: 'rgba(0,245,255,0.2)'}
		                        ]
		                    )
		                }
		            },
		            symbolRepeat: true,
		            //symbolSize: [12, 4],
		            symbolMargin: 1,
		            z: -10,
		            data: data[3]
		        }]
		    }
	var myChart = echarts.init($('#chart42')[0]);
	 myChart.setOption(option);	
}

function chart43(data){
	 var option =  {
			 legend: { //图例组件，颜色和名字
			        itemGap: 12, //图例每项之间的间隔
			        itemWidth: 16,
			        itemHeight: 8,
			        x:'center',
			        bottom:'4%',
			        data: data[0],
			        textStyle: {
			            color: '#fff',
			            fontSize: 10,
			        }
			    },    
			    grid: {
			        left: '12%',
			        right:'2%',
			        top:'10%',
			        bottom:'34%',
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
		                //interval: 0,
		                textStyle: {
		                    color: '#fff',
		                    fontSize:10
		                },
		                //rotate: 30,
		            },
		            axisLine:{
		                lineStyle:{
		                    color: '#38b8ff'
		                }
		            },
		            data: data[2],
		        }],
		        yAxis: [{
		            name: '',
		            type: 'value',
		            position: 'left',
		            axisLabel: {
		            	formatter:'{value}%',
		                textStyle: {
		                    color: '#fff',
		                    fontSize:10
		                }
		            },
		            axisLine: {
		            	lineStyle:{
		                    color: '#38b8ff'
		                }
		            },
		            axisTick: {
		            	color: '#38b8ff',
		                show: true
		            },
		            splitLine: {
		                show: false
		            }
		        }],
		        series: [{
		            name: '集中度',
		            type: 'pictorialBar',
		            symbol: 'rect',
		            barWidth: '60%',
		            itemStyle: {
		                normal: {
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1,
		                        [
		                            {offset: 0, color: 'rgba(0,245,255,0.8)'},
		                            {offset: 0.4, color: 'rgba(0,245,255,0.6)'},
		                            {offset: 1, color: 'rgba(0,245,255,0.2)'}
		                        ]
		                    )
		                }
		            },
		            symbolRepeat: true,
		            //symbolSize: [12, 4],
		            symbolMargin: 1,
		            z: -10,
		            data: data[3]
		        }]
		    }
	var myChart = echarts.init($('#chart43')[0]);
	 myChart.setOption(option);	
}

function main(da){
		var hours = da[1];
	     var days = da[0];
	     var datas = [];
	     for (var i = 0; i < 7; i++) {
	    	 var max = Math.max.apply(null,da[i+2]);
			for (var j = 0; j < hours.length; j++) {
				var d = [];
				var s = Math.ceil((da[i+2][j]/max)*10);
				d.push(i,j,s,da[i+2][j]);
				datas.push(d);
			}
		}
	    // alert(JSON.stringify(datas));
	    var data =datas; /*[[0,0,5.42],[0,1,5.50],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[0,24,5],[0,25,5],[0,26,5],[0,27,5],[0,28,5],[0,29,5],
	                 [1,0,4.24],[1,1,3.04],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[1,24,5],[1,25,5],[1,26,5],[1,27,5],[1,28,5],[1,29,5],
	                 [2,0,5.33],[2,1,2.79],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[2,24,5],[2,25,5],[2,26,5],[2,27,5],[2,28,5],[2,29,5],
	                 [3,0,1.77],[3,1,4.02],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[3,24,5],[3,25,5],[3,26,5],[3,27,5],[3,28,5],[3,29,5],
	                 [4,0,5.15],[4,1,6.08],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[4,24,5],[4,25,5],[4,26,5],[4,27,5],[4,28,5],[4,29,5],
	                 [5,0,3.02],[5,1,0.00],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[5,24,5],[5,25,5],[5,26,5],[5,27,5],[5,28,5],[5,29,5],
	                 [6,0,5.00],[6,1,6.56],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6],[6,24,5],[6,25,5],[6,26,5],[6,27,5],[6,28,5],[6,29,5]];
*/
	     option = {
	         tooltip: {
	             position: 'top',
	             formatter:function(v){
	            	 //alert(JSON.stringify(v));
	                    return v.name+'<br/>'+da[0][v.seriesIndex]+'：'+da[v.seriesIndex+2][v.dataIndex];
	                }
	         },
	         title: [],
	         singleAxis: [],
	         series: []
	     };

	     echarts.util.each(days, function (day, idx) {
	    	 var sh = false;
	    	 if (idx==6) {
	    		 sh = true;
			}
	    	 var to = idx * 14+8;
	         if (idx == 0) {
	        	 to = 8;
			}
	         option.title.push({
	             textBaseline: 'middle',
	             top: to+'%',
	             left:'4%',
	             textStyle:{
	            	 fontSize:16,
	            	 color:'#fff'
	             },
	             text: day
	         });
	    
	         option.singleAxis.push({
	             left: 150,
	             type: 'category',
	             boundaryGap: false,
	             data: hours,
	             top: to + '%',
	             height: (100 / 7 - 12) + '%',
	             nameTextStyle:{
	            	 color:'#fff'
	             },
	             axisLabel: {
	            	 show:sh,
	            	 textStyle: {
		                    color: '#fff',
		                    fontSize:14
		                },
	                 interval: 1
	             },
	             axisLine:{
	            	 lineStyle:{
	            		 width:2,
	            		 color:'#fff'
	            	 }
	             }
	         });
	         option.series.push({
	             singleAxisIndex: idx,
	             coordinateSystem: 'singleAxis',
	             type: 'scatter',
	             data: [],
	             symbolSize: function (dataItem) {
	                 return dataItem[1] * 4;
	             },
	         itemStyle: {
	                normal: {
	                    color: function(params) {
	                        // build a color map as your need.
	                        var colorList = [
	                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
	                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
	                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0',
	                           '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
	                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
	                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
	                        
	                        ];
	                        return colorList[params.dataIndex]
	             } 
	                }
	             },
	         });
	     });

	     echarts.util.each(data, function (dataItem) {
	         option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
	     });
	var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);	
}


	
