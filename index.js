const scrambles = [
    "R U R' U'",               // 1
    "L' U' L U y'",            // 2
    "R U' R'",                 // 3
    "L' U L y'",               // 4
    "R U R' U2 R U' R' U",     // 5
    "L' U' L U2 L' U L U' y'", // 6
    "R U R' U2 R U2 R' U",     // 7
    "L' U' L U2 L' U2 L U' y'", // 8
    "R U' R' U R U' R' U", // 9
    "F' U F U' R U R' U", // 10
    "R U R' U' R U2 R' U'", // 11
    "L' U' L U L' U2 L U y'", // 12
    "R U R' U' R U' R' U2", // 13
    "L' U' L U L' U L U2 y'", // 14
    "R U' R' F R' F' R U", // 15
    "F' U F U R U' R' U'", // 16
    "R U R' U' R U R'", // 17
    "L' U' L U L' U' L y'", // 18
    "R U' R' U R U' R'", // 19
    "L' U L U' L' U L y'", // 20
    "R U' R' U R U' R' U R U' R'", // 21
    "L' U' L U y' R U R'", // 22
    "R U R' U2 R U R' U", // 23
    "F' U F U' R U' R' U", // 24
    "F' U F U' R U' R' U", // 25
    "R U' R' U2 R U' R' U'", // 26
    "R U' R' U F' U' F U'", // 27
    "R' U' R2 U' R2 U2 R", // 28
    "F' U F U' R U2 R' U", // 29
    "R U' R' U' R U R' U", // 30
    "R U R' U' R U R' U2 R U' R'", // 31
    "F' U F U2 R U R'", // 32
    "R U' R' U R U2 R'", // 33
    "L' U L U' L' U2 L y'", // 34
    "R U R' U' R U R' U R U R' U'", // 35
    "R U R' F R U R' U' F'", // 36
    "L' U' L U2 L' U2 L y' U' R U R'", // 37
    "R U R' U2 R U' R' U R U R'", // 38
    "F' U F U' R U R' U R U R'", // 39
    "R U R' U' R U2 R' U' R' U R'", // 40
    "L' U' L U L' U L U2 y' R U R'", // 41
];

function cycleColor(button) {
    const row = button.parentElement;
    const index = row.dataset.index;
    let currentColor = row.dataset.color || "white";

    let newColor = "";
    if (currentColor === "white") newColor = "yellow";
    else if (currentColor === "yellow") newColor = "lightgreen";
    else newColor = "white";

    row.style.backgroundColor = newColor;
    row.dataset.color = newColor;

    localStorage.setItem(`algo-${index}`, newColor);
}

function pickRandom(color) {
    const selected = [];

    for (let i = 1; i <= 41; i++) {
        const saved = localStorage.getItem(`algo-${i}`);
        if (saved === color) {
            selected.push(i);
        }
    }

    const result = document.getElementById('result');

if (selected.length === 0) {
    result.textContent = `No ${color} cases selected.`;
} else {
    const randomSelectedIndex = selected[Math.floor(Math.random() * selected.length)];

    const scramble = scrambles[randomSelectedIndex - 1];
    result.textContent = `Scramble: ${scramble}`;
}
}

window.onload = function() {
    const rows = document.querySelectorAll('.image-text');
    rows.forEach(row => {
        const index = row.dataset.index;
        const savedColor = localStorage.getItem(`algo-${index}`) || "white";
        row.style.backgroundColor = savedColor;
        row.dataset.color = savedColor;
    });
};
