$('li').click(function() {
    $(this).toggleClass('done');
})

$('span').click(function(event) {
    $(this).parent().fadeOut();
})

