const trajButton = document.querySelector("#trajectoryButton")
const seventhTraj = document.querySelector("#seventhTrajectory");
const seventhPlan = document.querySelector("#seventhPlanet");
const planets = document.querySelectorAll(".planet");
const planetPicture = document.querySelector(".planetCardPicture");
const planetCardPictureContainer = document.querySelector(".planetCardPictureContainer");
const solarSystem = document.querySelector(".solarSystem");
const generationButton = document.querySelector("#generateSolarSystem");
const planetCard = document.querySelector(".planetCard");
const sun = document.querySelector("#sun");
const planetName = document.querySelector("#planetNameContainer p");
let planetNames = [
    "Vucuilara",
    "Zaphogawa",
    "Hiphov",
    "Halrora",
    "Doter",
    "Chaevis", 
    "Lodunus", 
    "Vomia FOZ",
    "Vao F3",
    "Culreorilia",
    "Xicrieter",
    "Onkilles",
    "Leccore",
    "Kaorilia",
    "Thouter",
    "Craelea",
    "Cruzilia",
    "Gorth 2Z",
    "Cadus 8G",
    "Kicoigantu",
    "Zimunides",
    "Banninda",
    "Golnov",
    "Keunerth",
    "Totera",
    "Sinastea",
    "Craiturn",
    "Briuq 3PHU",
    "Dars 9OX",
];

let galaxyNames = ["cool Galaxy", "bad galaxy", "good galaxy"];
let galaxyName;



//On click start animation (only works once tho);
trajButton.addEventListener("click", () => {
    seventhTraj.style.transform = "rotate(360deg)";
    seventhPlan.style.transform = "rotate(-360deg)";
    
})

generationButton.addEventListener("click", () =>{
    //Randomizes a galaxy name
    const randomGalaxyIndex = Math.floor(Math.random() * galaxyNames.length);
    galaxyName = galaxyNames[randomGalaxyIndex];
    planetName.innerText = galaxyName;
    //If solarsystem and planetCard are not active then activate them
    if (!solarSystem.classList.contains('active')){
    solarSystem.classList.toggle("active");
    planetCard.classList.toggle("active");
} else {
    //If solar system and planetcard are active then remove previous planetPictureActivation
    planetPicture.classList.remove("active");
    planetPicture.style.backgroundColor = "black";
};

planetCardPictureContainer.addEventListener('click', () => {
    //If planetPicture is active when u click on PlanetCardContainer it should remove previous Planet picture and display solarsystem again
    if (planetPicture.classList.contains('active') ) {
        planetPicture.classList.remove("active");
        planetCardPictureContainer.style.cursor = "default";
        planetPicture.innerHTML = solarSystem.innerHTML;
        planetPicture.style.backgroundColor = "black";

        //bugg där den matar in samma namn som den första gången man generade galax 
        planetName.innerText = galaxyName;

    };
});

planets.forEach((planet, index) => {
//For every planet that is no the sun generate a rgb color
    if (!planet.classList.contains('sun')){
    planet.style.cursor = "pointer";
    let r= (Math.floor(Math.random() * 255));
    let g = (Math.floor(Math.random() * 255));
    let b= (Math.floor(Math.random() * 255));
planet.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')' ;
} else {
    // The sun shall always remain orange
    planet.style.backgroundColor = "orange";
};


//Randomizes a planet name and removes it from the planetNames array.
const randomNameIndex = Math.floor(Math.random() * planetNames.length);
const name = planetNames[randomNameIndex];
planetNames.splice(planetNames.indexOf(name), 1);


planet.addEventListener('mouseover', () => {
    planet.style.border = "1px solid white";

});

planet.addEventListener('mouseleave', () => {
    planet.style.border = "0px";

});


//planetpicture is always first displayed as the generated solarsystem
planetPicture.innerHTML = solarSystem.innerHTML;


planet.addEventListener('click', () => {
    console.log("click");
    // planet.style.border = "1px solid black";
    if ( !planetPicture.classList.contains('active') ) {
        planetPicture.classList.toggle("active");
        planetCardPictureContainer.style.cursor = "pointer";
        
    };
    planetPicture.innerHTML = planet.innerHTML;
    planetPicture.style.backgroundColor = planet.style.backgroundColor;
    planetName.innerText = name; 
});


})
} );


// let chosenPlanet;

//     let pickPlanet = () => {

//         planet.addEventListener('click', () => {
//             chosenPlanet = planet;
//             console.log(chosenPlanet);
//             pickPlanet();
//         });
    
//     };