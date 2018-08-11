$(document).ready(function(){
	main();
	getdata('/pattern/supply/chart1.json',chart1);
	getdata('/pattern/supply/chart2.json',chart2);
	getdata('/pattern/supply/chart3.json',chart3);
	chart4();
	getdata('/pattern/supply/chart5.json',chart5);
});

function chart1(data){
	option = {
		    tooltip : {
		        trigger: 'axis'
		    },
		     grid: {
		        left: '10%',
		        right:'3%',
		        top:'10%',
		        bottom:'30%',
		        //containLabel: true
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
		xAxis : {
		type: "category",
		 axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
        splitLine: {
        	show: false,
            lineStyle: {
                color: '#59ebe8 ',
            }
        },
        //boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
        axisTick: {
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
		            data : data[2]
		        },
		    yAxis : {
		    	 type: 'value',
		         axisTick: {
		             show: true
		         },
		         axisLine: {
			            lineStyle: {
			                color: '#59ebe8'
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
		             formatter: '{value}%',
		         },
		        },
		    series : [
		        {
		            name:'美国增长率',
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
		            name:'俄罗斯增长率',
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
		        },{
		            name:'OPEC增长率',
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
		            	color:'#ffd100',	
		            	areaStyle: {type: 'default'}}},
		            data:data[5]
		        }
		    ]
		};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
    setH('chart1');
}


function chart2(data){
	option = {
	    color: ['#3398DB'],
	    tooltip : {
	        trigger: 'axis'
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
	        left: '10%',
	        right:'3%',
	        top:'10%',
	        bottom:'30%',
	        //containLabel: true
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
	             fontSize: 10
	         },
	         splitLine: {
	             show:false,
	             lineStyle: {
	                 color: '#0177d4'
	             }
	         }
	        }],
	    series: [{
	            name: '世界产量异动',
	            type: 'bar',
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 30,
	                    color: new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: '#00feff'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#027eff'
	                            },
	                            {
	                                offset: 1,
	                                color: '#0286ff'
	                            }
	                        ]
	                    )
	                }
	            },
	            data: data[3]

	        }]
	};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
    setH('chart2');
}

function chart3(data){
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
		             fontSize: 10
		         },
		         splitLine: {
		             show:false,
		             lineStyle: {
		                 color: '#0177d4'
		             }
		         }
		        },{
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
	            name: "产量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#28B7FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: data[4],

	        }, {
	            name: "消费量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#00FFFF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: data[5],

	        },{
	            name: "PI",
	            type: "line",
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                    color: '#E9DC37'
	                },
	            },
	            data: data[3],

	        }]
	    }
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
    setH('chart3');
}

