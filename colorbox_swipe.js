(function($) {
  /**
  * Initialization
  */
  Backdrop.behaviors.colorbox_swipe = {
    /**
    * Run Backdrop module JS initialization.
    *
    * @param context
    * @param settings
    */
    attach: function(context, settings) {
      $(document).ready(function() {
        var timeout = 100;
        var timeoutNext;
        var timeoutPrevious;
        // Global context!
        $("#colorbox *", context).bind(
          'swipeleft',
          function(e) {
            function gotoNext() {
              $(this).disableSelection();
              $.colorbox.next();
            }
            clearTimeout(timeoutNext);
            timeoutNext = setTimeout(gotoNext, timeout);
          }).bind(
            'swiperight',
            function(e) {
              function gotoPrevious() {
                $(this).disableSelection();
                $.colorbox.prev();
              }
              clearTimeout(timeoutPrevious);
              timeoutPrevious = setTimeout(gotoPrevious, timeout);
            });
          });
        }
      };
    })(jQuery);
