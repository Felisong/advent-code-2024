const fsp = require("fs/promises");
const inputUrl = "./inputs.txt";

const parseInputs = async () => {
    let result = [];
    try {
        result = (await fsp.readFile(inputUrl)).toString().split("\n");
    } catch (err){
        console.error(`error: ${err}`);
    }
    return result;
}
// this solves part 1 problem with a range
// parseInputs().then((inp) => {
//     let counter = 0;
//     for (const line of inp){
//         const [range, letter, pw] = line.split(" ");
//         const l = letter.split('')[0];
//         const [min, max] = range.split('-').map((num) => parseInt(num));
//         const letterCounter = pw.split(l).length -1;
//         if (letterCounter < min || letterCounter > max){
//             continue;
//         } else {
//             counter++
//         }
//     }
//     console.log(counter)
// })

// this is part 2
parseInputs().then((inp) => {
    let counter = 0;
    for (const line of inp){
        const [range, letter, pw] = line.split(" ");
        const l = letter.split('')[0];
        // did - 1 here to offset for the index
        const [position1, position2] = range.split('-').map((num) => parseInt(num) - 1);
       // check if line contains the letter at position 1 or 2 (index + 1 position).
       if ((pw[position1] === l || pw[position2] === l) && (pw[position1] !== pw[position2])){
        counter++
       }
    }
    console.log(counter)
})