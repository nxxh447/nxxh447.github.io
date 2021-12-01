setInterval(function(v) { v.style.display = "none" }(document.getElementById("spinner")), 3000)
setInterval(function() {
  const a = document.getElementById("mIcon");
  const b = document.getElementById("contact");
  
  ((a && b).style.display = "block")
}, 3000);
