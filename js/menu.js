$(function(){
	var header = document.getElementById('header');
	var headroom = new Headroom(header);
	headroom.init();

	//menu responcive

	//calcular ancho de la pagina
	var ancho = $(window).width(),
		enlaces = $('#enlaces'),
		btnMenu = $('#btn-menu'),
		icono = $('#btn-menu .icono');
	
    if (ancho < 700) {
		enlaces.hide();
		icono.addClass('fa-caret-square-o-down');
	}

	btnMenu.click(function(){
		enlaces.slideToggle();
		icono.toggleClass('fa-caret-square-o-down');
		icono.toggleClass('fa-times');
	});

	

	//btnMenu.on('click', function(e){
		
	//});

	$(window).on('resize', function(){
		if($(this).width() > 700)
		{
			enlaces.show();
			icono.addClass('fa-times');
			icono.removeClass('fa-caret-square-o-down');
		} else
		{
			enlaces.hide();
			icono.addClass('fa-caret-square-o-down');
			icono.removeClass('fa-times');
		}
	});
});