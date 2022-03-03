const sleep = (ms) => { return new Promise((res) => setTimeout(res, ms)) }
sleep(2000).then(() => window.location.replace("https://savelife.in.ua/en/donate"));
