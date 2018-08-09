$(document).ready(function(){
    getdata('/market/price/bidCompMapInfo.json',function(df){ init_table(df,'tb1');  });
    getdata('/market/price/chart2.json',function(df){ init_table(df,'tb2');  });
    getdata('/market/price/chart3.json',function(df){ init_table(df,'tb3');  });
});
var _tdmap = {'tb1':{i:2,idx:2,fn:chart1,t:'table1',cv:cv1},'tb2':{i:1,idx:1,fn:chart2,t:'table2',cv:cv1},'tb3':{i:1,idx:1,fn:chart3,t:'table3',cv:cv2}};

function init_table(df, tid){
    if(df==null) return;
    df.data = df.data.filter(function(t,i){ return i< 100;});
    var tt = _tdmap[tid];
    var str = [];
    str.push('<table id="',tid,'" class="qtable">');
    var l1 = df.column.length, l2 = df.column[0].length;
    var dsp = [];
    tt.max = l2;
    tt.df = tt.df;
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
    l1=df.data.length;

    for(var i = 0; i < l1; i++){
        str.push('<tr>');
        for(var j = 0; j < l2; j++){
            var cid = tid + "_col_" + j;
            dsp[j].push(tt.cv(df.data[i][j]));
            str.push('<td rel="',cid, '">', df.data[i][j], '</td>');
        }
        str.push('</tr>');
    }
    str.push('</tbody></table>');
    $("#"+tt.t).html(str.join(''));
    var tb = $("#"+tid);
    tb.width(l2*100);
    tb.find("th,td").click(function() {
        $("#"+tid+" colgroup.hover").removeClass("hover");
        var curCol = $(this).attr("rel");
        $("#"+curCol).addClass("hover");
    });
    tt.ps = new PerfectScrollbar("#"+tt.t);
    tt.ds = dsp;
    tt.dc = df.column[df.column.length - 1];
    auto_choseCol(tid);
}
function auto_choseCol(tid){
    choseCol(tid);
    setTimeout(function(){
        auto_choseCol(tid);
    }, 3000);
}
function choseCol(tid){
    var tt = _tdmap[tid];
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
        tooltip: {
        },
        grid: {
            top: 20,
            bottom:20
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            z: 10
        },
        series: [{
            name:' ',
            type:'line',
            smooth:true,
            showAllSymbol: false,
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
        tooltip: {
        },
        grid: {
            top: 20,
            bottom:20
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            z: 10
        },
        series: [{
            name:' ',
            type:'line',
            smooth:true,
            showAllSymbol: false,
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
        tooltip: {
        },
        grid: {
            top: 20,
            bottom:20
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            z: 10
        },
        series: [{
            name:' ',
            type:'line',
            smooth:true,
            showAllSymbol: false,
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