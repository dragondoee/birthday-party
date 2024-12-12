// Sélection des éléments HTML
const pc = document.querySelector('.pc');
const boutonFermer = document.querySelector('.fermer');

const flamme = document.querySelector('.flamme');
const compteurTexte = document.querySelector('.compteur');
const partyTexte = document.querySelector('.party-texte');
const compteur = document.querySelector('.compteur span');
const popupPc = document.querySelector('.popup-pc');

var index = 1

// Lancer le Jeu
pc.addEventListener("click", function () {
    popupPc.style.display = "block"
})

boutonFermer.addEventListener("click", function () {
    popupPc.style.display = "none"
})


// Compteur de souffle 

flamme.addEventListener("click", function () {
    compteurTexte.style.display = "block"
    if (index - 1 == 25) {
        partyTexte.innerHTML = "Certaines choses prennent du temps mais ça arrive"
    }
    if (index - 1 == 117) {
        partyTexte.innerHTML = "Ça prend du temps de réaliser ses souhaits, n'abandonne pas"
    } if (index - 1 == 203) {
        partyTexte.innerHTML = "Encore un petit effort, tu y es presque !"
    } if (index - 1 == 264) {
        partyTexte.innerHTML = "Pas besoin de pause café car c'est pas bon"
    } if (index - 1 == 300) {
        partyTexte.innerHTML = "Quelques souffles et c'est finis !"
    }
    if (index - 1 == 333) {
        flamme.src = "img/party/cake-null.png"
        partyTexte.innerHTML = "Woow tu en as du souffle ! Ta patience fait que ton souhait va se réaliser sans aucun doute ! Ça fonctionne que 1 fois donc j'espère que tu avais bien choisi !"
    } else {
        compteur.innerHTML = index
        index++
    }
})