import path from "path";
import os from "os";
import { Worker } from "node:worker_threads";
const __dirname = import.meta.dirname;

const performCalculations = async () => {
  const target = path.join(__dirname, "worker.js");
  const cpus = os.cpus().length;
  const workerPromises = [];
  const workerThreads = [];

  for (let i = 0; i < cpus; i++) {
    const promise = new Promise((res, rej) => {
      const worker = new Worker(target);
      workerThreads.push(worker);

      worker.postMessage(10 + i);

      worker.on("message", (result) =>
        res({ status: "resolved", data: result })
      );

      worker.on("error", () => rej({ status: "error", data: null }));

      worker.on("exit", (code) => {
        if (code !== 0) rej({ status: "error", data: null });
      });
    });

    workerPromises.push(promise);
  }

  const resWorkers = await Promise.allSettled(workerPromises);

  const result = resWorkers.map((res) => res.value);

  console.log(result);

  workerThreads.forEach((worker) => worker.terminate());
};

await performCalculations();
