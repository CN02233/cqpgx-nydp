$(document).ready(function(){
	main();
	chart1();
	chart2();
	getdata('/pattern/require/chart3.json',chart3);
	chart4();
	chart5();
});

function chart1(){
	var option = {
			textStyle: {
		        color: 'white'
		    },
		    color: ['#16c2af', '#ffc751', '#4162ff', '#ff6e72', '#9692ff'],
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		        x: 'center',
		        top: '8%',
		        data: ['北美洲', '中美洲', '欧洲', '独联体', '中东', '非洲', '亚太'],
		        textStyle: {
		            color: 'white',
		            fontSize: 6
			    	}
		    },
		    grid: { //图表的位置
		        top: '20%',
		        left: '3%',
		        right: '4%',
		        bottom: '5%',
		        containLabel: true
		    },
		    yAxis: [{
		        type: 'value',
		        splitLine: {
		            show: true,
		            lineStyle: {
		                color: ['#f2f2f2']
		            }
		        },
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
		        }
		    }],
		    xAxis: [{
		        type: 'category',
		        data: ['1990年','1995年','2000年','2005年','2010年','2015年','2016年','2017年'],
		        axisLabel: {
	                textStyle: {
				                    color: '#fff',
				                    fontSize:6
				                }
		        },
		        //去掉辅助线
			    splitLine: {
		            show: false
		        }
		    }],
		    series: [{
		            name: '北美洲',
		            type: 'bar',
		            stack: '总量',
		            barWidth: '30%',
		            data: [29.6,29.19,29.89,28.98,25.86,24.39,24.24,23.99]
		        },
		        {
		            name: '中美洲',
		            type: 'bar',
		            stack: '总量',
		            barWidth: '30%',
		            data: [5.5,6.25,6.46,6.25,7.14,7.38,7.04,6.90]
		        },
		        {
		            name: '欧洲',
		            type: 'bar',
		            stack: '总量',
		            barWidth: '30%',
		            data: [23.1,22.33,21.24,20.10,17.98,15.71,15.78,15.82]
		        },
		        {
		            name: '独联体',
		            type: 'bar',
		            stack: '总量',
		            barWidth: '30%',
		            data: [12.5,6.31,4.67,4.39,4.39,4.42,4.45,4.40]
		        },
		        {
		            name: '中东',
		            type: 'bar',
		            stack: '总量',
		            barWidth: '30%',
		            data: [5.3,6.60,6.62,7.53,8.76,9.24,9.13,9.09]
		        },
		        {
		            name: '非洲',
		            type: 'bar',
		            stack: '总量',
		            barWidth: '30%',
		            data: [3.0,3.18,3.30,3.52,4.04,4.22,4.23,4.25]
		        },
		        {
		            name: '亚太',
		            type: 'bar',
		            stack: '总量',
		            barWidth: '30%',
		            data: [21.0,26.15,27.81,29.23,31.83,34.63,35.13,35.56]
		        }
		    ]
		};
	
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
    setH('chart1');
}


