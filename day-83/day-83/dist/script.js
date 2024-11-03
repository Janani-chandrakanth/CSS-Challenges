const numberOfRings = 30;
const numberOfStripes = 24;
const animationDuration = 4; // in seconds

const warp = document.getElementById('warp');

for (let i = 1; i <= numberOfRings; i++) {
    const ring = document.createElement('div');
    ring.className = `ring ring-${i}`;

    const timeOffset = (i - 1) * (animationDuration / numberOfRings) * -1;
    ring.style.animationDelay = `${timeOffset}s`;

    for (let j = 1; j <= numberOfStripes; j++) {
        const stripe = document.createElement('div');
        stripe.className = `stripe stripe-${j}`;
        const degree = ((360 / numberOfStripes) * (j - 1)) - (Math.random() * 10);
        const offset = 100 - (Math.random() * 40);
        stripe.style.transform = `rotate(${degree}deg) translate3d(0, ${offset}px, 0) scaleY(${offset / 100})`;
        ring.appendChild(stripe);
    }

    warp.appendChild(ring);
}