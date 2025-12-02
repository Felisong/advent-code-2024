const fsp = require("fs/promises");
const url = "./sample.txt";

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
  // we have the full height and width
  let treeCounter = 0;
  let mapValues = {
    w: arr[0].length - 1,
    h: arr.length - 1,
  };
  let currentCoordinates = {
    x: 0,
    y: 0,
  };
  const shift = () => {
    currentCoordinates.x += 3;
    currentCoordinates.y += 1;
  };
  while (currentCoordinates.y <= mapValues.h) {
    const currentPos = arr[currentCoordinates.y][currentCoordinates.x];
    console.log(`x: `, currentCoordinates.x, 'y: ', currentCoordinates.y)
    if (currentPos === "#") {
      treeCounter++;
    }
    if (currentCoordinates.x > 27 && currentCoordinates.x < 31) {
      currentCoordinates = {
        x: (currentCoordinates.x + 3) - 31,
        y: currentCoordinates.y + 1,
      };
    } else {
      shift();
    }
  }
  console.log(`tree counter: `, treeCounter);
});
