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
    localStorage.setItem('date', `Date de naissance: ${Math.round(percentageY%31)}/${Math.round((percentageY/31)%12)}/${percentageX}`)
});

function Button(){
    const data = localStorage.getItem(date);
    alert(data);
}