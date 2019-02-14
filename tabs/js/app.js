$('[data-group]').each(function(){
	
	var $allTarget = $(this).find('[data-target]'),
		$allClick = $(this).find('[data-click]'),
		activeClass = 'active';
	
	//$allTarget.first().addClass(activeClass);	
	//$allClick.first().addClass(activeClass);
	
	$allClick.click(function(e){
		e.preventDefault();

		// variável this é uma referencia ao botão clicado +
		//console.log(this);

		var valorDentrodoData = $(this).data('click'),
			valordoTarget = $('[data-target="' + valorDentrodoData + '"]'); //o resultado seria: data-target="fox"

			console.log(valordoTarget);
		
		$allClick.removeClass(activeClass);	
		$allTarget.removeClass(activeClass);
		
		valordoTarget.addClass(activeClass);
		//this pq é exatamente o que eu cliquei
		$(this).addClass(activeClass);
	});

	$allClick.first().click();
	
});





// each vai buscar cada um dos itens
// finde vai retorna um array com cada um dos itens que tiver data-target