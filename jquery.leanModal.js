(function($) {

    $.fn.extend({

        leanModal: function(options) {

            var defaults = {
                overlay: 0.5,
                closeButton: null
            }

            var overlay = $("<div id='lean_overlay'></div>");

            $("body").append(overlay);

            options = $.extend(defaults, options);

            return this.each(function() {

                var o = options;

                $(this).click(function(e) {

                    var modal = $($(this).attr("href"));

                    $("#lean_overlay").click(function() {
                        close_modal(modal);
                    });

                    $(o.closeButton).click(function() {
                        close_modal(modal);
                    });

                    var modal_height = modal.outerHeight();
                    var modal_width = modal.outerWidth();

                    $('#lean_overlay').css({
                        'display': 'block',
                        opacity: 0
                    });

                    $('#lean_overlay').fadeTo(200, o.overlay);

                    var css = $.extend({
                        'display': 'block',
                        'position': 'fixed',
                        'opacity': 0,
                        'margin-left': -(modal_width / 2) + "px",
                        'z-index': 11000,
                        'left': 50 + '%',
                        'top': '100px'
                    }, o.css)

                    modal.css(css);

                    modal.fadeTo(200, 1);


                    e.preventDefault();

                });

            });

            function close_modal(modal) {

                $("#lean_overlay").fadeOut(200);

                modal.css({
                    'display': 'none'
                });

            }

        }
    });

})(jQuery);