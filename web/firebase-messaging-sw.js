importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
   const firebaseConfig = {
    apiKey: "AIzaSyC8Ip90eLH9RgmyMVAiwCzHQSeNUg6qZ3E",
    authDomain: "eita-schneider.firebaseapp.com",
    projectId: "eita-schneider",
    storageBucket: "eita-schneider.appspot.com",
    messagingSenderId: "341735913031",
    appId: "1:341735913031:web:9edab9c1ad45a64bd96362",
    measurementId: "G-ET2JD975TG"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });