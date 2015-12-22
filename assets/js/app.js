
var App = (function ($) {
    
    var initRem =  function () {
        var w = document.getElementsByTagName("HTML")[0].getBoundingClientRect().right;
        if (w > 720) {
            $("html").css("font-size", "72px");
        }
        else {
            $("html").css("font-size", w / 10 + "px");

        }
    };


    return {
        init: function () {
    
            initRem();
            $(window).resize(function () {
                initRem();
            });

        }

    };

})(window.jQuery);
App.init();
