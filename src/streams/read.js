import fs from "fs";
import path from "path";
const __dirname = import.meta.dirname;

const read = async () => {
  const reader = fs.createReadStream(
    path.join(__dirname, "files", "fileToRead.txt")
  );

  reader.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  reader.on("end", () => {
    process.stdout.write("\n");
  });
};

await read();
