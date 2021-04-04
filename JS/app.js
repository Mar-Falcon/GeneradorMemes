const panel = document.querySelector("#panel");
const panelImg = document.querySelector("#panelImg");
const panelText = document.querySelector("#panelText");

const buttonClose = document.querySelector("#close");
const buttonImg = document.querySelector("#buttonImg");
const buttonText = document.querySelector("#buttonText");


//cuando hago click en boton de cerra se cierra el panel(aside completo)
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
})

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
  main.classList.toggle("darkMain");
  panel.classList.toggle("darkPanel");
  document.body.classList.toggle("darkMain");
  //buttonMode.innerHTML=`<i class="far fa-lightbulb buttonIconText" aria-hidden="true"></i> Modo Claro`;
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