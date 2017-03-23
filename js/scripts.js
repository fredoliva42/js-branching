$(document).ready(function() {
  var age = parseInt(prompt("Enter your age"));

  if (age > 21) {
    $("#drinks").show();
  } else if (age === 21) {
      alert("Cool, don't go crazy !");
      $("#drinks").show();
    } else {
      $("#under-21").show();
    }
});
