const clickButton = document.getElementById('clickButton');
const timeSpan = document.getElementById('time');
const clicksSpan = document.getElementById('clicks');

let timeRemaining = 10;
let clicks = 0;
let timer;

function startGame() {
    clickButton.disabled = false;
    clicks = 0;
    timeRemaining = 10;
    clicksSpan.textContent = clicks;
    timeSpan.textContent = timeRemaining;

    timer = setInterval(() => {
        timeRemaining--;
        timeSpan.textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            clickButton.disabled = true;
            alert('Time is up! You clicked ' + clicks + ' times.');
        }
    }, 1000);
}

clickButton.addEventListener('click', () => {
    if (!timer) {
        startGame();
    }
    clicks++;
    clicksSpan.textContent = clicks;
});
Save your HTML file and open it in your web browser. The game should now work. When you click th