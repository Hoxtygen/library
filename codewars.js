/* function predictAge(...args) {
let result =  args.map((val) => {return Math.pow(val, 2)})
.reduce((x, y) => {
        return x + y;
    });
    let newResult = Math.floor(Math.sqrt(result) / 2);
    return newResult;
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)); */

function count (string) {  
    // The function code should be here
    let str = string.split('').reduce((val, index) => {
        ...val, index : (val[index] || 0) + 1
    });
    return str;
     //return {};
  }
  console.log(count("mongoose"));