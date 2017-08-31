$(function(){

	 locationNavStyle(4);//定位当前导航
	 $("#sidebar").find('li').eq(4).parent().css("display","block");//导航子菜单展开

	  $("#queryBtn").on("click",function(){

    	  var ajaxDataParam = {
                "currentPage": 1,
                "itemsPerPage":20,
                'pager': "pager"
            }
            //查询条件拼接
            if ($("#ruleId").isNotEmpty()) {
                ajaxDataParam["ruleId"] = $.trim($("#ruleId").val());
            }
            if ($("#relateInterface").isNotEmpty()) {
                ajaxDataParam["relateInterface"] = $("#relateInterface").val();
            } 

            Log.out(ajaxDataParam);
            RuleInterFace.queryRuleInterfaceOfPage({
                ajaxUrl: $.ctxServer + "rule/queryRuleInterfaceOfPage",
                ajaxData: ajaxDataParam,
                pager: "pager",
                type: "get"
            });
    })

})

var RuleInterFace = (function(model) {

    var ejsUrl = $.ctx + '/assets/js/schedule/ejs/';
    //分页查询
    model.queryRuleInterfaceOfPage = function(param) {
        $.fn.showLoading();
        AjaxFetchData({
            url: param.ajaxUrl,
            data: param.ajaxData,
            type: param.type
        }, function(pageData) {
            $.fn.hideLoading();

            Log.out("分页查询后的数据!!");
            Log.out(pageData);
            var temp = new EJS({ url: ejsUrl+'ruleAndInterFaceList.ejs'  })
                .render({ "rows": pageData.rows });

            $("#ruleListTable").html(temp);

            $("#" + param.pager).pager({
                ajaxUrl: param.url,
                ajaxData: param.ajaxData,
                items_per_page: param.ajaxData.itemsPerPage,
                current_page: pageData.currentPage - 1,
                maxentries: pageData.maxentries,
                callback: function(current_page) {
                    param.ajaxData.currentPage = current_page + 1;
                    model.queryRuleInterfaceOfPage(param);
                }
            });
        })
    }



	   return model;

})(window.RuleInterFace || {});