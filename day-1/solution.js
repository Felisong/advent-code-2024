var fsp = require("fs/promises");
const inputUrl = "./puzzle-input.txt";

const parseInput = async () => {
  let result = [];
  try {
    result = (await fsp.readFile(inputUrl)).toString().split("\n");
  } catch (err) {
    console.error(`error: `, err);
  }
  return result;
};

const find2020Sum = (input) => {
  const numInputs = input.map((i) => parseInt(i));
  for (const num of numInputs) {
    for (const num2 of numInputs) {
      for (const num3 of numInputs) {
        const val = num + num2 + num3;
        if (val === 2020) {
          console.log(num * num2 * num3);
          return num * num2 * num3;
        } else {
          continue;
        }
      }
    }
  }
  return "NA";
};
parseInput().then((item) => find2020Sum(item));
