document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{ name: 'blow-nose', src: 'images/blow-nose.jpg' },
		{ name: 'blow-nose', src: 'images/blow-nose.jpg' },
		{ name: 'clown', src: 'images/clown.jpg' },
		{ name: 'clown', src: 'images/clown.jpg' },
		{ name: 'coding', src: 'images/coding.jpg' },
		{ name: 'coding', src: 'images/coding.jpg' },
		{ name: 'pizza', src: 'images/pizza.jpg' },
		{ name: 'pizza', src: 'images/pizza.jpg' },
		{ name: 'weather', src: 'images/weather.jpg' },
		{ name: 'weather', src: 'images/weather.jpg' },
		{ name: 'money', src: 'images/money.jpg' },
		{ name: 'money', src: 'images/money.jpg' }
	];

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	let cardsChosen = [];
	let cardsChosenId = [];
	const cardsWon = [];

	cardArray.sort(() => 0.5 - Math.random());

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			let card = document.createElement('img');
			console.log(card);
			card.setAttribute('src', 'images/unflipped.png');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	// check for matches
	// only executed, if we have two cards in our "cardsChosen" array
	function checkForMatch() {
		let cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];

		if (cardsChosen[0] === cardsChosen[1]) {
			alert('You found a match!');
			cards[optionOneId].setAttribute('src', 'images/blank.png');
			cards[optionTwoId].setAttribute('src', 'images/blank.png');
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/unflipped.png');
			cards[optionTwoId].setAttribute('src', 'images/unflipped.png');
			alert('Sorry, no match. Try again!');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length == cardArray.length / 2) {
			resultDisplay.textContent = 'Congratulations! You found them all!';
		}
	}

	// flip the card
	function flipCard(_e) {
		let cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].src);
		if (cardsChosen.length == 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
