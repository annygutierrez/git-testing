const notifier = require("node-notifier");

const askOccupation = () => {
  notifier.notify({
  title: "My Alert",
  message: "This is a desktop notification!"
});
}

const showAlert = () => {
    console.log('Tell me your name!');
    console.log('And tell me your password');
    console.log('Testing git fetch');
    console.log('Tell me your age');
    askOccupation();
}

showAlert();