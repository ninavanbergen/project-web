// zoekbalk //

function select(element) {
    return document.querySelector(element);
}

select("nav button").addEventListener("click", function () {
    select("input[type='search']").classList.toggle("search");
    select("input[type='search']").focus();
});

// schuif in filter //
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

/*select("fieldset input").addEventListener("keypress", function () {
    select("section").classList.toggle("show");
});*/



// na submit login "welkom" //

/*select("fieldset input").addEventlistener("click", function () {
    select("article").classList.remove("article");
    select("article").classList.focus();
});*/




// loading state //
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

const inputs = [select("form input[type='time']"), select("form input[type='color']"), select("form select")];

if (inputs[0]) {
    inputs.forEach(function (input) {
        input.addEventListener("change", loadFunction);
        input.addEventListener("keypress", loadFunction);
    });
}

// sla boek op in account //

document.querySelectorAll("article button").forEach(function (button) {
    button.addEventListener("click", function () {
        select("nav ul li h2").classList.toggle("add");
    });
});

// like button //

const like = select("article:first-of-type+section button");
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



                                  
                                  