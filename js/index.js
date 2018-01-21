/**
 * Created by yulibin on 2016/12/17.
 */

$(function(){
    index.init();
});

var index = {
    init: function(){
        this._menuInit();
        this._scrollInit();
    },
    _show:0,
    _menuInit: function(){
        var that = this;
        $("header .menu").click(function(){
            if(that._show == 0){
                $("header .links").slideDown('fast');
                that._show = 1;
            } else {
                $("header .links").slideUp('fast');
                that._show = 0;
            }
        });
        $("header .links").click(function(){
            // check width
            var width = $(window).width();
            if(width <= 600){
                $(this).slideUp();
                that._show = 0;
            }
        });
    },
    _scrollNumber:0,
    _scrollInit: function(){
        var that = this;
        $(".prev1").click(function(){
            that._scrollNumber--;
            that._scroll();
        });
        $(".next1").click(function(){
            that._scrollNumber++;
            that._scroll();
        });
    },
    _scroll:function(){
        var singlePage = -1400;
        var count = this._scrollNumber;
        count = count <0 ? 1 : count;
        count = count >1 ? 0 : count;
        this._scrollNumber = count;
        var left = count*singlePage;
        $(".speaker_scroll_in").animate({right: left+'px'})
    }
}
