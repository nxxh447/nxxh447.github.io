const nxTitleElm = document.getElementById("borderText");
const test = "test..."

nxTitleElm.innerText = "< Nxxh447 :) />";
console.log(test);

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
