// event pada saat link di klik


//parralax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop;
    $('.jumbotron img').css ({
        'transform' : 'translate(0px, ' + wScroll/4 + '%)'
    });
    $('.jumbotron h1').css ({
        'transform' : 'translate(0px, ' + wScroll + '%)'
    });
});


