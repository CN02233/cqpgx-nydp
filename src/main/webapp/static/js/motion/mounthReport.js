$(document).ready(function(){
    getdata('/motion/mounthReport/getMonthSumInfo.json',initMonthTradeInfoChart);
    getdata('/motion/mounthReport/getSupTransInfo.json',initFactoryTradeChart);
    getdata('/motion/mounthReport/getBWDInfo.json',initTradeUpWaterInfoChart);

    initTradeAreaInfoChart('tradeWay');
    initTradeAmountOrderChart('liveness');
    getdata('/motion/mounthReport/getTransSumRankInfo.json',initTradeAmountOrderInfoChart);

    getdata('/motion/mounthReport/getTransContriInfo.json',initTradeTopInfoChart);
    getdata('/motion/mounthReport/getTransMonthTrendInfo.json',initTradeInfoMonthChart);
    // initCallActionFlowRecord('callCount');


    $(".check_btn_option_status_l,.check_btn_option_status_r").click(function(){
        if($(this).hasClass("check_btn_option_checked")){
            //do nothing.....
        }else{
            $($($(this).parent()).find(".check_btn_option_checked")).removeClass("check_btn_option_checked");
            $(this).addClass("check_btn_option_checked");
        }
    });
});

function initMonthTradeInfoChart(jsonData){
    var monthTradeInfoChart = echarts.init(document.getElementById("monthTradeInfoChart"));

    monthTradeInfoChart.setOption(getMonthTradeInfoChartOption(jsonData));

    function getMonthTradeInfoChartOption(jsonData){
            var monthSumDatas = jsonData.monthSum;
            var monthDealAmount = 0;
            if(monthSumDatas!=null&&monthSumDatas.length>0){
                monthSumDatas.map(function(monthSumData){
                    var indxNm = monthSumData.indxNm;
                    var indxVal = monthSumData.indxVal;
                    if(indxNm=='月累计成交笔数'){
                        $("#monthDealCount").empty();
                        $("#monthDealCount").html(indxVal+"笔");
                    }else if(indxNm=='月累计成交金额'){
                        monthDealAmount = (indxVal/100000000).toFixed(2);
                    }else if(indxNm=='月参与交易省份'){
                        $("#monthDealAreaCount").empty();
                        $("#monthDealAreaCount").html(indxVal+"个");
                    }
                });
            }

            var option = {
                title:{
                    show:true,
                    textStyle:{fontWeight:'normal', color:'white'},
                    top:'bottom',
                    left:'center',
                    text:'月累计成交金额'
                },
                grid:{
                    left:0
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['60%', '70%'],
                        center:['50%','48%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color:'#3CD6CA',
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                },
                                position: 'center'
                            }
                        },
                        itemStyle:{
                            color:'#3CD6CA'
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:1, name:monthDealAmount+"亿"}
                        ]
                    }
                ]
            };
            return option;
        }


}

