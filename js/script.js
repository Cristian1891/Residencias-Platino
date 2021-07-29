(function ($) {
    
    $(document).ready(function () {
        $('.scrolear').click(function(e){
            e.preventDefault();
            $('html, body').stop().animate({scrollTop: $($(this).attr('href') ).offset().top - 100}, 1000);
        });
    }); 


    /*Seccion propiedades*/

    $('.contProp .info-propi:first').show();
    $('.secciones li a:first').addClass('activo');

    $('.secciones li a').on('click', function(){
        $('.secciones li a').removeClass('activo bgColorRed colorWhite');
        $('.secciones li a').addClass('bgColorWhite colorRed');
        $(this).addClass('activo');
        $(this).removeClass('bgColorWhite colorRed');
        $(this).addClass('bgColorRed colorWhite');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        $(enlace).css("display", "flex");
        return false;
    });
    

    /*Seccion servicios*/
    $('.cont-serv .info-serv:first').show();
    $('.cont-serv .slide li i:first').addClass('activo');

    $('.cont-serv .slide li i').on('click', function(){
        $('.cont-serv .slide li i').removeClass('activo colorYellow');
        $('.cont-serv .slide li i').addClass('colorBlack');
        $(this).addClass('activo');
        $(this).removeClass('colorBlack');
        $(this).addClass('colorYellow');
        $('.ocult-serv').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        $(enlace).css("display", "flex");
        return false;
    });

    /*Seccion agentes*/
    $('.cont-agent .info-agent:first').show();
    $('.cont-agent .slide li i:first').addClass('activo');

    $('.cont-agent .slide li i').on('click', function(){
        $('.cont-agent .slide li i').removeClass('activo colorYellow');
        $('.cont-agent .slide li i').addClass('colorWhite');
        $(this).addClass('activo');
        $(this).removeClass('colorWhite');
        $(this).addClass('colorYellow');
        $('.ocult-agent').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        $(enlace).css("display", "flex");
        return false;
    });

    /*Seccion testimoniales*/
    $('.cont-test .info-test:first').show();
    $('.cont-test .slide li i:first').addClass('activo');

    $('.cont-test .slide li i').on('click', function(){
        $('.cont-test .slide li i').removeClass('activo colorYellow');
        $('.cont-test .slide li i').addClass('colorWhite');
        $(this).addClass('activo');
        $(this).removeClass('colorWhite');
        $(this).addClass('colorYellow');
        $('.ocult-test').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        $(enlace).css("display", "flex");
        return false;
    });

    /*Seccion propiedades interna*/

    $('.casa-cont .info-propiedad:first').show();
    $('.seccionesRes li a:first').addClass('activo');

    $('.seccionesRes li a').on('click', function(){
        $('.seccionesRes li a').removeClass('activo bgColorRed colorWhite');
        $('.seccionesRes li a').addClass('bgColorBlack colorRed');
        $(this).addClass('activo');
        $(this).removeClass('bgColorBlack colorRed');
        $(this).addClass('bgColorRed colorWhite');
        $('.ocult-propiedad').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        $(enlace).css("display", "flex");
        return false;
    });

    // Preloader (if the #preloader div exists)
    $(window).on('load', function () {
        if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
        }
    });


})(jQuery);