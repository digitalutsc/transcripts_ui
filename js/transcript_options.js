(function($) {
        Drupal.behaviors.transcriptOptions = {
                attach: function(context, settings) {
                        $('[data-transcripts-role=transcript-controls]', context).once('options').each(function() {
                                var trid = $(this).attr('data-transcripts-id');
				
				var $tierSelector = $('.tier-selector', this);
                                $tierSelector.find('optgroup[data-type=tier-options] option').attr('selected', true);
                                $tierSelector.change(function(e)
                                        {
                                                $('*[data-transcripts-id=' + trid + ']').find('.tier').removeClass('active');
                                                $('option:selected', this).each(function() {
                                                         $('*[data-transcripts-id=' + trid + ']').find('*[data-tier=' + $(this).val() + ']').addClass('active');
                                                });
                                                e.preventDefault();
                                        }
                                );

                                //hide buttons for tiers that have no data
                                $('optgroup[data-type=tier-options] option', $tierSelector).each(function() {
                                        if ($('*[data-transcripts-id=' + trid + ']').find('*[data-tier=' + $(this).val() + ']').size() == 0) {
						$(this).remove();                                                
                                        }
                                });
			});
		}
	};
})(jQuery);
