import fs from "fs";
import zlib from "zlib";
import path from "path";
const __dirname = import.meta.dirname;

const compress = async () => {
  const zip = zlib.createGzip();
  const read = fs.createReadStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );
  const write = fs.createWriteStream(
    path.join(__dirname, "files", "archive.gz")
  );

  read.pipe(zip).pipe(write);

  write.on("finish", () => {
    console.log("Compressed successfully");
  });
};

await compress();
