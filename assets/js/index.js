const nbspElm =  document.getElementByClassName("nbsp");
const russian = "RU";

nbspElm.innerText = ">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";

function sleep(ms) { return new Promise((res) => setTimeout(res, ms)) }
function recordData(data) {  
    console.log(data.country);
  
    if (country === russian) {
        sleep(1450).then(() => {
            window.location.replace(
                "https://savelife.in.ua/en/donate"
            );
        });
    } else console.log("check passed");
}
