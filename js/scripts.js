$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var gender = $("select#gender").val();
    var mcolor = $("select#mcolor").val();
    var fcolor = $("select#fcolor").val();

    if (gender === 'Male') {
      $("select#mcolor").show()
      $("select#fcolor").hide(function() {
        if (gender === 'Male' && mcolor === 'white') {
          $("img.ronaldo").show();
          $("img.lillard").hide();
          $(".try").show().click(function() {
            window.location.reload(true);
          });
        } else if (gender === 'Male' && mcolor === 'red'){
          $("img.ronaldo").hide()
          $("img.lillard").show();
          $(".try").show().click(function() {
            window.location.reload(true);
          });
        }
      });
    } if (gender === 'Female') {
      $("select#fcolor").show(function() {
        if (gender === 'Female' && fcolor === 'green') {
          $("img.adele").show();
          $("img.kim").hide();
          $(".try").show().click(function() {
            window.location.reload(true);
          });
        } else if (gender === 'Female' && fcolor === 'purple'){
          $("img.kim").show();
          $("img.adele").hide();
          $(".try").show().click(function() {
            window.location.reload(true);
          });
        };
      });
    };
  event.preventDefault();
  });
});
