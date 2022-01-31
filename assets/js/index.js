const detectOS = () => {
    if (!navigator.appVersion.indexOf("Win") != -1) return document.getElementByTag("body").style.display = "none!important";
    if (!navigator.appVersion.indexOf("Mac") != -1) return document.getElementByTag("body").style.display = "none!important";
}
