const fsp = require("fs/promises");
const url = "./sample.txt";
const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
let allValues = [];

const parseInput = async () => {
  let result = [];
  try {
    result = (await fsp.readFile(url)).toString().split("\n");
  } catch (err) {
    console.error(`error: `, err);
  }
  return result;
};

parseInput().then((arr) => {
  const mapValues = {
    w: arr[0].length - 1,
    h: arr.length - 1,
  };
  // finds the slope
  const slopeFinder = (x, y) => {
    // p for positon
    let p = {
      x: 0,
      y: 0,
    };
    let treeCounter = 0;

    while (p.y <= mapValues.h) {
      const currentP = arr[p.y][p.x];
      if (currentP === "#") {
        treeCounter++;
      }
      p.x = (p.x + x) % (mapValues.w + 1);
      p.y += y;
    }
    console.log(`slope: `, x, y, `trees found: `, treeCounter);
    return treeCounter;
  };
  for (const s of slopes) {
    allValues.push(slopeFinder(s[0], s[1]));
  }
  console.log(
    `total: `,
    allValues.reduce((a, b) => a * b, 1)
  );
});
