let nav = 0;
let clicked = null;
let locale = 'en-uk'

const calendar = document.getElementById('calendar');
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const meals = [
	["Tuna Salad", "🐟🥗"],
	["Grilled chicken", "🐔"]
]

function random(arr) {
	// get random index value
	const randomIndex = Math.floor(Math.random() * arr.length);
	// get random item
	const item = arr[randomIndex];

	return item;
}


function load() {
	const dt = new Date();

	if (nav !== 0){
		dt.setMonth(new Date().getMonth() + nav);
	}

	const day = dt.getDate();
	const month = dt.getMonth();
	const year = dt.getFullYear();
	
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const firstDay = new Date(year, month, 1);

	const dateString = firstDay.toLocaleDateString(locale, {
		weekday: 'long',
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});
	const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
	
	document.getElementById('monthDisplay').innerText = `${months[month]} ${year}`;
	
	// Wipe calendar on month change
	calendar.innerHTML = '';


	for(let i = 1; i <= paddingDays + daysInMonth; i++){
		const daySquare = document.createElement('div');
		daySquare.classList.add('day');

		if (i > paddingDays){
			daySquare.innerText = i - paddingDays;

			daySquare.addEventListener(('click'), () => console.log('click'));
		} else {
			daySquare.classList.add('padding');
		}
		if (i == day + paddingDays){
			daySquare.id = 'currentDay';
		}

		calendar.appendChild(daySquare);
	}
}


function initButtons(){
	document.getElementById('nextButton').addEventListener('click', () => {
		nav++;
		load();
	});
	document.getElementById('backButton').addEventListener('click', () => {
		nav--;
		load();
	});
}

console.log(random(meals));

initButtons();
load();