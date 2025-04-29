// Game Duck - Adapted JavaScript for Pre-rendered Duck Buttons

document.addEventListener('DOMContentLoaded', () => {
    const duckButtons = document.querySelectorAll('.duck-btn');
    const scoreDisplay = document.getElementById('score');
    const startButton = document.getElementById('start-button');

    let score = 0;
    let activeDuckId = '';
    let gameInterval;
    let gameRunning = false;

    function activateRandomDuck() {
        // Deactivate all ducks first
        duckButtons.forEach(btn => btn.classList.remove('active'));

        const randomIndex = Math.floor(Math.random() * duckButtons.length);
        const selectedDuck = duckButtons[randomIndex];
        selectedDuck.classList.add('active');
        activeDuckId = selectedDuck.id;
    }

    function updateScore() {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }

    duckButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!gameRunning) return;

            if (button.id === activeDuckId) {
                updateScore();
                activateRandomDuck();
            }
        });
    });

    function startGame() {
        if (gameRunning) return;
        gameRunning = true;
        score = 0;
        scoreDisplay.textContent = 'Score: 0';
        activateRandomDuck();

        gameInterval = setInterval(() => {
            activateRandomDuck();
        }, 1200);
    }

    if (startButton) {
        startButton.addEventListener('click', startGame);
    }
});