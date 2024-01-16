console.log ("Coucou ici le background")

let timeOutImageID;
let myNotificationID;
let timeOutTxtID;


// Cette fonction écoute si une ou des alarmes est terminée. Elle déclenche la notification de pause
chrome.alarms.onAlarm.addListener(() => {
    chrome.action.setBadgeText({ text: '' });
    //création de la notification
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'Images/paresseux1.png',
      title: "C'est l'heure de la pause !",
      message: "Va marcher, boire un thé/café, ou tout simplement te changer les idées.",
      buttons: [{ title: "Prendre ma pause" }],
      priority: 0
    },
    //on affecte à myNotificationID la valeur de l'identifiant de notification
      (notifId)=> {
        myNotificationID = notifId;
      }
      );
    console.log("On set le timer") 
    // Déclenche les deux timers une fois la notification créée
    timeOutImageID = setTimeout(callChangeImg,10000);
  });


// Cette fonction gère le bouton "Prendre ma pause" de la notification et reset toutes les tempos
chrome.notifications.onButtonClicked.addListener((notifId,btnIndex) => {
  // on vérifie l'index =0 car c'est le seul bouton créé dans la notif
  if (notifId===myNotificationID && btnIndex===0) {
    clearTimeout(timeOutImageID)
    clearTimeout(timeOutTxtID)
    chrome.notifications.clear(myNotificationID)
  }  
})   

//Fonction qui envoie l'action CHANGE IMAGE et est exécutée par la fin du timer
  async function callChangeImg(){
    console.log("le test OK")
    chrome.storage.sync.get(["animal"]).then(async (result) => {
      if(result.animal=="dog"){
        console.log("The animal is dog.")
        const [tab] = await chrome.tabs.query({ active: true });
        const response = await chrome.tabs.sendMessage(tab.id, { action: "CHANGE_IMAGE_DOG" }); 
        console.log(response)
      };
      if(result.animal=="cat"){
        console.log("The animal is cat.")
        const [tab] = await chrome.tabs.query({ active: true });
        const response = await chrome.tabs.sendMessage(tab.id, { action: "CHANGE_IMAGE_CAT" }); 
        console.log(response)
      }
      if (result.animal !=="cat" && result.animal !=="dog"){
        console.log("The animal is nothing")
        const [tab] = await chrome.tabs.query({ active: true });
        const response = await chrome.tabs.sendMessage(tab.id, { action: "CHANGE_IMAGE_DOG" }); 
        console.log(response) ;
      }
      timeOutTxtID = setTimeout(callChangeTxt,30000);
    });
  }

//Fonction qui envoie l'action CHANGE TEXT et est exécutée par la fin du timer
  async function callChangeTxt(){
    console.log("je passe ici aussi ")
    const [tab] = await chrome.tabs.query({ active: true });
    const response = await chrome.tabs.sendMessage(tab.id, { action: "CHANGE_TEXT" }); 
    console.log(response)
  }

//A tester : gère le reset des tempo par le clic du bouton cancel
chrome.runtime.onMessage.addListener(async (request, sender, response) => {
  console.log(request);
  console.log(request.action)
  if (request.action == "CLEAR_TIMEOUT") {
    clearTimeout(timeOutImageID)
    clearTimeout(timeOutTxtID)
    console.log("test notif")
    console.log(myNotificationID)
    if (myNotificationID!==undefined){
      chrome.notifications.clear(myNotificationID)
    }
    console.log("Timeout is cleared !")
  }
})
