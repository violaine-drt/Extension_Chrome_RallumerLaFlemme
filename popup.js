console.log("Coucou ici la popup")

// Les fonctions setAlarm et setSecondAlarm créent des alarmes et transforment la valeur des boutons en temps.
function setAlarm(event) {
  const minutes = parseFloat(event.target.value);
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.action.setBadgeBackgroundColor({ color: '#3D5954' });
  chrome.alarms.create("mainAlarm",{ delayInMinutes: minutes });
  chrome.storage.sync.set({ minutes: minutes });
}


async function clearAlarm(){
  chrome.action.setBadgeText({ text: '' });
  chrome.alarms.clearAll();
  const response = await chrome.runtime.sendMessage({action: "CLEAR_TIMEOUT"});
  window.close();
}

// Détecte le clic des boutons et appelle les fonctions ci-dessus
document.getElementById('sampleMinute').addEventListener('click', setAlarm);
document.getElementById('min15').addEventListener('click', setAlarm);
document.getElementById('min30').addEventListener('click', setAlarm);
document.getElementById('min60').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);
document.getElementById('btnFermeture').addEventListener('click', ()=>{ window.close() });

// Enregistre le choix de l'animal et fait le lien avec content.js
const btnDog = document.getElementById("buttonDog")
if (btnDog) {
  btnDog.onclick = async function() {
    chrome.storage.sync.set({ animal: "dog" })
    window.close()
  }
}

const btnCat = document.getElementById("buttonCat")
if (btnCat) {
  btnCat.onclick = async function() {
    chrome.storage.sync.set({ animal: "cat" })
    window.close()
  }
}
 