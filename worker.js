const { workerData, parentPort } = require("worker_threads");
const { generateArray, bubbleSort } = require("./utils");

// Worker logic
console.log(`Worker: Generating array of length ${workerData}`);
const arr = generateArray(workerData);
console.log(`Worker: Array generated. First element: ${arr[0]}`);

console.log("Worker: Starting bubble sort");
console.log(arr.length);
bubbleSort(arr);
console.log("Worker: Sorting complete");

// Send the result back to the main thread
parentPort.postMessage({ firstElement: arr[0] });
