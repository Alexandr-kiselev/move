//burger-menu
$(function () {
  $(".menuToggle").click(function () {
    $(this).toggleClass("active");
    $(".header__menu-item").slideToggle(300, function () {
      if ($(this).css("display") === "none") {
        $(this).removeAttr("style");
      }
    });
  });


  //плавная прокрутка
  $(function () {
    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
  });

  //переход к форме
  $(".link-call").click(function (e) {
    e.preventDefault();
    let destination = $('#call').offset().top;
    $('body,html').animate({ scrollTop: destination }, 1500);
  });
 


 
//для отзывов
$(".btn-read").on("click", function (e) {
    
    var $this = $(this).prev('.feedback__text');
    var $text = $(this);
  
        $this.toggleClass('all-read')
        if ($this.is('.all-read')) {
            $text.text('закрыть');
        } else {
            $text.text('читать полностью');
        }

});

$('.btn__all--sm, .btn__all--lg').on('click', function () {

  if ($(this).text() == 'Все отзывы') {
      $(this).text('Отзывов больше нет');
      $(this).css({'border':'none'});
      
  }
  else {
      $(this).text('Все отзывы');
      $(this).css({'border':'1px solid #333'});
  }
});
$('.all-prise').click(function(){
  $('.sm').slideToggle(1000);
  return false;
 });

 $('.btn__all--sm').click(function(){
  $('.sm-card').slideToggle(1000);
  return false;
 });

$('.social-link').click(function(){
  alert('Данная ссылка ещё не привязана')
});


const nextIcon = '<img src="./img/next.svg" alt:"right">';
const prevIcon = "<img src='./img/prev.svg' alt:'left'>";
$('.owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  center: true,
  // nav: true, 
  dots: true,
  navText: [
    nextIcon,
    prevIcon
  ],
  dotsContainer: '#demos-link',
  margin: 10,
  URLhashListener: true,

  autoplayHoverPause: true,
  startPosition: 'URLHash',
  responsive: {
    0: {
      // items:1,
      nav: false
    },
    600: {
      // items:5,
      nav: true,
      // loop:false
    }
  }
});
});