function chart2(){
	
	
	
	
	option = {
			color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f"],
			textStyle: {
		        color: 'white'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['石油','天然气','煤炭','核能','水电','其他可再生能源'],
		        textStyle: {
				            color: 'white',
				            fontSize: 6
					    	}
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        top: '20%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['1965年','1966年','1967年','1968年','1969年','1970年','1971年','1972年','1973年','1974年','1975年','1976年','1977年','1978年','1979年','1980年','1981年','1982年','1983年','1984年','1985年','1986年','1987年','1988年','1989年','1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
		            axisLabel: {
			                textStyle: {
						                    color: '#fff',
						                    fontSize:6
						                }
		            },
		            //去掉辅助线
				    splitLine: {
			            show: false
			        }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel: {
			                formatter: '{value}',
			                textStyle: {
						                    color: '#fff',
						                    fontSize:6
						                }
		            },
		            //去掉辅助线
				    splitLine: {
			            show: false
			        }
		        }
		    ],
		    series : [
		        {
		            name:'石油',
		            type:'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[1552.4,1671.7,1791.1,1944.4,2109.6,2291.5,2427.7,2613.9,2818.1,2777.3,2749.2,2929.1,3028.8,3125.9,3177.4,3053.0,2943.2,2852.8,2835.9,2901.7,2905.7,2993.9,3055.2,3158.7,3210.9,3244.8,3247.0,3303.7,3282.8,3355.3,3401.2,3480.7,3572.2,3591.4,3655.2,3700.7,3733.5,3765.8,3852.4,3998.6,4051.2,4104.2,4167.8,4148.8,4077.6,4208.9,4252.4,4304.9,4359.3,4394.7,4475.8,4557.3,4621.9]
		        },
		        {
		            name:'天然气',
		            type:'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[542.3,590.9,634.4,691.9,759.7,826.7,884.8,933.7,978.0,1001.9,1002.4,1062.0,1096.9,1142.9,1214.3,1224.3,1237.8,1244.5,1264.5,1368.2,1398.4,1412.0,1486.6,1554.9,1625.4,1675.5,1718.4,1726.3,1743.3,1754.5,1816.1,1904.0,1898.7,1933.4,1986.9,2065.3,2095.2,2158.9,2215.8,2300.3,2367.8,2437.5,2543.4,2607.2,2534.6,2730.8,2786.8,2860.8,2899.0,2922.3,2987.3,3073.2,3156.0]
		        },
		        {
		            name:'煤炭',
		            type:'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[1388.8,1404.3,1381.9,1402.6,1446.8,1467.3,1459.2,1475.7,1519.6,1520.9,1550.4,1606.9,1654.5,1673.0,1750.6,1793.3,1818.5,1838.7,1895.1,1977.4,2055.6,2079.4,2162.1,2226.1,2248.7,2222.3,2197.9,2190.8,2199.6,2212.4,2224.2,2280.0,2282.9,2265.8,2278.0,2356.3,2394.8,2488.1,2706.4,2893.9,3105.7,3265.7,3451.8,3500.6,3447.0,3605.6,3778.9,3794.5,3865.3,3862.2,3765.0,3706.0,3731.5]
		        },
		        {
		            name:'核能',
		            type:'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:[5.8,7.8,9.6,11.9,14.4,17.7,24.9,34.1,45.9,59.6,82.4,98.1,121.2,140.1,144.7,161.0,189.2,207.4,232.9,281.6,337.0,360.9,392.6,428.0,440.2,452.7,474.4,478.0,494.4,503.7,525.5,544.6,540.9,550.2,571.2,584.0,600.5,610.1,597.7,623.9,626.6,634.4,621.5,619.5,610.8,626.2,600.0,559.5,563.8,575.0,582.8,591.2,596.4]
		        },
		        {
		            name:'水电',
		            type:'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            label: {
		                normal: {
		                    //show: true,
		                    position: 'top'
		                }
		            },
		            areaStyle: {normal: {}},
		            data:[208.1,223.2,228.4,239.6,254.0,265.8,276.4,288.9,292.5,321.1,325.9,324.8,333.2,359.5,377.3,384.4,390.4,406.6,425.2,439.2,447.9,454.1,460.4,475.0,472.1,489.0,500.8,500.4,530.4,533.9,563.2,571.0,581.4,586.2,590.2,600.7,585.3,596.0,595.0,635.4,660.3,685.7,696.9,738.5,736.2,777.5,792.7,830.7,859.4,879.7,880.5,913.3,918.6]
		        },
		        {
		            name:'其他可再生能源',
		            type:'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            label: {
		                normal: {
		                    //show: true,
		                    position: 'top'
		                }
		            },
		            areaStyle: {normal: {}},
		            data:[4.1,4.5,4.5,5.0,5.3,5.8,6.3,6.8,7.3,7.7,7.8,8.7,9.2,9.7,10.4,11.2,12.0,13.9,15.4,17.2,17.6,19.4,20.8,21.4,24.2,27.3,28.5,30.7,31.9,33.4,35.0,36.1,39.3,41.9,45.1,49.3,52.2,58.8,63.9,73.0,82.1,92.9,107.0,123.9,143.7,170.5,203.5,238.7,282.6,320.1,368.8,417.4,486.8]
		        }
		    ]
		};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
    setH('chart2');
}

