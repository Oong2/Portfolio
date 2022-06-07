console.clear();

new fullpage('#fullpage', {
  // a링크의 이름과 통일시킨다.
  anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
});

$(document).ready(function() {
   $(".section > .top-right > .more").click(function(){
     $(".menu-more-wrap").addClass("active");

     
   if($("menu-more-wrap").hasClass("active")){
     $(".menu-more-wrap").removeClass("active");
   }

   });

   $(".menu-more-wrap > .menu-more").click(function(){
     $(".menu-more-wrap").removeClass("active");
   })

});