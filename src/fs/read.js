import fs from "fs";
import path from "path";
const __dirname = import.meta.dirname;

const read = async () => {
  fs.access(path.join(__dirname, "files", "fileToRead.txt"), (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.readFile(
        path.join(__dirname, "files", "fileToRead.txt"),
        (err, data) => {
          if (!err) {
            console.log(data.toString());
          }
        }
      );
    }
  });
};

await read();
