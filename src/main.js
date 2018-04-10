(function($){
    $(function() {
      $('.header__menu__icon').on('click', function() {
        $(this).closest('.header__menu').toggleClass('header__menu_state_open');
      });
    });
  })(jQuery);


  // $(document).ready(function() {
  //   var btn = $(".button");
  //   console.log(btn);
  //   btn.click(function() {
  //     console.log(btn);
  //     btn.toggleClass("paused");
  //     return false;
  //   });
  // });
  
  
  function startMusicEvent(buttom){
    var btn = $(buttom);   
    btn.toggleClass("paused");
  }