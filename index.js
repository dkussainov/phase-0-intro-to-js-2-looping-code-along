
const cardNames = ["Guadalupe", "Ollie", "Aki"];
const cardEvent = 'surprise'
let thankYouCards = [];
function writeCards(cardNames, cardEvent) {
    
    for (i = 0; i < cardNames.length; i++) {
        thankYouCards.push(`Thank you, ${cardNames[i]}, for the wonderful ${cardEvent} gift!`)
    }
    return thankYouCards;
}

console.log(writeCards(cardNames, cardEvent));


