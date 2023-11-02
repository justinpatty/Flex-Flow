function startClock() {
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");

    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hourRotation = (360 / 12) * hours + (360 / 12) * (minutes / 60);
        const minuteRotation = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
        const secondRotation = (360 / 60) * seconds;

        hourHand.style.transform = `rotate(${hourRotation}deg)`;
        minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
        secondHand.style.transform = `rotate(${secondRotation}deg)`;
    }

    updateClock();
    setInterval(updateClock, 1000);
}

window.addEventListener("DOMContentLoaded", startClock);
