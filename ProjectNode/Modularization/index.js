const Tiger = require("./Tiger");
const Wolf = require("./Wolf");

const fighting = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }

  if (tiger.strength < wolf.strength) {
    wolf.howl();
    return;
  }

  console.log("Same strength no one died");
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);
