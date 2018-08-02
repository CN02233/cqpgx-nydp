$(document).ready(function(){
	main();
	chart1();
	chart2();
	getdata('/pattern/require/chart3.json',chart3);
	chart4();
	chart5();
	chart6();
});

function main(data){
	
	var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}

function chart1(data){
	
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart1(data){
	
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
	
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}


function chart6(data){
	
	var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}