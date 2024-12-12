// Sélection des éléments HTML
const pc = document.querySelector('.pc');
const chat = document.querySelector('.chat');
const rubben = document.querySelector('.rubben');
const dance = document.querySelector('.affiche2');
const boutonsFermer = document.querySelectorAll('.fermer');

const flamme = document.querySelector('.flamme');
const compteurTexte = document.querySelector('.compteur');
const partyTexte = document.querySelector('.party-texte');
const compteur = document.querySelector('.compteur span');

const popupPc = document.querySelector('.popup-pc');
const popupChat = document.querySelector('.popup-chat');
const popupRubben = document.querySelector('.popup-rubben');
const popupDance = document.querySelector('.popup-dance');

var index = 1

// Pop-up PC
pc.addEventListener("click", function () {
    popupPc.style.display = "block"
    popupChat.style.display = "none"
    popupRubben.style.display = "none"
    popupDance.style.display = "none"
})

// Pop-up Chat
chat.addEventListener("click", function () {
    popupChat.style.display = "block"
    popupPc.style.display = "none"
    popupRubben.style.display = "none"
    popupDance.style.display = "none"
})

// Pop-up Dance
dance.addEventListener("click", function () {
    popupDance.style.display = "block"
    popupPc.style.display = "none"
    popupRubben.style.display = "none"
    popupChat.style.display = "none"
})

// Pop-up Rubben
rubben.addEventListener("click", function () {
    popupRubben.style.display = "block"
    popupPc.style.display = "none"
    popupChat.style.display = "none"
    popupDance.style.display = "none"
})

boutonsFermer.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        popupPc.style.display = "none";
        popupChat.style.display = "none";
        popupRubben.style.display = "none";
        popupDance.style.display = "none"
    });
});


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