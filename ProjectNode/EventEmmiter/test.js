const { EventEmitter } = require("events");

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

const eventEmit = new EventEmitter();

eventEmit.on("birthday", birthdayEventListener);

eventEmit.emit("birthday", "Steven");
