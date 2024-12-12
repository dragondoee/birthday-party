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
    popupPc.style.display="block"
})

boutonFermer.addEventListener("click",function(){
    popupPc.style.display="none"
})


// Compteur de souffle 

flamme.addEventListener("click", function () {
    compteurTexte.style.display = "block"

    if (index - 1 == 333) {
        flamme.src = "img/party/cake-null.png"
        partyTexte.innerHTML = "Woow tu en as du souffle ! Ta patience fait que ton souhait va se réaliser sans aucun doute ! Ça fonctionne que 1 fois donc j'espère que tu avais bien choisi !"
    } else {
        compteur.innerHTML = index
        index++
    }
})