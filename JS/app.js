'use strict';

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
let divImg = document.getElementById ("divImg");
let divMeme = document.getElementById("divMeme");

//cargar imagen:
inputImg.addEventListener("input", () => {
    const url = inputImg.value;
    divImg.style.backgroundImage = `url(${url})`;
});

let topText = document.getElementById("topText");
let bottomText = document.getElementById("bottomText");
const fondo = document.getElementById("color");

//color de fondo de imagen:
fondo.addEventListener("input", () => {
    divImg.style.backgroundColor = fondo.value;
});

//Efectos de imagen: 
let selectBlendMode = document.getElementById("selectBlendMode");

selectBlendMode.addEventListener("input", () => {
    divImg.style.backgroundBlendMode = selectBlendMode.value
});

//Filtros:
let brightness = document.getElementById("brightness");
let opacity = document.getElementById("opacity");
let contrast = document.getElementById("contrast");
let blur = document.getElementById("blur");
let grayscale = document.getElementById("grays");
let sepia = document.getElementById("sepia");
let hue = document.getElementById("hue");
let saturation = document.getElementById("saturation");
let negative = document.getElementById("negative");

const actualizarFiltros = ()=>{ 
    divImg.style.filter = `brightness(${brightness.value}) 
    opacity(${opacity.value}) 
    contrast(${contrast.value}%)
    blur(${blur.value}px) 
    grayscale(${grayscale.value}%) 
    sepia(${sepia.value}%)
    hue-rotate(${hue.value}deg) 
    saturate(${saturation.value}%) 
    invert(${negative.value})
    `;
}
/*ESTOS SON LOS EVENTOS INDIVIDUALES SIN FUNCION:
brightness.addEventListener("change", () => {
    img.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%)   `;
});
opacity.addEventListener("change", () => {
    img.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%)   `;
});
contrast.addEventListener("change", () => {
    img.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%)   `;
});
blur.addEventListener("change", () => {
    img.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%)  `;
});
grayscale.addEventListener("change", () => {
    img.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%)   `;
});
sepia.addEventListener("change", () => {
    img.style.filter = `brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}%)    `;
});*/

brightness.addEventListener("change", actualizarFiltros);
opacity.addEventListener("change", actualizarFiltros);
contrast.addEventListener("change", actualizarFiltros);
blur.addEventListener("change", actualizarFiltros);
grayscale.addEventListener("change", actualizarFiltros);
sepia.addEventListener("change", actualizarFiltros);
hue.addEventListener("change", actualizarFiltros);
saturation.addEventListener("change", actualizarFiltros);
negative.addEventListener ("change", actualizarFiltros);

//Resetear filtros:

let resetFiltros = document.getElementById("resetFiltros");

resetFiltros.addEventListener("click",()=>{
    divImg.style.filter = brightness.value = "1"; opacity.value = "1"; contrast.value = "100"; blur.value = "0"; grayscale.value = "0"; sepia.value = "0"; hue.value = "0"; saturation.value = "100"; negative.value = "0"; actualizarFiltros();
});


//-----------PANEL TEXTO-----------

//Ingresar Texto superior:
let inputTopText = document.getElementById("inputTopText");

inputTopText.addEventListener("input", () => {
    topText.textContent = inputTopText.value;
});

//Quitar texto superior:
let sinTopText = document.getElementById("sinTopText");
sinTopText.addEventListener("input",()=>{             
        topText.classList.toggle("ocultar");  
}); 

//Ingresar Texto inferior:
const inputBottomText = document.getElementById("inputBottomText");

inputBottomText.addEventListener("input",()=>{
    bottomText.textContent = inputBottomText.value;
});

//Quitar Texto Inferior:
let sinBottomText = document.getElementById("sinBottomText");
sinBottomText.addEventListener("input",()=>{    
    bottomText.classList.toggle("ocultar");     
});

//Cambiar color del fondo del texto:
const fondoLetra = document.getElementById("fondoLetra");

fondoLetra.addEventListener("input", () => {
   topText.style.backgroundColor = fondoLetra.value;
   bottomText.style.backgroundColor = fondoLetra.value;
});

//Cambiar color de letra del texto:
const colorLetra = document.getElementById("colorLetra");

colorLetra.addEventListener("input", () => {
   topText.style.color = colorLetra.value;
   bottomText.style.color = colorLetra.value;
});

//Cambiar tipografía:
let textFont = document.getElementById("textFontSelect");

textFont.addEventListener("input", () => {
    topText.style.fontFamily = textFont.value;
    bottomText.style.fontFamily = textFont.value;
});

//Tamaño de Letra:
let inputFontSize = document.getElementById("inputFontSize");

inputFontSize.addEventListener("input", () => {
    topText.style.fontSize = `${inputFontSize.value}px`;
    bottomText.style.fontSize =`${inputFontSize.value}px`;
});

//Alineado:
let alignLeft = document.getElementById("alignLeft");
let alignRight = document.getElementById("alignRight");
let alignCenter= document.getElementById("alignCenter");

alignLeft.addEventListener("click",()=>{
    topText.style.textAlign=`${alignLeft.value}left`;
    bottomText.style.textAlign=`${alignLeft.value}left`;
});
alignRight.addEventListener("click",()=>{
    topText.style.textAlign=`${alignRight.value}right`;
    bottomText.style.textAlign=`${alignRight.value}right`;
});
alignCenter.addEventListener("click",()=>{
    topText.style.textAlign=`${alignCenter.value}center`;
    bottomText.style.textAlign=`${alignCenter.value}center`;
});

//Fondo Transparente: FUNCIONA MASO, se borra el texto de arriba y sube el de abajo
let fondoTransparente = document.getElementById ("fondoTransparente")

fondoTransparente.addEventListener("input", () =>{
    if(fondoTransparente.checked){  
        topText.style.backgroundColor = `transparent`;
        bottomText.style.backgroundColor = `transparent`;    
        topText.style.position = `absolute`;
        bottomText.style.position = `absolute`;
        fondoLetra.disabled = true;  
    }else{
        topText.style.backgroundColor = `${fondoLetra.value}`;
        bottomText.style.backgroundColor = `${fondoLetra.value}`;
        topText.style.position = `static`;
        bottomText.style.position = `static`;
        fondoLetra.disabled = false; 
    }   
});

//Contorno letra:
let clearOutline = document.getElementById ("clearOutline");

clearOutline.addEventListener ("click", ()=>{
    topText.classList.add ("clearOutline");
    bottomText.classList.add ("clearOutline");
});

let darkOutline = document.getElementById ("darkOutline");

darkOutline.addEventListener ("click", ()=>{
    topText.classList.add("darkOutline");
    bottomText.classList.add ("darkOutline");
    topText.classList.remove ("clearOutline");
    bottomText.classList.remove ("clearOutline");
});

let noOutline = document.getElementById ("noOutline");

noOutline.addEventListener ("click", ()=>{
    topText.classList.remove("darkOutline");
    bottomText.classList.remove ("darkOutline");
    topText.classList.remove ("clearOutline");
    bottomText.classList.remove ("clearOutline");
});

//Espaciado:

let letterMargin = document.getElementById ("letterMargin");

letterMargin.addEventListener ("input", ()=>{
    topText.style.padding= `${letterMargin.value}px`;
    bottomText.style.padding=`${letterMargin.value}px`;
});

//Interlineado:

let lineSpacing = document.getElementById ("lineSpacing");

lineSpacing.addEventListener("change", () => {
    topText.style.lineHeight = lineSpacing.value;
    bottomText.style.lineHeight = lineSpacing.value;    
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

