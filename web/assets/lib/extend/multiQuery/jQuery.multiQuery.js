
/**
 * 生成多维查询
 */
(function(){
	$.fn.extend({
		multiQuery:function(option){
			  var defaults = {
				   data:[
				      {
				        	 "name":"品牌",
				        	 id:"brand",
				        	 children:[{"name":"apple","value":"a1","id":"a3"},{"name":"三星","value":"a2","id":"a4"}] , 
				        	 exclusive:false
				     },
				     {
				        	 "name":"储存",
				        	 id:"Storage",
				        	 children:[{"name":"16G","value":"16","id":"a5"},{"name":"32G","value":"32","id":"a6"},{"name":"64G","value":"64","id":"a7"}] , 
				        	 exclusive:false
				     }//互斥  true互斥，false不互斥//互斥  true互斥，false不互斥
				   ],//数据
				   "getSelectedData":function(){
					  var list = [];
					  var currentDOMList = $("#selectedCondition > li");
					  for(var i = 0 ,len = currentDOMList.length;i<len;i++){
						  var value = $(currentDOMList[i]).attr("data-value");
						  var pId =  $(currentDOMList[i]).attr("pId");
						  var id =  $(currentDOMList[i]).attr("id").replace("selected_","");
						  var name = $(currentDOMList[i]).find("a").first().text();
						  list.push({id:id,name:name,pId:pId,value:value});
					  }
				    	 return list;
				   }
			  };
			if(defaults[option] && typeof option === 'string' ){
				return defaults[option].apply(this, Array.prototype.slice.call(arguments, 1));
			}else if (typeof option === 'object'){
				option = $.extend(defaults,option);
			}
			var $this = $(this);
			var queryConditionList = $(' <ul class="query-condition-list"></ul>');
			var selectedDom = ('<div class="selected-condition-box clearfix"><label>已选条件：</label><div><ul class="clearfix" id="selectedCondition"></ul></div></div>');
			var data = option.data;
			for(var i=0 , len = data.length ; i< len ; i++ ){
				var conditionDOM = $('<li class="clearfix" data-exclusive ="'+data[i].exclusive+'" id="'+data[i].id+'"><label>'+data[i].name+'：</label><div><ul class="clearfix"></ul></div></li>');
				var dataList = data[i].children;
				for( var j = 0, length = dataList.length; j < length ; j++ ){
					var item = $('<li  class="J_condition'+i+'" data-value = "'+dataList[j].value+'" pId ="'+data[i].id+'" id="'+dataList[j].id+'"  data-exclusive="'+data[i].exclusive+'"></li>').bind("click",function(){
						var exclusive = $(this).attr("data-exclusive");
						var _class = $(this).attr("class");
						var dataValue = $(this).attr("data-value");
						var pId = $(this).attr("pId");
						var name = $(this).text();
						var id = this.id;
						if(exclusive == "true"){
							$(this).parents("li ").find(".active").removeClass("active");
							$("#selectedCondition").find("."+_class).remove();	
						} 
						if(!$(this).hasClass("active")){
							$(this).addClass("active");
							var $selectedDOM = $('<li class="'+_class+'" id="selected_'+id+'" pId ="'+pId+'" data-value ="'+dataValue+'"><a href="javascript:void(0);">'+name+'</a></li>');
							var delSelectedDom = $('<a href="javascript:void(0);" class="del-selected-condittion"  id="del_'+id+'" data-value ="'+dataValue+'">×</a>').bind("click",function(){
								var id = this.id.replace("del_","");
								$("#"+id).removeClass("active");
								$(this).parent().remove();
							});
							$selectedDOM.append(delSelectedDom);
							$("#selectedCondition").append($selectedDOM);
						}
						
					});
					item.append('<a href="javascript:void(0);" class="J_condition'+i+'" data-value = "'+dataList[j].value+'" data-exclusive="'+data[i].exclusive+'">'+dataList[j].name+'</a>');
					conditionDOM.find("> div > ul").append(item);
				}
				queryConditionList.append(conditionDOM);
			}
			$this.append( queryConditionList ).append( selectedDom );
			
			
		} 
	  });
})($);