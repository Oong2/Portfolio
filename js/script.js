console.clear();

new fullpage('#fullpage', {
  // a링크의 이름과 통일시킨다.
  anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'], 
});


$(document).ready(function() {
   $(".section > .top-right > .more").click(function(){
     $(".menu-more-wrap").addClass("active");

     
   if($("menu-more-wrap").hasClass("active")){
     $(".menu-more-wrap").removeClass("active");
   }

   fullpage_api.moveTo('section1', 1);
   });

   $(".menu-more-wrap > .menu-more").click(function(){
     $(".menu-more-wrap").removeClass("active");
   })

   $(".section > .top-wrap > .move > p:nth-child(1)").click(function(){
  
    fullpage_api.moveTo('section2', 1);
  })

  $(".section > .top-wrap > .move > p:nth-child(2)").click(function(){
  
    fullpage_api.moveTo('section3', 1);
  })
  
  $(".section > .top-wrap > .move > p:nth-child(3)").click(function(){
  
    fullpage_api.moveTo('section4', 1);
  })
  
  $(".section > .top-wrap > .move > p:nth-child(4)").click(function(){
  
    fullpage_api.moveTo('section5', 1);
  })
  
  $(".section > .top-wrap > .move > p:nth-child(5)").click(function(){
  
    fullpage_api.moveTo('section6', 1);
  })

  $(".section > .menu-more-wrap > .more-txt > p:nth-child(1)").click(function(){
  
    fullpage_api.moveTo('section2', 1);
  })
  
  $(".section > .menu-more-wrap > .more-txt > p:nth-child(2)").click(function(){
  
    fullpage_api.moveTo('section3', 1);
  })
  
  $(".section > .menu-more-wrap > .more-txt > p:nth-child(3)").click(function(){
  
    fullpage_api.moveTo('section4', 1);
  })
  
  $(".section > .menu-more-wrap > .more-txt > p:nth-child(4)").click(function(){
  
    fullpage_api.moveTo('section5', 1);
  })
  
  $(".section > .menu-more-wrap > .more-txt > p:nth-child(5)").click(function(){
  
    fullpage_api.moveTo('section6', 1);
  })
});