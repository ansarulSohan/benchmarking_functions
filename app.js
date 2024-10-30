const express = require("express");
const {
  binarySearch,
  generateArray,
  getRandomInteger,
  bubbleSort,
} = require("./utils");

const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  const number = getRandomInteger();
  const arr = generateArray(number);
  bubbleSort(arr);
});

app.listen(3000, () => {
  console.log("running at port 3000");
});
