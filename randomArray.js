const randomArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

const arr = randomArray(1000, 1000);
const smallArr = randomArray(10, 100);
const sortedArr = randomArray(2000, 1000).sort((a, b) => a - b);
