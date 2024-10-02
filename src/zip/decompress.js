import fs from "fs";
import zlib from "zlib";
import path from "path";
const __dirname = import.meta.dirname;

const decompress = async () => {
  const unzip = zlib.createUnzip();

  const read = fs.createReadStream(path.join(__dirname, "files", "archive.gz"));
  const write = fs.createWriteStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );

  read.pipe(unzip).pipe(write);

  write.on("finish", () => {
    console.log("Decompressed successfully");
  });
};

await decompress();
