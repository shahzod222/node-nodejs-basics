import fs from "fs";
import path from "path";
const __dirname = import.meta.dirname;

const copy = async () => {
  fs.access(path.join(__dirname, "files"), (err) => {
    if (!err) {
      fs.access(path.join(__dirname, "files_copy"), (err) => {
        if (err) {
          fs.cp(
            path.join(__dirname, "files"),
            path.join(__dirname, "files_copy"),
            { recursive: true },
            (err) => {
              if (err) {
                console.log(err);
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

await copy();
