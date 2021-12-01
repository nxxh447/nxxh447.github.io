function loadFn(elm, style) {
  return setInterval(function() {
    document.getElementById(elm).style.display = style;
  }, 3000)
}

loadFn("spinner", "none");
loadFn("mIcon", "block");
loadFn("contact", "block");
