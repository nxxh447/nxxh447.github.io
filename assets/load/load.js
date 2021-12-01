function loadFn(elmName, dispType) {
  return setInterval(function() {
    document.getElementById(elmName).style.display = dispType;
  }, 3000)
}

loadFn("spinner", "none");
loadFn("mIcon", "block");
loadFn("contact", "block");
