let light = 1,
    bb    = 2,
    music = 3,
    pic   = 4;

function sendData(type,data) {
    $.ajax({
        async: true,            //是否为异步请求
        cache: false,           //是否缓存结果
        type: "POST",           //请求方式
        dataType: "text",       //服务器返回的数据是什么类型
        url: "http://localhost/ctrlor.php",
        data: {type: type,data: data},
        success: function (data) {
            return;
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

// light ctrl
$("#light-ctrl").bind('input porpertychange',function(){
    $("#light-rage").text($("#light-ctrl").val());
});

$("#light-ctrl").bind('mouseup',function(){
    sendData(light,$("#light-ctrl").val());
});

// wake up
$("#bb-ctrl").click(function () {
    sendData(bb,$("#bb-text").val());
});

// play music
$("#music-ctrl-1").click(function () {
    sendData(music,1);
});
$("#music-ctrl-2").click(function () {
    sendData(music,2);
});

// pic
$("#pic-ctrl-1").click(function () {
    sendData(pic,1);
});
$("#pic-ctrl-2").click(function () {
    sendData(pic,2);
});
$("#pic-ctrl-3").click(function () {
    sendData(pic,3);
});

// get data
function getData() {
    $.ajax({
        async: true,            //是否为异步请求
        cache: false,           //是否缓存结果
        type: "GET",            //请求方式
        dataType: "json",       //服务器返回的数据是什么类型
        url: "http://localhost/ctrlor.php",
        success: function (data) {
            $("#temperature").text((data.temp).toFixed(1));
            $("#humldlty").text((data.huml).toFixed(1));
            $.each(data.door,function(index,data){
                $("#door-"+index).removeClass();
                if(data)
                $("#door-"+index).addClass("icon icon-lg shadow mr-3 bg-success text-white");
                else
                $("#door-"+index).addClass("icon icon-lg shadow mr-3 bg-danger text-white");
            });
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

$(document).ready(function () {
    getData();
    window.setInterval(getData,2000);
});