function initFactoryTradeChart(jsonData){
    var factoryTradeBarChart = echarts.init(document.getElementById("factoryTradeBarChart"));
    var factoryTradePieChart = echarts.init(document.getElementById("factoryTradePieChart"));

    factoryTradeBarChart.setOption(getFactoryTradeBarChartOption(jsonData));
    factoryTradePieChart.setOption(getFactoryTradePieChartOption(jsonData));

    function getFactoryTradeBarChartOption(jsonData){
        var supTransInfo = jsonData.supTransInfo;

        var indxNmArray = [];
        var grpNmsArray = [];

        var indxObj = {};
        var grpNmObj = {};
        if(supTransInfo!=null){//{LNG占比:{中石油:11,中石化:222},PNG占比:{中石油:222，中石化:333}}
            supTransInfo.map(function(supTransInfoData){
                var grpNm = supTransInfoData.grpNm;
                var indxNm = supTransInfoData.indxNm;
                var indxVal = supTransInfoData.indxVal;

                var indxObjTmp = {};
                if(indxObj[indxNm]!=null){
                    indxObjTmp = indxObj[indxNm];
                }else{
                    indxObj[indxNm] = indxObjTmp;
                }
                indxObjTmp[grpNm] = indxVal;
                if(grpNmObj[grpNm]==null){
                    grpNmObj[grpNm] = "SCQ";
                }
            });
            indxNmArray = Object.keys(indxObj);
            grpNmsArray = Object.keys(grpNmObj);
        }


        var indexSeriObj = {};

        indxNmArray.map(function(indxNm){
            var indxDatas =indxObj[indxNm];
            grpNmsArray.map(function(grpNm){
                var indxVal = indxDatas[grpNm]!=null?indxDatas[grpNm]:0;
                if(indexSeriObj[grpNm]!=null){
                    indexSeriObj[grpNm].data.push(indxVal);
                }else{
                    indexSeriObj[grpNm] = {
                        name: grpNm,
                        type: 'bar',
                        stack:'Scq',
                        label:{show:true,position:'top',color:'white'},
                        barWidth:10,
                        data: [indxVal]
                    };
                }
            });
        });



        var option = {
            title:{text:'按分项成交金额结构',textStyle:{color:'white',fontSize:14, fontWeight:'normal'},padding:[20,0,0,0]},
            grid:{right:0,top:60,left:60,bottom:40},
            legend: {top:'bottom',left:'left',textStyle:{color:'white'},padding:[0,0,10,0],itemGap:80 ,data: grpNmsArray},
            tooltip:{},
            xAxis: {
                type: 'value',
                max:100,
                splitLine:{show:false},
                axisLine:{show:false},
                axisLabel:{show:false},
                axisTick:{show:false},
                boundaryGap: [0, 0.01]
            },
            color:["#55F8CB","#068EC9"],
            yAxis: {
                type: 'category',
                axisTick:{show:false},
                axisLabel:{color:'white'},
                data: indxNmArray
            },
            series : Object.values(indexSeriObj)
            // series: [
            //     {
            //         name: '中石化',
            //         type: 'bar',
            //         stack:'Scq',
            //         label:{show:true,position:'top',color:'white',formatter: '{c}%'},
            //         barWidth:10,
            //         data: [28, 36, 45, 30]
            //     },
            //     {
            //         name: '中石油',
            //         type: 'bar',
            //         stack:'Scq',
            //         label:{show:true,position:'top',color:'white',formatter: '{c}%'},
            //         barWidth:10,
            //         data: [72, 64, 55, 70]
            //     }
            // ]
        }
        return option;
    }

    function getFactoryTradePieChartOption(jsonData){
        var supTransSumInfo = jsonData.supTransSumInfo;

        var indxNmArray = new Array();

        var serDataArray = new Array();

        if(supTransSumInfo!=null){
            supTransSumInfo.map(function(supTransSumInfoData){
                var grpNm = supTransSumInfoData.grpNm;
                var indxNm = supTransSumInfoData.indxNm;
                var indxVal = supTransSumInfoData.indxVal;
                indxNmArray.push(grpNm);
                serDataArray.push({name:grpNm,value:indxVal});
            });
        }
        var option = {
            title:{text:'成交金额整体结构',x:'center',textStyle:{color:'white',fontSize:14, fontWeight:'normal'},padding:[20,0,0,0]},
            legend: {top:'bottom',left:'center',textStyle:{color:'white'},padding:[0,0,10,0],itemGap:40 ,data: Object.keys(serDataArray)},
            calculable : true,
            color:["#068EC9","#55F8CB"],
            tooltip:{formatter :'{d}%'},
            series : [
                {
                    name:'pie2',
                    type:'pie',
                    borderColor:'#068EC9',
                    radius:[0,'55%'],
                    center:['50%','55%'],
                    label: {show:true,color:'white'},
                    labelLine:{show:true,color:'white',lineStyle:{shadowOffsetY:100}},
                    data:serDataArray
                }
                // {
                //     name:'pie1',
                //     type:'pie',
                //     borderColor:'#068EC9',
                //     radius:[0,'40%'],
                //     label: {show: false,formatter:'{c}'+'%'},
                //     lableLine: {show: false},
                //     data:[
                //         {value:70, name:'中石油',
                //             itemStyle:{color :'#068EC9'},
                //             label:{show:true,color:'white'},
                //             labelLine:{show:true,color:'white',lineStyle:{shadowOffsetY:100}}},
                //         {value:20, name:'rose6',itemStyle:{opacity:0}}
                //     ]
                // },
                // {
                //     name:'pie2',
                //     type:'pie',
                //     borderColor:'#068EC9',
                //     radius:[0,'60%'],
                //     label: {show: false,formatter:'{c}'+'%'},
                //     lableLine: {show: false},
                //     data:[
                //         {value:70, name:'rose5',itemStyle:{opacity :0}},
                //         {value:20, name:'中石化',itemStyle:{color :'#55F8CB'},
                //             label:{show:true,color:'white'},
                //             labelLine:{show:true,color:'white',lineStyle:{shadowOffsetY:100}}}
                //     ]
                // }
            ]
        };
        return option;
    }

}

