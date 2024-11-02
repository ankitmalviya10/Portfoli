$(document).ready(function(){
  $('.slider').slick(
    {
     arrows:false,
     dots:true,
     appendDots:'.slider-dots',
     dotsClass:'dots'
    }); 

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobile = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click',function(){
      
        mobile.classList.add('open');
    });

    times.addEventListener('click',function(){
        mobile.classList.remove('open');

    });

});


