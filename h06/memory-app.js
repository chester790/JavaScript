for (var i = 1; i <= 18; i++){
    let card = document.createElement("img")
    card.className = "card";
    card.id = "card" + i ;
    document.getElementById("playingfield").appendChild(card);
}

document.getElementById("card1").src = "img/kaartset1.png";
document.getElementById("card2").src = "img/kaartset2.png";
document.getElementById("card3").src = "img/kaartset3.png";
document.getElementById("card4").src = "img/kaartset4.png";
document.getElementById("card5").src = "img/kaartset5.png";
document.getElementById("card6").src = "img/kaartset6.png";
document.getElementById("card7").src = "img/kaartset7.png";
document.getElementById("card8").src = "img/kaartset8.png";
document.getElementById("card9").src = "img/kaartset9.png";

let kaartsets = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
shuffle(kaartsets);
displayCard();
cardOpen();
startGame();
playAgain();

function displayCard() {
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
}

    function shuffle(kaartsets) {
    var currentIndex = kaartsets.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = kaartsets[currentIndex];
        kaartsets[currentIndex] = kaartsets[randomIndex];
        kaartsets[randomIndex] = temporaryValue;
    }

    return kaartsets;
}

const deck = document.querySelector(".deck");
function startGame() {
    var shuffledCards = shuffle(kaartsets)
    for (var i = 0; i < shuffledCards.length; i++) {
        [].forEach.call(shuffledCards, function (item) {
            deck.appendChild(item);
        });
    }
}

function cardOpen(){
    openedCards.push(this);
    var len = openedCards.length;
    if (len ===2) {
        moveCounter();
        if (openedCards[0].type === openedCards[1].type) {
            matched();
        } else {
            unmatched();
        }
    }
}

function matched() {
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    openedCards = [];
}

function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        enable();
        openedCards = [];
    },1100);
}

function disable(){
    kaartsets.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}

function moveCounter(){
    moves++;
    counter.innerHTML = moves;
}
 startGame(); {
    cards = shuffle(cards);
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    moves = 0;
    counter.innerHTML = moves;

    function playAgain(){
        modal.classList.remove("show");
        startGame();
    }

console.log("U heeft een transmation erin gedaan zodat de afbeelding langzaam erin komt") }