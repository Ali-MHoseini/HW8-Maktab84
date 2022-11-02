let user = {};
const nameSetter = setterGenerator("name");
nameSetter("Jhon");
console.log(user);

function setterGenerator(property) {
    return function(value) {
        function creator() {
            this[property] = value;
        }
        return creator.call(user);
    }
}