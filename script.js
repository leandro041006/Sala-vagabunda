const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('active')) {
            closeVideo(card);
        } else {
            videoCards.forEach(c => closeVideo(c));
            openVideo(card);
        }
    });
});

function openVideo(card) {
    const video = card.querySelector('video');
    const img = card.querySelector('.cover-image');
    
    video.style.display = 'block';
    img.style.display = 'none';
    
    card.classList.add('active');
    
    video.currentTime = 0;
    video.play();
    
    openFullscreen(video);
}

function closeVideo(card) {
    const video = card.querySelector('video');
    const img = card.querySelector('.cover-image');
    
    video.pause();
    video.style.display = 'none';
    img.style.display = 'block';
    
    card.classList.remove('active');
    
    if (document.fullscreenElement) {
        closeFullscreen();
    }
}

function openFullscreen(video) {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

document.addEventListener('click', (e) => {
    const target = e.target;
    
    if (!target.closest('.video-card')) {
        videoCards.forEach(c => closeVideo(c));
    }
});
