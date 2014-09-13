var Card = (function () {
    // private static

    // constructor
    var cardConstruct = function (cardJSON) {
        // private
        var name = cardJSON.name;
        var monetaryValue = cardJSON.monetaryValue;
        var propertyColor;
        // array of rent values
        var rentValues;

        // if property card, will have following properties
        propertyColor = cardJSON.propertyColor !== undefined ? cardJSON.propertyColor : null;
        rentValues = cardJSON.rentValues !== undefined ? cardJSON.rentValues : null;

        // public (this instance only), getters
        this.getName = function () { return name; };
        this.getMonetaryValue = function () { return monetaryValue; };
        this.getPropertyColor = function () { return propertyColor; };
        this.getRentValue = function (numberOfProperties) { 
            if (numberOfProperties >= 0 && numberOfProperties < rentValues.length) {
                return rentValues[numberOfProperties];
            }
        };
        this.getRentValues = function() { return rentValues; };
    };

    cardConstruct.prototype.toString = function () {
        return "[" + this.getName() + " (" + this.getPropertyColor() + "): " + this.getMonetaryValue() + "M, <" + this.getRentValues() + ">]";
    };

    return cardConstruct;
})();

// test code

// var card = {
//     name: "Deal Breaker",
//     monetaryValue: 5,
//     propertyColor: "purple",
//     rentValues: [1, 2, 3, 4]
// };
// var DealBreaker = new Card(card);
// console.log(DealBreaker.getRentValue(2));
// DealBreaker.toString();