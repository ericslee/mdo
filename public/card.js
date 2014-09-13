var Card = (function () {
    // private static

    // constructor
    var cardConstruct = function (cardName, cardJSON) {
        // private
        var name = cardName;
        var monetaryValue = cardJSON.value;
        var typeOfCard; // can be 'money', 'rent', 'property', 'action'
        var propertyColor;
        // array of rent values
        var rentValues;

        // determine type of card
        

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

//test code

var card = {
    monetaryValue: 5,
    propertyColor: "purple",
    rentValues: [1, 2, 3, 4]
};
var DealBreaker = new Card("Deal Breaker", card);
console.log(DealBreaker.getRentValue(2));
console.log(DealBreaker.toString());