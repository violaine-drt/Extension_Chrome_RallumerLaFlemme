console.log ("Coucou ici le background")

let timeOutID;
let myNotificationID;


// Cette fonction écoute si une ou des alarmes est terminée. Elle déclenche la notification de pause
chrome.alarms.onAlarm.addListener(() => {
    
    chrome.action.setBadgeText({ text: '' });
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'Images/coffeeCup.png',
      title: "C'est l'heure de la pause",
      message: "Everyday I'm Guzzlin'!",
      buttons: [{ title: "Prendre ma pause" }],
      priority: 0
    },
      (notifId)=> {
        myNotificationID = notifId;
      }
      );
    console.log("on set le timer") 
    console.log(timeOutID) 
    timeOutID = setTimeout(fonctionTest,10000);
    //setTimer()
  });

// Cette fonction prolonge le comportement de l'extension quand le bouton est cliqué
  // chrome.notifications.onButtonClicked.addListener(async () => {
  //   const item = await chrome.storage.sync.get(['minutes']);
  //   chrome.action.setBadgeText({ text: 'ON' });
  //   chrome.alarms.create({ delayInMinutes: item.minutes });
  //   console.log("Fonction de prolongation marche")
  // });

// Cette fonction permet l'arrêt du second timer
chrome.notifications.onButtonClicked.addListener((notifId,btnIndex) => {
  // on vérifie l'index =0 car c'est le seul bouton créé dans la notif
  if (notifId===myNotificationID && btnIndex===0) {
    clearTimeout(timeOutID)
    chrome.notifications.clear(myNotificationID)
  }  
})   



  async function fonctionTest(){
    console.log("le test OK")
    const [tab] = await chrome.tabs.query({ active: true });
    const response = await chrome.tabs.sendMessage(tab.id, { action: "CHANGE_IMAGE_DOG" }); 
    console.log(response)
  }