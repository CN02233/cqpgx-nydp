function gourl(url){
    location.href = url;
}
function getdata(url, o){
    url = __host + '/static/data' + url;
    if(typeof(o) == 'function'){
        o = {success:o};
    }
    o = $.extend({
        url:url,
        method:'get',
        error:function(jq,state){
            console.log(url+' :ajax error,'+jq.status);
        }
    }, o);
    $.ajax(o);
}
