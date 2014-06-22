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
                          $(this).find('#nextLink').remove();
                          $(this).find('#prevLink').remove();

                          if ((colorbox.total > 1 && ((colorbox.isSlideshow && colorbox.loopSlides) || (!colorbox.isSlideshow && colorbox.loopItems)))
                              || colorbox.activeImage != (colorbox.total - 1)) {
                            colorbox.changeData(colorbox.activeImage + 1);
                          }
                        })
                    .on(
                        'swiperight',
                        function(e) {
                          // Disable selection.
                          $(this).disableSelection();
                          $(this).find('#nextLink').remove();
                          $(this).find('#prevLink').remove();

                          if ((colorbox.total > 1 && ((colorbox.isSlideshow && colorbox.loopSlides) || (!colorbox.isSlideshow && colorbox.loopItems)))
                              || colorbox.activeImage !== 0) {
                            colorbox.changeData(colorbox.activeImage - 1);
                          }
                        });
              });
    }
  }
})(jQuery);
