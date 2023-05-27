let texto= document.getElementById("texto").value;
let tituloMensaje= document.getElementById("titulo-mensaje");
let parrafo= document.getElementById("parrafo");
let draw= document.getElementById("draw");
const textA= document.getElementById("textA");
copy.style.display = "none"
textA.style.display = "none"

function encriptar(){
    let texto= document.getElementById("texto").value;
    let tituloMensaje= document.getElementById("titulo-mensaje");
    let parrafo= document.getElementById("parrafo");
    let draw= document.getElementById("draw");
    const textA= document.getElementById("textA");


    let textoCifrado = texto
                        .replace(/a/gi,"alax")
                        .replace(/e/gi, "exa")
                        .replace(/i/gi, "irman")
                        .replace(/u/gi, "ufeo")
                        .replace(/o/gi, "ovnie");

    if  (texto.length !=0 ){
        
        textA.textContent = textoCifrado;
        parrafo.textContent="";
        copy.style.display = "block"
        
        draw.style.display = "none"
        textA.style.display = "flex"
        tituloMensaje.textContent = "";
        parrafo.textContent = ""
        
    }

    else{
        draw.src="/Portafolio/Img encript/Vaporeon Confundido.png";
        tituloMensaje.textContent="Ningun mensaje fue encontrado"
        alert("Debes escribir alguna palabra");
        copy.style.display = "none"
    }
    return textoCifrado
}

    function desencriptar() {
        let texto = document.getElementById("texto").value;
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("parrafo");
        let draw = document.getElementById("draw");
        const textA= document.getElementById("textA");


      
        let textoCifrado = texto
          .replace(/exa/gi, "e")
          .replace(/irman/gi, "i")
          .replace(/alax/gi, "a")
          .replace(/ovnie/gi, "o")
          .replace(/ufeo/gi, "u");
        
          if (texto.length != 0) {
           
            textA.textContent = textoCifrado;
            parrafo.textContent = "";
            draw.style.diplay="none";
            copy.style.display = "block"
            parrafo.style.display = "none"
            draw.style.display = "none"
            parrafo.textContent = ""
            
            textA.style.display = "flex"
            tituloMensaje.textContent = "";
          } else {
            draw.src = "/Portafolio/Img encript/Vaporeon Confundido.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            alert("Ooops!", "Debes ingresar un texto", "warning");
            copy.style.display = "none"
          }
          return textoCifrado
        }

       function copiar(){
      
        textA.select();
        navigator.clipboard.writeText(textA.value)
       
       }