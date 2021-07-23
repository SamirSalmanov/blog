$('.my-class').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows:false,
    adaptiveHeight: true
  });
  $("#hirebut").mouseenter(function(){
    $("#likebut").css("background-color","blue")
    $("#hirebut").css("background-color","blue")

  })
  $("#hirebut").mouseout(function(){
    $("#likebut").css("background-color","white")
    $("#hirebut").css("background-color","white")

  })
  $("#likebut").mouseenter(function(){
    $("#hirebut").css("background-color","blue")
    $("#likebut").css("background-color","blue")

  })
  $("#likebut").mouseout(function(){
    $("#hirebut").css("background-color","white")
    $("#likebut").css("background-color","white")

  })
  