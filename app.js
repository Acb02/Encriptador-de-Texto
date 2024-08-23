 /*aqui crearemos las funciones del encriptador de texto
que  son encriptar y desencriptar*/

function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("tituloMensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = "";
    tituloMensaje.textContent = "Texto encriptado con éxito!!";
    parrafo.textContent = textoCifrado;
    muñeco.src = "./img/laurita.jpg";
  } else {
    muñeco.src = "./img/imagen3.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("tituloMensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito!";
      parrafo.textContent = textoCifrado;
      muñeco.src = "./img/desencriptado.jpg";
    } else {
      muñeco.src = "./img/imagen3.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
}
 
function copiarTexto() {
  const textoACopiar = document.getElementById("parrafo").textContent;

  navigator.clipboard.writeText(textoACopiar)
      .then(() => {
          alert("Texto copiado al portapapeles");
      })
      .catch(error => {
          console.error("Error al copiar:", error);
      });
}

