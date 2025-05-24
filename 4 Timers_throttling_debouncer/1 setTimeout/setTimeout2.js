const showNotification = (message, duration) => {
  const notification = document.createElement("div");
  notification.innerText = message;
  notification.className = "notification";
  document.body.appendChild(notification);
};

// invoke showNotification directly in the console and show that they do not disappear
