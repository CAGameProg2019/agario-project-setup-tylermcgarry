let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

function init() {

    update();
}

function update() {

    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();
});