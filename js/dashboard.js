// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

$(document).ready(function () {
    renewData();
    window.setInterval(renewData,2000);
});


function renewData() {
    $.ajax({
        async: true,            //是否为异步请求
        cache: false,           //是否缓存结果
        type: "GET",           //请求方式
        dataType: "json",      //服务器返回的数据是什么类型
        url: "monitor.cgi",
        success: function (data) {
            $("#Mem-used").text(data.mem_used);
            $("#Mem-free").text(data.mem_free);
            $("#Mem-shrd").text(data.mem_shrd);
            $("#Mem-buff").text(data.mem_buff);
            $("#Mem-cache").text(data.mem_cache);

            cpuRateLineData.remove(0);
            cpuRateLineData.push(100 - data.cpu_usr_free);
            cpuRateLine.update();

            $("#CPU-usr").text((100 - data.cpu_usr_free).toFixed(1));
            cpuUsrPieData[0] = 100 - data.cpu_usr_free;
            cpuUsrPieData[1] = data.cpu_usr_free;
            cpuUsrPie.update();

            $("#CPU-sys").text((100 - data.cpu_sys_free).toFixed(1));
            cpuSysPieData[0] = 100 - data.cpu_sys_free;
            cpuSysPieData[1] = data.cpu_sys_free;
            cpuSysPie.update();

            let procData = "";
            $.each(data.info, function(index, datas){
                procData +="<tr>";
                procData +="<td>" + datas.pid + "</td>";
                procData +="<td>" + datas.ppid + "</td>";
                procData +="<td>" + datas.user + "</td>";
                procData +="<td>" + datas.stat + "</td>";
                procData +="<td>" + datas.vsz + "</td>";
                procData +="<td>" + datas.vsz_rate + "</td>";
                procData +="<td>" + datas.cpu + "</td>";
                procData +="<td>" + datas.cpu_rate + "</td>";
                procData +="<td>" + datas.command + "</td>";
                procData +="</tr>";
            });
            $("#procInfo").html(procData);
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

