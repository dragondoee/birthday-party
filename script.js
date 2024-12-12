// Sélection des éléments HTML
const pc = document.querySelector('.pc');
const cadeau = document.querySelector('.pc');
const tableau = document.querySelector('.pc');
const peluche = document.querySelector('.pc');
const flamme = document.querySelector('.flamme');
const compteurTexte = document.querySelector('.compteur');
const partyTexte = document.querySelector('.party-texte');
const compteur = document.querySelector('.compteur span');

var index = 1

// Lancer le Jeu
pc.addEventListener("click", function () {
    console.log("pc cliquer")
})

cadeau.addEventListener("click", function () {
    // console.log("cadeau cliquer")
})

tableau.addEventListener("click", function () {
    // console.log("tableau cliquer")
})

peluche.addEventListener("click", function () {
    // console.log("peluche cliquer")
})

// Compteur de souffle 

flamme.addEventListener("click", function () {
    console.log("flamme")
    compteurTexte.style.display = "block"

    if (index - 1 == 333) {
        flamme.src = "img/party/cake-null.png"
        partyTexte.innerHTML = "Woow tu en as du souffle ! Ta patience fait que ton souhait va se réaliser sans aucun doute ! Ça fonctionne que 1 fois donc j'espère que tu avais bien choisi !"
    } else {
        compteur.innerHTML = index
        index++
    }
})