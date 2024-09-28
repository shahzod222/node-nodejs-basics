import fs from "fs";
import path from "path";
const __dirname = import.meta.dirname;

const remove = async () => {
  fs.access(path.join(__dirname, "files", "fileToRemove.txt"), (err) => {
    if (!err) {
      fs.unlink(path.join(__dirname, "files", "fileToRemove.txt"), (err) => {
        if (!err) {
          console.log("File was deleted successfully");
        }
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await remove();
