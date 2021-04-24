const panel = document.querySelector("#panel");
const panelImg = document.querySelector("#panelImg");
const panelText = document.querySelector("#panelText");

const buttonClose = document.querySelector("#close");
const buttonImg = document.querySelector("#buttonImg");
const buttonText = document.querySelector("#buttonText");

//cuando hago click en boton de cerrar se cierra el panel (aside completo)
//agregar la clase ocular:
      
buttonClose.addEventListener("click",()=>{
    panel.classList.add("ocultar");
});

// cuando hago click en el boton de imagen o en el boton texto debe verse el panel
// quitar la clase ocular:
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

//----------PANEL IMAGEN------------

const inputImg = document.querySelector("#url");
const img = document.querySelector("#img");

//cargar imagen:
inputImg.addEventListener("input", () => {
    img.src = inputImg.value;
});

let topText = document.getElementById("topText");
let bottomText = document.getElementById("bottomText");
let divText = document.getElementById("divText");
const fondo = document.getElementById("color");

//color de fondo de imagen:
fondo.addEventListener("input", () => {
    divText.style.backgroundColor = fondo.value;
});

//Filtros:
let brightness = document.getElementById("brightness");
let opacity = document.getElementById("opacity");
let contrast = document.getElementById("contrast");
let blur = document.getElementById("blur");
let grayscale = document.getElementById("grays");
let sepia = document.getElementById("sepia");
let hue = document.getElementById("hue");
let saturated = document.getElementById("saturated");
let negative = document.getElementById("negative");
const actualizarFiltros = ()=>{ 
    img.style.filter = `brightness(${brightness.value}) 
    opacity(${opacity.value}) 
    contrast(${contrast.value}%)
    blur(${blur.value}px) 
    grayscale(${grayscale.value}%) 
    sepia(${sepia.value}%) 
    hue(${hue.value}deg) 
    saturated(${saturated.value}%) 
    negative(${negative.value})`;
}
console.log(actualizarFiltros);

brightness.addEventListener("change", () => {
    img.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) `;
});
opacity.addEventListener("change", () => {
    img.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) `;
});
contrast.addEventListener("change", () => {
    img.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%)`;
});
blur.addEventListener("change", () => {
    img.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%)`;
});
grayscale.addEventListener("change", () => {
    img.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%)`;
});
/*

brightness.addEventListener("change", actualizarFiltros);
opacity.addEventListener("change", actualizarFiltros);
contrast.addEventListener("change", actualizarFiltros);
blur.addEventListener("change", actualizarFiltros);
grayscale.addEventListener("change", actualizarFiltros);
sepia.addEventListener("change", actualizarFiltros);
hue.addEventListener("change", actualizarFiltros);
saturated.addEventListener("change", actualizarFiltros);
negative.addEventListener ("change", actualizarFiltros);
//Resetear filtros:
/*para resetear los filtros evento click en el boton de resetear y vuelvan a su valor original los range y reutilicen la funcion actualizar filtros para que actualice con esos valores... seria se "borran"
brightness.value = "1"; opacity.value = "1"; contrast.value = "1000"; blur_.value = "0"; grayscale.value = "0"; sepia.value = "0"; hue.value = "0"; saturation.value = "100"; negative.value = "0"; actualizarFiltros();
Eso dentro del evento
 */


//-----------PANEL TEXTO-----------

let inputTopText = document.getElementById("inputTopText");
topText.textContent = "TOP TEXT";
inputTopText.textContent = "TOP TEXT";

inputTopText.addEventListener("input", () => {
    topText.textContent = inputTopText.value;
});
//Para quitar texto superior:
let sinTopText = document.getElementById("sinTopText");
sinTopText.addEventListener("input",()=>{             
        topText.classList.toggle("ocultar");  
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
//Para Cambiar color del fondo del texto:
const fondoLetra = document.getElementById("fondoLetra");

fondoLetra.addEventListener("input", () => {
   topText.style.backgroundColor = fondoLetra.value;
   bottomText.style.backgroundColor = fondoLetra.value;
});
//Para cambiar color de letra en el texto:
const colorLetra = document.getElementById("colorLetra");

colorLetra.addEventListener("input", () => {
   topText.style.color = colorLetra.value;
   bottomText.style.color = colorLetra.value;
});
//Para cambiar tipografía:
let textFont = document.getElementById("textFontSelect");

textFont.addEventListener("input", () => {
    topText.style.fontFamily = textFont.value;
    bottomText.style.fontFamily = textFont.value;
}
);

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