function initTradeUpWaterInfoChart(jsonData){
    var tradeUpWaterInfoChart = echarts.init(document.getElementById("tradeUpWaterInfoChart"));
    tradeUpWaterInfoChart.setOption(getTradeUpWaterInfoChartOption(jsonData));
    function getTradeUpWaterInfoChartOption(jsonData){
        var jsonDataObj = jsonData.BWDInfo;

        var grpDataObj = {};//{grpNm:{indxNm:indxVal}}
        var indxNmObj = {};

        if(jsonDataObj!=null){//{北京市:{交易量（亿立方）：122,升贴水加权值：2222}}
            jsonDataObj.map(function(json){
                var grpNm = json.grpNm;
                var indxID = json.indxID;
                var indxNm = json.indxNm;
                var indxVal = json.indxVal;

                var indxDataObj = {};//{indxNm:indxValue}
                if(grpDataObj[grpNm]!=null){
                    indxDataObj = grpDataObj[grpNm];
                }else{
                    grpDataObj[grpNm] = indxDataObj;
                }
                indxDataObj[indxNm] = json;

                if(indxNmObj[indxNm]==null){
                    indxNmObj[indxNm] = indxID;
                }
            });
        }

        var indxNmArray = Object.keys(indxNmObj);
        var grpNmArray = Object.keys(grpDataObj);
        var indxSeriesObj = {};
        grpNmArray.map(function(grpNm){
            var grpData = grpDataObj[grpNm];
            indxNmArray.map(function(indxNm){
                var jsonDataGroup = grpData[indxNm];
                var indxId = indxNmObj[indxNm];
                var indxVal = jsonDataGroup!=null?jsonDataGroup.indxVal:0;
                if(indxSeriesObj[indxId]==null){
                    indxSeriesObj[indxId]={"indxNm":indxNm,"indxValue":[]};
                }
                indxSeriesObj[indxId].indxValue.push(indxVal);
            });
        });

        var lineArray = indxSeriesObj["02"].indxValue;
        var barArray = indxSeriesObj["01"].indxValue;

        var echarOption = {
            grid:{
                top:70,
                bottom:20,
                left:30,
                right:50
            },
            tooltip:{},
            legend: {
                textStyle:{
                    color:'white'
                },
                left:'left',
                padding:[30,0,20,0],
                data:indxNmArray
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisTick:false,
                data: grpNmArray
            },
            yAxis: [
                {
                    type: 'value',
                    splitNumber:5,
                    axisLabel: {
                        color: 'white'
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    }
                },
                {
                    type: 'value',
                    splitNumber:5,
                    axisLabel: {
                        color: 'white'
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    }
                }
            ],
            series: [
                {
                    name:indxSeriesObj["02"].name,
                    type: 'line',
                    showSymbol:false,
                    itemStyle: {color: '#254E88'},
                    data: lineArray
                },
                {
                    name:indxSeriesObj["01"].name,
                    type:'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius:[10,10,0,0],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#00EBE0'},
                                    {offset: 0.5, color: '#03B7D3'},
                                    {offset: 1, color: '#0494C9'}
                                ]
                            )
                        }
                    },
                    yAxisIndex: 1,
                    barWidth: '15px',
                    data:barArray

                }
            ]
        };
        return echarOption;
    }

}

