$(document).ready(function(){
    getdata('/market/price/chart1.json',function(df){ init_table(df,'tb1');  });
    getdata('/market/price/chart2.json',function(df){ init_table(df,'tb2');  });
    getdata('/market/price/chart3.json',function(df){ init_table(df,'tb3');  });
    $(this).click(function(){
        for(var n in _tdmap)
            _tdmap[n].auto = true;
    })
});
var _tdmap = {'tb1':{i:2,idx:2,fn:chart1,t:'table1',cv:cv1,auto:true},'tb2':{i:1,idx:1,fn:chart2,t:'table2',cv:cv1,auto:true},'tb3':{i:1,idx:1,fn:chart3,t:'table3',cv:cv2,auto:true}};
function init_table(df, tid){
    if(df==null) return;
    df.index = $chart.xtime(df.index);
    var tt = _tdmap[tid];
    var str = [];
    str.push('<table id="',tid,'" class="qtable">');
    var l1 = df.column.length, l2 = df.column[0].length, l0 = df.data.length;
    var dsp = [];
    tt.max = l2;
    tt.df = df;
    for(var i = 0; i< l2; i++){
        dsp[i] = [];
        str.push('<colgroup id="', tid, '_col_', i, '"></colgroup>');
    }

    str.push('<thead>');
    for(var i = 0; i < l1; i++){
        str.push('<tr>');
        for(var j = 0; j < l2; j++){
            str.push('<th>', df.column[i][j], '</th>');
        }
        str.push('</tr>');
    }
    str.push('</thead><tbody>');
    l1=50;

    for(var i = 0; i < l0; i++){
        if(i<l1){
            str.push('<tr>');
            for(var j = 0; j < l2; j++){
                var cid = tid + "_col_" + j;
                dsp[j].push(tt.cv(df.data[i][j]));
                str.push('<td rel="',cid, '">', df.data[i][j], '</td>');
            }
            str.push('</tr>');
        }else{
            for(var j = 0; j < l2; j++){
                dsp[j].push(tt.cv(df.data[i][j]));
            }
        }

    }
    str.push('</tbody></table>');
    $("#"+tt.t).html(str.join(''));
    var tb = $("#"+tid);
    tb.width(l2*100);
    tb.find("th,td").click(function(e) {
        e.stopPropagation();
        var curCol = $(this).attr("rel");
        if(!curCol) return;
        var tt = _tdmap[tid];
        tt.idx = parseInt(curCol.split('_')[2]);
        tt.auto = false;
        choseCol(tid, tt);
    });
    tt.ps = new PerfectScrollbar("#"+tt.t);
    tt.ds = dsp;
    tt.dc = df.column[df.column.length - 1];
    auto_choseCol(tid);
}
function auto_choseCol(tid){
    var tt = _tdmap[tid];
    if(tt.auto)
        choseCol(tid,tt);
    setTimeout(function(){
        auto_choseCol(tid);
    }, 3000);
}
function choseCol(tid,tt){
    $("#"+tid+" colgroup.hover").removeClass("hover");
    var curCol = tid + '_col_' + tt.idx;
    $("#"+curCol).addClass("hover");
    $("#"+tt.t)[0].scrollLeft = tt.idx*80;
    tt.idx = tt.idx + 1;
    if(tt.idx>=tt.max)
        tt.idx = tt.i;
    var x = tt.idx - tt.i;
    tt.fn(tt.ds[x], tid);
}
function cv1(o){
    return o;
}
function cv2(o){
    if(o)
        return o.substr(0, o.length - 2);
    return o;
}

function chart1(data,tid){
    var tt = _tdmap[tid];
    var option = {
        legend: {
            show:false
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            top: '10%',
            bottom:10,
            left:'5%',
            right:'5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            splitLine: {
                show: false
            },
            data:tt.df.index
        },
        yAxis: {
            type: 'value',
            splitNumber:4,
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            z: 10
        },
        series: [{
            name:'石油价格',
            type:'line',
            smooth:true,
            showSymbol: false,
            sampling: 'average',
            lineStyle:{
                color:'#36b8ff'
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(54,184,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(54,184,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(54,184,255,0.1)'
                        }]
                    )
                }
            },
            data: data
        }]
    };
    if(tt.chart)
        tt.chart.dispose();
    tt.chart = echarts.init($('#chart1')[0]);
    tt.chart.setOption(option);
}

function chart2(data,tid){
    var tt = _tdmap[tid];
    var option = {
        legend: {
            show:false
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            top: '10%',
            bottom:10,
            left:'5%',
            right:'5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            splitLine: {
                show: false
            },
            data:tt.df.index
        },
        yAxis: {
            type: 'value',
            splitNumber:4,
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
        },
        series: [{
            name:' ',
            type:'line',
            smooth:true,
            showSymbol: false,
            sampling: 'average',
            lineStyle:{
              color:'#e1c15a'
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(214,190,106,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(214,190,106,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(214,190,106,0.1)'
                        }]
                    )
                }
            },
            data: data
        }]
    };
    if(tt.chart)
        tt.chart.dispose();
    tt.chart = echarts.init($('#chart2')[0]);
    tt.chart.setOption(option);
}

function chart3(data,tid){
    var tt = _tdmap[tid];
    var option = {
        legend: {
            show:false
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            top: '10%',
            bottom:10,
            left:'5%',
            right:'5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            splitLine: {
                show: false
            },
            data:tt.df.index
        },
        yAxis: {
            type: 'value',
            splitNumber:4,
            axisTick: {
                inside: true
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
        },
        series: [{
            name:' ',
            type:'line',
            smooth:true,
            showSymbol: false,
            sampling: 'average',
            lineStyle:{
              color:'#61ffff'
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(97,255,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(97,255,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(97,255,255,0.1)'
                        }]
                    )
                }
            },
            data: data
        }]
    };
    if(tt.chart)
        tt.chart.dispose();
    tt.chart = echarts.init($('#chart3')[0]);
    tt.chart.setOption(option);
}