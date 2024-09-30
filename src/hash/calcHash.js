import { createHash } from "crypto";
import path from "path";
import fs from "fs";
const __dirname = import.meta.dirname;

const calculateHash = async () => {
  const reader = fs.createReadStream(
    path.join(__dirname, "files", "fileToCalculateHashFor.txt")
  );

  reader.on("data", (chunk) => {
    const hashed = createHash("sha256").update(chunk).digest("hex");
    console.log(hashed);
  });
};

await calculateHash();
