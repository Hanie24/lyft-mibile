$(document).ready(function() {
    setTimeout(function() { /*seccion de splash*/
        $(".splash").fadeOut(1500);
    },3000);

    setTimeout(function() {
        $(".pantalla").fadeIn(1500);
    },3000);
    });

    $("#demo").intlTelInput();

    var $phoneInput =  $("#demo");

function  loadPage () {
    $(".modal"). modal ();
    $phoneInput .keyup (validNumber)
}

function validNumber () {
    var $validNext = $("#next")
    if ($(this).val().trim().length > 0) {
        $validNext.removeAttr("disabled");
      } else {
        $validNext.attr("disabled", true);
        alert("Tú codigo: LAB-551");
      }
      
    };

