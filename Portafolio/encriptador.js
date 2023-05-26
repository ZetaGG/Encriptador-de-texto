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
        let texto= document.getElementById("texto").value=textoCifrado;
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