$(document).ready(function(){
	main();
	getdata('/market/index/chart1.json',chart1);
	getdata('/market/index/chart2.json',chart2);
	chart3();
	//getdata('/pattern/require/chart3.json',chart3);
	getdata('/market/index/chart4.json',chart4);
	chart5();
	getdata('/market/index/chart6.json',chart6);
});

function main(data){
	// legend内容
	var legendData=['a.com','b.com','c.com','d.com'];
	// legend自定义颜色 不设置有默认色
	var legendColor=['blue','gray','#000','cyan'];
	// 映射颜色  不设置有默认色
	var visColor=["#EEEE00","#EEAD0E","#d6664d","#B9044E","#f0ba2e","#d3ce2b","#169A7f","#0b6573","#1BB3c8"];
	// seriesData Array [{name:'',type:'map',mapType:'china',
//	           label: { normal: {show: true},emphasis: { show: true}},data:[{name:'',value:''},...]},{...}]
	var seriseData=[
	        {
	            name: 'b.com',
	            type: 'map',
	            mapType: 'world',
	            roam: true,
	            itemStyle:{
	                normal: {
		                	 color: '#EEEE00'
		                },
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
	        },
	        {
	            name: 'd.com',
	            type: 'map',
	            mapType: 'world',
	            roam: true,
	            itemStyle:{
	                normal: {
		                	 color: '#FFB90F'
		                },
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
	                {name: 'Japan', value: 127352.833}
	            ]
	        }
	    ]
	    
	    
	option = {
	    tooltip: {
	        trigger: 'item'
	    },
	    legend: {
	        orient: 'vertical',
	        right: '3%',
	        bottom:'3%',
	        data:legendData
	    },
	    visualMap: {
	        min: 0,
	        max: 400000,
	        left: 'left',
	        bottom: '3%',
	        text: ['高','低'],           // 文本，默认为数值文本
	        calculable: true,
	       color: ['#BBFFFF','#1E90FF']
	    },
	    series: seriseData
	};
	var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}

function chart1(data){
	//alert(JSON.stringify(data));
	var xData = data[1];
	var lineData1 = data[4];
	var lineData2 = data[5];
	var barData1 = data[2];
	var barData2 = data[3];
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
	            position: "bottom",
	            type: "category",
	            axisLabel: {
	                interval: 0,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:6
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
	            name: "产量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#00FFFF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData1,

	        },
	        {
	            name: "消费量",
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
	            name: "供需缺口（百万桶/日）",
	            type: "line",
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                    color: '#E9DC37'
	                },
	            },
	            data: lineData1,

	        }, {
	            name: "布伦特油价（美元/桶）",
	            type: "line",
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                    color: '#E9DC37'
	                },
	            },
	            data: lineData2,

	        }]
	    }
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}


