(function () {




	const finaleDate = new Date('Jun 21, 2022 02:00:00').getTime();

	const timer = () => {

		const easternTime = new Date().toLocaleString('en-US', {
			timeZone: 'America/New_York',
		});

		const easternTimeInMS = Date.parse(easternTime);

		console.log(easternTimeInMS); // -> 1620674863000

		const now = easternTimeInMS;

		console.log('now', now);
		console.log('final', finaleDate);
		console.log('finaleDate - now', finaleDate - now);

		console.log('');
		let diff = finaleDate - now;
		// Showing the alert when the counter time finishes.
		if (diff < 0) {
			document.querySelector('.alert').style.display = 'block';
			document.querySelector('.container').style.display = 'none';
		}

		let days = Math.floor(diff / (1000 * 60 * 60 * 24));
		let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((diff % (1000 * 60)) / 1000);
		// Adding the zeros.
		days <= 99 ? (days = `0${days}`) : days;
		// days <= 9 ? (days = `00${days}`) : days;
		hours <= 9 ? (hours = `0${hours}`) : hours;
		minutes <= 9 ? (minutes = `0${minutes}`) : minutes;
		seconds <= 9 ? (seconds = `0${seconds}`) : seconds;

		document.querySelector('#days').textContent = days;
		document.querySelector('#hours').textContent = hours;
		document.querySelector('#minutes').textContent = minutes;
		document.querySelector('#seconds').textContent = seconds;
	};
	timer();
	// Calling the function every 1000 milliseconds.
	setInterval(timer, 1000);


//===== text-blink

class TypeWritter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  // Type Method
  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt
      }<span class="blinking-cursor">|</span></span>`;

    // Initial type Speed
    let typeSpeed = 150;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on DOM  Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWritter
  new TypeWritter(txtElement, words, wait);
}


})();