function initTradeAreaInfoChart (showType){
    var tradeAreaInfoChart = echarts.init(document.getElementById("tradeAreaInfoChart"));

    getdata('/motion/mounthReport/getTransAreaInfo.json',function(jsonData){
        tradeAreaInfoChart.setOption(getTradeAreaInfoChartOption(jsonData));
        function getTradeAreaInfoChartOption(jsonData){

            var transAreaDatas = [];

            if(showType=='tradeWay'){
                transAreaDatas = jsonData.transAreaPattern;
            }else{
                transAreaDatas = jsonData.transAreaProduct;
            }

            var grpDataObj = {};//{grpNm:{indxNm:indxVal}}
            var indxNmObj = {};

            if(transAreaDatas!=null){//{北京市:{竞价交易金额（亿立方）：122,挂牌交易金额：2222}}
                transAreaDatas.map(function(json){
                    var grpNm = json.grpNm;
                    var indxID = json.indxID;
                    var indxNm = json.indxNm;
                    var indxVal = json.indxVal;

                    var indxDataObj = {};//{indxNm:indxValue}
                    if(grpDataObj[grpNm]!=null){
                        indxDataObj = grpDataObj[grpNm];
                    }else{
                        grpDataObj[grpNm] = indxDataObj;
                    }
                    indxDataObj[indxNm] = json;

                    if(indxNmObj[indxNm]==null){
                        indxNmObj[indxNm] = indxID;
                    }
                });
            }

            var indxNmArray = Object.keys(indxNmObj);
            var grpNmArray = Object.keys(grpDataObj);
            var indxSeriesObj = {};
            grpNmArray.map(function(grpNm){
                var grpData = grpDataObj[grpNm];
                indxNmArray.map(function(indxNm){
                    var jsonDataGroup = grpData[indxNm];
                    var indxId = indxNmObj[indxNm];
                    var indxVal = jsonDataGroup!=null?jsonDataGroup.indxVal:0;
                    if(indxSeriesObj[indxId]==null){
                        indxSeriesObj[indxId]= {
                            name:indxNm,
                            type: 'bar',
                            showSymbol:false,
                            stack:'SCQ',
                            barWidth:15,
                            data: [indxVal]
                        };
                    }
                    indxSeriesObj[indxId].data.push(indxVal);
                });
            });
            var option = {
                grid:{
                    top:'60px',
                    right:'40px',
                    left:90,
                    bottom:20
                },
                legend: {
                    textStyle:{
                        color:'white'
                    },
                    left:'left',
                    top:'top',
                    left:'right',
                    padding:[20,20,0,20],
                    data:indxNmArray
                },
                tooltip:{
                    formatter: '{c} 万元'
                },
                color:['#417AD3','#55F8CB'],
                xAxis: {
                    type: 'category',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    data: grpNmArray
                },
                yAxis: {
                    name : '万元',
                    type: 'value',
                    axisLabel: {
                        color: 'white'
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            width:0.5
                        }
                    }
                },
                series: Object.values(indxSeriesObj)
            }
            return option;
        }

    });
}

