(function($) {
	$.fn.extend({
		isBoolean : function(o) {
			return typeof o === 'boolean';
		},
		isObject : function(o) {
			return (o && (typeof o === 'object' || $.isFunction(o))) || false;
		},
		isString : function(o) {
			return typeof o === 'string';
		},
		isNumber : function(o) {
			return typeof o === 'number' && isFinite(o);
		},
		isNull : function(o) {
			return o === null;
		},
		isUndefined : function(o) {
			return typeof o === 'undefined';
		},
		isValue : function (o) {
			return (this.isObject(o) || this.isString(o) || this.isNumber(o) || this.isBoolean(o));
		},
		isEmpty : function(o) {
			if(!this.isString(o) && this.isValue(o)) {
				return false;
			}else if (!this.isValue(o)){
				return true;
			}
			o = $.trim(o).replace(/\&nbsp\;/ig,'').replace(/\&#160\;/ig,'');
			return o==="";	
		},
		tableExpand: function(options) {
			var defaults = {
				tableClass : "" ,//表格自定义样式
				url: '',
				ajaxType : "post", //get 、post 两种方式
				datatype: 'json', //ajax 表格返回类型
				isDrag : false, //是否行拖拽，
				dragCallBack:function(e, ui) {//拖拽排序后回调函数
			        $('td.index', ui.item.parent()).each(function (i) {
			           
			        });
			    },
	            /*[{
	                 width: 80,
	                "colspan": "1", //列合并
	                "rowspan": "1" , //行合并
	                "title" :"统计时间" , //显示名称
	                 key:'sn' , //数据返回表头和返回JSON 关联
	                 isOrder :true , //是否排序
	                 orderBy : desc , //排序方式
	                 formatter:""  //自定义操作
	               }]
				*/
				ajaxData : {theader: []}, //get 、post 两种方式
				colNum : 0, //表头列数
				items_per_page:20,  //每页显示记录条数，默认为20条。
				current_page:0,
				num_display_entries:3, //主体页数
				num_edge_entries:1, //边缘页数
				pager: 'pager',
				prev_text:"上一页",
		        next_text:"下一页",
		        prev_show_always:true,
		        next_show_always:true,
		        waterMark:false, //添加水印，
		        waterMarkPicUrl:""
			};
			var opts = $.extend(defaults, options);
			    //分页参数动态拼接到ajax参数中
			    opts.ajaxData = $.extend(opts.ajaxData ,
			    	                     {items_per_page: opts.items_per_page ,
			    	                      current_page:opts.current_page}); 
            var _self  = $(this).empty();
			
		   
			if(opts.ajaxData.theader.length > 0 ){
                var $thead = $('<thead></thead>');
				var thTemp = "";
				for (var i = 0, len = opts.ajaxData.theader.length; i < len; i++) {
					var $tr = $("<tr></tr>");
					var trArr = opts.ajaxData.theader[i];
					var thTemp = "";
                        trArr.map(function(item){
                             // console.log(item);
                          var thWidth = item.width? item.width : "auto";
                          var colspan = item.colspan? item.colspan : 1;
                          var rowspan = item.rowspan? item.rowspan : 1;
                          var isOrder = item.isOrder? true : false;
                          var key = item.key;
                          var orderBy ;
                            
                              if(i == 0) {
                              	  opts.colNum += parseInt(colspan,10);
                              }
                              if(isOrder){
                              	 orderBy = item.orderBy ? item.orderBy : "desc" ;
                              	 thTemp +="<th width=" + thWidth +" colspan="+colspan
                              	        +"  key="+key +" orderBy="+ orderBy 
                              	        + " class=orderBy rowspan="+rowspan+">" + item.title + '</th>';
                              }else{
                                 thTemp +="<th width=" + thWidth + " colspan="+colspan
                                        +" key="+key+" rowspan="+rowspan+">" + item.title + '</th>';
                              }

                        })
                        $tr.append(thTemp);
                        $thead.append($tr);
				}
				//console.log("总列数 : " + opts.colNum) ;
				_self.append($thead);
				//debugger
				_self.find("thead th").filter(".orderBy").on("click",function(){
					 //console.log(opts);
					 var key = $(this).attr("key");
					 var orderBy = $(this).attr("orderBy");
					     orderBy  = orderBy == 'desc' ? 'asc' : 'desc' ; //修改排序
					     $(this).attr("orderBy" , orderBy);
						 opts.ajaxData.theader = mergeHeader(opts.ajaxData.theader , key , orderBy);
						 opts.ajaxData.current_page = 0;
						// console.log(opts.ajaxData.theader);
						 loadTablePageList({
							url:opts.url,
							ajaxData:opts.ajaxData,
							ajaxType:opts.ajaxType,
							pager:opts.pager, //分页的ID
							items_per_page: opts.items_per_page,
							num_display_entries:opts.num_display_entries,
							num_edge_entries:opts.num_edge_entries,
							prev_text:opts.prev_text,
					        next_text:opts.next_text,
					        prev_show_always:opts.prev_show_always,
					        next_show_always:opts.next_show_always,
			                colNum : opts.colNum,
							currentGird:_self
						 })
				})
			}else{
				alert("请填写theader！");
				return;
			}
            
            
            var $tbody = $('<tbody></tbody>');
                _self.append($tbody);
			  
			if (opts.isDrag) { 
			    //判断行是可以拖拽的
				_self.find("tbody").sortable({
					helper: function(e, tr) {
						var $originals = tr.children();
						var $helper = tr.clone();
						$helper.children().each(function(index) {
							$(this).width($originals.eq(index).width())
						});
						return $helper;
					},
					stop: opts.dragCallBack
				}).disableSelection();
			}
			//是否加水印
			if(opts.waterMark){
				_self.addClass('waterMarkTable');
				_self[0].style.backgroundImage = "url("+ opts.waterMarkPicUrl +")";
			}
			
             //加载表格
             loadTablePageList({
				url:opts.url,
				ajaxData:opts.ajaxData,
				ajaxType:opts.ajaxType,
				pager:opts.pager, //分页的ID
				items_per_page: opts.items_per_page,
				num_display_entries:opts.num_display_entries,
				num_edge_entries:opts.num_edge_entries,
				prev_text:opts.prev_text,
		        next_text:opts.next_text,
		        prev_show_always:opts.prev_show_always,
		        next_show_always:opts.next_show_always,
                colNum : opts.colNum,
				currentGird:_self //,
				//theader : opts.theader
			})
            //根据KEY查找对应的元素
            function findItemFromArr(arr , keyVal ){
            	 var tempItem = null;
	                 for(var i = 0;i< arr.length ;i++){
	                    var itemArr = arr[i];
	                        itemArr.map(function(item){
	                         	if(item.key== keyVal){
	                               tempItem = item;
	                         	}
	                        })
	                 }

                 return tempItem;
            }
            //合并排序参数
            function mergeHeader(arr,keyVal,orderBy){
                var tempItem = null;
	                for(var i = 0;i< arr.length ;i++){
	                    var itemArr = arr[i];
	                        itemArr.map(function(item){
	                         	if(item.key== keyVal){
	                               //tempItem = item;
	                               item.orderBy = orderBy
	                         	}
	                        })
	                 }
	                 return arr ;
            }
			function loadTablePageList (param){
				   /* console.log("ajax 参数 ：");
				    console.log(param);*/
				    var colNum = param.colNum ;
				    var theaderArr = param.ajaxData.theader ;//表头信息
				    //拼装grid内容
					getGrid({
						url:param.url,
						ajaxData:param.ajaxData,
						ajaxType:param.ajaxType,
						callback:function(jsonText){
//							console.log(jsonText);
							var jsonData = jsonText;
							var trData = jsonData.resultList;
							    $tbody.empty();
							var len =  Math.min(jsonData.size , trData.length);
							     //console.log("总记录数:" + trData.length );
							
							var index = 0; // 标识
							for( var i = 0; i <len;i++ ){
								 var $tr = 	$('<tr></tr>');
								 var trDataItem  = trData[i];
								 var attrLen = Object.getOwnPropertyNames(trDataItem).length;
                                 var keyNum = 0;


                                 for(var k = 0;k< theaderArr.length ;k++){
				                    var itemArr = theaderArr[k];
				                        itemArr.map(function(item){
				                        	 keyNum++;
				                         	 theadItemObj = findItemFromArr(theaderArr , item.key);
	                                        if(theadItemObj != null ){
	                                        	var width = theadItemObj.width ? theadItemObj.width : "auto";
												var align = theadItemObj.align ? theadItemObj.align : "left";
												var colspan = theadItemObj.colspan ? theadItemObj.colspan : 1;
												var colName = theadItemObj.key ;
												var formatter = theadItemObj.formatter ;
		                                        var colValue = trDataItem[colName];
		                                        if(formatter){
		                                        	colValue = eval("("+formatter+"("+JSON.stringify(trDataItem)+")"+")");
												}
		                                        if(colName == "index" || colValue != null) {
		                                        	if(colName == "index") {  // 序号
			                                        	var page = jsonData.page;
														var size = jsonData.size;
														colValue = index + (page - 1) * size + 1;
														index++;
														
			                                        }
		                                        	if(colName == "departmentId") {
		                                        		var dptObj = param.ajaxData.dptObj ;//部门对应关系
		                                        		colValue = dptObj[colValue];
		                                        	}
		                                        	if(colName == "categoryId") {
		                                        		var dptObj = param.ajaxData.dptObj ;//新闻对应关系
		                                        		colValue = dptObj[colValue];
		                                        	}
		                                        	if(colName == "activityState") {
		                                        		var dptObj = param.ajaxData.dptObj ;//活动对应关系
		                                        		colValue = dptObj[colValue];
		                                        	}
		                                        	
		                                        	if(keyNum == attrLen-1 ){
		                                        		colspan =  colNum-attrLen +1;
													}
													var $td = $('<td  "colspan='+colspan+ ' width=' + width +'>' + colValue + '</td>');
													$tr.append($td);
		                                        }
		                                        
	                                        }

				                        })
				                 }
                                   /* for(var key in trDataItem ){
                                    	    keyNum++;
	                                        theadItemObj = findItemFromArr(theaderArr , key);
	                                        if(theadItemObj != null ){
	                                        	var width = theadItemObj.width ? theadItemObj.width : "auto";
												var align = theadItemObj.align ? theadItemObj.align : "left";
												var colspan = theadItemObj.colspan ? theadItemObj.colspan : 1;
												var colName = theadItemObj.key ;
												var formatter = theadItemObj.formatter ;
		                                        var colValue = trDataItem[colName];
		                                           if(keyNum == attrLen-1 ){
		                                               colspan =  colNum-attrLen +1;
												    }
													if(formatter){
													   colValue = eval("("+formatter+"("+JSON.stringify(trDataItem)+")"+")");
													}
												var $td = $('<td  "colspan='+colspan+ ' width=' + width +'>' + colValue + '</td>');
												    $tr.append($td);
	                                        }
                                    }*/

                                    $tbody.append($tr);
							}
                            //判断是否有分页
							if($("#"+param.pager).length == 0){
								 $(param.currentGird).after($("<div id=\""+param.pager+"\" class=\"table-page-box\"></div>"));
							}
							$("#"+param.pager).pagination({
								url : param.url,
								ajaxData:param.ajaxData,
								num_display_entries:param.num_display_entries,
								items_per_page: jsonData.size,
								current_page:jsonData.page - 1,
								num_edge_entries:param.num_edge_entries,
								maxentries:jsonData.total,
								prev_text:param.prev_text,
						        next_text:param.next_text,
						        prev_show_always:param.prev_show_always,
						        next_show_always:param.next_show_always,
						        //theader : param.theader,
								callback: function(current_page){
									//console.log("当前页码:" + current_page);
									param.ajaxData.page = current_page + 1;
								    loadTablePageList(param);
								}
							});
						}
					});
		  	}
		}
	});
})(jQuery);
//拼装grid内容
function getGrid(opts){

	$.ajax({
		url:opts.url,
		type:opts.ajaxType,
		data:opts.ajaxData,
		dataType:"json",
		success:function(result){
			opts.callback(result);
		},
		error:function(error){
			document.write(error.responseText);
		}
	});
}

//分页插件
jQuery.fn.pagination = function( opts){
	opts = jQuery.extend({
		items_per_page:10,
		num_display_entries:10,
		current_page:0,
		num_edge_entries:0,
		link_to:"#",
		prev_text:"Prev",
		next_text:"Next",
		ellipse_text:"...",
		prev_show_always:true,
		next_show_always:true,
		callback:function(){return false;}
	},opts||{});
	var  maxentries = opts.maxentries;

	return this.each(function() {
		/**
		 * 计算最大分页显示数目
		 */
		function numPages() {
			return Math.ceil(maxentries/opts.items_per_page);
		}	
		/**
		 * 极端分页的起始和结束点，这取决于current_page 和 num_display_entries.
		 * @返回 {数组(Array)}
		 */
		function getInterval()  {
			var ne_half = Math.ceil(opts.num_display_entries/2);
			var np = numPages();
			var upper_limit = np-opts.num_display_entries;
			var start = current_page>ne_half?Math.max(Math.min(current_page-ne_half, upper_limit), 0):0;
			var end = current_page>ne_half?Math.min(current_page+ne_half, np):Math.min(opts.num_display_entries, np);
			return [start,end];
		}
		
		/**
		 * 分页链接事件处理函数
		 * @参数 {int} page_id 为新页码
		 */
		function pageSelected(page_id, evt){
			current_page = page_id;
			drawLinks();
			var continuePropagation = opts.callback(page_id, panel);
			if (!continuePropagation) {
				if (evt.stopPropagation) {
					evt.stopPropagation();
				}
				else {
					evt.cancelBubble = true;
				}
			}
			return continuePropagation;
		}
		
		/**
		 * 此函数将分页链接插入到容器元素中
		 */
		function drawLinks() {
			//debugger
			panel.empty();
			var interval = getInterval();
			var np = numPages();
			// 这个辅助函数返回一个处理函数调用有着正确page_id的pageSelected。
			var getClickHandler = function(page_id) {
				return function(evt){ return pageSelected(page_id,evt); }
			}
			//辅助函数用来产生一个单链接(如果不是当前页则产生span标签)
			var appendItem = function(page_id, appendopts){
				page_id = page_id <0 ?0:(page_id<np?page_id:np-1); // 规范page id值
				appendopts = jQuery.extend({text:page_id+1, classes:""}, appendopts||{});
				if(page_id == current_page){
					var lnk = jQuery("<li><span class='current'>"+(appendopts.text)+"</span></li>");
				}else{
					var lnk = jQuery("<li><a>"+(appendopts.text)+"</a></li>");
					    lnk.find("a").bind("click", getClickHandler(page_id))
						.attr('href', "javascript:void(0);");		
				}
				if(appendopts.classes){lnk.addClass(appendopts.classes);}
				panel.append(lnk);
			}
			// 产生"Previous"-链接
			if(opts.prev_text && (current_page > 0 || opts.prev_show_always)){
				appendItem(current_page-1,{text:opts.prev_text, classes:"page-prev"});
			}
			// 产生起始点
			if (interval[0] > 0 && opts.num_edge_entries > 0)
			{
				var end = Math.min(opts.num_edge_entries, interval[0]);
				for(var i= 0; i<end; i++) {
					  appendItem(i);
				}
				if(opts.num_edge_entries < interval[0] && opts.ellipse_text)
				{
					jQuery("<li><span>"+opts.ellipse_text+"</span></li>").appendTo(panel);
				}
			}
			// 产生内部的些链接
			for(var i=interval[0]; i<interval[1]; i++) {
				    appendItem(i);
			}
			// 产生结束点
			if (interval[1] < np && opts.num_edge_entries > 0)
			{
				if(np-opts.num_edge_entries > interval[1]&& opts.ellipse_text)
				{
					jQuery("<li><span>"+opts.ellipse_text+"</span></li>").appendTo(panel);
				}
				var begin = Math.max(np-opts.num_edge_entries, interval[1]);
				for(var i= begin; i<np; i++) {
					appendItem(i);
				}
				
			}
			// 产生 "Next"-链接
			if(opts.next_text && (current_page < np-1 || opts.next_show_always)){
				appendItem(current_page+1,{text:opts.next_text, classes:"page-next"});
			}
		}
		
		//从选项中提取current_page
		var current_page = opts.current_page;
		//创建一个显示条数和每页显示条数值
		maxentries = (!maxentries || maxentries < 0)?1:maxentries;
		opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0)?1:opts.items_per_page;
		//存储DOM元素，以方便从所有的内部结构中获取
		var panel = jQuery(this).html("<ol></ol>").find("ol");
		// 所有初始化完成，绘制链接
		drawLinks();

	});
}



