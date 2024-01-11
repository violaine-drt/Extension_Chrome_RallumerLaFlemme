console.log("Coucou ici la popup")

async function fonctionTest(){
  console.log("le test OK")
  const [tab] = await chrome.tabs.query({ active: true });
  console.log(tab)
  const response = await chrome.tabs.sendMessage(tab.id, { action: "CHANGE_IMAGE_DOG" }); 
}

// Les fonctions setAlarm et setSecondAlarm créent des alarmes et transforment la valeur des boutons en temps.
function setAlarm(event) {
  const minutes = parseFloat(event.target.value);
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create("mainAlarm",{ delayInMinutes: minutes });
  chrome.storage.sync.set({ minutes: minutes });
  window.close();
}


function clearAlarm() {
  chrome.action.setBadgeText({ text: '' });
  chrome.alarms.clearAll();
  window.close();
}

// // Essai pour identifier la nature de l'objet alarme + récupérer le nom de l'alarme rappel
// const rappel = (chrome.alarms.get(name = "rappel"));
// console.log(rappel)
// console.log(typeof(rappel))


//Fonction de timer à partir de la valeur du bouton cliquéé
const timerValue = document.getElementById('sampleMinute').value*60000;
function setTimer() {setTimeout(fonctionTest,timerValue + 10000)};

// Sont récupérés les clicks des boutons de la popup. 
//La fonction setAlarm déclenche un timer à partir de la valeur des boutons.
// La fonction setTimer lanche un second timer de rappel


console.log(chrome.alarms)
document.getElementById('sampleMinute').addEventListener('click', setAlarm);
document.getElementById('min15').addEventListener('click', setAlarm);
document.getElementById('min30').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);
document.getElementById('sampleMinute').addEventListener('click', setTimer());



// Gère le remplacement des images de la page (lien avec content)

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
 