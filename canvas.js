const confettiList = [];
let canvas;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    const mainNodeDOM = canvas.parent();
    canvas.parent("canvas-container");
    mainNodeDOM.remove();
    noFill();
}

function draw() {
    background(30);
    confettiList.push(new Confetti(mouseX, mouseY));
    confettiList.forEach((confetti, index) => {
        confetti.animate();
        if (confetti.life < 1)
            confettiList.splice(index, 1);
    });
}

function keyPressed() {
    if (keyCode === 13) saveCanvas(canvas, 'circles', 'png');
}