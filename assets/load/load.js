/*
setTimeout(() => { document.getElementById("spinner").style.display = "none"; },3000);
setTimeout(()=> { document.getElementById("mIcon").style.display = "block"; }, 3000);
setTimeout(() => { document.getElementById("contact").style.display = "block"; }, 3000);
*/

setTimeout(function() {
  const ge = (v) => { return document.getElementById(v); }
  const elms = [ge("mIcon"),ge("contact")];
  const oelm = ge("spinner");
  
  elms.forEeach(function(item) {
    this.style.display = "block";
  }); oelm.style.display = "none";
}, 3000);