function chart3(data){
	var xData = data[1];
	var lineData1 = data[2];
	var lineData2 = data[3];
	var barData = data[4];
	option = {
			color: ["#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
		    textStyle: {
		        color: 'white'
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: { // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    /*
		    legend: {
		        data: ['石油','天然气','煤炭','核能','水电','其他可再生能源'],
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
		    yAxis:[{
		        type: 'value',
		        name: '人数',
		        min: 0,
		        position: 'left',
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
		        }
		    }],
		    xAxis: [{
		        type: 'category',
		        data: ['美国', '日本', '印度', '中国', '欧洲'],
		        axisLabel: {
	                //formatter: '{value}',
	                textStyle: {
				                    color: '#fff',
				                    fontSize:6
				    },
				    interval: 0
	            },
		        //去掉辅助线
			    splitLine: {
		            show: false
		        }
		    }],
		    series: [{
		        name: '石油',
		        type: 'bar',
		        stack: '人数',
		        barWidth: '30%',
		        label: {
		            normal: {
		                //show: true,
		                position: 'insideRight'
		            }
		        },
		        data: [40.87,41.26,29.47,19.42,37.13]
		    }, {
		        name: '天然气',
		        type: 'bar',
		        stack: '人数',
		        barWidth: '30%',
		        label: {
		            normal: {
		                //show: true,
		                position: 'insideRight'
		            }
		        },
		        data: [28.45,22.06,6.18,6.60,23.21]
		    }, {
		        name: '煤炭',
		        type: 'bar',
		        stack: '人数',
		        barWidth: '30%',
		        label: {
		            normal: {
		                //show: true,
		                position: 'insideRight'
		            }
		        },
		        data: [14.86,26.41,56.25,60.42,15.05]
		    }, {
		        name: '核能',
		        type: 'bar',
		        stack: '人数',
		        barWidth: '30%',
		        label: {
		            normal: {
		                //show: true,
		                position: 'insideRight'
		            }
		        },
		        data: [8.58,1.44,1.12,1.79,9.77]
		    }, {
		        name: '水电',
		        type: 'bar',
		        stack: '人数',
		        barWidth: '30%',
		        label: {
		            normal: {
		                //show: true,
		                position: 'insideRight'
		            }
		        },
		        data: [3.00,3.93,4.07,8.35,6.62]
		    }, {
		        name: '其他可再生能源',
		        type: 'bar',
		        stack: '人数',
		        barWidth: '30%',
		        label: {
		            normal: {
		                //show: true,
		                position: 'insideRight'
		            }
		        },
		        data: [4.24,4.90,2.89,3.41,8.22]
		    }]
		};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
    setH('chart3');
}

function chart4(){
	option = {
		    color: ['#16abfe','#ff7070'],
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            crossStyle: {
		                color: '#999'
		            }
		        }
		    },
		    legend: {
		        data: ['消费量', '增长率','占比'],
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
		    xAxis: [{
		        type: 'category',
		        data: ['美国','中国','印度','日本','沙特阿拉伯','俄罗斯','巴西','韩国','德国','加拿大'],
		        axisPointer: {
		            type: 'shadow'
		        },
		        axisLabel: {
	                textStyle: {
				                    color: '#fff',
				                    fontSize:6
				                },
				    interval: 0
		        },
		        //去掉辅助线
			    splitLine: {
	                show: false
	            }
		    }],
		    yAxis: [

		        {
		            type: 'value',
		            //name: '消费量',
		            axisLabel: {
		                formatter: '{value}',
		                textStyle: {
					                    color: '#fff',
					                    fontSize:6
					    }
		            },
			        //去掉辅助线
				    splitLine: {
		                show: false
		            }
		        }, 
		        {
		            type: 'value',
		            //name: '增长率',
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
		            }
		        },
		        {
		            type: 'value',
		            //name: '占比',
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
		            }
		        },
		    ],
		    series: [{
		            name: '消费量',
		            type: 'bar',
		            barWidth: '30%',
		            yAxisIndex: 0,
		            data: [870.1,595.5,221.8,181.3,165.8,147.8,139.6,122.6,114.7,103.6]
		        },

		        {
		            name: '增长率',
		            type: 'line',
		            yAxisIndex: 1,
		            smooth: true,
		            data: [0.9,4.0,2.7,-1.4,-0.6,0.5,-0.2,0.3,2.4,1.7]
		        },
		        
		        {
		            name: '占比',
		            type: 'line',
		            yAxisIndex: 1,
		            smooth: true,
		            data: [19.5,13.3,5.0,4.1,3.7,3.3,3.1,2.7,2.6,2.3]
		        }
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

function chart5(){
	//json数据
	option = {
		    tooltip: {
		        trigger: 'axis',
		        formatter: function (param){
		        return param[0].name +':'+param[0].value+'%</br>'
		        +param[1].name +':'+param[1].value+'%</br>'
		        +param[2].name +':'+param[2].value+'%</br>'
		        +param[3].name +':'+param[3].value+'%'
		        ; 
		        }
		    },
		    legend: {
		        data: ['美国石油消费增长率', '中国石油消费增长率', '美国GDP增长率', '中国GDP增长率'],
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
		   
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['1981年','1982年','1983年','1984年','1985年','1986年','1987年','1988年','1989年','1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
		        axisLabel: {
		        	textStyle: {
			            color: 'white',
			            fontSize: 6
				    	}
		        },
		        //去掉辅助线
			    splitLine: {
	                show: false
	            }
		    },
		    yAxis: {
		        type: 'value',
		        //min: '-20',
		        //max: '50',
		        axisLabel: {
			                 show: true,
			                formatter: function(param) {
			                    return param + '%';
			                },
			                textStyle: {
			                    color: '#fff',
			                    fontSize:6
			                }
			            },
			    //去掉辅助线
			    splitLine: {
	                show: false
	            }
		    },
		    series: [{
		            name: '美国石油消费增长率',
		            type: 'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            data: [-6.7,-5.3,-0.6,3.6,-0.4,4.1,2.1,4.2,0.0,-1.9,-2.1,2.1,0.9,2.7,-0.2,3.5,1.4,1.7,2.8,1.2,-0.1,0.2,1.8,3.9,0.3,-0.8,-0.1,-5.7,-4.6,2.1,-1.7,-2.1,1.9,0.8,2.1,1.0,0.6]
		        },
		        {
		            name: '中国石油消费增长率',
		            type: 'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            data: [-5.1,-1.0,2.2,3.7,4.7,6.4,6.3,7.5,4.7,-0.9,8.1,8.8,10.5,1.4,8.3,9.6,9.1,2.7,6.4,7.1,2.2,8.0,11.5,16.8,1.8,7.5,4.9,2.1,3.8,13.8,3.7,4.8,4.4,4.1,6.6,2.4,3.6]
		        },
		        {
		            name: '美国GDP增长率',
		            type: 'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            data: [12.15,3.99,8.65,11.22,7.29,5.74,6.19,7.73,7.46,5.72,3.13,5.58,5.13,6.23,4.93,5.62,6.52,5.87,6.41,6.43,3.39,3.48,4.80,6.60,6.70,5.80,4.50,1.70,-2.10,3.70,3.80,4.60,3.40,2.40,2.40,1.60,2.30]
		        },
		        {
		            name: '中国GDP增长率',
		            type: 'line',
		            symbol:'circle',
			        showSymbol: false,
		            stack: '总量',
		            data: [2.49,4.67,12.44,12.68,19.13,-2.88,-9.22,14.48,11.13,3.77,6.31,11.38,4.22,26.95,30.18,17.59,11.28,7.01,6.26,10.63,10.54,9.74,10.00,10.10,11.30,12.70,14.20,9.60,9.20,10.50,10.50,9.30,7.80,7.70,6.90,6.70,6.90]
		        }
		    ]
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