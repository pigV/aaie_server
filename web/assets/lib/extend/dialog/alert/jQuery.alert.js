
/**
 * 弹框提示 alert
 *  确认提示框 confirm
 */
(function(){
	$.fn.extend({
		alert:function(option){
			  var defaults = {
				  title: "提示框",
				  dialogClass: "alert",
				  width:400,
				  height:200,
				  draggable: true,
				  modal: true,
				  position: { my: "center", at: "top", of: window },
				  resizable: false,
				  autoOpen: true,
				  content:"alert弹alert弹框alert弹框alert弹框框",
				  dialogType:"failed",//状态类型：success 成功，failed 失败，或者错误，info提示
				  callback:function(){},
				  buttons:[ 
						{
							"class":"",
							type:"ok",
							text: "确定",
							click: function() { 
								option.callback(this);
								$( this ).dialog( "close" );
							} 
						}
					]
			  };
			option = $.extend(defaults,option);
			var $this = $(this);
			var $id= this.selector;
			var html = '<div id="'+$id.replace("#","")+'" class="alert-content clearfix"><span class="alert-icon alert-'+option.dialogType+'"></span><span class="alert-text alert-text-'+option.dialogType+'"><span class="alert-text-inner">'+option.content+'</span></span></div>';
			$($id).remove();
			$(html).appendTo("body").dialog(option);
		},
		confirm:function(option){
			  var defaults = {
				  title: "确认操作",
				  dialogClass: "alert",
				  width:400,
				  height:200,
				  draggable: true,
				  modal: true,
				  position: { my: "center", at: "top", of: window },
				  resizable: false,
				  autoOpen: true,
				  content:"alert弹alert弹框alert弹框alert弹框框",
				  dialogType:"warnning",//状态类型：warnning警告
				  callback:function(){},
				  buttons:[{
						"class":"",
						type:"Cancel",
						text: "取消",
						click: function() { 
							$( this ).dialog( "close" );
						}
			  		},
					{
						"class":"ui-state-active",
						type:"ok",
						text: "确定",
						click: function() { 
							option.callback(this);
							$( this ).dialog( "close" );
						} 
					}
				]
			  };
			option = $.extend(defaults,option);
			var $this = $(this);
			var $id= this.selector;
			var html = '<div id="'+$id.replace("#","")+'" class="alert-content clearfix"><span class="alert-icon alert-'+option.dialogType+'"></span><span class="alert-text alert-text-'+option.dialogType+'"><span class="alert-text-inner">'+option.content+'</span></span></div>';
			$($id).remove();
			$(html).appendTo("body").dialog(option);
		} 
	  });
})($);