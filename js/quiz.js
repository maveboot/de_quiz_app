/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*
    Naam: Randy Dalgliesh
    Bestand: quiz.js
    Omschrijving: Dit is een quiz app die de gebruiker verschillende vragen stelt.
    Datum: 8 April 2017

    Gebruikte bronnen:
    http://images.boomsbeat.com/data/images/full/595/bill-gates-jpg.jpg
    https://crunchbase-production-res.cloudinary.com/image/upload/c_limit,h_600,w_600/v1422480063/h0fvargheeyaybm4oyyt.jpg
    http://images.clipartpanda.com/elephant-clipart-black-and-white-M9cprAgTE.png
    https://s-media-cache-ak0.pinimg.com/236x/ee/6b/d7/ee6bd788a25d465b2d2ddcd39d9367d4.jpg
    http://youredm.youredm1.netdna-cdn.com/wp-content/uploads/2016/12/spotify-green.png?x56677

*/

var vraagPositie = 0; // Bij welke vraag zijn we
var score = 0; // Houdt score bij

// Pakt html elementen
var startKnop = document.getElementById("ready");
var knopContainer = document.getElementById("button_plaats");
var vraagContainer = document.getElementById("vraag_content");
var afbeedlingContainer = document.getElementById("vraag_afbeelding");
var meerKeuzeVragenContainer = document.getElementById("antwoord_optie");
var resultaatJuisteAntwoorden = "";
var resultaatJouwAntwoorden = "";


// Alle meerkeuze vragen
var meerKeuzeVragen = [
    "<input type='radio' name='vraag1' id='elon' value='Elon Musk' checked>" +
    "<label for='elon'>Elon Musk</label><br>" +

    "<input type='radio' name='vraag1' id='mark' value='Mark Zuckerberg'>" +
    "<label for='mark'>Mark Zuckerberg</label><br>" +

    "<input type='radio' name='vraag1' id='sundar' value='Sundar Pichai'>" +
    "<label for='sundar'>Sundar Pichai</label><br>" +

    "<input type='radio' name='vraag1' id='jack' value='Jack Dorsey'>" +
    "<label for='jack'>Jack Dorsey</label><br>",


    "<input type='radio' name='vraag1' id='larry' value='Larry Ellison' checked>" +
    "<label for='larry'>Larry Ellison</label><br>" +

    "<input type='radio' name='vraag1' id='jeff' value='Jeff Bezos'>" +
    "<label for='jeff'>Jeff Bezos</label><br>" +

    "<input type='radio' name='vraag1' id='warren' value='Warren Buffett'>" +
    "<label for='warren'>Warren Buffett</label><br>" +

    "<input type='radio' name='vraag1' id='bill' value='Bill Gates'>" +
    "<label for='bill'>Bill Gates</label><br>",


    "<input type='radio' name='vraag1' id='javascript' value='Javascript' checked>" +
    "<label for='javascript'>Javascript</label><br>" +

    "<input type='radio' name='vraag1' id='python' value='Python'>" +
    "<label for='python'>Python</label><br>" +

    "<input type='radio' name='vraag1' id='php' value='PHP'>" +
    "<label for='php'>PHP</label><br>" +

    "<input type='radio' name='vraag1' id='ruby' value='Ruby'>" +
    "<label for='ruby'>Ruby</label><br>",


    "<input type='radio' name='vraag1' id='dropbox' value='Dropbox' checked>" +
    "<label for='dropbox'>Dropbox</label><br>" +

    "<input type='radio' name='vraag1' id='onedrive' value='OneDrive'>" +
    "<label for='onedrive'>OneDrive</label><br>" +

    "<input type='radio' name='vraag1' id='google drive' value='Google drive'>" +
    "<label for='google drive'>Google drive</label><br>" +

    "<input type='radio' name='vraag1' id='soundcloud' value='Soundcloud'>" +
    "<label for='soundcloud'>Soundcloud</label><br>",


    "<input type='radio' name='vraag1' id='zweden' value='Zweden' checked>" +
    "<label for='zweden'>Zweden</label><br>" +

    "<input type='radio' name='vraag1' id='amerika' value='Amerika'>" +
    "<label for='amerika'>Amerika</label><br>" +

    "<input type='radio' name='vraag1' id='engeland' value='Engeland'>" +
    "<label for='engeland'>Engeland</label><br>" +

    "<input type='radio' name='vraag1' id='australië' value='Australië'>" +
    "<label for='australië'>Australië</label><br>"
];

