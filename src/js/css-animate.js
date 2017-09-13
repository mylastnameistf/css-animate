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
		 * 
		 * }
		 */
		$.fn.cssAnimate=animate;
	}
})(function(options){
	options.hook=options.hook||{};
	var $self=this;
	
	
	return {
		enter:function(){
			var enterDone=function(){
				$self.removeClass(options.enter).removeClass(options.entering);
				options.hook.afterEnter&&options.hook.afterEnter($self);
				$self[0].addEventListener&&$self[0].removeEventListener('webkitAnimationEnd',enterDone,false);
				$self[0].addEventListener&&$self[0].removeEventListener('animationEnd',enterDone,false);
			};
			
			var timeout = setTimeout(function(){
				enterDone();
			},100);
			options.hook.beforeEnter&&options.hook.beforeEnter($self);
			$self.addClass(options.enter);
			var startCall=function(){
				clearTimeout(timeout);
				options.hook.startEnter&&options.hook.startEnter($self);
				this.removeEventListener('webkitAnimationStart',startCall,false);
				this.removeEventListener('animationStart',startCall,false);
			};
			$self[0].addEventListener&&$self[0].addEventListener('webkitAnimationStart',startCall,false);
			$self[0].addEventListener&&$self[0].addEventListener('animationStart',startCall,false);
			
			$self[0].addEventListener&&$self[0].addEventListener('webkitAnimationEnd',enterDone,false);
			$self[0].addEventListener&&$self[0].addEventListener('animationEnd',enterDone,false);
			//setTimeout(function(){
				$self.addClass(options.entering);
			//},16);
			
		},
		
		leave:function(){
			
			var leaveDone=function(){
				options.hook.afterLeave&&options.hook.afterLeave($self);
				$self.removeClass(options.leave).removeClass(options.leaving);
				$self[0].addEventListener&&$self[0].removeEventListener('webkitAnimationEnd',leaveDone,false);
				$self[0].addEventListener&&$self[0].removeEventListener('animationEnd',leaveDone,false);
			};
			
			var timeout = setTimeout(function(){
				leaveDone();
			},100);
			options.hook.beforeLeave&&options.hook.beforeLeave($self);
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

			$self[0].addEventListener&&$self[0].addEventListener('webkitAnimationEnd',leaveDone,false);
			$self[0].addEventListener&&$self[0].addEventListener('animationEnd',leaveDone,false);
			
		}
	};
});
