const showNotification = (message, duration) => {
  const notification = document.createElement("div");
  notification.innerText = message;
  notification.className = "notification";
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), duration);
};

showNotification("first notification to disappear", 2000);

showNotification("second notification to disappear", 3000);

showNotification("third notification to disappear", 4000);
