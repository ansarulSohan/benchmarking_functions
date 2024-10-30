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
  console.log("Starting algo");
  const number = getRandomInteger();
  console.log(`Generating array of length ${number}`);
  const arr = generateArray(number);
  console.log(`Array generated. First Element ${arr[0]}`);
  bubbleSort(arr);
  res.send("sorting complete.");
});

app.listen(3000, () => {
  console.log("running at port 3000");
});
