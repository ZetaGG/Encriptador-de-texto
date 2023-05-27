function encriptar(){
    let texto= document.getElementById("texto").value;
    let tituloMensaje= document.getElementById("titulo-mensaje");
    let parrafo= document.getElementById("parrafo");
    let draw= document.getElementById("draw");


    let textoCifrado = texto
                        .replace(/a/gi,"alax")
                        .replace(/e/gi, "exa")
                        .replace(/i/gi, "irman")
                        .replace(/u/gi, "ufeo")
                        .replace(/o/gi, "ovnie");

    if  (texto.length !=0 ){
        document.getElementById("texto").value=textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent="";
        draw.src="/Portafolio/Img encript/dev-ball.png";
    }

    else{
        draw.src="/Portafolio/Img encript/Vaporeon Confundido.png";
        tituloMensaje.textContent="Ningun mensaje fue encontrado"
        alert("Debes escribir alguna palabra");
    }
}

    function desencriptar() {
        let texto = document.getElementById("texto").value;
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("parrafo");
        let muñeco = document.getElementById("muñeco");
      
        let textoCifrado = texto
          .replace(/exa/gi, "e")
          .replace(/irman/gi, "i")
          .replace(/alax/gi, "a")
          .replace(/ovnie/gi, "o")
          .replace(/ufeo/gi, "u");
        
          if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con éxito";
            parrafo.textContent = "";
            draw.src = "/Portafolio/Img encript/Vaporeon.png";
          } else {
            draw.src = "/Portafolio/Img encript/Vaporeon Confundido.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            alert("Ooops!", "Debes ingresar un texto", "warning");
          }
        }