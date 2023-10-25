const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let flippedCards = [];
let matchedCards = [];
let lockBoard = false;

function createCard(card) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.dataset.card = card;
    div.textContent = card;
    div.addEventListener('click', flipCard);
    return div;
}

function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {

       








