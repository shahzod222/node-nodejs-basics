import fs from "fs";
import path from "path";
const __dirname = import.meta.dirname;

const rename = async () => {
  fs.access(path.join(__dirname, "files", "wrongFilename.txt"), (err) => {
    if (!err) {
      fs.access(path.join(__dirname, "files", "properFilename.md"), (err) => {
        if (err) {
          fs.rename(
            path.join(__dirname, "files", "wrongFilename.txt"),
            path.join(__dirname, "files", "properFilename.md"),
            (err) => {
              if (!err) {
                console.log("File renamed successfully");
              }
            }
          );
        } else {
          throw new Error("FS operation failed");
        }
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await rename();
