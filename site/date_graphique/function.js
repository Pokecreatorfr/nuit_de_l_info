const grid = document.getElementById('grid');
const marker = document.getElementById('marker');
const valueDisplay = document.getElementById('value');

grid.addEventListener('click', (event) => {
    // Récupérer les dimensions et la position de la grille
    const rect = grid.getBoundingClientRect();
    const positionX = event.clientX - rect.left;
    const positionY = event.clientY - rect.top;

    // Calculer les pourcentages par rapport aux dimensions de la grille
    const percentageX = Math.round(positionX / rect.width * 400)+1624;
    const percentageY = 365 - Math.round(positionY / rect.height * 365);

    // Déplacer le marqueur
    marker.style.left = `${positionX}px`;
    marker.style.top = `${positionY}px`;

    // Afficher les positions
    valueDisplay.textContent = `Date de naissance: ${Math.round(percentageY%31)}/${Math.round((percentageY/31)%12)}/${percentageX}`;
});

const range = document.getElementById('letter_side');
const valueDisplay2 = document.getElementById('value2');
const asciiList = document.getElementById('asciiList');

// Générer la liste des 512 caractères
const charElements = [];
for (let i = 0; i <= 512; i++) {
    const charSpan = document.createElement('span');
    charSpan.textContent = String.fromCharCode(i);
    asciiList.appendChild(charSpan);
    charElements.push(charSpan); // Stocker chaque élément dans un tableau
}

// Mettre à jour la valeur et le style en temps réel
range.addEventListener('input', (event) => {
    const selectedValue = range.value;

    // Réinitialiser les styles pour tous les caractères
    charElements.forEach((span, index) => {
    span.classList.toggle('active', index == selectedValue); // Activer uniquement le caractère correspondant
    });

    // Mettre à jour l'affichage de la valeur
    const char = String.fromCharCode(selectedValue);
    valueDisplay2.textContent = `Nom : ${char}`;
});

// Initialiser la première sélection
range.dispatchEvent(new Event('input'));

let word = "";
const valueDisplay3 = document.getElementById('value3');
function selection(){
    word += String.fromCharCode(range.value);
    valueDisplay3.textContent = `Nom : ${word}`;
}