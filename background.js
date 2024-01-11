chrome.alarms.onAlarm.addListener(() => {
    chrome.action.setBadgeText({ text: '' });
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'Images/coffeeCup.png',
      title: "C'est l'heure de la pause",
      message: "Everyday I'm Guzzlin'!",
      buttons: [{ title: "Prendre ma pause" }],
      priority: 0
    });
  });
  
  chrome.notifications.onButtonClicked.addListener(async () => {
    const item = await chrome.storage.sync.get(['minutes']);
    chrome.action.setBadgeText({ text: 'ON' });
    chrome.alarms.create({ delayInMinutes: item.minutes });
  });