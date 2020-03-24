const id = x => x;
// nimmt x entgegen und y und gibt x zurück
const fst = x => y => x; // wählt das x aus
const snd = x => y => y; // wählt das y aus
const M = f => f (f); // Mockingbird ist die Self-Applikation

// nimmt x entgegen und y und gibt zurück den ersten Wert. eeta-Reduktion anwenden
const konst = fst;

// Booleans
const T = first => second => first;
const F = first => second => second;

// const and = first => second => first(second(T)(F))(second(F)(F));
const and = first => second => first ( second ) ( first );

// const or = first => second => first (second (T) (T)) (second (T) (F));
// const or = first => second => first ( first ) ( second ); // eta-Reduktion
// const or = first => M ( first ); // eta-Reduktion
const or =  M;

const Pair = first => second => selctor => selctor(first)(second);
const firstname = fst;
const lastname = snd;

// Test
const pair = a => b => f => f(a)(b);
const fst1 = p => p(T);
const snd1 = p => p(F);

const oneTwo = pair(1)(2);
// fst1(oneTwo) = 0;
document.writeln("Test Quiz 3: " + fst1(oneTwo) === 1);

// either
const Left = x => f => g => f(x); // Ruft den ersten Fall auf
const Right = x => f => g => g(x); // Ruft den zweiten Fall auf
const either = e => f => g => e(f)(g);

// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




