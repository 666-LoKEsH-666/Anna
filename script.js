function showSurprise() {
    document.getElementById('popup').style.display = 'block';
}

function closeSurprise() {
    document.getElementById('popup').style.display = 'none';
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 7 + 's'; // Random duration between 7-10s
    document.getElementById('heart-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000); // Remove heart after 10s
}

setInterval(createHeart, 300);
