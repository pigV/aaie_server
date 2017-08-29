(function($) {
	$.fn.extend({
		tooltip: function() {
			var defaults = {
				placement : "top" ,//提示占位位置
				title: '默认提示信息',
			}
			 //分页参数动态拼接到ajax参数中
		   
		  
                 

			return this.each(function(){
				var _self = $(this),
			        _placement = (_self.attr("placement") == "undefined" ? "top" :_self.attr("placement")),
			        _title =  (_self.attr("title") == "undefined" ? "" :_self.attr("title")) ,
			        offset = _self.offset(),
	                left =  offset.left,
	                top = offset.top ,
	                selfWid = _self.outerWidth(),
	                selfHei = _self.outerHeight(),
	                timer = 0;

	                var opts = $.extend(defaults, {placement:_placement,title: _title});
			       // console.log(opts.placement);

				var _tooltip = "<div class=\"tooltip "+opts.placement+"\" role=\"tooltip\"> ";
			        _tooltip+= "<div class=\"tooltip-arrow\"></div>";
			        _tooltip+= "<div class=\"tooltip-inner\">"+opts.title+"</div></div>";
				var $tooltip = $(_tooltip);
			        $(document.body).append($tooltip);
				var  tipHei = $tooltip.outerHeight();
				var  tipWid = $tooltip.outerWidth();
                    //提示框定位
	                if(opts.placement == "top"){
                         $tooltip.css({"left":left+((selfWid-tipWid)/2),"top":top-tipHei});
	                }else if(opts.placement == "bottom"){
                         $tooltip.css({"left":left+((selfWid-tipWid)/2),"top":top+selfHei});
	                }else if(opts.placement == "left"){
	                	 $tooltip.css({"left":(left-tipWid),"top":top+(selfHei-tipHei)/2});
	                }else if(opts.placement == "right"){
	                	 $tooltip.css({"left":(left+selfWid),"top":top+(selfHei-tipHei)/2});
	                }                  
				  $(this).hover(function(){
				       clearTimeout(timer);
				       $tooltip.addClass("in");
				  },function(){
                       timer = setTimeout(function(){
                             $tooltip.removeClass('in');
				       },300)
				  })
			})
		}
	});
})(jQuery);


