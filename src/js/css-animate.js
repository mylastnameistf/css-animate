(function(animate){
	var $= window.jQuery||window.$;
	if($){
		/*
		 * options
		 * {
		 * 	enter:'animate',
		 * entering:'',
		 * leave:'animate',
		 * leaving:'',
		 * mode:'ease|ease-out|ease-in|ease-in-out'
		 * }
		 */
		$.fn.cssAnimate=animate;
	}
})(function(options){
	options.hook=options.hook||{};
	var $self=this;
	
	
	return {
		enter:function(){
			var timeout = setTimeout(function(){
				options.hook.beforeEnter&&options.hook.beforeEnter($self);	
			},100);
			
			$self.addClass(options.enter);
			var startCall=function(){
					options.hook.startEnter&&options.hook.startEnter($self);
					this.removeEventListener('webkitAnimationStart',startCall,false);
					this.removeEventListener('animationStart',startCall,false);
			};
			$self[0].addEventListener&&$self[0].addEventListener('webkitAnimationStart',startCall,false);
			$self[0].addEventListener&&$self[0].addEventListener('animationStart',startCall,false);
			var self=this;
			
			var enterDone=function(){
				$self.removeClass(options.enter).removeClass(options.entering);
				options.hook.afterEnter&&options.hook.afterEnter($self);
				$self[0].addEventListener&&$self[0].removeEventListener('webkitAnimationEnd',enterCall,false);
				$self[0].addEventListener&&$self[0].removeEventListener('animationEnd',enterCall,false);
			};
			
			var enterCall=function(){
				done=true;
				clearTimeout(timeout);
				enterDone();
			};
			
			
			
			
			
			$self[0].addEventListener&&$self[0].addEventListener('webkitAnimationEnd',enterCall,false);
			$self[0].addEventListener&&$self[0].addEventListener('animationEnd',enterCall,false);
			//setTimeout(function(){
				$self.addClass(options.entering);
			//},16);
			
		},
		
		leave:function(){
			var timeout = setTimeout(function(){
				options.hook.beforeLeave&&options.hook.beforeLeave($self);	
			},100);
			
			var startCall=function(){
					clearTimeout(timeout);
					options.hook.startLeave&&options.hook.startLeave($self);
					this.removeEventListener('webkitAnimationStart',startCall,false);
					this.removeEventListener('animationStart',startCall,false);
			};
			$self[0].addEventListener&&$self[0].addEventListener('webkitAnimationStart',startCall,false);
			$self[0].addEventListener&&$self[0].addEventListener('animationStart',startCall,false);
			
			$self.addClass(options.leave);
			//setTimeout(function(){
				$self.addClass(options.leaving);
			//},16);
			var self=this;
			
			
			var leaveDone=function(){
				options.hook.afterLeave&&options.hook.afterLeave($self);
				$self.removeClass(options.leave).removeClass(options.leaving);
				$self[0].addEventListener&&$self[0].removeEventListener('webkitAnimationEnd',leaveCall,false);
				$self[0].addEventListener&&$self[0].removeEventListener('animationEnd',leaveCall,false);
			};
			
			var leaveCall=function(){
				done=true;
				clearTimeout(timeout);
				leaveDone();
			};



			$self[0].addEventListener&&$self[0].addEventListener('webkitAnimationEnd',leaveCall,false);
			$self[0].addEventListener&&$self[0].addEventListener('animationEnd',leaveCall,false);
			
		}
	};
});
