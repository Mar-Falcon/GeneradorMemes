'use strict';

const panel = document.querySelector("#panel");
const panelImg = document.querySelector("#panelImg");
const panelText = document.querySelector("#panelText");
const buttonClose = document.querySelector("#close");
const buttonImg = document.querySelector("#buttonImg");
const buttonText = document.querySelector("#buttonText");
const inputImg = document.querySelector("#url");
const divImg = document.getElementById ("divImg");
const divMeme = document.getElementById("divMeme");
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");
const fondo = document.getElementById("color");
const colorCodeImg = document.getElementById ("colorCodeImg");
const selectBlendMode = document.getElementById("selectBlendMode");
const brightness = document.getElementById("brightness");
const opacity = document.getElementById("opacity");
const contrast = document.getElementById("contrast");
const blur = document.getElementById("blur");
const grayscale = document.getElementById("grays");
const sepia = document.getElementById("sepia");
const hue = document.getElementById("hue");
const saturation = document.getElementById("saturation");
const negative = document.getElementById("negative");
const resetFiltros = document.getElementById("resetFiltros");
const inputTopText = document.getElementById("inputTopText");
const sinTopText = document.getElementById("sinTopText");
const inputBottomText = document.getElementById("inputBottomText");
const sinBottomText = document.getElementById("sinBottomText");
const fondoLetra = document.getElementById("fondoLetra");
const colorCodeBackText = document.getElementById ("colorCodeBackText");
const colorLetra = document.getElementById("colorLetra");
const colorCodeText = document.getElementById ("colorCodeText");
const textFont = document.getElementById("textFontSelect");
const inputFontSize = document.getElementById("inputFontSize");
const alignLeft = document.getElementById("alignLeft");
const alignRight = document.getElementById("alignRight");
const alignCenter= document.getElementById("alignCenter");
const fondoTransparente = document.getElementById ("fondoTransparente");
const clearOutline = document.getElementById ("clearOutline");
const darkOutline = document.getElementById ("darkOutline");
const noOutline = document.getElementById ("noOutline");
const letterMargin = document.getElementById ("letterMargin");
const lineSpacing = document.getElementById ("lineSpacing");
const header = document.getElementById("header");
const buttonMode = document.getElementById("mode");
const main = document.getElementById("main");
let modo = "claro";
const download = document.getElementById ("downloadMeme");

//Click en boton de cerrar se cierra el panel (aside completo)
//agregar la clase ocular:      
buttonClose.addEventListener("click",()=>{
    panel.classList.add("ocultar");
});

// Click en el boton de imagen o texto, debe verse el panel correspondiente
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

//cargar imagen:
inputImg.addEventListener("input", () => {
    const url = inputImg.value;
    divImg.style.backgroundImage = `url(${url})`;
});

//color de fondo de imagen:
fondo.addEventListener("input", () => {
    divImg.style.backgroundColor = fondo.value;
    colorCodeImg.textContent = `${fondo.value}`;
});

//Efectos de imagen: 
selectBlendMode.addEventListener("input", () => {
    divImg.style.backgroundBlendMode = selectBlendMode.value
});

//Filtros:
const actualizarFiltros = ()=>{ 
    divImg.style.filter = `brightness(${brightness.value}) 
    opacity(${opacity.value}) 
    contrast(${contrast.value}%)
    blur(${blur.value}px) 
    grayscale(${grayscale.value}%) 
    sepia(${sepia.value}%)
    hue-rotate(${hue.value}deg) 
    saturate(${saturation.value}%) 
    invert(${negative.value})`;
}
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
resetFiltros.addEventListener("click",()=>{
    divImg.style.filter = brightness.value = "1"; opacity.value = "1"; contrast.value = "100"; blur.value = "0"; grayscale.value = "0"; sepia.value = "0"; hue.value = "0"; saturation.value = "100"; negative.value = "0"; actualizarFiltros();
});

//-----------PANEL TEXTO-----------

//Ingresar Texto superior:
inputTopText.addEventListener("input", () => {
    topText.textContent = inputTopText.value;
});

