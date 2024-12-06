export function randomImageTransition(
  duration: number,
  images: string[]
): void {
  if (!images || images.length === 0) {
    console.error('No images provided.');
    return;
  }

  if (!duration || duration <= 0) {
    console.error('Invalid duration.');
    return;
  }

  const effects = ['fade', 'zoom', 'spiral', 'zigzag'];

  // Inject CSS styles if not already present
  if (!document.getElementById('randomImageTransitionStyles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'randomImageTransitionStyles';
    styleElement.innerHTML = `
@keyframes fadeEffect {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade {
    animation-name: fadeEffect;
    animation-fill-mode: forwards;
}

@keyframes zoomEffect {
    from { transform: scale(0); }
    to { transform: scale(1); }
}

.zoom {
    animation-name: zoomEffect;
    animation-fill-mode: forwards;
}

@keyframes spiralEffect {
    from { transform: rotate(0deg) scale(0); opacity: 0; }
    to { transform: rotate(360deg) scale(1); opacity: 1; }
}

.spiral {
    animation-name: spiralEffect;
    animation-fill-mode: forwards;
}

@keyframes zigzagEffect {
    0% { transform: translateX(0) translateY(0); opacity: 0; }
    25% { transform: translateX(10px) translateY(-10px); }
    50% { transform: translateX(-10px) translateY(10px); }
    75% { transform: translateX(10px) translateY(-10px); }
    100% { transform: translateX(0) translateY(0); opacity: 1; }
}

.zigzag {
    animation-name: zigzagEffect;
    animation-fill-mode: forwards;
}

#image-container img {
    display: block;
    width: 50%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
}
`;
    document.head.appendChild(styleElement);
  }

  // Create or select a container for the images
  let container = document.getElementById('image-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'image-container';
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.height = '100%';
    document.body.appendChild(container);
  }

  let currentIndex = 0;

  const showNextImage = () => {
    // Remove previous image
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // const imgSrc = images[currentIndex];
    const imgElement = document.createElement('img');
    imgElement.src = '/food1.jpg';
    imgElement.style.position = 'absolute';
    imgElement.style.top = '0';
    imgElement.style.left = '0';

    const effect = effects[Math.floor(Math.random() * effects.length)];
    imgElement.classList.add(effect);

    // Set the animation duration
    imgElement.style.animationDuration = duration + 'ms';

    container.appendChild(imgElement);

    currentIndex = (currentIndex + 1) % images.length;

    setTimeout(showNextImage, duration);
  };

  showNextImage();
}