var quiz = [
    {
        vraag: "Wie is de ceo van dit bedrijf?",
        afbeelding: "images/facebook_big.jpg",
        antwoord: "Mark Zuckerberg"
    },
        {
        vraag: "Wie is deze man?",
        afbeelding: "images/bill_gates.jpg",
        antwoord: "Bill Gates"
    },
        {
        vraag: "Welke programmeertaal heeft een olifant als mascotte?",
        afbeelding: "images/elephant_zijkant.png",
        antwoord: "PHP"
    },
        {
        vraag: "Welke dienst gebruikt dit onderstaande logo?",
        afbeelding: "images/onedrive.png",
        antwoord: "OneDrive"
    },
        {
        vraag: "In welke land is Spotify opgericht?",
        afbeelding: "images/spotify.png",
        antwoord: "Zweden"
    }
];

// Antwoorden gebruiker
var antwoordGebruiker = [];

// Verander knop kleur
function onStartQuizButton() {
    startKnop.style.backgroundColor = "#ffcd1f";
    startKnop.textContent = "Go!";
}

// Verander knop kleur
function offStartQuizButton() {
    startKnop.style.backgroundColor = "#009688";
    startKnop.textContent = "Klaar?";
}

// sla gebruiker antwoord op
function slaAntwoordOp() {

    antwoordGebruiker.push(document.querySelector('input[name="vraag1"]:checked').value);

}

// Vervang de lege vraagcirkel met de gevulde vraagcirkel
function statusUpdater(status) {

  var vraag_status = 'vraag_status' + status;
  var pakVraag = document.getElementById(vraag_status);
  pakVraag.setAttribute('src','images/filled_circle.png');

}


// Bereken eindresultaat en presenteer
function resultaat() {

    slaAntwoordOp();

    vraagContainer.innerHTML = "<h2> Jouw resultaten </h2";


    for (h = 0; h < antwoordGebruiker.length; h++) {

        if (antwoordGebruiker[h] === quiz[h].antwoord) {

            score++;
            resultaatJouwAntwoorden +=
            "<p class='goed'>" + antwoordGebruiker[h] + "</p>";

        }else{

            resultaatJouwAntwoorden +=
            "<p class='fout'>" + antwoordGebruiker[h] + "</p>";

        }
    }

    afbeedlingContainer.innerHTML =
        "<p><strong>Jouw score is:</strong> " + score + " van de 5<p><br>" +
        "<br><p><strong>Jouw antwoorden:</strong></p>" +
        resultaatJouwAntwoorden;

    meerKeuzeVragenContainer.innerHTML = "";
    knopContainer.innerHTML = "";

}

// Toon de volgende vraag
function volgendeVraag() {

    slaAntwoordOp();

    if (vraagPositie === 4) {

        vraagContainer.innerHTML = "<h2>" + quiz[vraagPositie].vraag + "</h2";
        afbeedlingContainer.innerHTML = "<img src='" + quiz[vraagPositie].afbeelding + "'>";
        meerKeuzeVragenContainer.innerHTML = meerKeuzeVragen[vraagPositie];


        vraagPositie++;
        statusUpdater(vraagPositie);
        knopContainer.innerHTML = "<button id='resultaat'>Resultaat</button>";
        var resultaatKnop = document.getElementById("resultaat");
        resultaatKnop.addEventListener("click", resultaat);


    } else {

        vraagContainer.innerHTML = "<h2>" + quiz[vraagPositie].vraag + "</h2";
        afbeedlingContainer.innerHTML = "<img src='" + quiz[vraagPositie].afbeelding + "'>";
        meerKeuzeVragenContainer.innerHTML = meerKeuzeVragen[vraagPositie];


        vraagPositie++;
        statusUpdater(vraagPositie);

        knopContainer.innerHTML = "<button id='volgende'>Volgende</button>";
        var volgendeKnop = document.getElementById("volgende");
        volgendeKnop.addEventListener("click", volgendeVraag);


    }


}

// Begin met de quiz
function startQuiz() {

    knopContainer.innerHTML = "<button id='volgende'>Volgende</button>";
    var volgendeKnop = document.getElementById("volgende");
    volgendeKnop.addEventListener("click", volgendeVraag);

    vraagContainer.innerHTML = "<h2>" + quiz[0].vraag + "</h2>";
    afbeedlingContainer.innerHTML = "<img src='" + quiz[0].afbeelding + "'>";
    meerKeuzeVragenContainer.innerHTML = meerKeuzeVragen[vraagPositie];

    vraagPositie++;

    statusUpdater(vraagPositie);

}



startKnop.addEventListener("mouseover", onStartQuizButton);
startKnop.addEventListener("mouseout", offStartQuizButton);
startKnop.addEventListener("click", startQuiz);
