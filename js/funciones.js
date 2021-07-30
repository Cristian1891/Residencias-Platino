(function ($) {
    "use strict";
  
    $(function() {

    // Mobile Navigation
    if ($('.main-nav').length) {
      var $mobile_nav = $('.main-nav').clone().prop({
        class: 'mobile-nav d-lg-none'
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
      $('body').append('<div class="mobile-nav-overly"></div>');
  
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('.mobile-nav-overly').toggle();
      });
      
      $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
      });
  
      $(document).click(function(e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('.mobile-nav-overly').fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }

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

  /* const btnEnviar = document.querySelector('.formulario input[type=submit]');
  console.log(btnEnviar);

  btnEnviar.addEventListener('click', function() { // callback o closure 
      console.log('click');
  }); */

  // submit
  /* const formulario = document.querySelector('.cont-form');

  formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(e);

    console.log('Di click y la página ya no recarga');

    console.log(datos); */

    // Validar el Formulario...

   /*  const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '' ) {
        console.log('Al menos un campo esta vacio');
        mostrarError('Todos los campos son obligatorios');
        return; // Detiene la ejecución de esta función
    }

    console.log('Todo bien...')

    mostrarMensaje('Mensaje enviado correctamente');

    function mostrarError(mensaje) {
      const alerta = document.createElement('p');
      alerta.textContent = mensaje;
      alerta.classList.add('error');
  
      formulario.appendChild(alerta);
  
      setTimeout(() => {
          alerta.remove();
      }, 3000);
  } 

  

  });
  */

  });


})(jQuery);
  