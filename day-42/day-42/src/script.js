const numberOfStars = 300;
const numberOfShootingStars = 6;
const stage = document.getElementById('stage');

for (let i = 1; i <= numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = `star star-${i}`;
    star.style.top = `${Math.random() * 280}px`;
    star.style.left = `${Math.random() * 280}px`;
    star.style.animation = `${((Math.random() * 20) + 20) / 10}s flickr ${Math.random() * 20 / -10}s infinite`;
    stage.appendChild(star);
}

// Create shooting stars
for (let i = 1; i <= numberOfShootingStars; i++) {
    const shootingStar = document.createElement('div');
    shootingStar.className = `shooting-star shooting-star-${i}`;
    shootingStar.style.top = `${(Math.random() * 100) - 30}px`;
    shootingStar.style.animation = `${Math.random() * 5 + 20}s shooting-star ${Math.random() * 25}s infinite`;
    stage.appendChild(shootingStar);
}
