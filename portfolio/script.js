//prend les éléments de la navbar
const navLinks = document.querySelectorAll('.navbar__link');

//ajoute un gestionnaire d'événement à chaque lien de navigation
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); //empêche le comportement de lien par défaut

    const href = link.getAttribute('href'); //obtient l'attribut href du lien
    const offsetTop = document.querySelector(href).offsetTop; //obtient la position de défilement de la section cible

    //utilise la méthode scrollto pour déplacer la page de manière fluide vers la section cible
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});