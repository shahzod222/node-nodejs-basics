import fs from "fs";
import path from "path";
const __dirname = import.meta.dirname;

const create = async () => {
  const content = "I am fresh and young";
  const pathToFile = path.join(__dirname, "files", "fresh.txt");

  fs.access(pathToFile, (err) => {
    if (err) {
      fs.writeFile(pathToFile, content, (err) => {
        if (!err) {
          console.log("File was created successfully");
        }
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
