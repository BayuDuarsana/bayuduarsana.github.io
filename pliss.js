// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    //merumuskan variabel untuk mengambil  isi href
    var titiktujuan = $(this).attr('href');

    //merumuskan variabel untuk mengambil elemen ybs
    var elementujuan = $(titiktujuan);

    //menggunakan animasi untu menscroll
    $('body').animate({
        scrollTop: elementujuan.offset().top-50
    }, 1000);

    e.preventDefault();
});


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