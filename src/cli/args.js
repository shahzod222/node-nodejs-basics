const parseArgs = () => {
  const args = process.argv.slice(2);

  const res = args
    .filter((_, i) => i % 2 === 0)
    .map((value, i) => `${value.slice(2)} is ${args[i * 2 + 1]}`)
    .join(", ");

  console.log(res);
};

parseArgs();
