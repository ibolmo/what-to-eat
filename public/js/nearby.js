$(function(){
  var RIGHT = 1;
  var LEFT = -1;

  var handleDecision = function(e){
    $(e.target).addClass('selected');

    $('.pending [value="' + e.target.id + '"]').attr('selected', e.throwDirection == RIGHT);

    console.log($('.restaurant:not(.selected)').length);
    if (!$('.restaurant:not(.selected)').length) $('form').submit();
  };

  var stack = gajus.Swing.Stack();
  $('.restaurant').each(function(i, el){
    stack.createCard(el).on('throwout', handleDecision)
  });
});
