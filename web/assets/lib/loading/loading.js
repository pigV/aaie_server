
//loading 等待加载效果
angular.module('ngLoading', [])
       .directive(
			'loading',
			[
				function() {
					return {
						restrict : 'EA',
						replace : true,
						scope : {
                            isShow : "=",
							coverShow : '='
						},
						template : '<div class="loading-box" ng-show="isShow">'
							          +'<div class="loading-cover" ng-show="coverShow"></div>'
	                                  +'<div class="loading-text">{{showText}}</div>'
                                  +'</div>'
						,
						link : function(scope, element, attrs) {
							//增加默认值
							 scope.showText = attrs.showText == undefined ? "正在加载中..." :  attrs.showText;
					    }
			    };
	    }]);
