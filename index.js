const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");
  
    messaging
    .requestPermission()
    .then(() => {
    message.innerHTML = "Notifications allowed";
    return messaging.getToken();
    })
    .then(token => {
    tokenString.innerHTML = "Token Is : " + token;
    })
    .catch(err => {
    errorMessage.innerHTML = errorMessage.innerHTML + "; " + err;
    console.log("No permission to send push", err);
    });
    
    messaging.onMessage(payload => {
    console.log("Message received. ", payload);
    const { title, ...options } = payload.notification;
    });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../firebase-messaging-sw.js')
          .then(function(registration) {
            console.log('Registration successful, scope is:', registration.scope);
          }).catch(function(err) {
            console.log('Service worker registration failed, error:', err);
          });
        }
