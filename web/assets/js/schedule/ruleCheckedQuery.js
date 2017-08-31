$(function(){

	 locationNavStyle(3);//定位当前导航
	 $("#sidebar").find('li').eq(3).parent().css("display","block");//导航子菜单展开
     $("#opTimeDay").show();
     $("#opTimeMonth").hide();
     $("#opTimeDay").on("click", function() {
        WdatePicker({ dateFmt: 'yyyyMMdd'});
     }) 
     $("#opTimeMonth").on("click", function() {
        WdatePicker({ dateFmt: 'yyyyMM'});
     })
     $("#checkType").on("change",function(){
          if($(this).val() == "day"){
              $("#opTimeDay").show();
              $("#opTimeMonth").hide();
          }else{
            $("#opTimeDay").hide();
            $("#opTimeMonth").show();
          }
     })


	  $("#queryBtn").on("click",function(){

    	  var ajaxDataParam = {
                "currentPage": 1,
                "itemsPerPage":20,
                'pager': "pager"
            }
            //查询条件拼接
            if ($("#checkType").isNotEmpty()) {
                ajaxDataParam["checkType"] = $.trim($("#checkType").val());
            }
            if($("#checkType").val() == 'day'){
                if($("#opTimeDay").isNotEmpty()) {
                    ajaxDataParam["opTime"] = $("#opTimeDay").val();
                }   
            }else{
                if($("#opTimeMonth").isNotEmpty()) {
                    ajaxDataParam["opTime"] = $("#opTimeMonth").val();
                }  
            }
            if ($("#ifOk").isNotEmpty()&& $("#ifOk").val() !="-1") {
                ajaxDataParam["ifOk"] = $("#ifOk").val();
            } 

            Log.out(ajaxDataParam);
            RuleCheck.queryRuleCheckedOfPage({
                ajaxUrl: $.ctxServer + "rule/queryRuleCheckedOfPage",
                ajaxData: ajaxDataParam,
                pager: "pager",
                type: "get"
            });
    })

})

var RuleCheck = (function(model) {

    var ejsUrl = $.ctx + '/assets/js/schedule/ejs/';
    //分页查询
    model.queryRuleCheckedOfPage = function(param) {
        $.fn.showLoading();
        AjaxFetchData({
            url: param.ajaxUrl,
            data: param.ajaxData,
            type: param.type
        }, function(pageData) {
            $.fn.hideLoading();

            Log.out("分页查询后的数据!!");
            Log.out(pageData);
            var temp = new EJS({ url: ejsUrl+'ruleCheckedList.ejs'  })
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
                    model.queryRuleCheckedOfPage(param);
                }
            });
        })
    }



       return model;

})(window.RuleCheck || {});