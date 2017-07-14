/**
 * @author 寒影
 * @date 2017-7-14
 * @func 一款兼容移动端和pc端处理切屏动画的插件
 * @other 该插件依赖 jQuery/zepto
 */

define(function(require, exports, module) {
	var $ = null;
	if ((/Android\s+([\d.]+)/.test(window.navigator.userAgent) || /(?:iPad|iPhone).*OS\s([\d_]+)/.test(window.navigator.userAgent))) {
        $ = require('jquery');
    }else{
    	$ = require('zepto');
    }
	var Timer = require('reqanimframeAnimate');

	var Switchs = function(opts){
		this.config = {
			pageNum: opts.pageNum,
			during: opts.during
		} 

		this.el = {
			$pages: opts.$pages,
			$page: opts.$page
		}

		this.state = {
			isCss3: false,
			isSwitching: false,
			pageDirect: 0,  // -1:向下翻页, 1:向上翻页, 0:不翻页
			prevPage: 0,
			currPage: 1,
			pageHeight: this._getPageHeight()
		}

		if(opts.css3){
			this.state.isCss3 = true;
			this.config.css3 = opts.css3;
		}
	}

	Switchs.prototype._getScreenHeight = function(){
		return $(window).height();;
	}

	Switchs.prototype._getPageHeight = function(){
		return this.el.$page.height();
	}

	Switchs.prototype._getMaxScrollLen = function(){
		return this._getPageHeight() - this._getScreenHeight() - 10;
	}

	Switchs.prototype._onSwitch = function(){
		var me = this;
		var during = this.config.during;
		var pageHeight = this.state.pageHeight;
		var isSwitching = this.state.isSwitching;
		
		var direct = this.state.pageDirect;
		if(direct == 0) return;

		if(isSwitching) return;  // 正在翻页
		this.state.isSwitching = true;

		var curr = this.state.currPage;
		var num = this.config.pageNum;
		var len = 0;

		if(direct == -1 && curr < num){ // 下一页
			len = pageHeight * curr * direct;
			this.state.currPage ++;
		}else if(direct == 1 && curr > 1){ // 上一页
			len = (2 - curr) * pageHeight;
			this.state.currPage --;
		}

		if((curr == 1 && len == 0) || (curr == num && len == 0))  { // 端点页面
			this.state.isSwitching = false;
			return;
		};

		this.state.prevPage = curr;

		var timer = new Timer(null,during);
		timer.onFinished = function(){
			$('body').scrollTop(0);
			me.onFinished({
				currPage: me.state.currPage,
				prevPage: me.state.prevPage
			});
		};
		timer.start();

		// 翻页动画
		if(this.state.isCss3){
			this.el.$pages.addClass(this.config.css3).css({'transform':'translateY(' + len + 'px)'}); 
		}else{ // reqanimframe
		}

		this.onProcess({
			currPage: this.state.currPage,
			prevPage: this.state.prevPage
		});

		// 动画持续时间设置为1s，允许切换的开关周期设置为4s，可以避免mac下，每次滚动至当前页的头部或者底部时就被翻页
		setTimeout(function(){
			me.state.isSwitching = false;
		},during+2000);
	}

	Switchs.prototype.onFinished = function(){
		console.log('switching page done.');
	}

	Switchs.prototype.onProcess = function(args){
		console.log('onProcess jsut execute once.')
	}

	Switchs.prototype.switchNextPage = function(){
		this.state.pageDirect = -1;
		this._onSwitch();
	}

	Switchs.prototype.switchPrevPage = function(){
		this.state.pageDirect = 1;
		this._onSwitch();
	}

	Switchs.prototype.switchToPage = function(index){
		if(!index) return;
		var me = this;
		var during = this.config.during;
		var pageHeight = this.state.pageHeight;
		var isSwitching = this.state.isSwitching;

		if(isSwitching) return;  // 正在翻页
		this.state.isSwitching = true;

		var len = -(pageHeight * (index-1));

		this.state.prevPage = this.state.currPage;

		this.state.currPage = index;

		var timer = new Timer(null,during);
		timer.onFinished = function(){
			$('body').scrollTop(0);
			me.state.isSwitching = false;
			me.onFinished({
				currPage: me.state.currPage,
				prevPage: me.state.prevPage
			});
		};
		timer.start();

		// 翻页动画
		if(this.state.isCss3){
			this.el.$pages.addClass(this.config.css3).css({'transform':'translateY(' + len + 'px)'}); 
		}else{ // reqanimframe
		}

		this.onProcess({
			currPage: this.state.currPage,
			prevPage: this.state.prevPage
		});
	}

	Switchs.prototype.switchPage = function(delta){
		var maxScrollLen = this._getMaxScrollLen();
        var currScrollTop = $('body').scrollTop();
        this.state.pageDirect = 0;
		if(delta <= 0 && currScrollTop >= maxScrollLen){
			this.state.pageDirect = -1;
		}else if(delta >= 1 && currScrollTop == 0){
			this.state.pageDirect = 1;
		}
		this._onSwitch();
	}

	module.exports = Switchs; 
});