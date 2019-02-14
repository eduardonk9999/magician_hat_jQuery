$(window).scroll(function(){
    //Pegar distância entreo o scroll e o topo
    var windowTop = $(this).scrollTop();

    //each pega cada anime da página, para cada um deles, o each vai executar o script
    $('.anime').each(function(){
        if (windowTop > $(this).offset().top - 600) { //top - 600 aqui estamos tirando o espaço gigante entre o elemento e o top
            $(this).addClass('animaInit');
        } else{
            $(this).removeClass('animaInit');
        }
    });

});