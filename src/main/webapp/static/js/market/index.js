$(document).ready(function(){
	getdata('/market/index/main.json',main);
	getdata('/market/index/bidCompMapInfo.json',chart1);
	getdata('/market/index/chart2.json',chart2);
	getdata('/market/index/chart3.json',chart3);
	getdata('/market/index/chart4.json',chart4);
	getdata('/market/index/chart5.json',chart5);
	getdata('/market/index/chart6.json',chart6);
});

function main(data){
	// legend内容
	var legendData=['产量','消费量'];
	// legend自定义颜色 不设置有默认色
	var legendColor=['#fff'];
	// 映射颜色  不设置有默认色
	var visColor=["#EEEE00","#EEAD0E","#d6664d","#B9044E","#f0ba2e","#d3ce2b","#169A7f","#0b6573","#1BB3c8"];
	// seriesData Array [{name:'',type:'map',mapType:'china',
//	           label: { normal: {show: true},emphasis: { show: true}},data:[{name:'',value:''},...]},{...}]
	
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
	
	var mapData1 = data[2][0];
	var mapData2 = data[2][1];;
	var seriseData=[
	        {
	            name: '产量',
	            type: 'map',
	            mapType: 'world',
	            nameMap: nameMap,
	            roam: true,
	            symbolSize: function(val) {
                    return 30;
                },
	            itemStyle:{
	                normal: {
		                color: '#66CD00'
		            },
	                emphasis:{label:{show:true}}
	            },
	            data:mapData1
	            },{
		            name: '消费量',
		            type: 'map',
		            mapType: 'world',
		            nameMap: nameMap,
		            roam: true,
		            itemStyle:{
		                normal: {
			                	 color: '#EEEE00'
			                },
		                emphasis:{label:{show:true}}
		            },
		            data:mapData2
		            }
	    ]
	    
	    
	option = {
	    tooltip: {
	        trigger: 'item',
	        formatter:function(param){
	        	//alert(JSON.stringify(param.name));
	        	return param.name+'</br>'+
	        	param.seriesName+'：'+param.data.value+
	        	'</br>消费量：'+getValue(mapData2,param.name);
	        	//alert(JSON.stringify(param.seriesName));
	        }
	    },
	    legend: {
	        orient: 'vertical',
	        right: '3%',
	        bottom:'3%',
	        textStyle: {
                color: '#fff'
            },
	        data:legendData
	    },
	    visualMap: {
	        min: 0,
	        max: 1000,
	        left: 'left',
	        bottom: '3%',
	        text: ['高','低'],           // 文本，默认为数值文本
	        textStyle: {
                color: '#fff'
            },
	        //calculable: true,
	       color: ['#1E90FF','#BBFFFF']
	    },
	    series: seriseData
	};
	var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}

function getValue (data,name){
	for (var i = 0; i < data.length; i++) {
		if (data[i].name == name) {
			return data[i].value;
		}
	}
}

function chart1(data){
	//alert(JSON.stringify(data));
	var xData = data[1];
	var barData1 = data[4];
	var barData2 = data[5];
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
	            max:5,
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
	            min:45,
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
	                textStyle: {
	                    color: '#fff',
	                    fontSize:8
	                }
	            }
	        }],
	        series: [{
	            name: "供需缺口（百万桶/日）",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#00FFFF',
	                	// barBorderRadius: 50,
	                },
	            },
	            data: barData1,

	        },{
	            name: "布伦特油价（美元/桶）",
	            type: "bar",
	            barWidth: '30%',
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 //barBorderRadius: 50,
	                },
	            },
	            data: barData2,

	        }
	        ]
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
		    yAxis : [{
		    	 type: 'value',
		    	 min:92,
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
		        },{
		            type: "value",
		            min:40,
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
		                textStyle: {
		                    color: '#fff',
		                    fontSize:8
		                }
		            }
		        }],
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
		            yAxisIndex: 1,
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
	    }],
	    xAxis: [{
	    	position: "bottom",
            type: "category",
            axisLabel: {
                interval: 0,
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
		    	 min: 2500,
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
		             formatter: '{value}',
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
			             formatter: '{value}',
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
	var xData = data[2];
	var barData = data[5];
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
		            min:-4,
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
		                textStyle: {
		                    color: '#fff',
		                    fontSize:8
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
	            min:36,
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
	                textStyle: {
	                    color: '#fff',
	                    fontSize:8
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