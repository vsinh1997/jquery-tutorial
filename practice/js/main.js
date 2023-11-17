$(document).ready(function () {

  $("#demo").mousedown(function () {
    $(this).hide()
  })

  $("#button").hover(function () {
    $("#demo").show()
  },
    function () {
      $("#demo").hide()
    })

  $("#button").focus(function () {
    $(this).css("background-color", "green")
  })

  $("input").focus(function () {
    $(this).css("background-color", "#333")
  })

  $("input").blur(function () {
    $(this).css("background-color", "red")
  })

  // on() method
  $("#button2").on({
    click: function () {
      $(this).css("background-color", "yellow")
    },
    mouseleave: function () {
      $(this).css("background-color", "lightblue")
    },
    mouseenter: function () {
      $(this).css("background-color", "lightgray")
    }
  });


  // Hide / Show
  $("#button3").click(function () {
    $("#show-hide").toggle(1000);
    // $("#show-hide").show(1000);
    // $("#show-hide").hide(1000);
  });

  // Fade
  $("#button4").click(function () {
    $("#fade").fadeOut(3000);
    // $("#fade").fadeToggle(3000);
    // $("#fade").fadeTo("slow", 0.7);
  });

  // Slide 
  $("#button5").click(function () {
    $("#slide").slideToggle(1000);
    // $("#slide").slideUp();
    // $("#slide").slideDown();
  });

  // Animation
  $("#button6").click(function () {
    var animate = $("#animation")
    animate.animate({
      left: '250px',
      opacity: ".5",
      height: "toggle"
      // height: "+=150px",
      // width: "+=150px",
      // height: "150px",
      // width: "150px",
    })


  });

  $("#btn1").click(function () {
    $("#test1").text(function (i, string) {
      return "Old html: " + string + " New html: Hello <b>world</b> (index: " + i + ")"
    });
  });


})