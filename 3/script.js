let countRes = 0;

const counter = (
    function() {
        return function(count = 0) {
            countRes += count;
            return countRes;
        }
    })();

console.log(counter());
console.log(counter());
console.log(counter(1));
console.log(counter());