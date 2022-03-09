const nbspElm =  document.getElementByClassName("nbsp");
const sleep = (ms) => { return new Promise((res) => setTimeout(res, ms)) }
const russian = "RU";

nbspElm.innerText = ">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";

function recordData(data) {  
    console.log(data.country);
  
    if (country === russian) {
        sleep(2000).then(() => {
            window.location.replace("../redirect.html");
        });
    } else console.log("check passed");
}
