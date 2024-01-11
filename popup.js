function setAlarm(event) {
  const minutes = parseFloat(event.target.value);
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create({ delayInMinutes: minutes });
  chrome.storage.sync.set({ minutes: minutes });
  window.close();
}

function clearAlarm() {
  chrome.action.setBadgeText({ text: '' });
  chrome.alarms.clearAll();
  window.close();
}

// An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute increments if released

document.getElementById('sampleMinute').addEventListener('click', setAlarm);
document.getElementById('min15').addEventListener('click', setAlarm);
document.getElementById('min30').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);




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
 