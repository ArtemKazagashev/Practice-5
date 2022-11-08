let a = [];

let m = -10;

let n = -3;

let count = 42;

for ( let i = m; i < count; ++i ) {
    a.push( Math.round(Math.random() * n) );
}

console.log(a);
