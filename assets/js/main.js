jQuery(function ($) {
  
    ///////////////////////////////////////////////////////////////   START DOCUMENT READY  ///////////////////////////////////////////////////////////////

    $(document).ready(function(){
      
      $(".navbar-toggler").click(function(){
        if($(".navbar-toggler").attr('aria-expanded')=='true'){
          $("html").addClass("overflow-hidden")
        }
        else{
          $("html").removeClass("overflow-hidden")
        }
      })
      $(".dropdown-toggle").dropdown();
        function classAnimate(){
          $(".swiper-slide-thumb-active .progress").clearQueue()
            .stop()
            .css(
                {width:'0%'}
            )
            .animate({
                width: "100%"
            }, 5500);

        }
        classAnimate();
       $(".swiper-slide").click(function() {
        $(".progress").clearQueue()
        .stop()
        .css(
            {width:'0%'}
        );
        classAnimate();
        });
      });
      

  

///////////////////////////// When we click on the arrow to scroll//////////////////////////////////////
    $('#scroll').on('click', function(e) {
        e.preventDefault();
        var $target = $('.section.section-active').next('.main .section');
        if ($target.length == 0)
          $target = $('.main .section:first');   

        // if($('#news').hasClass('section-active')){
        //   $target = $('footer'); 
        //   }
        $('.section-active').removeClass('section-active');
        $target.addClass('section-active');
          
        $('html, body').animate({ 
          scrollTop: $target.offset().top
        }, 500, 'linear');

       
      });

  

    
///////////////////////////////////////////////////////////////   START DATA SCROLL  ///////////////////////////////////////////////////////////////
$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
  instances.push(new moveItItem($(this)));
  });
  
  window.addEventListener('scroll', function(){
  var scrollTop = $window.scrollTop();
  instances.forEach(function(inst){
      inst.update(scrollTop);
  });
  }, {passive: true});
} 
var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};
moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
  this.el.css('margin-bottom', -(scrollTop / this.speed) + 'px');
}; 
// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});


$.fn.moveItX = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
  instances.push(new moveItXItem($(this)));
  });
  
  window.addEventListener('scroll', function(){
  var scrollTop = $window.scrollTop();
  instances.forEach(function(inst){
      inst.update(scrollTop);
  });
  }, {passive: true});
} 
var moveItXItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed-x'));
};
moveItXItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateX(' + -(scrollTop / this.speed) + 'px)');
}; 
// Initialization
$(function(){
  $('[data-scroll-speed-x]').moveItX();
});
///////////////   END DATA SCROLL  ///////////////


    


        $('.close-form').on('click', function(){
          $('.search-form').removeClass('show-form');
          $('.search-button').removeClass('search-button-remove')
          return false;
        })
        $('.search-button').on('click', function(){
          $('.search-form').addClass('show-form');
          $('.search-button').addClass('search-button-remove')
          return false;
        })

        $('#mySelect1').on('change', function (e) {
          $('#myTab1 li a').eq($(this).val()).tab('show'); 
      });


    });

   





     



 

