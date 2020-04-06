importScripts("https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js");

firebase.initializerApp({
    'messagingSenderId':''
})

const messaging = firebase.messaging();
