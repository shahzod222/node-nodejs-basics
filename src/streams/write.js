import fs from "fs";
import path from "path";
const __dirname = import.meta.dirname;

const write = async () => {
  const stream = fs.createWriteStream(
    path.join(__dirname, "files", "fileToWrite.txt")
  );

  process.stdin.pipe(stream);

  process.stdin.resume();
};

await write();
