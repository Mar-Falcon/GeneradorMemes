const panel = document.querySelector("#panel");
const panelImg = document.querySelector("#panelImg");
const panelText = document.querySelector("#panelText");

const buttonClose = document.querySelector("#close");
const buttonImg = document.querySelector("#buttonImg");
const buttonText = document.querySelector("#buttonText");

//cuando hago click en boton de cerrar se cierra el panel (aside completo)
//agregar la clase ocular
      
buttonClose.addEventListener("click",()=>{
    panel.classList.add("ocultar");
});

// cuando hago click en el boton de imagen o en el boton texto debe verse el panel
// quitar la clase ocular
buttonText.addEventListener("click",()=>{
    panel.classList.remove("ocultar");
    panelImg.classList.add("ocultar");
    panelText.classList.remove("ocultar");
});

buttonImg.addEventListener("click",()=>{
    panel.classList.remove("ocultar");
    panelText.classList.add("ocultar");
    panelImg.classList.remove("ocultar");
});

//Eventos Panel Imagen:

const inputImg = document.querySelector("#url");
const img = document.querySelector("#img");

//esto es para cargar imagen
inputImg.addEventListener("input", () => {
    img.src = inputImg.value;
});

let topText = document.getElementById("topText");
let bottomText = document.getElementById("bottomText");
let divText = document.getElementById("divText");
const fondo = document.getElementById("color");

//color de fonde de imagen
fondo.addEventListener("input", () => {
    divText.style.backgroundColor = fondo.value;
}); 

//Panel texto:

let inputTopText = document.getElementById("inputTopText");
topText.textContent = "TOP TEXT";
inputTopText.textContent = "TOP TEXT";

inputTopText.addEventListener("input", () => {
    topText.textContent = inputTopText.value;
});
//Para quitar texto superior:
let sinTopText = document.getElementById("sinTopText");
sinTopText.addEventListener("input",()=>{    
        topText.textContent ="";  
        //inputTopText.textContent ="";    
        topText.classList.toggle("textMeme") = sinTopText.value;  
}); 
//ANALIZAR TEMA INPUT que no ingrese cuando indico sin texto superior.

const inputBottomText = document.getElementById("inputBottomText");
bottomText.textContent = "BOTTOM TEXT";
let sinBottomText = document.getElementById("sinBottomText");

inputBottomText.addEventListener("input",()=>{
    bottomText.textContent = inputBottomText.value;
});

sinBottomText.addEventListener("input",()=>{
    bottomText.textContent ="";
    bottomText.classList.toggle("textMeme") = sinBottomText.value;     
});

const fondoLetra = document.getElementById("fondoLetra");

fondoLetra.addEventListener("input", () => {
   topText.style.backgroundColor = fondoLetra.value;
   bottomText.style.backgroundColor = fondoLetra.value;
});

const colorLetra = document.getElementById("colorLetra");

colorLetra.addEventListener("input", () => {
   topText.style.color = colorLetra.value;
   bottomText.style.color = colorLetra.value;
});

//Modo Oscuro:
const header = document.getElementById("header");
const buttonMode = document.getElementById("mode");
const main = document.getElementById("main");
let modo = "claro";

buttonMode.addEventListener('click', () => {
  header.classList.toggle("dark");
  buttonImg.classList.toggle("dark");
  buttonText.classList.toggle("dark");
  buttonMode.classList.toggle("dark");
  document.body.classList.toggle("darkMain");
  main.classList.toggle("darkMain");
  panel.classList.toggle("darkPanel");  
  buttonClose.classList.toggle("white");
  if(modo != "claro") 
  {
   modo = "claro";  
   buttonMode.innerHTML=`<i class="far fa-lightbulb buttonIconText" aria-hidden="true"></i> Modo claro`; 
  }
  else{
      modo = "oscuro";
      buttonMode.innerHTML=`<i class="far fa-lightbulb buttonIconText" aria-hidden="true"></i> Modo oscuro`;
      };  
});

