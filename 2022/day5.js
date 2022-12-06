const input = `
[N]             [R]             [C]
[T] [J]         [S] [J]         [N]
[B] [Z]     [H] [M] [Z]         [D]
[S] [P]     [G] [L] [H] [Z]     [T]
[Q] [D]     [F] [D] [V] [L] [S] [M]
[H] [F] [V] [J] [C] [W] [P] [W] [L]
[G] [S] [H] [Z] [Z] [T] [F] [V] [H]
[R] [H] [Z] [M] [T] [M] [T] [Q] [W]
 1   2   3   4   5   6   7   8   9 

move 3 from 9 to 7
move 4 from 4 to 5
move 2 from 4 to 6
move 4 from 7 to 5
move 3 from 7 to 3
move 2 from 5 to 9
move 5 from 6 to 3
move 5 from 9 to 1
move 3 from 8 to 4
move 3 from 4 to 6
move 8 from 1 to 8
move 1 from 8 to 6
move 2 from 8 to 2
move 5 from 8 to 4
move 1 from 8 to 1
move 6 from 6 to 4
move 1 from 7 to 9
move 5 from 1 to 7
move 1 from 1 to 2
move 2 from 9 to 8
move 6 from 4 to 9
move 1 from 6 to 8
move 3 from 2 to 7
move 4 from 2 to 8
move 4 from 9 to 3
move 6 from 5 to 4
move 7 from 8 to 1
move 10 from 4 to 1
move 12 from 1 to 5
move 1 from 4 to 9
move 1 from 2 to 3
move 2 from 9 to 1
move 1 from 9 to 3
move 1 from 6 to 7
move 1 from 9 to 1
move 3 from 1 to 3
move 9 from 5 to 9
move 2 from 2 to 7
move 2 from 7 to 4
move 3 from 9 to 4
move 7 from 5 to 7
move 5 from 1 to 3
move 2 from 4 to 5
move 1 from 4 to 6
move 1 from 6 to 9
move 4 from 9 to 2
move 12 from 7 to 9
move 2 from 4 to 9
move 6 from 5 to 9
move 3 from 7 to 6
move 12 from 9 to 6
move 5 from 9 to 1
move 1 from 7 to 6
move 14 from 6 to 1
move 20 from 3 to 5
move 5 from 9 to 5
move 3 from 2 to 8
move 1 from 6 to 4
move 1 from 9 to 2
move 1 from 4 to 6
move 1 from 2 to 6
move 16 from 1 to 5
move 1 from 2 to 1
move 12 from 5 to 6
move 1 from 8 to 4
move 29 from 5 to 1
move 5 from 6 to 9
move 20 from 1 to 3
move 4 from 1 to 3
move 11 from 3 to 8
move 1 from 4 to 3
move 4 from 9 to 8
move 7 from 1 to 8
move 2 from 3 to 2
move 2 from 6 to 7
move 1 from 9 to 8
move 10 from 3 to 5
move 1 from 6 to 1
move 1 from 7 to 2
move 3 from 1 to 2
move 6 from 2 to 4
move 2 from 6 to 3
move 4 from 6 to 5
move 1 from 6 to 2
move 1 from 2 to 9
move 6 from 5 to 2
move 1 from 9 to 3
move 24 from 8 to 7
move 1 from 4 to 8
move 5 from 5 to 4
move 1 from 4 to 8
move 1 from 8 to 7
move 2 from 8 to 9
move 1 from 9 to 7
move 6 from 2 to 4
move 10 from 3 to 7
move 3 from 5 to 3
move 1 from 9 to 8
move 3 from 3 to 8
move 4 from 8 to 7
move 1 from 4 to 6
move 1 from 6 to 4
move 13 from 4 to 3
move 17 from 7 to 6
move 1 from 6 to 3
move 2 from 4 to 8
move 3 from 7 to 5
move 14 from 6 to 7
move 1 from 5 to 9
move 1 from 5 to 9
move 2 from 6 to 7
move 1 from 5 to 1
move 1 from 1 to 6
move 1 from 9 to 3
move 29 from 7 to 4
move 10 from 4 to 3
move 6 from 7 to 5
move 1 from 6 to 5
move 1 from 9 to 7
move 1 from 7 to 2
move 4 from 3 to 2
move 1 from 2 to 9
move 1 from 8 to 5
move 11 from 3 to 4
move 24 from 4 to 7
move 2 from 2 to 5
move 10 from 3 to 2
move 6 from 2 to 1
move 5 from 4 to 7
move 1 from 9 to 2
move 3 from 5 to 1
move 1 from 4 to 6
move 4 from 2 to 3
move 5 from 5 to 7
move 2 from 5 to 3
move 32 from 7 to 5
move 16 from 5 to 1
move 1 from 1 to 2
move 3 from 2 to 9
move 1 from 8 to 6
move 3 from 7 to 6
move 1 from 2 to 4
move 5 from 6 to 8
move 5 from 8 to 6
move 2 from 9 to 3
move 1 from 7 to 5
move 9 from 5 to 4
move 1 from 9 to 1
move 2 from 3 to 1
move 4 from 3 to 6
move 1 from 3 to 8
move 6 from 4 to 6
move 6 from 5 to 9
move 1 from 9 to 6
move 1 from 5 to 1
move 1 from 5 to 4
move 1 from 3 to 6
move 1 from 8 to 3
move 1 from 4 to 2
move 1 from 2 to 3
move 17 from 6 to 4
move 4 from 1 to 8
move 3 from 9 to 6
move 1 from 8 to 4
move 1 from 9 to 7
move 2 from 6 to 2
move 1 from 7 to 8
move 12 from 1 to 9
move 8 from 9 to 2
move 1 from 6 to 9
move 6 from 2 to 8
move 2 from 8 to 3
move 18 from 4 to 9
move 2 from 1 to 6
move 1 from 6 to 5
move 3 from 4 to 3
move 7 from 3 to 8
move 4 from 2 to 7
move 1 from 4 to 6
move 2 from 6 to 4
move 13 from 9 to 6
move 1 from 5 to 2
move 5 from 9 to 3
move 9 from 1 to 2
move 1 from 1 to 8
move 1 from 2 to 6
move 3 from 7 to 6
move 2 from 2 to 6
move 9 from 8 to 6
move 1 from 7 to 8
move 1 from 8 to 7
move 2 from 4 to 6
move 5 from 3 to 6
move 17 from 6 to 9
move 7 from 8 to 4
move 4 from 2 to 3
move 17 from 6 to 2
move 1 from 6 to 4
move 1 from 7 to 8
move 1 from 8 to 9
move 24 from 9 to 6
move 4 from 3 to 1
move 1 from 1 to 5
move 20 from 6 to 4
move 4 from 6 to 9
move 1 from 5 to 7
move 2 from 4 to 2
move 1 from 9 to 7
move 25 from 4 to 3
move 1 from 4 to 2
move 2 from 1 to 6
move 3 from 9 to 4
move 2 from 4 to 7
move 2 from 7 to 5
move 1 from 4 to 2
move 1 from 6 to 3
move 1 from 1 to 5
move 5 from 3 to 9
move 1 from 5 to 6
move 10 from 2 to 8
move 9 from 2 to 5
move 21 from 3 to 6
move 1 from 7 to 6
move 2 from 6 to 5
move 5 from 9 to 7
move 6 from 7 to 8
move 19 from 6 to 9
move 1 from 6 to 1
move 8 from 8 to 1
move 1 from 6 to 1
move 2 from 8 to 5
move 5 from 9 to 2
move 6 from 8 to 2
move 2 from 9 to 7
move 9 from 9 to 4
move 7 from 2 to 4
move 1 from 6 to 4
move 14 from 5 to 9
move 1 from 1 to 8
move 1 from 7 to 9
move 4 from 2 to 9
move 16 from 4 to 6
move 3 from 2 to 8
move 1 from 6 to 2
move 2 from 8 to 9
move 1 from 8 to 7
move 1 from 8 to 3
move 3 from 2 to 7
move 1 from 3 to 9
move 8 from 9 to 3
move 4 from 7 to 8
move 1 from 5 to 4
move 4 from 6 to 3
move 1 from 4 to 2
move 9 from 3 to 8
move 10 from 9 to 5
move 8 from 6 to 7
move 13 from 8 to 4
move 8 from 5 to 2
move 3 from 6 to 3
move 7 from 9 to 6
move 7 from 7 to 2
move 2 from 4 to 6
move 5 from 6 to 2
move 3 from 1 to 5
move 5 from 5 to 8
move 4 from 6 to 2
move 4 from 1 to 8
move 15 from 2 to 6
move 11 from 4 to 9
move 12 from 6 to 8
move 1 from 6 to 9
move 5 from 3 to 7
move 2 from 2 to 6
move 6 from 7 to 1
move 3 from 1 to 3
move 1 from 4 to 1
move 1 from 3 to 9
move 1 from 3 to 9
move 1 from 7 to 6
move 1 from 3 to 2
move 4 from 2 to 6
move 4 from 2 to 7
move 1 from 2 to 6
move 4 from 1 to 6
move 12 from 6 to 7
move 2 from 6 to 1
move 8 from 9 to 6
move 1 from 7 to 4
move 14 from 8 to 1
move 8 from 1 to 5
move 1 from 3 to 9
move 5 from 9 to 5
move 1 from 8 to 9
move 1 from 9 to 2
move 1 from 9 to 3
move 5 from 8 to 3
move 12 from 5 to 4
move 1 from 9 to 2
move 6 from 7 to 3
move 7 from 3 to 2
move 1 from 5 to 1
move 1 from 8 to 3
move 2 from 1 to 3
move 2 from 6 to 9
move 5 from 6 to 5
move 5 from 1 to 7
move 4 from 4 to 1
move 7 from 2 to 8
move 4 from 3 to 8
move 1 from 9 to 3
move 1 from 9 to 5
move 4 from 1 to 8
move 10 from 7 to 9
move 1 from 6 to 7
move 2 from 8 to 6
move 6 from 4 to 2
move 5 from 3 to 1
move 2 from 6 to 3
move 2 from 7 to 1
move 5 from 2 to 5
move 2 from 7 to 1
move 7 from 5 to 7
move 2 from 5 to 6
move 2 from 5 to 3
move 3 from 2 to 9
move 9 from 9 to 3
move 1 from 6 to 4
move 3 from 3 to 1
move 9 from 8 to 2
move 6 from 3 to 6
move 8 from 7 to 9
move 4 from 9 to 8
move 14 from 1 to 5
move 1 from 9 to 2
move 1 from 1 to 5
move 2 from 3 to 6
move 12 from 5 to 3
move 2 from 2 to 8
move 7 from 6 to 2
move 12 from 2 to 8
move 2 from 6 to 2
move 6 from 9 to 6
move 1 from 1 to 2
move 1 from 9 to 3
move 2 from 5 to 9
move 1 from 9 to 2
move 1 from 9 to 4
move 1 from 3 to 2
move 2 from 6 to 7
move 2 from 6 to 9
move 5 from 4 to 2
move 14 from 3 to 9
move 15 from 9 to 4
move 1 from 7 to 4
move 10 from 8 to 6
move 1 from 5 to 9
move 2 from 9 to 5
move 10 from 8 to 1
move 1 from 7 to 4
move 5 from 1 to 2
move 2 from 1 to 5
move 3 from 4 to 6
move 4 from 5 to 8
move 5 from 8 to 6
move 14 from 2 to 9
move 2 from 6 to 7
move 3 from 2 to 9
move 3 from 1 to 7
move 1 from 7 to 3
move 3 from 7 to 1
move 1 from 3 to 6
move 1 from 7 to 6
move 1 from 8 to 9
move 2 from 1 to 4
move 1 from 1 to 2
move 16 from 9 to 4
move 7 from 4 to 8
move 5 from 8 to 1
move 2 from 8 to 3
move 2 from 1 to 7
move 13 from 6 to 7
move 2 from 2 to 3
move 4 from 7 to 4
move 6 from 4 to 5
move 4 from 7 to 6
move 3 from 1 to 2
move 2 from 2 to 6
move 3 from 3 to 8
move 5 from 5 to 3
move 2 from 9 to 6
move 3 from 3 to 7
move 1 from 8 to 1
move 22 from 4 to 8
move 1 from 4 to 3
move 9 from 6 to 3
move 1 from 2 to 1
move 4 from 3 to 4
move 2 from 4 to 5
move 1 from 1 to 7
move 4 from 3 to 7
move 2 from 6 to 1
move 1 from 6 to 7
move 18 from 8 to 7
move 2 from 6 to 5
move 2 from 3 to 4
move 1 from 5 to 4
move 30 from 7 to 6
move 2 from 1 to 3
move 18 from 6 to 8
move 12 from 6 to 4
move 13 from 4 to 9
move 2 from 3 to 8
move 1 from 6 to 2
move 3 from 7 to 2
move 1 from 1 to 2
move 2 from 5 to 9
move 8 from 8 to 1
move 1 from 7 to 8
move 7 from 1 to 3
move 2 from 4 to 9
move 1 from 1 to 6
move 4 from 2 to 1
move 16 from 8 to 1
move 1 from 2 to 6
move 2 from 4 to 8
move 2 from 5 to 1
move 4 from 3 to 7
move 3 from 7 to 1
move 1 from 6 to 8
move 1 from 8 to 9
move 1 from 7 to 3
move 6 from 3 to 5
move 1 from 3 to 8
move 1 from 6 to 9
move 16 from 9 to 5
move 4 from 5 to 3
move 15 from 5 to 1
move 1 from 5 to 8
move 3 from 9 to 8
move 9 from 8 to 5
move 6 from 5 to 1
move 4 from 5 to 6
move 2 from 6 to 4
move 1 from 6 to 4
move 1 from 8 to 4
move 3 from 3 to 6
move 3 from 6 to 8
move 1 from 6 to 8
move 21 from 1 to 9
move 4 from 8 to 5
move 3 from 5 to 7
move 2 from 5 to 1
move 2 from 4 to 8
move 2 from 8 to 2
move 2 from 7 to 8
move 1 from 7 to 9
move 1 from 8 to 7
move 5 from 1 to 8
move 1 from 7 to 8
move 4 from 8 to 4
move 2 from 4 to 5
move 1 from 2 to 7
move 1 from 2 to 7
move 2 from 7 to 6
move 2 from 6 to 9
move 1 from 4 to 9
move 1 from 3 to 4
move 16 from 1 to 5
move 16 from 5 to 7
move 2 from 5 to 4
move 14 from 9 to 6
move 5 from 4 to 3
move 3 from 3 to 6
move 5 from 1 to 4
move 2 from 4 to 7
move 7 from 9 to 4
move 2 from 9 to 7
move 10 from 6 to 9
move 8 from 4 to 6
move 1 from 8 to 4
move 1 from 1 to 9
move 14 from 6 to 3
move 10 from 3 to 2
move 3 from 7 to 8
move 6 from 3 to 1
move 2 from 7 to 9
move 5 from 7 to 9
move 10 from 9 to 1
move 2 from 4 to 3
move 1 from 2 to 1
move 16 from 1 to 4
move 1 from 6 to 1
move 2 from 3 to 9
move 3 from 8 to 5
move 8 from 7 to 1
move 3 from 5 to 9
move 7 from 4 to 6
move 7 from 1 to 5
move 2 from 8 to 3
move 1 from 7 to 8`

