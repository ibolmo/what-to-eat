$(function(){
  var RIGHT = 1;
  var LEFT = -1;

  var handleDecision = function(e){
    $('#error').text('');
    
    $(e.target).addClass('selected');
    $('.pending [value="' + e.target.id + '"]').attr('selected', e.throwDirection == RIGHT);
    if (!$('.restaurant:not(.selected)').length){
      if ($('.pending [selected]').length == 1){
        $('form').submit();
      } else {
        $('#error').text('Please select only one restaurant');
      }
    }
  };

  var stack = gajus.Swing.Stack();
  $('.restaurant').each(function(i, el){
    stack.createCard(el).on('throwout', handleDecision)
  });
});
