$(document).ready(function(){
    getdata('/pattern/gasStore/chart1.json',chart1);
    getdata('/pattern/gasStore/chart2.json',chart2);
    chart3();
    getdata('/pattern/gasStore/chart4.json',chart4);
    getdata('/market/index/main.json',main);
});

function chart1(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	option = {
			tooltip : {
		        trigger: 'axis'
		    },
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
		        left: '14%',
		        right:'3%',
		        top:'10%',
		        bottom:'24%',
		        //containLabel: true
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
		    	 min:20,
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
		        name: '最低库存',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        z:10,
		        stack:'a',
		        itemStyle: {
	                normal: {
	                    color: '#FFD700'
	                },
	            },
	            areaStyle : {
	                normal:{
	                    opacity: 0
	                }
	            },
		        data: lineData3
		    },{
		        name: '平均库存',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        stack:'a',
		        itemStyle: {
	                normal: {
	                    color: '#2ce610',
	                    type: 'dashed'
	                },
	            },
	            areaStyle : {
	                normal:{
	                    color:'#61ffff'
	                }
	            },
		        data: lineData2
		    },{
		        name: '最高库存',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        stack:'a',
		        itemStyle: {
	                normal: {
	                    color: '#1d6fd3'
	                },
	            },
	            areaStyle : {
	                normal:{
	                    color:'#61ffff'
	                }
	            },
		        data: lineData1
		    }]
		};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	var xData = data[2];
	var barData = data[3];
	    var option =  {
	    		tooltip : {
			        trigger: 'axis'
			    },
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
			        left: '14%',
			        right:'3%',
			        top:'10%',
			        bottom:'30%',
			        //containLabel: true
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
	                    color: '#59ebe8'
	                }
	            },
	            data: xData,
	        }],
	        yAxis: [{
	            name: '',
	            type: 'value',
	            position: 'left',
	            axisLabel: {
	            	formatter: '{value}%',
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
	        }],
	        series: [{
	            name: "偏离度",
	            type: "bar",
	            barWidth: '70%',
	            itemStyle: {
	                normal: {
	                	 color: function (param){
	                		 if (param.value>0) {
	                			 return '#006bff';
							}else{
		                		 return '#ffe800';
							}
	                	 },
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData,

	        }]
	    }
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: { //图例组件，颜色和名字
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        x:'center',
		        bottom:'2%',
		        data: ["东部地区库存","中西部地区","中南部地区","洛基山地区","太平洋地区","阿拉斯加地区"],
		        textStyle: {
		            color: '#fff',
		            fontSize: 10,
		        }
		    },
		    series: [{
		        name: '美国天然气库存区域分布',
		        type: 'pie',
		        radius: '50%',
		        //roseType: 'radius',
		        center: ['50%', '43%'],
		        clockwise: false,
		        data: [{
		            value: 459,
		            name: "东部地区库存"
		        }, {
		            value: 456,
		            name: "中西部地区"
		        }, {
		            value: 850,
		            name: "中南部地区"
		        }, {
		            value: 138,
		            name: "洛基山地区"
		        }, {
		            value: 256,
		            name: "太平洋地区"
		        }, {
		            value: 34,
		            name: "阿拉斯加地区"
		        }],
		        label: {
		            normal: {
		                textStyle: {
		                    color: '#fff',
		                    fontSize: 10,
		                }
		            }
		        },
		        labelLine: {
		            normal: {
		                show: true
		            }
		        },
		        itemStyle: {
		            normal: {
		                borderWidth: 2,
		                borderColor: '#ffffff',
		            },
		            emphasis: {
		                borderWidth: 0,
		                shadowBlur: 10,
		                shadowOffsetX: 0,
		                shadowColor: 'rgba(0, 0, 0, 0.5)'
		            }
		        }
		    }],
		    color: [
		        '#00acee',
		        '#52cdd5',
		        '#79d9f1',
		        '#a7e7ff',
		        '#c8efff'
		    ]
		};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	option = {
			tooltip : {
		        trigger: 'axis'
		    },
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
		        left: '3%',
		        right:'3%',
		        top:'10%',
		        bottom:'35%',
		        containLabel: true
		    },
	        color:["#FFFFFF","#FFD200","#15C0FF","#7C7DFF","#3729FF","#366DFF"],
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
		                    fontSize:10
		                },
		                //rotate: 30,
		            },
		            axisLine:{
		                lineStyle:{
		                    color: '#59ebe8'
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
	        },
		    series: [{
		        name: '东部地区库存',
		        type: 'line',
		        symbol:'circle',
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                 opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#FFFFFF'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#FFFFFF',
		                opacity:1
		            }
		        },
		        data: data[3]
		    }, {
		        name: '中西部地区库存',
		        type: 'line',
		        symbol:'circle',
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                 opacity:0
		            }
		        },
		        lineStyle:{
		            normal:{
		                color:'#FFD200'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#FFD200',
		                 opacity:1
		            }
		        },
		        data: data[4]
		    },{
		        name: '中南部地区库存',
		        type: 'line',
		        symbol:'circle',
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#15C0FF'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#15C0FF',
		                 opacity:1
		            }
		        },
		        data: data[5]
		    },{
		        name: '洛基山地区库存',
		        type: 'line',
		        symbol:'circle',
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#7C7DFF'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#7C7DFF',
		                 opacity:1
		            }
		        },
		        data: data[6]
		    },{
		        name: '太平洋地区库存',
		        type: 'line',
		        symbol:'circle',
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#3729FF'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#3729FF',
		                 opacity:1
		            }
		        },
		        data: data[7]
		    },{
		        name: '阿拉斯加地区库存',
		        type: 'line',
		        symbol:'circle',
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#366DFF'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#366DFF',
		                 opacity:1
		            }
		        },
		        data: data[8]
		    }]
		};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

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
	        text: ['高','低'],           // 文本，默认为数值文本
	        itemHeight:100,
	        itemWidth:15,
	        left:'5%',
	        bottom:'30%',
	       textStyle:{
	    	   color:'#fff',
	    	   fontSize: 10
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