function initTradeAmountOrderChart(showType){
    var tradeAmountOrderBarChart = echarts.init(document.getElementById("tradeAmountOrderBarChart"));
    var tradeAmountOrderPieChart = echarts.init(document.getElementById("tradeAmountOrderPieChart"));

    getdata('/motion/mounthReport/getMarketFtActive.json',function(jsonData){
        if(showType=='liveness'){
            tradeAmountOrderBarChart.setOption(getTradeAmountOrderBaOption(jsonData));
            tradeAmountOrderPieChart.setOption(getTradeAmountOrderPieOption(jsonData));
        }else{
            // $("#tradeAmountOrderBarChart").addClass("div-hidden");
            // $("#tradeAmountOrderPieChart").addClass("div-hidden");
        }
    });

    marketFtPriceChartChange('LNG');



    if(showType=='liveness'){
        $("#tradeAmountOrderInfos").show();
        // $("#tradeAmountOrderBarChart").show();
        // $("#tradeAmountOrderPieChart").show();
        $("#tradeAmountOrderPieChart").find("div").width("100%");
        $("#tradeAmountOrderPieChart").find("div").height("100%");
        $("#tradeAmountOrderPieChart").find("canvas").width("100%");
        $("#tradeAmountOrderPieChart").find("canvas").height("100%");
        $("#marketFtPriceChartArea").hide();
    }else{
        // $("#tradeAmountOrderBarChart").hide();
        // $("#tradeAmountOrderPieChart").hide();
        $("#tradeAmountOrderInfos").hide();
        $("#marketFtPriceChartArea").show();

    }

    function getTradeAmountOrderBaOption(jsonData){
        var marketFtActiveDegree = jsonData.marketFtActiveDegree;

        var indxNmArray = [];
        var indxValArray = [];

        marketFtActiveDegree.map(function(marketFtActiveDegreeDt){
            var indxNm = marketFtActiveDegreeDt.indxNm;
            var indxVal = marketFtActiveDegreeDt.indxVal;
            indxNmArray.push(indxNm);
            indxValArray.push(indxVal);
        });
        var barColor = new echarts.graphic.LinearGradient(1, 0, 0, 0,
            [
                {offset: 0, color: '#0494C9'},
                {offset: 0.5, color: '#03B7D3'},
                {offset: 1, color: '#00EBE0'}
            ]
        );
        var option = {
            title:{text:'活跃客户交易行为分布',x:'center',y:'bottom',textStyle:{color:'white',fontSize:14, fontWeight:'normal'},padding:[20,0,12,0]},
            grid:{right:40,top:15,left:80,bottom:50},
            xAxis: {
                type: 'value',
                // max:100,
                splitLine:{show:false},
                axisLine:{show:false},
                axisLabel:{show:false},
                axisTick:{show:false},
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                axisTick:{show:false},
                axisLabel:{color:'white'},
                data: indxNmArray
            },
            tooltip:{},
            series: [
                {
                    type: 'bar',
                    stack:'Scq',
                    label:{show:true,position:'right',color:'white'},
                    barWidth:10,
                    itemStyle: {
                        normal: {
                            barBorderRadius:[0,10,10,0],
                            color:barColor
                        }
                    },
                    data: indxValArray
                }
            ]
        }
        return option;
    }

    function getTradeAmountOrderPieOption(jsonData){
        var marketFtActivePercent = jsonData.marketFtActivePercent;
        var dataArray = [];
        var leagenArray = [];
        marketFtActivePercent.map(function(marketFtActivePercentDt){
            dataArray.push({name:marketFtActivePercentDt.indxNm,value:marketFtActivePercentDt.indxVal});
            leagenArray.push(marketFtActivePercentDt.indxNm);
        });

        var option = {
            legend: {top:'bottom',left:'center',textStyle:{color:'white'},padding:[0,0,15,0],itemGap:40 ,data: leagenArray},
            calculable : true,
            tooltip:{},
            series : [
                {
                    type:'pie',
                    borderColor:'#068EC9',
                    radius:['50%','60%'],
                    center:['50%','40%'],
                    color:["#F8CB","#068EC9"],
                    label: {show: true,formatter:'{c}',color:'white'},
                    labelLine : {show: true,lineStyle:{color:'white'}},
                    data:dataArray
                }
            ]
        };
        return option;
    }

}


