const parseEnv = () => {
  const res = Object.keys(process.env)
    .filter((value) => value.startsWith("RSS_"))
    .map((value) => `${value}=${process.env[value]}`)
    .join(", ");

  console.log(res);
};

parseEnv();