const template = `
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

/* ------------- */

const cratePlan = inputToArray(input)

// Separate the "plan" into the crate graph and a list of steps
const stepsStartingIndex = cratePlan.findIndex(line => line.startsWith('move'))
const crateGraph = cratePlan.slice(0, stepsStartingIndex);
const steps = cratePlan.slice(stepsStartingIndex);

// Calculate depth and crate number from the crateGraph
const stackDepth = crateGraph.length;
// pull the last row of the "graph" & find the last character
const numOfCrates = Number(crateGraph.pop().trim().at(-1)); 

console.log('Stack depth:', stackDepth)
console.log('Number of crates:', numOfCrates)

const levels = crateGraph.slice(0, stackDepth).map(crateString => {
    const level = []
    // account for bracket & spaces to find the appropriate char for each stack
    for(i=1; i < numOfCrates*4; i+=4) {
        level.push(crateString.charAt(i))
    }
    return level
});

// Setup our crate stacks
let stacks = []
stacks.length = numOfCrates 
stacks.fill([])
levels.reverse().forEach(level => {
    for(i = 0; i < numOfCrates; i++) {
        if (level[i] !== ' ') {
            stacks[i] = [...stacks[i], level[i]]
        }
    }
});

// Process moves
steps.forEach((step, i) => {
    const instructions = step.split(' ')
    const cratesToMove = instructions[1] * -1
    const moveFrom = Number(instructions[3]) - 1
    const moveTo = Number(instructions[5]) - 1

    stacks[moveTo] = [...stacks[moveTo], ...stacks[moveFrom].splice(cratesToMove)] // pt 1: .reverse()
})

const topString = stacks.reduce((total, current) => total + current.pop(), '')
console.log('Top of each stack:', topString)


/* ------------- */

/* helper functions: */

function inputToArray(str) {
    return str.split('\n').filter(e => e != ''); ;
}
