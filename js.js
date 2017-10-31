// een functie die elenementen uit de html kan returnen //

function select(element) {
    return document.querySelector(element);
}


// zoekbalk //

/* ik selecteer de nav button, daar heb ik een klik event aan gekoppeld. Zodra er op wordt geklikt activeert de functie die in deze code ter plekke wordt gemaakt. In de functie geef ik de zoekbalk een class die in css staat. */

select("nav button").addEventListener("click", function () {
    select("input[type='search']").classList.toggle("search");
    select("input[type='search']").focus();
});


// schuif in filter //

/* hier heb ik een variabele genaamd button gemaakt, daarin selecteer ik de main button. 

ik heb een if/else statement gemaakt, in de if heb ik de variabele button aan een click event gekoppeld, en zodra er op wordt geklikt activeert de functie die in deze code ter plekke wordt gemaakt. in functie wordt er een class toegevoegd aan de zoekbalk, en wordt er een if/else statement gemaakt voor de filter knop. ALS de button gelijk is aan 'filter ^', verander het dan in 'filter v', zo niet verander het dan niet. */

const button = select("main button");
if (button) {
    button.addEventListener("click", function () {
        select("form").classList.toggle("formschuif");
        let button = select("main button").innerHTML;
        if (button === "Filter ^") {
            select("main button").innerHTML = "Filter v";
        } else {
            select("main button").innerHTML = "Filter ^";
        }
    });
}


// loading state //

/* hier heb ik in de functie 2 variables gemaakt namelijk section en image. in section selecteer ik via de select function, het element section uit mijn html. in image selecteer ik vai de select function, het element body>img uit mijn html. daarna selecteer ik image en vewijder ik de class attribute. ik geef daarna aan section een class 'hide'. */

function loadFunction() {
    const section = select("section"),
          image = select("body>img");
    image.removeAttribute("class");
    section.className = "hide";
    setTimeout(function () {
        image.className = "hide";
        section.removeAttribute("class");
    }, 3000);
}


// na invoeren form komt laad balkje //

/* hier heb ik een variabele inputs gemaakt, dat is een array, daarin selecteer ik via de function select de elementen uit mijn html. ik heb dan een if gemaakt en ik selecteer het eerste element uit inputs. dan selecteer ik inputs en geef ik het via 'foreach' een function met een argument input. dan geef ik input een event, namelijk change, dus als er iets aan de input veranderd, en keypress, als ze toetsen gebruiken in de input. Zodra de eventen plaatsvinden wordt de function loadFunction geactiveerd. */

const inputs = [select("form input[type='time']"), select("form input[type='color']"), select("form select")];

if (inputs[0]) {
    inputs.forEach(function (input) {
        input.addEventListener("change", loadFunction);
        input.addEventListener("keypress", loadFunction);
    });
}


// sla verhaal op in account op homepage //

/* ik selecteer alle article buttons en dan maak ik via een forEach een function aan die elementen. daarin koppel ik ze aan de event click, en dan wordt er een function ter plekke gemaakt, waar ik de 'nav ul li h2' een class geef. */

document.querySelectorAll("article button").forEach(function (button) {
    button.addEventListener("click", function () {
        select("nav ul li h2").classList.toggle("add");
    });
});


// sla verhaal op in account op verhalenpage //

/* ik selecteer alle section>button:last-of-type elementen en dan maak ik via een forEach een function aan die elementen. daarin koppel ik ze aan de event click, en dan wordt er een function ter plekke gemaakt, waar ik de 'nav ul li h2' een class geef. */

document.querySelectorAll("section>button:last-of-type").forEach(function (button) {
    button.addEventListener("click", function () {
        select("nav ul li h2").classList.toggle("add");
    });
});


// like button //

/* hier heb ik de variabele like gemaakt en daarin selecteer ik het bepaalde element. via een if statement selecteer ik like en geef ik het een click event. Zodra er op het element wordt geklikt activeert er een function. die function wordt ter plekke gemaakt, daarin heb ik de variabele img gemaakt, daarin selecteer ik de image dmv this. daarna heb ik een if/else statement gemaakt. in de if statement zeg ik dat als de img 'leeg' includes, dat ik de image moet veranderen naar een andere image. Ook krijgt het een animation mee die ik in css heb gemaakt. zodra het niet het geval is blijft de image hetzelfde en wordt style verwijderd. */

const like = select("section:first-of-type>button");
if (like) {
    like.addEventListener("click", function(){
        const img = this.children[0];
        if (img.src.includes("leeg")) {
            img.src="styles/hart.png";
            img.style.animation = "notification .5s forwards";
        } else {
            img.src="styles/leeghart.png";
            img.removeAttribute("style");
        }
    });
}

/*// 1. selecteer elementen met document.querySelector 
var section = document.querySelector('.dancer'); // first section element
var button = document.querySelector('article> button');

var dance = function () {
 //3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: section.dance)
	section.classList.toggle('add');
};

//2. voeg een event toe aan een element
button.addEventListener('click', dance); */



                                  
                                  