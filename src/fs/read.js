import fs from "fs";
import path from "path";
const __dirname = import.meta.dirname;

const read = async () => {
  fs.access(path.join(__dirname, "files", "fileToRead.txt"), (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      const reader = fs.createReadStream(
        path.join(__dirname, "files", "fileToRead.txt")
      );

      reader.on("data", (chunk) => console.log(chunk.toString()));
    }
  });
};

await read();
