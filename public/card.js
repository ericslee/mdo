var Card = (function () {
    // private static

    // constructor
    var cardConstruct = function (cardJSON) {
        // private
        var cardName = cardJSON.cardName;
        var monetaryValue = cardJSON.monetaryValue;
        var propertyColor;
        // array of rent values
        var rentValue;

        // if property
        if (cardJSON.propertyColor) {
            propertyColor = cardJSON.propertyColor;
        }
        if (cardJSON.rentValue) {
            rentValue = cardJSON.rentValue;
        }

        // public (this instance only), getters
        this.get_card_name = function () { 
            console.log(cardName);
            return cardName; };
        this.get_monetary_value = function () { return monetaryValue; };
        this.get_property_color = function () { return propertyColor; };
        this.get_rent_value = function (numberOfProperties) { 
            if (numberOfProperties >= 0 && numberOfProperties < rentValue.length) {
                return rentValue[numberOfProperties];
            }
        };
    };

    return cardConstruct;
})();

var card = {
    cardName: "Deal Breaker",
    monetaryValue: 5,
    propertyColor: "blue",
    rentValue: [1, 2, 3, 4]
};
var DealBreaker = new Card(card);
console.log(DealBreaker.get_card_name());
