jQuery.extend({
	/********  毫秒转换为日期时间   **********/
	timeToDate : function(times) {
		var dateStr = "";
		var newTime = new Date(times);
		dateStr += newTime.getFullYear() + "-";
		var month = newTime.getMonth() + 1;
		if (month < 10) {
			month = "0" + month;
		}
		dateStr += month + "-";
		var day = newTime.getDate();
		if (day < 10) {
			day = "0" + day;
		}
		dateStr += day + " ";
		var h = newTime.getHours();
		if (h < 10) {
			h = "0" + h;
		}
		dateStr += h + ":";
		var m = newTime.getMinutes();
		if (m < 10) {
			m = "0" + m;
		}
		dateStr += m + ":";
		var s = newTime.getSeconds();
		if (s < 10) {
			s = "0" + s;
		}
		dateStr += s + " ";
		return dateStr;
	},
	/********  毫秒转换为秒数  **********/
	timeToSecond : function(beginTime) {
         var timeStr = 0;
         var currentTime = (new Date()).getTime();
             timeStr = Math.ceil((currentTime - beginTime)/1000) ; 
         return timeStr ;
	},
	/********  秒转换为时间  **********/
	secondToTime : function(param) {
		//console.log("秒数："+ seconds);
        var timeStr ="";
		var seconds = parseInt(param);
        var s = seconds%60; //秒数
	    var m = (parseInt(seconds/60,10))%60;// 分
	    var h = (parseInt(seconds/60/60,10))%60;// 小时
       
			if (h < 10) {
				h = "0" + h;
			}
			timeStr += h + ":";
			if (m < 10) {
				m = "0" + m;
			}
			timeStr += m + ":";
			if (s < 10) {
				s = "0" + s;
			}
			timeStr += s + " ";
			//console.log(timeStr);
         return timeStr ;
	},
	/********** 格式化日期字符串 **************/
	formatDateStr:function(dateStr){
        var dateArr = dateStr.split("");
        var yearStr ;
        var monthStr ;
        var dayStr ;
        var dateStr = "";
        if(dateArr.length ==8){
             yearStr = dateArr[0]+ dateArr[1]+ dateArr[2]+ dateArr[3];
             monthStr = dateArr[4]+ dateArr[5];
             dayStr = dateArr[6]+ dateArr[7];
             dateStr = yearStr +"-"+monthStr +"-"+dayStr;
        }
        return dateStr;
	},
	/**
	 * 统计参数
	 */
	sortArr:function(arr){
	  //debugger
       var total = arr[0];
       var arrTemp =[0];
      
       for(var i=1,len=arr.length; i< len;i++){
       	   var temp=0;
           for(j=1;j<=i;j++){
              temp += arr[j];
           }
           arrTemp.push(total-temp);
       }
       return arrTemp;
	},
	/**
	 * 横向滚动效果
	 */
	scrollTitle : function(option) {

		var defaults = {
			timer : 15,
			maxMarginLeft : -880,
			targetObj : ""
		}
		var opts = $.extend(defaults, option);
		var _self = $(opts.targetObj);

		setInterval(function() {
			var oldLeft = parseInt(_self.css("margin-left"));
			oldLeft -= 2;
			if (oldLeft < -880) {
				_self.css("margin-left", 2580 + "px");
			} else {
				_self.css("margin-left", oldLeft + "px");
			}
		}, opts.timer);
	},
	joinJson:function(keyArr, valueArr ,keyWord , valueWord){
         var  jsonArr =[];
         for(var i=0,len=keyArr.length;i<len;i++){
         	var jsonObj={};
                jsonObj[keyWord] =keyArr[i];
                jsonObj[valueWord] =valueArr[i];
                jsonArr.push(jsonObj);
         }
         return jsonArr;
	},
	/**
	 * 表格滚动效果
	 */
	scrollTable : function(options) {
		var defaults = {
			targetObj : "",
			topVal:0
		}
		//console.log("调用滚动表格插件...");
	
		var opts = $.extend(defaults, options);
			//console.log("当前scrollTop : "+opts.topVal);
		var _self = $(opts.targetObj);
			_self._selfHeight = parseInt(_self.height(), 10);
			_self._tableHeight = 0;

		if (_self.find("table").length > 0) {
			_self._tableHeight = parseInt(_self.find("table").height(), 10);
		} else if (_self.find("ol").length > 0) {
			_self._tableHeight = parseInt(_self.find("ol").height(), 10);
		}

		 //console.log("DIV可视高度 :" + _self._selfHeight);
		 //console.log("table高度 :" + _self._tableHeight);
		    _self.diffVal = _self._tableHeight - _self._selfHeight; //差值

		if (_self.diffVal > 60) {
			scrollTopAnimate();
            //鼠标悬停效果
            _self.hover(function(){
                clearInterval(_self.data("timerId"));
            },function(){
			    scrollTopAnimate();
            })
		}

		function scrollTopAnimate(){
			clearInterval(_self.data("timerId"));
			var temp = Math.max(0,opts.topVal);
            var timer = setInterval(function() {
					var scY = _self.scrollTop();
					if (scY >= _self.diffVal) {
						_self.scrollTop(0);
						scY = 0;
						temp = 0;
					}
					temp += 1;
					
				}, 15);
			 _self.data("timerId" ,timer );
		}
	},
	scrollBottomTable:function(options){
		var defaults = {
			targetObj : "",
			topVal:0
		}
		//console.log("调用滚动表格插件...");
		var opts = $.extend(defaults, options);
			//console.log("当前scrollTop : "+opts.topVal);
		var _self = $(opts.targetObj);
		   _self._selfHeight = parseInt(_self.height(), 10);
		   _self._tableHeight = parseInt(_self.find("table").height(), 10);
         var diffVal = _self._tableHeight - _self._selfHeight; //差值

         if(diffVal > 0){
            _self.animate({scrollTop: diffVal+'px'}, 500);
         }
	},
	/***
       读取cookie 和写入cookie
	*/
	getCookie: function(name){
	    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	    if(arr=document.cookie.match(reg)){
	        return (arr[2]);
	    }else{
	    	return null;
	    }
	},
	setCookie :function (name,value){ 
		var Days = 30;
		var exp = new Date(); 
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		var cookieString=name+"="+escape(value); 
		document.cookie=cookieString + ' ;expires=' + exp.toGMTString()+ ' ;path=/';
	}
});