setTimeout(function(v) { let v = this; this.style.display = "none" }(document.getElementById("spinner")));
setTimeout(function() {
  const elms = [document.getElementById("mIcon"), document.getElementById("contact")];
  elms.forEach(function(item) {
    this.style.display = "block"
  });
});
