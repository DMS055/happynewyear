const targetDate = "2023-01-01T00:00:00";
// YYYY-MM-DDTHH:MM:SSZ

const daysE = document.querySelector(".day");
const hoursE = document.querySelector(".hour");
const minutesE = document.querySelector(".minute");
const secondsE = document.querySelector(".second");

const countdown = () => {
	// Redirection
	const textE = document.querySelector("#text");
	const containerE = document.querySelector(".container");
	const timerE = document.querySelector(".timer");

	const d1 = new Date(targetDate);
	const d2 = new Date();

	if (d1 < d2) {
		containerE.classList.add("hidden");
		timerE.classList.add("hidden");
		textE.classList.remove("hidden");

		window.location.replace("/pages/main.html");
    }
    
	const newDate = new Date();
	const newYear = new Date(targetDate);
	const totalSeconds = (newYear - newDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	daysE.textContent = formatTime(days);
	hoursE.textContent = formatTime(hours);
	minutesE.textContent = formatTime(minutes);
	secondsE.textContent = formatTime(seconds);
}

const formatTime = (time) => {
    return time >= 10 ? time : `0${time}`;
}
    
countdown();
setInterval(countdown, 1000);
