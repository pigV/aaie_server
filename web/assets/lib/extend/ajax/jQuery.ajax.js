
/**
 *  ajax 封装处理
 */
(function(){
	$.extend({
		fetch:function(option){
			  var defaults = {
				  url: " http://www.baidu.com",
				   data: {},
				   async:true,
				   dataType:"json",
				   success: function(data){
					   
				   },
				   beforeSend:function (XMLHttpRequest) {
					    // this;// 调用本次AJAX请求时传递的options参数
				   },
				   complete:function (XMLHttpRequest, textStatus) {
					    //this; // 调用本次AJAX请求时传递的options参数
				   },
				   error:function (XMLHttpRequest, textStatus, errorThrown) {
					    // 通常 textStatus 和 errorThrown 之中
					    // 只有一个会包含信息
					    //this; // 调用本次AJAX请求时传递的options参数
					   try{
						   alert("请求出错~！");
						   console.log(errorThrown);
					   }catch(error){}
				   }
			  };
			option = $.extend(defaults,option);
			$.ajax(option);
		} 
	  });
})($);