function initTradeAmountOrderInfoChart(jsonData){
    var tradeAmountOrderInfo1Chart = echarts.init(document.getElementById("tradeAmountOrderInfo1Chart"));
    var tradeAmountOrderInfo2Chart = echarts.init(document.getElementById("tradeAmountOrderInfo2Chart"));

    tradeAmountOrderInfo1Chart.setOption(getTradeAmountOrderInfo1Option(jsonData));
    tradeAmountOrderInfo2Chart.setOption(getTradeAmountOrderInfo2Option(jsonData));

    function getTradeAmountOrderInfo1Option(jsonData){
        var supTransInfo= jsonData.supTransInfo;
        var idxDatas = {};

        supTransInfo.map(function(supTransInfoData){
            var indxNm = supTransInfoData.indxNm;
            var indxVal = supTransInfoData.indxVal;
            idxDatas[indxNm] = indxVal;
        });
        var barColor = new echarts.graphic.LinearGradient(0, 0, 0, 1,
            [
                {offset: 0, color: '#00EBE0'},
                {offset: 0.5, color: '#03B7D3'},
                {offset: 1, color: '#0494C9'}
            ]
        );
        // console.log(barColor);
        var echartOption = {
            title:{
                show:true,
                text:"TOP5省份",
                x:'center',
                top:30,
                textStyle:{
                    color:"white",
                    fontWeight:100,
                    fontSize:15
                }
            },
            tooltip:{
                formatter: '{c} 万元'
            },
            grid:{
                top:70,
                left:30,
                right:0,
                bottom:20
                // bottom:40
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisTick: {
                    show:false,
                    alignWithLabel: true
                },
                data: Object.keys(idxDatas)
            },
            yAxis: [
                {
                    type: 'value',
                    show:false
                }
            ],
            series: [
                {
                    type:'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius:[10,10,0,0],
                            color:barColor
                        }
                    },
                    barWidth: '10px',
                    label: {
                        show:false,
                        color:'white',
                        position: 'top',
                        // fontSize:18
                    },
                    data:Object.values(idxDatas)

                }
            ]
        };
        return echartOption;
    }

    function getTradeAmountOrderInfo2Option(jsonData){
        var supTransSumInfo= jsonData.supTransSumInfo;
        var idxDatas = {};

        supTransSumInfo.map(function(supTransInfoData){
            var indxNm = supTransInfoData.indxNm;
            var indxVal = supTransInfoData.indxVal;
            idxDatas[indxNm] = indxVal;
        });

        var barColor = new echarts.graphic.LinearGradient(0, 0, 0, 1,
            [
                {offset: 0, color: '#00EBE0'},
                {offset: 0.5, color: '#03B7D3'},
                {offset: 1, color: '#0494C9'}
            ]
        );
        // console.log(barColor);
        var echartOption = {
            title:{
                show:true,
                text:"TOP5企业",
                x:'center',
                top:30,
                textStyle:{
                    color:"white",
                    fontWeight:100,
                    fontSize:15
                }
            },
            tooltip:{
                formatter: '{c} 万元'
            },
            grid:{
                top:70,
                left:30,
                right:0,
                bottom:20
                // bottom:40
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisTick: {
                    show:false,
                    alignWithLabel: true
                },
                data: Object.keys(idxDatas)
            },
            yAxis: [
                {
                    type: 'value',
                    show:false
                }
            ],
            series: [
                {
                    type:'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius:[10,10,0,0],
                            color:barColor
                        }
                    },
                    barWidth: '10px',
                    label: {
                        show:false,
                        color:'white',
                        position: 'top',
                        // fontSize:18
                    },
                    data:Object.values(idxDatas)

                }
            ]
        };
        return echartOption;
    }


}

function initTradeTopInfoChart(jsonData){
    var tradeTopInfoChart = echarts.init(document.getElementById("tradeTopInfoChart"));

    tradeTopInfoChart.setOption(getTradeTopInfoOption(jsonData));

    function getTradeTopInfoOption(jsonData){
        var transContri = jsonData.transContri;
        var dataTmpObj = {};
        transContri.map(function(transContriData){
            var grpNm = transContriData.grpNm;
            var indxNm = transContriData.indxNm;
            var indxVal = transContriData.indxVal;

            if(dataTmpObj[grpNm]!=null){
                if(indxNm=='交易总笔数'){
                    dataTmpObj[grpNm][0] = indxVal;
                }else{
                    dataTmpObj[grpNm][1] = indxVal;
                    dataTmpObj[grpNm][2] = indxVal;
                }
            }else{
                dataTmpObj[grpNm] = [];
                if(indxNm=='交易总笔数'){
                    dataTmpObj[grpNm][0] = indxVal;
                }else{
                    dataTmpObj[grpNm][1] = indxVal;
                    dataTmpObj[grpNm][2] = indxVal;
                }
            }
        });

        var option = {
            grid:{left:5},
            xAxis: {
                offset:-260,
                axisLine:{onZero:false,lineStyle:{color:'#313A52'}},
                axisTick:{show:false},
                axisLabel:{show:true,color:'white'},
                splitLine:{show:false}
            },
            yAxis: {
                name:'交易总金额（万元）',
                nameLocation:'start',
                nameTextStyle:{color:'white',fontSize :12},
                offset:-290,
                axisLine:{onZero:false,lineStyle:{color:'#313A52'}},
                axisTick:{show:false},
                axisLabel:{show:true,color:'white'},
                splitLine:{show:false}
            },
            tooltip:{
                formatter: function(params){
                    console.log(JSON.stringify(params));
                    return "交易总笔数:"+params.value[0]+"<br>交易总金额:"+params.value[1]+"万元";
                }
            },
            color:['#41C2A7','#AD6F1D','#41C2A8','#1986C4'],
            series: [{
                // symbolSize: 20,
                type: 'scatter',
                symbolSize: function (data) {
                    return  data[2]/500;
                },
                data: Object.values(dataTmpObj)
            }]
        };

        return option;
    }

}

