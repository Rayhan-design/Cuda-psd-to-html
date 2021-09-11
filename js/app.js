$(document).ready(function(){
    // menu items list 
        $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    // portfolio button 
    $('.portfolio-btns button').click(function(){
      $('button').removeClass("active-btn");
      $(this).addClass("active-btn");
  });

    $(".portfolio-link a").click(function(){
      alert("Projects are unavailable");
    })
    // portfolio item 
    var mixer = mixitup('.portfolio-allItem')

    // sticky menu    manually code without plugin
    $(window).scroll(function(){
      if($(this).scrollTop() > 450){
        $("#inner-header").addClass("sticky")
      }else{
        $("#inner-header").removeClass("sticky")
      }
    })

    // sticky menu with waypoints plugin 
    // $(".js-service").waypoint(function(direction){
    //   if(direction == "down"){
    //     $("#inner-header").addClass("sticky")
    //   }else{
    //     $("#inner-header").removeClass("sticky")
    //   }
    // });


  // scroll top button 
    $(window).scroll(function(){
      if($(this).scrollTop() > 100){
        $("#scroll-up-btn").fadeIn()
      }else{
        $("#scroll-up-btn").fadeOut()
      }
    })

  });


  

