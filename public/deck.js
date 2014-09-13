var Deck = (function () {
    // private static

    // constructor
    var deckConstruct = function (deckJson, cardsJson, colorsJson) {
        // private
        var currentDeck = [];

        // load deck, parse through deck json, for each type of card, 
        // create x instances of the card object loading in info from cards.json of that name

        // for each card type
        for (var cardType in deckJson) {
            // create a new card of that type based on the name
            var newCard = new Card(cardType, cardsJson[cardType]);

            // add the appropriate number of each card to the deck

            //console.log(deckJson[cardType]);
        }
        // public (this instance only)
        this.get_deck = function () { return currentDeck; };

        // draw cards

        // shuffle

    };

    return deckConstruct;
})();

// load json necessary to set up the deck
var deckJson;
var cardsJson;
var colorsJson;

var theDeck;

// load the various jsons
function loadDeckJson() {
    return $.getJSON("JSON/deck.json", function(json) {
        deckJson = json;
    });
}
function loadCardJson() {
    return $.getJSON("JSON/cards.json", function(json) {
        cardsJson = json;
    });
}
function loadColorsJson() {
    return $.getJSON("JSON/colors.json", function(json) {
        colorsJson = json;
    });
}

$.when(loadDeckJson(), loadCardJson(), loadColorsJson()).done(function(a1, a2, a3){
    // the code here will be executed when all four ajax requests resolve.
    // a1, a2, and a3 are lists of length 3 containing the response text,
    // status, and jqXHR object for each of the four ajax calls respectively.
    console.log(deckJson);
    console.log(cardsJson);
    console.log(colorsJson);

    // time to make a deck
    theDeck = new Deck(deckJson, cardsJson, colorsJson);
});


// test to see if the deck has been successfully created and populated