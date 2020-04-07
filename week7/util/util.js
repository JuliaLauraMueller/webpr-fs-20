
// todo: implement the times function

// Erweitern von times
Number.prototype.times = function (callback) {
    return Array.from( {length: this}).map( (element, index) => callback(index));
}