function initTradeInfoMonthChart(jsonData){
    var tradeInfoMonthChart = echarts.init(document.getElementById("tradeInfoMonthChart"));

    tradeInfoMonthChart.setOption(getTradeInfoMonthOption(jsonData));

    function getTradeInfoMonthOption(jsonData){
        var transMonthTrend = jsonData.transMonthTrend;

        var legendObj = {};
        var pngAmountArray = [];
        var lngAmountArray = [];
        var lngGrownArray = [];
        var pngGrownArray = [];
        var monthObj = {};

        if(transMonthTrend!=null){
            transMonthTrend.map(function(transMonthTrendData){
                var stattDt = transMonthTrendData.stattDt;
                var indxID = transMonthTrendData.indxID;
                var indxNm = transMonthTrendData.indxNm;
                var indxVal = transMonthTrendData.indxVal;
                var monthDatas = null;
                if(monthObj[stattDt]!=null){
                    monthDatas = monthObj[stattDt];
                }else{
                    monthDatas = {};
                    monthObj[stattDt] = monthDatas;
                }


                if(indxID=='01'){//LNG交易金额
                    monthDatas.lngAmount = indxVal;
                }else if(indxID=='02'){//PNG交易金额
                    monthDatas.pngAmount = indxVal;
                }else if(indxID=='03'){//LNG增速
                    monthDatas.lngGrown = indxVal;
                }else if(indxID=='04'){//PNG增速
                    monthDatas.pngGrown = indxVal;
                }
            });

            var allMonths = Object.keys(monthObj);
            allMonths.map(function(monthVal){
                lngAmountArray.push(monthObj[monthVal].lngAmount);
                pngAmountArray.push(monthObj[monthVal].pngAmount);
                lngGrownArray.push(monthObj[monthVal].lngGrown);
                pngGrownArray.push(monthObj[monthVal].pngGrown);
            });
        }
        var option = {grid: {
            left: 40,
            right: 0,
            bottom: 0,
            top:70,
            containLabel: true
        },
            tooltip:{
                formatter: '{c} 万元'
            },
            legend: {
                textStyle:{
                    color:'white'
                },
                left:'right',
                padding:[30,0,20,0],
                itemGap:30,
                data:[{
                    name:'PNG交易额',
                    icon:'roundRect'
                },
                    {
                        name:'LNG交易额',
                        icon:'roundRect'
                    },
                    {
                        name:'LNG交易增速',
                        icon:'roundRect'
                    },
                    {
                        name:'PNG交易增速',
                        icon:'roundRect'
                    }]
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisTick: {
                    alignWithLabel: true
                },
                data: allMonths
            },
            yAxis: {
                name:'万元',
                type: 'value',
                position:'right',
                axisLabel: {
                    color: 'white'
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'white'
                    }
                }
            },
            series: [
                {
                    name:'LNG交易增速',
                    type: 'line',
                    showSymbol:false,
                    itemStyle: {color: '#d17e14'},
                    data: lngGrownArray
                },
                {
                    name:'PNG交易增速',
                    type: 'line',
                    showSymbol:false,
                    itemStyle: {color: '#c95617'},
                    data: pngGrownArray
                },
                {
                    name:'LNG交易额',
                    type: 'bar',
                    barWidth: '25%',
                    stack: 'barStack',
                    itemStyle: {
                        normal: {
                            color: '#55f8cb'
                        }
                    },
                    data: lngAmountArray
                },
                {
                    name:'PNG交易额',
                    type: 'bar',
                    barWidth: '25%',
                    stack: 'barStack',
                    itemStyle: {
                        normal: {
                            barBorderRadius:[10,10,0,0],
                            color: '#068ec9'
                        }
                    },
                    data: pngAmountArray
                }
            ]
        }

        return option;
    }

}

