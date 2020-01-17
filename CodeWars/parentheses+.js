// Valid Parentheses
// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens){
    let deep = 0;

    const parOpenClose = {
        '(': 1,
        ')': -1
    }

    for (const par of parens) {
        deep += parOpenClose[par];

        if (deep < 0) return false;
    }

    return (deep === 0);
}

console.log(validParentheses(')('));