function chart4(data){
	 var dataStyle1 = {
		        normal: {
		            color: 'rgba(0,0,0,0)',
		            label: {
		                show: false
		            },
		            labelLine: {
		                show: false
		            }
		        },
		        emphasis: {
		        	label: {
		                show: false
		            },
		            labelLine: {
		                show: false
		            }
		        }
		    };
	 var dataStyle2 = {
		        normal: {
		            color: '#3525AA',
		            label: {
		                show: false
		            },
		            labelLine: {
		                show: false
		            }
		        },
		        emphasis: {
		        	label: {
		                show: false
		            },
		            labelLine: {
		                show: false
		            }
		        }
		    };
	
	option = {
			 title: {
			        text: '42.56%',
			        x: 'center',
			        y: 'center',
			        textStyle: {
			            color: '#98a0c4',
			            fontWeight: 'bolder',
			            fontSize: 16,
			        }
			    },
		  /* tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },*/
		    series : [
		       /* {
		            name: '访问来源',
		            type: 'pie',
		            radius : '60%',
		            center: ['50%', '50%'],
		            data:[
		                {value:335, name:'直接访问'}
		            ],
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: false
		                }
		            },
		            itemStyle: {
		            	normal: {
		                    color:'#102D7A'
		                },
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            },
		            animation: false
		        },*/{
		            type: 'pie',
		            radius : ["73%","80%"],
		            center: ['50%', '50%'],
		            data:[
		                {value:42.56, name:'欧佩克'},
		                {value:57.44, name:'非欧佩克'}
		            ],
		            color:["#E43715","#00d6ff"],
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: false,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            tooltip:{
            			trigger: 'item',
        		        formatter: "{b} : {c} ({d}%)"
            		},
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }/*,{
		            type: 'pie',
		            radius : ["61%","63%"],
		            center: ['50%', '50%'],
		            hoverAnimation: false,
		            data:[
		                {value:1.3, name:'1',itemStyle:dataStyle2},
		                {value:1, name:'1',itemStyle:dataStyle1},
		                {value:1, name:'1',itemStyle:dataStyle1},
		                {value:1, name:'1',itemStyle:dataStyle1}
		            ],
		            color:["#E43715","#00d6ff"],
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: false,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        },{
		            type: 'pie',
		            radius : ["63%","66%"],
		            center: ['50%', '50%'],
		            hoverAnimation: false,
		            data:[
		                 {value:1, name:'2',itemStyle:dataStyle1},
		                {value:1, name:'2',itemStyle:dataStyle1},
		                {value:1, name:'2',itemStyle:dataStyle1},
		                {value:1.3, name:'2',itemStyle:dataStyle2}
		            ],
		            color:["#E43715","#00d6ff"],
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: false,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        },{
		            type: 'pie',
		            radius : ["66%","69%"],
		            center: ['50%', '50%'],
		            hoverAnimation: false,
		            data:[
		                  {value:1, name:'3',itemStyle:dataStyle1},
			                {value:1, name:'3',itemStyle:dataStyle1},
			                {value:1.4, name:'3',itemStyle:dataStyle2},
			                {value:1, name:'3',itemStyle:dataStyle1}
		            ],
		            color:["#E43715","#00d6ff"],
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: false,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        },{
		            type: 'pie',
		            radius : ["69%","72%"],
		            center: ['50%', '50%'],
		            hoverAnimation: false,
		            data:[
		                  {value:1, name:'4',itemStyle:dataStyle1},
			                {value:1.5, name:'4',itemStyle:dataStyle2},
			                {value:1, name:'4',itemStyle:dataStyle1},
			                {value:1, name:'4',itemStyle:dataStyle1}
		            ],
		            color:["#E43715","#00d6ff"],
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: false,
		                    textStyle: {
		                        fontSize: 10,
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }*/
		    ]
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
	        itemHeight:100,
	        itemWidth:15,
	        left:'5%',
	       textStyle:{
	    	   color:'#fff',
	    	   fontSize: 10
	       },
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

function chart5(data){
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
            name:'同比增长率',
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
            name:'产量占比',
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
        }
	             /*{
	        name: '',
	        type: 'bar',
	        barWidth: 2,
			silent: false,
			stack: "1",
	        itemStyle: {
	            normal: {
	               //barBorderRadius: 10,
			       color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#00b0ff'
	                }, {
	                    offset: 0.8,
	                    color: '#7052f4'
	                }], false),
	              label: {
	                show: true,
	                position: function(){
	                	return 'top';
	                },
	                formatter: '   ',
	                backgroundColor: '#fff',
	                distance: -2,
	                borderColor: 'rgba(255, 234, 0, 0.5)',
	                borderWidth: 6,
	                borderRadius: 10,
	                color: '#fff'
	              }
	            }
	        },
	        data: barData1
	    },
	    {
	        name: '',
	        type: 'bar',
	        barWidth: 2,
			silent: false,
			stack: "1",
	        itemStyle: {
	            normal: {
	            	color: 'rgba(222,222,222,0)'
	            }
	        },
	        data: data1
	    },{
	        name: '',
	        type: 'bar',
	        barWidth: 9,
	        yAxisIndex: 1,
	        xAxisIndex: 1,
			silent: false,
			stack: "2",
	        itemStyle: {
	            normal: {
	            	color: 'rgba(222,222,222,0)'
	            }
	        },
	        data: barData1
	    },
	    {
	        name: '',
	        type: 'bar',
	        AxisIndex: 1,
	        xAxisIndex: 1,
	        barWidth: 9,
			silent: false,
			stack: "2",
	        itemStyle: {
	            normal: {
	            	color: '#7052f4',
	            	barBorderRadius: 100
	            }
	        },
	        data: data1
	    }*/]
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