function marketFtPriceChartChange(lngOrPng){
    var marketFtPriceChart = echarts.init(document.getElementById("marketFtPriceChart"));

    getdata('/motion/mounthReport/getMarketFtPrice.json',function(jsonData){
        marketFtPriceChart.setOption(getMarketFtPriceChartOption(jsonData,lngOrPng));
    });


    function getMarketFtPriceChartOption(jsonData,lngOrPng){
        var marketFtPriceDataArray = null;
        if(lngOrPng == 'LNG'){
            marketFtPriceDataArray = jsonData.marketFtPriceLNG;
            $("#pngTag").removeClass("marketFtPriceChartLngPngChecked");
            $("#lngTag").addClass("marketFtPriceChartLngPngChecked");
        }else{
            marketFtPriceDataArray = jsonData.marketFtPricePNG;
            $("#lngTag").removeClass("marketFtPriceChartLngPngChecked");
            $("#pngTag").addClass("marketFtPriceChartLngPngChecked");
        }


        var indxNmGroup = {};
        if(marketFtPriceDataArray!=null){
            marketFtPriceDataArray.map(function(marketFtPriceData){
                var indxNm = marketFtPriceData.indxNm;
                var indxVal = marketFtPriceData.indxVal;
                var grpNm = marketFtPriceData.grpNm;

                if(indxNmGroup[indxNm]!=null){
                    var indxNmGroupObj = indxNmGroup[indxNm];
                    indxNmGroupObj[grpNm] = indxVal;
                }else{
                    var grpNmGroup = {};
                    grpNmGroup[grpNm] = indxVal;
                    indxNmGroup[indxNm] = grpNmGroup;
                }
            });
        }

        var allIndxNms = Object.keys(indxNmGroup);
        var lineArray = new Array();
        var barArray = new Array();
        allIndxNms.map(function(indxNm){
            var grpNmObj = indxNmGroup[indxNm];
            var indxValAmount = grpNmObj['成交总金额']!=null? grpNmObj['成交总金额']: 0;
            var indxValCount = grpNmObj['成交总笔数']!=null? grpNmObj['成交总笔数']: 0;
            barArray.push(indxValAmount);
            lineArray.push(indxValCount);
        });

        var echarOption = {
            // grid:{right:0,top:60,left:60,bottom:40},
            // legend: {top:'bottom',left:'left',textStyle:{color:'white'},padding:[0,0,10,0],itemGap:80 ,data: grpNmsArray},
            grid:{right:30,top:50,left:40,bottom:50},
            legend: {
                textStyle:{
                    color:'white'
                },
                top:'bottom',
                left:'left',
                padding:[0,0,10,30],
                data:[{name:'成交总金额',icon:'roundRect'},{name:'成交总笔数',icon:'roundRect'}]
            },
            tooltip:{
                formatter: '{c} 万元'
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisTick:false,
                data: allIndxNms
            },
            yAxis: [
                {
                    type: 'value',
                    splitNumber:5,
                    axisLabel: {
                        color: 'white'
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    }
                },
                {
                    name:'万元',
                    type: 'value',
                    splitNumber:5,
                    axisLabel: {
                        color: 'white'
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    }
                }
            ],
            series: [
                {
                    name:'成交总笔数',
                    type: 'line',
                    showSymbol:false,
                    itemStyle: {color: '#254E88'},
                    data: lineArray
                },
                {
                    name:'成交总金额',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius:[10,10,0,0],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#00EBE0'},
                                    {offset: 0.5, color: '#03B7D3'},
                                    {offset: 1, color: '#0494C9'}
                                ]
                            )
                        }
                    },
                    yAxisIndex: 1,
                    barWidth: '15px',
                    data:barArray

                }
            ]
        };
        return echarOption;
    }

}
