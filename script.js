/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var fbPlaatje = document.getElementById("facelogo");
var instaPlaatje = document.getElementById("insta");

function newFace(){
    fbPlaatje.src = "img/f-Logo_Assets/F_Logo_Online_09_2018/Color/PNG/f-ogo_RGB_HEX-58.png";
}
function oldFace(){
    fbPlaatje.src = "img/f-Logo_Assets/F_Logo_Online_09_2018/Black/PNG/flogo-RGB-HEX-Blk-58.png";
}

function newInsta(){
    instaPlaatje.src = "img/GlyphLogo_May2016_Onlinev2/IG_Glyph_Fill.png";
}
function oldInsta(){
    instaPlaatje.src = "img/GlyphLogo_May2016_Onlinev2/glyph-logo_May2016.png";
}

fbPlaatje.addEventListener("mouseover", newFace);
fbPlaatje.addEventListener("mouseout", oldFace);

instaPlaatje.addEventListener("mouseover", newInsta);
instaPlaatje.addEventListener("mouseout", oldInsta);