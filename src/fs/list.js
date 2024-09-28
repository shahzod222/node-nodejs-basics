import fs from "fs";
import path from "path";
const __dirname = import.meta.dirname;

const list = async () => {
  fs.access(path.join(__dirname, "files"), (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.readdir(path.join(__dirname, "files"), (err, files) => {
        if (!err) {
          files.map((file) => {
            console.log(`${file} \n`);
          });
        }
      });
    }
  });
};

await list();
