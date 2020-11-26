
/*On récupère ce que le user à choisi*/
var rock = document.getElementById('rock').addEventListener('click', jeux);
var paper = document.getElementById('paper').addEventListener('click', jeux);
var scissors = document.getElementById('scissors').addEventListener('click', jeux);

/*On récupère différents champs et leurs contenu*/
var checkBox = document.getElementById("checkbox");
var choixordi;
var choixuser;
var reponseordi = document.getElementById('reponseordi');
var textereponse = document.getElementById('textereponse');
var scoreuser = document.getElementById('scoreuser').innerHTML;
var scoreordi = document.getElementById('scoreordi').innerHTML;
var popup = document.getElementById('popup');
var filtre = document.getElementById('filtre')

function jeux() {
    /*************/
    /*MODE NORMAL*/
    /*************/
    if (checkBox.checked == false) {
        choixuser = this.id;
        ajoutborder();
        calculreponseordi1();
        comparer();

        /*Génération de la réponse de l'ordinateur*/
        function calculreponseordi1() {
            var dice = Math.random();
            if (dice <= 0.33) {
                choixordi = "rock";
                reponseordi.innerHTML = "<img src='rock.jpg'/>";
            } else if (dice > 0.33 && dice <= 0.66) {
                choixordi = "paper";
                reponseordi.innerHTML = "<img src='paper.jpg'/>";
            } else {
                choixordi = "scissors";
                reponseordi.innerHTML = "<img src='scissors.jpg'/>";
            }
        }
        /*Comparaison de la réponse ordianteur et du choix du usser avec affichage des résulats*/
        function comparer() {

            if (choixuser == choixordi) {
                textereponse.innerHTML = "<i>Match nul</i>";

            } else if (choixuser === "rock" && choixordi === "paper") {
                textereponse.innerHTML = "<i>J'ai gagné</i>";
                scoreordi++
            } else if (choixuser === "rock" && choixordi === "scissors") {
                textereponse.innerHTML = "<i>Vous avez gagné</i>";
                scoreuser++
            } else if (choixuser === "paper" && choixordi === "rock") {
                textereponse.innerHTML = "<i>Vous avez gagné</i>";
                scoreuser++
            } else if (choixuser === "paper" && choixordi === "scissors") {
                textereponse.innerHTML = "<i>J'ai gagné</i>";
                scoreordi++
            } else if (choixuser === "scissors" && choixordi === "rock") {
                textereponse.innerHTML = "<i>J'ai gagné</i>";
                scoreordi++
            } else if (choixuser === "scissors" && choixordi === "paper") {
                textereponse.innerHTML = "<i>Vous avez gagné</i>";
                scoreuser++
            }

            document.getElementById('scoreuser').innerHTML = scoreuser;
            document.getElementById('scoreordi').innerHTML = scoreordi;
        }

    }

    /*************/
    /*MODE TRICHE*/
    /*************/
    else {
        choixuser = this.id;
        ajoutborder();
        calculreponseordi2();

        function calculreponseordi2() {

            if (choixuser == "rock") {
                choixordi = "paper";
                reponseordi.innerHTML = "<img src='paper.jpg'/>";
                textereponse.innerHTML = "<i>J'ai gagné</i>";
                scoreordi++;
            } else if (choixuser == "paper") {
                choixordi = "scissors";
                reponseordi.innerHTML = "<img src='scissors.jpg'/>";
                textereponse.innerHTML = "<i>J'ai gagné</i>";
                scoreordi++;
            } else {
                choixordi = "rock";
                reponseordi.innerHTML = "<img src='rock.jpg'/>";
                textereponse.innerHTML = "<i>J'ai gagné</i>";
                scoreordi++;
            }

            document.getElementById('scoreuser').innerHTML = scoreuser;
            document.getElementById('scoreordi').innerHTML = scoreordi;
        }
    }
}


/*GESTION DE LA BORDURE DE MISE EN EVIDENCE*/
function ajoutborder() {
    enleverborder()
    document.getElementById(choixuser).style = "border:#4629D8 2px solid";
    

}

/*REMISE A ZERO DES BORDURES*/
function enleverborder(){
    var enleverborder = document.getElementById('choixmain').childNodes;
    for (var i = 0; i < enleverborder.length; i++) {
        enleverborder[i].style = "border:rgba(0, 0, 255, .1) 2px solid";
    }

}


/*REMISE A ZERO*/
document.getElementById("raz").addEventListener('click', remiseazero);
function remiseazero() {
    document.getElementById('scoreuser').innerHTML = "0";
    scoreuser = 0;
    document.getElementById('scoreordi').innerHTML = "0";
    scoreordi = 0;

    /*Reintialisation de l'image et du texte*/
    reponseordi.innerHTML = "";
    textereponse.innerHTML = "<i>En attente de votre choix</i>";
    enleverborder()


}


/*CHANGER NOM */
document.getElementById("changernom").addEventListener('click', changernom);
function changernom() {
    /*Affichage popup + AJjout filtre sur fond*/
    popup.style = "display:flex";
    filtre.style = "display:block";
}

document.getElementById('valider').addEventListener('click', fermer);
function fermer() {
    /*Changement du nom par le nouveau nom rentrer, si aucun texte rentrer nom redevient "Inconnu"*/
    var nouveaunomrentrer = document.getElementById('nouveaunom').value;
    if (nouveaunomrentrer == "") {
        document.getElementById('nom').innerHTML = "Inconnu";

    } else {
        document.getElementById('nom').innerHTML = nouveaunomrentrer;

    }
    /*Suppresion du popup et du filtre, et reinitialisation de la valeur de l'input*/
    popup.style = "display:none";
    filtre.style = "display:none";
    document.getElementById('nouveaunom').value = "";

}