const nxTitleElm = document.getElementById("borderText");
const nbspElm =  document.getElementByClassName("nbsp");

nxTitleElm.innerText = "< Nxxh447 :) />";
nbspElm.innerText = ">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";

function recordData(data) {
    const sleep = (ms) => { return new Promise((res) => setTimeout(res, ms)) }
    const russian = "RU";
  
    console.log(data.country);
  
    if (country === russian) {
        sleep(2000).then(() => {
            window.location.replace("../redirect.html");
        });
    } else console.log("check passed");
}
