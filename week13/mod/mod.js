/**
 * @module The mod module as an example for ES6 modules
 */

// put import and exports at the top

export { pi, a, b, setA, setB } // explizit in einer Liste für den import in anderes JS!

const pi = Math.PI;

// use module as a singleton

// make a single state that is only exposed as values, not references to objects

let a = null; // these variables are exported as read-only, Singleton, gibt es nur einmal (statisch & unveränderlich)
let b = null;

const setA = v => a = v; // Zugriff auf lokalen Variabeln, geht da es Funktion
const setB = v => b = v;

// x = 2 // introduction of new globals is not allowed in modules
// bundlers accept it, though, and produce code without the restriction.
