
$(function() {
	locationNavStyle(6);//定位当前导航
	$("#sidebar").find('li').eq(6).parent().css("display","block");//导航子菜单展开
	$("#execTime , #endTime ,#dateArgs").on("click", function() {
		WdatePicker({
			dateFmt : 'yyyyMM'
		});
	})

	$("#queryBtn").on("click", function() {

		var ajaxDataParam = {
			"currentPage" : 1,
			"itemsPerPage" : 5,
			'pager' : "pager"
		}
		//查询条件拼接
		/* if ($("#opMonth").isNotEmpty()) {
		     ajaxDataParam["opMonth"] = $.trim($("#opMonth").val());
		 }
		 if ($("#spId").isNotEmpty() && ($("#spId").val() != "-1")) {
		     ajaxDataParam["spId"] = $("#spId").val();
		 } 
		 if ($("#settleFlag").isNotEmpty() && ($("#settleFlag").val() != "-1")) {
		     ajaxDataParam["settleFlag"] =$("#settleFlag").val();
		 }*/

		Log.out(ajaxDataParam);

		Schedule.queryScheduleOfPage({
			ajaxUrl : $.ctxServer + "bassInter/queryBassInterOfPage",
			ajaxData : ajaxDataParam,
			pager : "pager",
			type : "get"
		});
	})

	$("#opTime1").show();
	$("#opTime2").hide();
	$("#opTime1").on("click", function() {
		WdatePicker({
			dateFmt : 'yyyyMMdd'
		});
	})
	$("#opTime2").on("click", function() {
		WdatePicker({
			dateFmt : 'yyyyMM'
		});
	})
	$("#interfaceType").on("change", function() {
		if ($(this).val() == "day") {
			$("#opTime1").show();
			$("#opTime2").hide();
		} else {
			$("#opTime1").hide();
			$("#opTime2").show();
		}
	})

	$("#saveInterfaceBtn").on("click", function() {
		var ajaxDataParam = {};

		ajaxDataParam["interfaceType"] = $("#interfaceType").val();
		if ($("#interfaceType").val() == 1) {
			if ($("#opTime1").isNotEmpty()) {
				ajaxDataParam["opTime"] = $.trim($("#opTime1").val());
			}
		} else {
			if ($("#opTime2").isNotEmpty()) {
				ajaxDataParam["opTime"] = $.trim($("#opTime2").val());
			}
		}
		if ($("#dayInterface").isNotEmpty()) {
			ajaxDataParam["tDay"] = $.trim($("#dayInterface").val());
		}
		if ($("#monthInterface").isNotEmpty()) {
			ajaxDataParam["mDay"] = $.trim($("#monthInterface").val());
		}
		if ($("#interfaceId").isNotEmpty()) {
			ajaxDataParam["interfaceId"] = $.trim($("#interfaceId").val());
		}
		if ($("#becauseM").isNotEmpty()) {
			ajaxDataParam["becauseM"] = $.trim($("#becauseM").val());
		}

		Log.out(ajaxDataParam);
		Schedule.addBassInterface(ajaxDataParam);

	})

	$("#newBtn").on("click", function() {
		$("#addDelayDialog").dialog("open");
	})
	$("#addDelayDialog").dialog({
		title : "系统提示",
		modal : true,
		width : 750,
		autoOpen : false,
		resizable : false,
		open : function() {
			//重置弹出框参数
			$("#delayForm")[0].reset();
		}
	})
})

var Schedule = (function(model) {

	var ejsUrl = $.ctx + '/assets/js/schedule/ejs/';

	//分页查询
	model.queryScheduleOfPage = function(param) {
		$.fn.showLoading();
		AjaxFetchData({
			url : param.ajaxUrl,
			data : param.ajaxData,
			type : param.type
		}, function(pageData) {
			$.fn.hideLoading();

			Log.out("分页查询后的数据!!");
			Log.out(pageData);
			var temp = new EJS({
				url : ejsUrl + 'delayQueryList.ejs'
			}).render({
				"rows" : pageData.rows,
				runFreq : runFreq
			});

			$("#scheduleListTable").html(temp);

			$("#" + param.pager).pager({
				ajaxUrl : param.url,
				ajaxData : param.ajaxData,
				items_per_page : param.ajaxData.itemsPerPage,
				current_page : pageData.currentPage - 1,
				maxentries : pageData.maxentries,
				callback : function(current_page) {
					param.ajaxData.currentPage = current_page + 1;
					model.queryScheduleOfPage(param);
				}
			});
		})
	}

	model.addBassInterface = function(param) {

		AjaxFetchData({
			url : $.ctxServer + "bassInter/addBassInterface",
			data : param,
			type : "get"
		}, function(jsonData) {

			$.fn.weakTip({
				tipTxt : jsonData.errorMsg,
				backFn : function() {
				}
			})

		})
	}

	return model;

})(window.Schedule || {});