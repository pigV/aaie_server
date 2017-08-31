

$(function() {

     
   //获取当前系统的时间
   var getCurrentTime = function(){
      var currentTime = DateFmt.Formate(new Date(),'yyyy-MM-dd hh:mm:ss');
          $("#currentTimer").text(currentTime);
   }
   getCurrentTime();
   setInterval(function(){
      getCurrentTime();
   },1000);
   
   //侧边导航子菜单展开收起
   $("#sidebar>li>a").click(function(){
       $(this).next('.sidebar-submenu').slideToggle();
	   //$("#sidebar ul").slideToggle();
   });
   
   
   
})

//新建弹窗 开关
function toggleWindow(){
	$(".overlay").toggle();
	$(".infoWindow").toggle();
}

//导航定位
function locationNavStyle(subIndex) {
    $("#sidebar").find('li').eq(subIndex).addClass('active') 
                 .find(".sidebar-submenu").slideToggle();
}

//ajax 方式获取数据
function AjaxFetchData(opts, callback) {
    var defaults = {
        type: "post",
        url: "",
        data: {},
        async: true,
        dataType: "json"
    };
    opts = $.extend(defaults, opts); //合并参数
    $.ajax({
        type: opts.type,
        url: opts.url,
        data: opts.data,
        async: opts.async,
        dataType: opts.dataType,
        success: function(jsonData) {
            /*Log.out("jsonp 返回数据: ");
            Log.out(jsonData);*/
            if (callback) {
                callback(jsonData);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            try {
                document.write(XMLHttpRequest.responseText);
            } catch (error) {}
        }
    });

}

//ajax 方式获取数据
function AjaxFetchPostData(opts, callback) {
    var defaults = {
        type: "post",
        url: "",
        data: {},
        async: true,
        dataType: "json"
    };
    opts = $.extend(defaults, opts); //合并参数
    $.ajax({
        type: opts.type,
        url: opts.url,
        data: opts.data,
        async: opts.async,
        dataType: opts.dataType,
        success: function(jsonData) {
            /*Log.out("jsonp 返回数据: ");
            Log.out(jsonData);*/
            if (callback) {
                callback(jsonData);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            try {
                document.write(XMLHttpRequest.responseText);
            } catch (error) {}
        }
    });

}


/**
 * 系统提示
 * @param option = {} 系统信息提示参数param的参数例子//{"test":"23","aaa":"asr"}或param
 * @param callbackFn一定要以String方法传递
 * 
 */
function alert_dialog(id, option, callbackFn) {

    var result = [];
    var defaults = {};
    option = $.extend(defaults, option);

    if (typeof option.param == "object") {
        for (var item in option.param) {
            if (option.param[item] instanceof Function) {
                option.param["backFunc"] = option.param[item];
            } else {
                result.push("'" + option.param[item] + "'");
            }
        }
        option.param = option.isFunc ? option.param : result.toString();
    } else {
        option.param = "" + option.param;
    }
    var src = "";
    var _y = "center";
    var _x = "center";
    var buttonObj = {
        "确定": function() {
            if (callbackFn) {
                if (option.param) {
                    if (option.isFunc) {
                        callbackFn(option.param);
                    } else {
                        eval("(" + callbackFn + "(" + option.param + ")" + ")");
                    }
                } else {
                    eval("(" + callbackFn + "()" + ")");
                }
            }
            $(this).dialog('close');
        }
    };
    var html = "";
    if (option.type == "success") {
        html = '<div class="alert-tip-box alert-success" ><dl>' + '<dt></dt><dd>' + option.txt + '</dd></dl></div>';
    } else if (option.type == "failed") {
        html = '<div class="alert-tip-box alert-failed" ><dl>' + '<dt></dt><dd>' + option.txt + '</dd></dl></div>';
    } else if (option.type == "confirm") {
        html = '<div class="alert-tip-box alert-warnning" ><dl>' + '<dt></dt><dd>' + option.txt + '</dd></dl></div>';
        buttonObj = {
            "确定": function() {
                if (callbackFn) {
                    if (option.param) {
                        if (option.isFunc) {
                            callbackFn(option.param);
                        } else {
                            eval("(" + callbackFn + "(" + option.param + ")" + ")");
                        }
                    } else {
                        eval("(" + callbackFn + "()" + ")");
                    }
                }
                $(this).dialog('close');
            },
            "取消": function() {
                $(this).dialog('close');
            }
        };
    }
    if (option.pagescroll_y >= 0) {
        _y = option.pagescroll_y + 220;
        _x = $(window).width() / 2 - _width / 2;
    }

    var dlg = $('#' + id);
    if (dlg.length == 0) {
        $('body').append('<div id="' + id + '"></div>');
        dlg = $('#' + id);
    }
    dlg.html(html).dialog({
        modal: true,
        autoOpen: true,
        width: option.width || 500,
        height: 240,
        title: "系统提示",
        position: { my: "center", at: "center", of: window },
        resizable: false,
        dialogClass: option.dialogClass || "ui-dialogFace",
        open: function(event, ui) {},
        close: function(event, ui) {
            $(dlg).dialog("close");
        },
        buttons: buttonObj
    })
    return dlg;
}

$.fn.extend({
    //弱提示插件
    weakTip: function(option) {
        var winWidth = $(window).width();
        var left = parseInt((winWidth - 180) / 2, 10);
        //动态设置默认的位置：
        var defaults = {
            top: parseInt(($(window).height() - 70) / 2, 10),
            left: left,
            timer: 1500, //等待时间
            tipTxt: "操作成功", //显示信息
            backFn: '' //回调函数
        }
        var options = $.extend(defaults, option);
        var $weakObj = $("<div class=\"weakTipBox\"><div class=\"weakTipText\"><div>" + options.tipTxt + "</div></div></div>");

        $(document.body).append($weakObj);
        //重新计算位置
        left = parseInt((winWidth - $weakObj.width()) / 2, 10);
        $weakObj.css({ "left": left, "top": options.top }).show();

        window.setTimeout(function() {
            $weakObj.fadeOut("normal").remove();
            if (options.backFn instanceof Function) {
                options.backFn();
            }
        }, options.timer)

    },
    //文本框不为空
    isNotEmpty: function() {
        if ($.trim($(this).val()) != "") {
            return true;
        } else {
            return false;
        }
    },
    showLoading: function() {
        var $loadBox = $(".loading-box");
        if ($loadBox.length == 0) {
            var temp = "<div class=\"loading-box\" >";
            temp += '<div class=\"loading-cover\" ></div>';
            temp += '<div class=\"loading-text\">正在加载中</div></div>';
            $(document.body).append(temp);
        }
        $loadBox.show();
    },
    hideLoading: function() {
        $(".loading-box").hide();
    }




})
