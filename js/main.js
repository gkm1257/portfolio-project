$(() => {
    const win = $(window);
    if (win.width() <= 400) {
        $('#name').removeClass('pt-1');
        $('#name').addClass('pt-3');
    } else if (win.width() <= 450) {
        $('#name').removeClass('pt-1');
        $('#name').addClass('pt-2');
    }
    if (win.width() <= 575) {
        $('header .row').removeClass('pt-5');
        $('header .row').addClass('pt-3');
    }
});

$(window).on('resize', () => {
    const win = $(this);
    if (win.width() <= 400) {
        $('#name').removeClass('pt-1');
        $('#name').removeClass('pt-2');
        $('#name').addClass('pt-3');
    } else if (win.width() <= 450) {
        $('#name').removeClass('pt-1');
        $('#name').removeClass('pt-3');
        $('#name').addClass('pt-2');
    } else {
        $('#name').removeClass('pt-2');
        $('#name').removeClass('pt-3');
        $('#name').addClass('pt-1');
    }
    if (win.width() <= 575) {
        $('header .row').removeClass('pt-5');
        $('header .row').addClass('pt-3');
    } else {
        $('header .row').removeClass('pt-3');
        $('header .row').addClass('pt-5');
    }
});
