const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seed = 30;
    setTimeout(() => {
      seed >= 10 ? resolve("Got Coffee") : reject("Not Enough Seed");
    }, 1000);
  });
};

async function makeCoffe() {
  try {
    const coffee = await getCoffee();
    // getCoffee().then(coffee => {
    console.log(coffee);
    // })
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeCoffe();
