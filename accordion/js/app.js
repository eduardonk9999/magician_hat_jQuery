$('.accordion__item h2').click(function(){
    
    $('.accordion__itens').addClass('active');
    $('i.fa.fa-angle-down').addClass('activearrow');
   
    
   if($('.accordion__itens').hasClass('active') && $('i.fa.fa-angle-down').hasClass('activearrow')){
        $(this).siblings().removeClass("active");
        $('.accordion__itens').toggleClass('active');
        
        $('i.fa.fa-angle-down').removeClass('activearrow');
        $('i.fa.fa-angle-down').toggleClass('activearrow');
        
         
   }
   
    
    

});