//Quitar texto superior:
sinTopText.addEventListener("input",()=>{             
    topText.classList.toggle("ocultar");  
}); 

//Ingresar Texto inferior:
inputBottomText.addEventListener("input",()=>{
    bottomText.textContent = inputBottomText.value;
});

//Quitar Texto Inferior:
sinBottomText.addEventListener("input",()=>{    
    bottomText.classList.toggle("ocultar");     
});

//Cambiar color del fondo del texto:
fondoLetra.addEventListener("input", () => {
   topText.style.backgroundColor = fondoLetra.value;
   bottomText.style.backgroundColor = fondoLetra.value;
   colorCodeBackText.textContent = `${fondoLetra.value}`;
});

//Cambiar color de letra del texto:
colorLetra.addEventListener("input", () => {
   topText.style.color = colorLetra.value;
   bottomText.style.color = colorLetra.value;
   colorCodeText.textContent = `${colorLetra.value}`;
});

//Cambiar tipografía:
textFont.addEventListener("input", () => {
    topText.style.fontFamily = textFont.value;
    bottomText.style.fontFamily = textFont.value;
});

//Tamaño de Letra:
inputFontSize.addEventListener("input", () => {
    topText.style.fontSize = `${inputFontSize.value}px`;
    bottomText.style.fontSize =`${inputFontSize.value}px`;
});

//Alineado:
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

//Fondo Transparente: 
fondoTransparente.addEventListener("input", () =>{
    if(fondoTransparente.checked){  
        fondoLetra.disabled = true;
        topText.style.backgroundColor = `transparent`;
        bottomText.style.backgroundColor = `transparent`;    
        topText.style.position = `absolute`;
        bottomText.style.position = `absolute`;
    }else{
        fondoLetra.disabled = false;
        topText.style.backgroundColor = `${fondoLetra.value}`;
        bottomText.style.backgroundColor = `${fondoLetra.value}`;
        topText.style.position = `static`;
        bottomText.style.position = `static`;         
    }   
});

//Contorno letra:
clearOutline.addEventListener ("click", ()=>{
    topText.classList.add ("clearOutline");
    bottomText.classList.add ("clearOutline");
});

darkOutline.addEventListener ("click", ()=>{
    topText.classList.add("darkOutline");
    bottomText.classList.add ("darkOutline");
    topText.classList.remove ("clearOutline");
    bottomText.classList.remove ("clearOutline");
});

noOutline.addEventListener ("click", ()=>{
    topText.classList.remove("darkOutline");
    bottomText.classList.remove ("darkOutline");
    topText.classList.remove ("clearOutline");
    bottomText.classList.remove ("clearOutline");
});

//Espaciado:
letterMargin.addEventListener ("input", ()=>{
    topText.style.padding= `${letterMargin.value}px`;
    bottomText.style.padding=`${letterMargin.value}px`;
});

//Interlineado:
lineSpacing.addEventListener("change", () => {
    topText.style.lineHeight = lineSpacing.value;
    bottomText.style.lineHeight = lineSpacing.value;    
});

//Modo Oscuro:
buttonMode.addEventListener('click', () => {
    header.classList.toggle("dark");
    buttonImg.classList.toggle("dark");
    buttonText.classList.toggle("dark");
    buttonMode.classList.toggle("dark");
    document.body.classList.toggle("darkMain");
    main.classList.toggle("darkMain");
    panel.classList.toggle("darkPanel");  
    buttonClose.classList.toggle("white");
    if(modo != "claro"){
        modo = "claro";  
        buttonMode.innerHTML=`<i class="far fa-lightbulb buttonIconText" aria-hidden="true"></i> Modo oscuro`; 
    }else{
        modo = "oscuro";
        buttonMode.innerHTML=`<i class="far fa-lightbulb buttonIconText" aria-hidden="true"></i> Modo claro`;
    };  
});

//Descarga de imagen:
download.addEventListener("click",()=>{
    domtoimage.toBlob(divMeme)
      .then(function (blob){
      window.saveAs(blob, 'meme.png');
    });
});



