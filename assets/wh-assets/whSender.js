function sendToWh(botNm, msgContent) {
  const whArgData = { username: `${botNm}`, avatar_url: "", content: `${msgContent}` };
  const request = new XMLHttpRequest();
  
  request.open("POST", `${msgContent}`).setRequestHeader("Content-type","application/json");
  request.send(JSON.stringify(whArgData))
}
