console.log ("Coucou ici le background")


// Cette fonction écoute si une ou des alarmes est terminée. Elle déclenche la notification de pause
chrome.alarms.onAlarm.addListener(() => {
    
    chrome.action.setBadgeText({ text: '' });
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'Images/coffeeCup.png',
      title: "C'est l'heure de la pause",
      message: "Everyday I'm Guzzlin'!",
      buttons: [{ title: "Prendre ma pause" },{ title: ""}],
      priority: 0
    });
  });

// Cette fonction prolonge le comportement de l'extension quand le bouton est cliqué
  chrome.notifications.onButtonClicked.addListener(async () => {
    const item = await chrome.storage.sync.get(['minutes']);
    chrome.action.setBadgeText({ text: 'ON' });
    chrome.alarms.create({ delayInMinutes: item.minutes });
    console.log("Fonction de prolongation marche")
  });