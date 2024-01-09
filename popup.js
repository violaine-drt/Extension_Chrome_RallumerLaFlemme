const btnDog = document.getElementById("buttonDog")
if (btnDog) {
  btnDog.onclick = async function() {
    console.log("je teste des choses")
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    const response = await chrome.tabs.sendMessage(tab.id, { action: "CHANGE_IMAGE_DOG" });   
  }
}

const btnCat = document.getElementById("buttonCat")
if (btnCat) {
  btnCat.onclick = async function() {
    console.log("je teste des choses 2")
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    const response = await chrome.tabs.sendMessage(tab.id, { action: "CHANGE_IMAGE_CAT" });   
  }
}
    // do something