function chart2(data){
	var xData = data[1];
	var lineData1 = data[2];
	var lineData2 = data[3];
	option = {
		    tooltip : {
		        trigger: 'axis'
		    },
		     grid: {
		        left: '13%',
		        right:'3%',
		        top:'12%',
		        bottom:'25%',
		    },
		xAxis : {
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
            show: false
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 6
            },
        },
		            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
		        },
		    yAxis : {
		    	 type: 'value',
		         axisTick: {
		             show: true
		         },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: 'rgba(255,255,255,1)',
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
		                 fontSize: 6
		             },
		             formatter: '{value}%',
		         },
		        },
		    series : [
		        {
		            name:'需求（百万桶/天）',
		            type:'line',
		            areaStyle: {
		                normal: {type: 'default',
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: 'rgba(238 ,238, 0,0.8)'
		                    }, {
		                        offset: 1,
		                        color: 'rgba(238 ,238, 0,0.8)'
		                    }], false)
		                }
		            },
		            smooth:true,
		            itemStyle: {
		                normal: {
		                	color:'rgba(238 ,238, 0,1)',
		                	areaStyle: {type: 'default'}}    
		            },
		            data:lineData1
		        },
		         {
		            name:'Brent油价(美元/桶)',
		            type:'line',
		            areaStyle: {
		                normal: {type: 'default',
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: 'rgba(255, 255, 224,0.8)'
		                    }, {
		                        offset: 1,
		                        color: 'rgba(255, 255, 224,0.8)'
		                    }], false)
		                }
		            },
		            smooth:true,
		            itemStyle: {
		            	normal: {
		            	color:'rgba(255, 255, 224,1)',	
		            	areaStyle: {type: 'default'}}},
		            data:lineData2
		        }
		    ]
		};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	var data = [20, 32, 11, 65, 25, 50, 21];
	var xMax = 100;
	var option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: '{a}<br />{b}: {c}%',
	        "axisPointer": {
	            "type": "none"
	        },
	    },
	    grid: {
	        left: '14%',
	        right: '4%',
	        bottom: '25%',
	        top: '10%',
	    },
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
	    }],
	    xAxis: [{
	    	position: "bottom",
            type: "category",
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#fff',
                    fontSize:6
                },
                rotate: 30,
            },
            axisLine:{
                lineStyle:{
                    color: '#0177d4'
                }
            },
	        data: [
	            '自驾车', '公交','出租车', '快车&专车', '步行', '自行车&电动车', '摩托车'
	        ]}],
	    series: [{
	        name: '出行方式',
	        type: 'bar',
	        stack: '总量',
	        z: 3,
	        barWidth: '15%',
	        stack: "2",
	        data: [80, 68, 89, 35, 75, 50, 79],
	        itemStyle: {
	            normal: {
	                //barBorderRadius: 20,
	                color: 'rgba(222,222,222,0)',
	                "label": {
	                    "show": false,
	                    "textStyle": {
	                        "color": "rgba(0,0,0,1)"
	                    },
	                    position: 'top',
	                    formatter: function(p) {
	                        return p.value > 0 ? (p.value + '%') : '';
	                    }
	                }
	            }
	        }
	    },{
	        name: '出行方式',
	        type: 'bar',
	        stack: '总量',
	        z: 3,
	        barWidth: '15%',
	        stack: "2",
	        data: [20, 32, 11, 65, 25, 50, 21],
	        itemStyle: {
	            normal: {
	                //barBorderRadius: 20,
	                color: function(params) {
	                    // build a color map as your need.
	                    var colorList = [
	                        '#f44120', '#fd7b09', '#ffbf37', '#f2ff36', '#4fae36',
	                        '#308cef', '#4c41cc'
	                    ];
	                    return colorList[params.dataIndex]
	                },
	                "label": {
	                    "show": false,
	                    "textStyle": {
	                        "color": "rgba(0,0,0,1)"
	                    },
	                    position: 'top',
	                    formatter: function(p) {
	                        return p.value > 0 ? (p.value + '%') : '';
	                    }
	                }
	            }
	        }
	    }, {
	        name: '占位',
	        type: 'bar',
	        barWidth: '18%',
	        barGap: '-124%',
	        silent: true,
	        itemStyle: {
	            normal: {
	                borderWidth: 0.3,
	                color: 'transparent',
	                borderColor: '#00FFFF',
	                barBorderRadius: 50,
	                "label": {
	                    "show": true,
	                    "textStyle": {
	                        "color": "rgba(0,0,0,1)"
	                    },
	                    "position": "top",
	                    formatter: function(p) {
	                        return data[p.dataIndex] + "%";
	                    }
	                }
	            }
	        },
	        data: data.map(function(d) {
	            return xMax
	        }),
	    }, ]
	};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var xData = data[1];
	var lineData1 = data[2];
	var lineData2 = data[3];
	option = {
		    tooltip : {
		        trigger: 'axis'
		    },
		     grid: {
		        left: '3%',
		        right:'3%',
		        top:'12%',
		        bottom:'5%',
		        containLabel: true
		    },
		xAxis : {
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
            show: false
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 6
            },
        },
		            data : xData
		        },
		    yAxis : [{
		    	 type: 'value',
		         axisTick: {
		             show: false
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
		                 fontSize: 6
		             },
		             formatter: '{value}%',
		         },
		        },{
			    	 type: 'value',
			         axisTick: {
			             show: false
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
			                 fontSize: 6
			             },
			             formatter: '{value}%',
			         },
			        }],
		    series : [
		        {
		            name:'库存（百万桶）',
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
		            data:lineData1
		        },
		         {
		            name:'库存（百万桶）',
		            type:'line',
		            yAxisIndex: 1,
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
		            data:lineData2
		        }
		    ]
		};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
	option = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        top:'3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'value',
		            splitLine: {
			        	 show: false,
			             lineStyle: {
			                 color: '#fff',
			             }
			         },
			         splitArea: {
			             show: false
			         },
			         axisLabel: {
			             textStyle: {
			                 color: '#fff',
			                 fontWeight: 'normal',
			                 fontSize: 6
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
			         axisLabel: {
			             textStyle: {
			                 color: '#fff',
			                 fontSize: 6
			             }
			         },
		            data : ['周一','周二','周三','周四','周五','周六','周日']
		        }
		    ],
		    series : [
		        {
		            name:'小可爱',
		            type:'bar',
		            
		            itemStyle: {
		                normal: {
		                	 color: '#00FFFF',
		                }
		            },
		            data:[200, 170, 240, 244, 200, 220, 210]
		        },
		        {
		            name:'中可爱',
		            type:'bar',
		            stack: '总量',
		            
		            itemStyle: {
		                normal: {
		                	 color: '#87CEFA',
		                }
		            },
		            data:[320, 302, 341, 374, 390, 450, 420]
		        },
		        {
		            name:'大可爱',
		            type:'bar',
		            stack: '总量',
		            
		            itemStyle: {
		                normal: {
		                	 color: '#FFD700',
		                }
		            },
		            data:[-120, -132, -101, -134, -190, -230, -210]
		        }
		    ]
		};

	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}


function chart6(data){
	var xData = data[1];
	var lineData = data[3];
	var barData = data[2];
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
	                interval: 0,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:6
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
	            name: "OPEC产量(百万桶/天)",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#00FFFF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData,

	        }, {
	            name: "Brent油价(美元/桶)",
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