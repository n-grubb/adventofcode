const input = ``
const template = ``

/* ------------- */

const example = inputToArray(input)
console.log("Example: ", example);

/* ------------- */

/* helper functions: */

function inputToArray(str) {
    return str.split('\n').filter(e => e != ''); ;
}
