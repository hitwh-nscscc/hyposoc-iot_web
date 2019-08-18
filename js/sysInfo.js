$(document).ready(function () {
    readData();
});


function readData() {
    $.ajax({
        async: true,            //是否为异步请求
        cache: false,           //是否缓存结果
        type: "GET",            //请求方式
        dataType: "json",       //服务器返回的数据是什么类型
        url: "sysInfo.cgi",
        success: function (data) {
            $("#systype").text(data[0]);
            $("#processor").text(data[1]);
            $("#cpumd").text(data[2]);
            $("#bogomips").text(data[3]);
            $("#waitinst").text(data[4]);
            $("#microtimers").text(data[5]);
            $("#tlbentries").text(data[6]);
            $("#intvector").text(data[7]);
            $("#watchpoint").text(data[8]);
            $("#ases").text(data[9]);
            $("#shadow").text(data[10]);
            $("#core").text(data[11]);
            $("#vced").text(data[12]);
            $("#vcei").text(data[13]);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // 状态码
            console.log("status:" + XMLHttpRequest.status + "\n");
            // 状态
            console.log("readyState:" + XMLHttpRequest.readyState + "\n");
            // 错误信息
            console.log("textStatus:" + textStatus + "\n");
        }
    });
}

