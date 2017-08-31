/**
 * ------------------------------------------------------------------
 * 日志输出--兼容IE
 * 
 * ------------------------------------------------------------------
 */
var Log = (function (model){

        //开发版本号
        model.version = "1.0.0";
        model.author  = "xiaoyx";
        model.email   = "xiaoyx@asiainfo.com";
        model.isAlert = false; //ie是否以alert方式显示信息
		/**
		    在控制台上打印信息
		 *  @param strParam 输出信息 
		 * ------------------------------------------------------------------
		 */ 
		model.out = function(strParam){
			if(!window.console){
		        window.console = {};
		    }
		    if(!window.console.log){
		        window.console.log = function(msg){
		        	if(model.isAlert){
                       alert(msg);
		        	}
		        	
		        };
		    }
		    console.log(strParam);
		}
		model.setIsAlert = function(flag){
              model.isAlert = flag;
		}

        return model;

　　})(window.Log || {});