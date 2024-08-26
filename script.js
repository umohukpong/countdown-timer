function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('ampm').textContent = ampm;

    // Update greeting based on time of day
    const greetingText = hours < 12 && ampm === 'AM' ? "Good Morning," : hours < 6 && ampm === 'PM' ? "Good Afternoon," : "Good Evening,";
    document.getElementById('greeting').textContent = `${greetingText}\nWeb & Blockchain Developer\nAngel Ukpong`;
}

document.addEventListener("DOMContentLoaded", function() {
    const setTimerBtn = document.getElementById('setTimerBtn');
    const dateModal = document.getElementById('dateModal');
    const closeBtn = document.querySelector('.close');
    const startCountdownBtn = document.getElementById('startCountdownBtn');
    const countdown = document.getElementById('countdown2');
    
    let countdownInterval;

    setTimerBtn.addEventListener('click', function() {
        dateModal.style.display = "block";
    });

    closeBtn.addEventListener('click', function() {
        dateModal.style.display = "none";
    });

    startCountdownBtn.addEventListener('click', function() {
        const dateInput = document.getElementById('dateInput').value;
        const timeInput = document.getElementById('timeInput').value;
        const targetDate = new Date(`${dateInput}T${timeInput}`);

        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        countdown.style.display = "flex";
        updateCountdown(targetDate);
        countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
        dateModal.style.display = "none";
    });

    function updateCountdown(targetDate) {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('greeting2').textContent = "Time's up!";
            countdown.style.display = "none";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days2').textContent = String(days).padStart(2, '0');
        document.getElementById('hours2').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes2').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds2').textContent = String(seconds).padStart(2, '0');
    }

    window.onclick = function(event) {
        if (event.target == dateModal) {
            dateModal.style.display = "none";
        }
    }
});


 // Set the initial countdown time
 const countdownDate = new Date("July 31, 2025 23:59:59").getTime();

// Initial call to set the time right away
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
