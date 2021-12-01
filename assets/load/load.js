setTimeout(function(v) { v.style.display = "none" }(document.getElementById("spinner")), 3000);
setTimeout(function() {
  const elms = { document.getElementById("mIcon"), document.getElementById("contact") };
  elms.forEach(function(item) {
    item.style.display = "block"
  });
}, 3000);
