var Card = (function () {

    // constructor
    var cardConstruct = function (cardName, cardJson, colorsJson) {
        // private
        var name = cardName; // name used for reference
        var monetaryValue = cardJson.value;
        var typeOfCard; // can be 'money', 'rent', 'property', 'action'
        var propertyColor1;
        var propertyColor2;
        var displayName; // actual name text for display on card
        // array of rent values
        var rentValues1;
        var rentValues2;

        // determine type of card
        if (cardJson.components === undefined) 
            typeOfCard = 'money';
        else if (cardJson.components.rent !== undefined)
            typeOfCard = 'rent';
        else if (cardJson.components.property !== undefined)
            typeOfCard = 'property';
        else if (cardJson.components.action !== undefined) 
            typeOfCard = 'action';

        // assign properties based on type of card

        // assign colors
        if (typeOfCard === 'rent') {
            propertyColor1 = cardJson.components.rent[0] !== undefined ? cardJson.components.rent[0].color : null;
            propertyColor2 = cardJson.components.rent[1] !== undefined ? cardJson.components.rent[1].color : null;
        } else if (typeOfCard === 'property') {
            if (cardJson.components.property.name === undefined) {
                propertyColor1 = cardJson.components.property[0] !== undefined ? cardJson.components.property[0].color : null;
                propertyColor2 = cardJson.components.property[1] !== undefined ? cardJson.components.property[1].color : null;
            } else {
                propertyColor1 = cardJson.components.property.color !== undefined ? cardJson.components.property.color : null;
            }
            
        }

        // assign display name
        if (typeOfCard === 'property') {
            displayName = cardJson.components.property.name !== undefined ? cardJson.components.property.name : null;
        } else if (typeOfCard === 'action') {
            displayName = cardJson.components.action.name !== undefined ? cardJson.components.action.name : null;
        }

        // get rent values
        if (propertyColor1) {
            rentValues1 = colorsJson[propertyColor1] !== undefined ? colorsJson[propertyColor1].rents : null;
        }
        if (propertyColor2) {
            rentValues2 = colorsJson[propertyColor2] !== undefined ? colorsJson[propertyColor2].rents : null;
        }

        // public (this instance only), getters
        this.getName = function () { return name; };
        this.getMonetaryValue = function () { return monetaryValue; };
        this.getCardType = function () { return typeOfCard; };
        this.getPropertyColor1 = function () { return propertyColor1; };
        this.getPropertyColor2 = function () { return propertyColor2; };
        this.getDisplayName = function () { return displayName; };
        this.getRentValue1 = function (numberOfProperties) { 
            if (rentValues1 !== undefined && numberOfProperties >= 0 && numberOfProperties < rentValues1.length) {
                return rentValues1[numberOfProperties];
            }
        };
        this.getRentValue2 = function (numberOfProperties) { 
            if (rentValues2 !== undefined && numberOfProperties >= 0 && numberOfProperties < rentValues2.length) {
                return rentValues2[numberOfProperties];
            }
        };
        this.getRentValues1 = function() { return rentValues1; };
        this.getRentValues2 = function() { return rentValues2; };
    };

    cardConstruct.prototype.toString = function () {
        var stringForm;
        switch (this.getCardType()) {
            case 'money':
                return '[' + this.getName() + ', ' + this.getMonetaryValue() + 'M]';
                break;
            case 'rent':
                stringForm = '[' + this.getName() +', (' + this.getPropertyColor1() + '): <' 
                + this.getRentValues1() + '>';
                if (this.getPropertyColor2 !== undefined) {
                    stringForm += ', (' + this.getPropertyColor2() + '): <' + this.getRentValues2() + '>'; 
                }
                stringForm += ': ' + this.getMonetaryValue() + 'M]';
                return stringForm;
                break;
            case 'property':
                stringForm = '[' + this.getName() + ', (' + this.getDisplayName() + '), (' + this.getPropertyColor1() + '): <' 
                + this.getRentValues1() + '>';
                if (this.getPropertyColor2 !== undefined) {
                    stringForm += ', (' + this.getPropertyColor2() + '): <' + this.getRentValues2() + '>'; 
                }
                stringForm += ': ' + this.getMonetaryValue() + 'M]';
                return stringForm;
                break;
            case 'action':
                return '[' + this.getName() + ', (' + this.getDisplayName() + '): ' + this.getMonetaryValue() + 'M]';
                break;
            default:
                return 'Not a valid card!!';
        }
    };

    return cardConstruct;
})();