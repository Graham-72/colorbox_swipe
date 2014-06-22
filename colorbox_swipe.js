(function($) {
  /**
   * Initialization
   */
  Drupal.behaviors.colorbox_swipe = {
    /**
     * Run Drupal module JS initialization.
     * 
     * @param context
     * @param settings
     */
    attach : function(context, settings) {
      // Global context!
      $(document)
          .ready(
              function() {
                $("#colorbox *")
                    .on(
                        'swipeleft',
                        function(e) {
                          // Disable selection.
                          $(this).disableSelection();
                          $.colorbox.next();
                        })
                    .on(
                        'swiperight',
                        function(e) {
                          // Disable selection.
                          $(this).disableSelection();
                          $.colorbox.prev();
                        });
              });
    }
  }
})(jQuery);
