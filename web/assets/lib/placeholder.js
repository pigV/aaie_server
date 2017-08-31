$(document).ready(function(){ 
	 var doc=document,
	 	inputs=doc.getElementsByTagName('input'),
	 	supportPlaceholder='placeholder'in doc.createElement('input');
  
	 placeholder=function(input,placer,isture){
		  var text = placer,
		  	  defaultValue = input.defaultValue;
		  if(isture){
		  	if(defaultValue==''){
			 	 input.value=text
			  }
			  input.onfocus=function(){
			  	if(input.value===text)
				  {
				   this.value=''
				  }
				};
			  input.onblur=function(){
				  if(input.value===''){
					   this.value=text
					  }
				  }
		  }else{
		  	input.onfocus=function(){
		  		var that =$(this);
			  	that.parent().find('.mask').hide();
				};
			$(input).parent().delegate('.mask','click',function(){
				var cur = $(this);
				cur.prev().focus();
				cur.hide();
			});
			input.onblur=function(){
		  		var that = $(this);
		  		if(!that.val()){
			  		that.parent().find('.mask').show();
		  		}
			};
		  }	  
	 };
  
	 if(!supportPlaceholder){
		 
		  $.each(inputs,function(e){
		  	var that = $(this);
		  	var text = that.attr('placeholder');
		  	if(that.attr('type') ==='text' && text){
		  		placeholder(that[0],text,true);
		  	}else if(that.attr('type') =='password' && text){
		  		that.parent().append('<div class="mask" style="width:200px;position:absolute;top:10px;left:55px;font-size:14px;">密码</div>')
		  		placeholder(that[0],text,false);
		  	}

		  });
	 }
 });