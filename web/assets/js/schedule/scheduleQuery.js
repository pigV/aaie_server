

$(function(){
    locationNavStyle(0);//定位当前导航
    Schedule.initParam();
    $("#execTime , #endTime ,#dateArgs").on("click", function() {
            WdatePicker({ dateFmt: 'yyyyMM'});
    })

    $("#queryBtn").on("click",function(){

    	  var ajaxDataParam = {
                "currentPage": 1,
                "itemsPerPage":6,
                'pager': "pager"
            }
            //查询条件拼接
            if ($("#opMonth").isNotEmpty()) {
                ajaxDataParam["opMonth"] = $.trim($("#opMonth").val());
            }
            if ($("#spId").isNotEmpty() && ($("#spId").val() != "-1")) {
                ajaxDataParam["spId"] = $("#spId").val();
            } 
            if ($("#settleFlag").isNotEmpty() && ($("#settleFlag").val() != "-1")) {
                ajaxDataParam["settleFlag"] =$("#settleFlag").val();
            }
            

            Log.out(ajaxDataParam);

            Schedule.queryScheduleOfPage({
                ajaxUrl: $.ctxServer + "etlPro/queryScheduleOfPage",
                ajaxData: ajaxDataParam,
                pager: "pager",
                type: "get"
            });
    })

    $("#scheduleListTable").on("click","tr",function(){
        Log.out($(this).attr('jobId'));
        Log.out($(this).attr('dateArgs'));
        Log.out($(this).attr('taskState'));
        $("#jobIdHidden").val($(this).attr('jobId'));
        $("#dateArgsHidden").val($(this).attr('dateArgs'));
        $("#taskStateHidden").val($(this).attr('taskState'));
        $("#prevForm").submit();
        $("#prevForm").submit();
    })

})

var Schedule = (function(model) {

    var ejsUrl = $.ctx + '/assets/js/schedule/ejs/';
    //运行状态
    var taskState = [{"key":"-1","name":"全部"},
                      {"key":"0","name":"运行中"},
                      {"key":"1","name":"运行成功"},
                      {"key":"2","name":"运行失败"}];
    var runFreq = [ {"key":"-1","name":"全部"},
                    {"key":"hour","name":"小时"},
                    {"key":"day","name":"天"},
                    {"key":"week","name":"周"},
                    {"key":"month","name":"月"}
                  ]
    
    //分页查询
    model.queryScheduleOfPage = function(param) {
        $.fn.showLoading();
        AjaxFetchData({
            url: param.ajaxUrl,
            data: param.ajaxData,
            type: param.type
        }, function(pageData) {
            $.fn.hideLoading();

            Log.out("分页查询后的数据!!");
            Log.out(pageData);
            var temp = new EJS({ url: ejsUrl+'scheduleQueryList.ejs'  })
                .render({ "rows": pageData.rows  ,  runFreq :runFreq });

            $("#scheduleListTable").html(temp);

            $("#" + param.pager).pager({
                ajaxUrl: param.url,
                ajaxData: param.ajaxData,
                items_per_page: param.ajaxData.itemsPerPage,
                current_page: pageData.currentPage - 1,
                maxentries: pageData.maxentries,
                callback: function(current_page) {
                    param.ajaxData.currentPage = current_page + 1;
                    model.queryScheduleOfPage(param);
                }
            });
        })
    }


   //初始化查询参数 
   model.initParam = function(){
       
         var stateTemp = new EJS({ url: ejsUrl+'select.ejs' }).render({ data: taskState});
            $("#taskState").html(stateTemp);
         var weekTemp = new EJS({ url: ejsUrl+'select.ejs' }).render({ data: runFreq});
            $("#runFreq").html(weekTemp);
   }
   //初始化服务商下拉列表
   model.getSpFirmList = function(){
        AjaxFetchData({
            url: $.serverCtx + "spcp/getSpFirmList?randomDate=" + (new Date).getTime(),
            data: {},
            type: "GET"
        }, function(ajaxData) {
            Log.out("服务商列表:");
            Log.out(ajaxData['spFirmList']);
            var temp = new EJS({ url: model.ejsUrl+'spSelect.ejs' })
                .render({ data: ajaxData["spFirmList"]});
            $("#spId").html(temp);
        })
   }

   return model;

})(window.Schedule || {});