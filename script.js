const image = document.getElementById('movingImage');
let position = 0;
let direction = 1;

function moveImage() {
    position += 5 * direction;
    image.style.left = position + 'px';

    // Reverse direction if image reaches the screen edges
    if (position > window.innerWidth - image.width || position < 0) {
        direction *= -1;
    }

    requestAnimationFrame(moveImage);
}

moveImage();
