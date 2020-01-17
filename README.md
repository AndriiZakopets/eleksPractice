# eleksPractice

```
function validParentheses(parens){
    let deep = 0;

    const parOpenClose = {
        '(': 1,
        ')': -1
    }

    for (const par of parens) {
        deep += parOpenClose[par];

        if (deep < 0) return false;
		
        const str = 'asdasdasadasadsasdasdasadasadsasdasdasadasadsasdasdasadasadsasdasdasadasadsasdasdasadasadsasdasdasadasadsasdasdasadasadsasdasdasadasadsasdasdasadasadsasdasdasadasadsasdasdasadasads';
    }

    return (deep === 0);
}
```