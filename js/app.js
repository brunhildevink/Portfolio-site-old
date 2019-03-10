$('#about').on('click', function() {
    if ($('#about--page').css('display') == 'none') {
        $('#landing--page').removeClass('show').addClass('hide');
        $('#portfolio--page').removeClass('show').addClass('hide');
        $('#about--page').removeClass('hide').addClass('show');

        $('#portfolio').removeClass('active');
        $('#logo').removeClass('active');
        $('#about').addClass('active');
    }
});

$('#logo').on('click', function() {
    if ($('#about--page').css('display') == 'flex') {
        $('#portfolio--page').removeClass('show').addClass('hide');
        $('#about--page').removeClass('show').addClass('hide');
        $('#landing--page').removeClass('hide').addClass('show');

        $('#about').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#logo').addClass('active');
    }
});

$('#portfolio').on('click', function() {
    if ($('#portfolio--page').css('display') == 'none') {
        $('#landing--page').removeClass('show').addClass('hide');
        $('#about--page').removeClass('show').addClass('hide');
        $('#portfolio--page').removeClass('hide').addClass('show');

        $('#logo').removeClass('active');
        $('#about').removeClass('active');
        $('#portfolio').addClass('active');
    }
});
