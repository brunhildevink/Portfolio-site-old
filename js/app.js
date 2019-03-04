$('#about').on('click', function() {
    if ($('#about--page').css('display') == 'none') {
        $('#landing--page').removeClass('show').addClass('hide');
        $('#about--page').removeClass('hide').addClass('show');
    }
});

$('#logo').on('click', function() {
    if ($('#about--page').css('display') == 'flex') {
        $('#landing--page').removeClass('hide').addClass('show');
        $('#about--page').removeClass('show').addClass('hide');
    }
});
