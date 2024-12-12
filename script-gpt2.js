// Sélection des éléments HTML
const startButton = document.getElementById('startGame');
const chambreSection = document.getElementById('chambre');
const partySection = document.getElementById('party');
const playerChambre = document.getElementById('playerChambre');
const door = document.getElementById('door');
const player = document.getElementById('player');
const hitboxes = document.querySelectorAll('.hitbox');

// Position initiale des joueurs
let playerChambrePosition = { x: 90, y: 450 };

// Animation configuration
const animations = {
    up: ['up1.png', 'up2.png', 'up3.png', 'up2.png'],
    down: ['down1.png', 'down2.png', 'down3.png', 'down2.png',],
    left: ['left1.png', 'left2.png', 'left3.png', 'left2.png'],
    right: ['right1.png', 'right2.png', 'right3.png', 'right2.png']
};
let currentAnimationFrame = 0;
let currentDirection = 'down';

// Démarrage du jeu
startButton.addEventListener('click', () => {
    document.getElementById('header').style.display = 'none';
    chambreSection.style.display = 'block';
});

// Gestion des déplacements du joueur
document.addEventListener('keydown', (event) => {
    const step = 10; // Pas de déplacement
    if (chambreSection.style.display === 'block') {
        handlePlayerMovement(event, playerChambrePosition, playerChambre, checkDoor, hitboxes);
    }
});

// Fonction générique pour déplacer un joueur
function handlePlayerMovement(event, position, element, onInteraction1, hitboxes) {
    const oldPosition = { ...position };

    switch (event.key) {
        case 'ArrowUp':
            position.y -= 10;
            currentDirection = 'up';
            break;
        case 'ArrowDown':
            position.y += 10;
            currentDirection = 'down';
            break;
        case 'ArrowLeft':
            position.x -= 10;
            currentDirection = 'left';
            break;
        case 'ArrowRight':
            position.x += 10;
            currentDirection = 'right';
            break;
        default:
            return; // Ignorer les autres touches
    }

    element.style.top = position.y + 'px';
    element.style.left = position.x + 'px';

    if (checkHitboxCollision(element, hitboxes)) {
        // Si collision, on revient à l'ancienne position
        position.x = oldPosition.x;
        position.y = oldPosition.y;
        element.style.top = position.y + 'px';
        element.style.left = position.x + 'px';
    } else {
        // Mettre à jour l'animation uniquement si le déplacement est validé
        updatePlayerAnimation(element);
    }

    if (onInteraction1) onInteraction1();
}

// Mise à jour de l'animation du joueur
function updatePlayerAnimation(element) {
    currentAnimationFrame = (currentAnimationFrame + 1) % animations[currentDirection].length;
    const currentImage = animations[currentDirection][currentAnimationFrame];
    element.querySelector("img").src = `img/animation/${currentImage}`;
}

// Vérification des collisions avec les hitboxes
function checkHitboxCollision(playerElement, hitboxes) {
    const feet = playerElement.querySelector('.feet');
    const feetRect = feet.getBoundingClientRect();

    for (let hitbox of hitboxes) {
        const hitboxRect = hitbox.getBoundingClientRect();
        if (
            feetRect.left < hitboxRect.right &&
            feetRect.right > hitboxRect.left &&
            feetRect.top < hitboxRect.bottom &&
            feetRect.bottom > hitboxRect.top
        ) {
            return true; // Collision détectée
        }
    }
    return false; // Pas de collision
}

// Vérification des interactions avec la porte de la chambre
function checkDoor() {
    const doorRect = door.getBoundingClientRect();
    const playerRect = playerChambre.getBoundingClientRect();

    if (
        playerRect.left < doorRect.right &&
        playerRect.right > doorRect.left &&
        playerRect.top < doorRect.bottom &&
        playerRect.bottom > doorRect.top
    ) {
        chambreSection.style.display = 'none';
        partySection.style.display = 'block';
    }
}
