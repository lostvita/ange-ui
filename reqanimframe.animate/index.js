define(function(require, exports, module) {
	function Animation(doms, dur){
		this.doms = doms;
		this.dur = dur;
		this.easing = function(p){return p};
	}

	Animation.prototype.onFinished = function(){
		console.log('animation finished');
	}

	Animation.prototype.onProgress = function(p){
		console.log('animation playing: ' + p);
	}

	Animation.prototype.start = function(){
		this.p = 0;
		this.startTime = Date.now();

		var self = this;
		requestAnimationFrame(function f(){
			if(self.p >= 1){
				self.onProgress(self.easing(1.0));
				self.onFinished();
			}else{
				self.p = (Date.now() - self.startTime) / self.dur;
				self.onProgress(self.easing(self.p));
				requestAnimationFrame(f);
			}
		});  
	}

	module.exports = Animation; 
});