document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const closeBtn = document.querySelector('.close-lightbox');

    // Selects Images AND Videos
    const galleryItems = Array.from(document.querySelectorAll('.gallery-img, .split-big-img, .img-rounded'));
    let currentIndex = 0;

const updateLightbox = (index) => {
    currentIndex = index;
    const item = galleryItems[currentIndex];

    if (item.tagName === 'VIDEO') {
        const source = item.querySelector('source').src;
        lightboxImg.style.display = 'none';
        lightboxVideo.src = source; // Set source first
        lightboxVideo.style.display = 'block'; // Then show
        lightboxVideo.load();
    } else {
        lightboxVideo.style.display = 'none';
        lightboxVideo.pause();
        lightboxImg.src = item.src; // Set source first
        lightboxImg.style.display = 'block'; // Then show
    }
};

    galleryItems.forEach((item, index) => {
        item.style.cursor = 'pointer'; 
        item.addEventListener('click', (e) => {
            e.preventDefault();
            lightbox.style.display = 'flex';
            updateLightbox(index);
            document.body.style.overflow = 'hidden'; 
        });
    });

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
        lightboxVideo.pause(); // Stop playback
        lightboxVideo.src = ""; // Clear source
    };

    const showNext = (e) => {
        if (e) e.stopPropagation();
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateLightbox(currentIndex);
    };

    const showPrev = (e) => {
        if (e) e.stopPropagation();
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightbox(currentIndex);
    };

    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);
    closeBtn.onclick = closeLightbox;

    lightbox.onclick = (e) => {
        if (e.target === lightbox) closeLightbox();
    };

    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'Escape') closeLightbox();
        }
    });
});