import crypto from "crypto";
import path from "path";
import fs from "fs";
const __dirname = import.meta.dirname;

const calculateHash = async () => {
  const reader = fs.createReadStream(
    path.join(__dirname, "files", "fileToCalculateHashFor.txt")
  );

  const hash = crypto.createHash("sha256");

  reader.pipe(hash).on("finish", () => {
    const result = hash.digest("hex");
    console.log(result);
  });
};

await calculateHash();
