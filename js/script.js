console.clear();

new fullpage('#fullpage', {
  // a링크의 이름과 통일시킨다.
  anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'], 
  dragAndMove:true,
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

   $(".top-wrap > .move > p:nth-child(1)").click(function(){
  
    fullpage_api.moveTo('section2', 1);
  })

  $(".top-wrap > .move > p:nth-child(2)").click(function(){
  
    fullpage_api.moveTo('section3', 1);


    })

  
  $(".top-wrap > .move > p:nth-child(3)").click(function(){
  
    fullpage_api.moveTo('section4', 1);
  })
  
  $(".top-wrap > .move > p:nth-child(4)").click(function(){
  
    fullpage_api.moveTo('section5', 1);
  })
  
  $(".top-wrap > .move > p:nth-child(5)").click(function(){
  
    fullpage_api.moveTo('section6', 0);
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
  
    fullpage_api.moveTo('section6', 0);
  })

  $(".sf1").click(function(){
    fullpage_api.moveTo('section3', 0);
  })

  $(".sf2").click(function(){
    fullpage_api.moveTo('section3', 1);
  })

  $(".sf3").click(function(){
    fullpage_api.moveTo('section3', 2);
  })

  $(".sf4").click(function(){
    fullpage_api.moveTo('section3', 3);
  })

  $(".sf4-0").click(function(){
    fullpage_api.moveTo('section4', 0);
  })

  $(".sf4-1").click(function(){
    fullpage_api.moveTo('section4', 1);
  })

  $(".sf4-2").click(function(){
    fullpage_api.moveTo('section4', 2);
  })

  $(".sf4-3").click(function(){
    fullpage_api.moveTo('section4', 3);
  })

  $(".sf5-0").click(function(){
    fullpage_api.moveTo('section5', 0);
  })

  $(".sf5-1").click(function(){
    fullpage_api.moveTo('section5', 1);
  })
  //  $(".sf1").click(function(){

  //   fullpage_api.moveTo('section4', 1);
  //  })

  $(".top-right").click(function(){
    if($(".top-right").hasClass("active")){
      $(".top-right").removeClass("active");
      $(".menu-box-1").removeClass("active");
      $(".top-wrap>.menu-bar>p").removeClass("active");
    }
    else {
      $(".top-right").addClass("active");
      $(".menu-box-1").addClass("active");
      $(".top-wrap>.menu-bar>p").addClass("active");
    }
  });

  $(".menu-box-1 > ul > li > a").click(function(){
    $(".top-right").removeClass("active");
    $(".menu-box-1").removeClass("active");
  });

});