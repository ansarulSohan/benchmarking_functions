const express = require("express");
const { Worker } = require("worker_threads");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

// Function to run a worker thread
function runWorker(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { workerData });
    worker.on("message", resolve); // Resolve when the worker sends a message
    worker.on("error", reject); // Reject on error
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

app.get("/", async (req, res) => {
  console.log("Starting algo");
  const number = 20000;
  console.log(`Generating array of length ${number}`);

  try {
    const result = await runWorker(number); // Run sorting in a worker thread
    res.send(`Sorting complete. First element: ${result.firstElement}`);
  } catch (error) {
    console.error("Worker error:", error);
    res.status(500).send("An error occurred while sorting.");
  }
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
