




let number = document.querySelector('.guessnumber');
var msg = document.querySelector('.msg');

document.querySelector('.start').addEventListener('click', start)

var counter = document.querySelector('.start')

var h1 = document.querySelector('h1')


let count = 0



function start() {


	if (number.value.length > 0) {
		let tim = setInterval(begin, 100)
		function begin() {
			if (count == 25) {
				clearInterval(tim)
				count = 0;
				counter.style.margin = 'auto'

				if (h1.innerHTML == number.value) {
					msg.innerHTML = 'You won'
					msg.classList.add('text-success')

				} else {
					msg.innerHTML = 'You loss. your Guess was ' + number.value
					msg.classList.add('text-danger')

				}

				setTimeout(() => {
					msg.innerHTML = ''
					number.value = ''
					counter.style.display = 'block'
					h1.innerHTML = '00'
				}, 3000)

			} else {

				count++
				counter.style.display = 'none'
				h1.innerHTML = Math.floor(Math.random() * 100)
				
			}

		}


	} else {
		msg.innerHTML = 'Input your Guess'
		msg.classList.add('text-danger')

		setTimeout(() => {
			msg.innerHTML = ''
		}, 1000)
	}


}
