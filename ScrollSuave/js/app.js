$('.menu-nav a[href^="#"]').click(function(e){ //[href^="#"] com isso vai ser só para menu interno, se tiver link interno funciona de boas...
	e.preventDefault();

	var pegarHref = $(this).attr('href');
	console.log(pegarHref);

	//distancia entre a section e o top
	var targetandOffset = $(pegarHref).offset().top;


	$('html, boby').animate({
		scrollTop: targetandOffset
	}, 500);


}) 

// topo logo
$('.logo').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 500)
});

//Deixando link ativo
$('section').each(function(){
	var alturaSection = $(this).height();
	//distancia do top
	var offsetTop = $(this).offset().top;

	//relacionando o item menu com o item da section
	var itemSection = $(this).attr('id');

	var itemMenu = $('a[href="#' + itemSection + '"]');

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		
		if(offsetTop < scrollTop && offsetTop + alturaSection > scrollTop) {
			itemMenu.addClass('active');
		} else{
			itemMenu.removeClass('active');
		}
	})

});


