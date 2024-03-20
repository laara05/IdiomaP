function traducirAP(texto) {

    function esVocal(char) {
        return ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'].includes(char.toLowerCase());
    }

    let palabras = texto.split(' '); 
    let resultado = '';

    palabras.forEach((palabra, index) => {
        for (let i = 0; i < palabra.length; i++) {
            let char = palabra[i];
            
            if (esVocal(char)) {
                resultado += char.toLowerCase() + 'p' + char.toLowerCase();
            } else {
                resultado += char;
            }
        }
        if (index < palabras.length - 1) {
            resultado += ' '; 
        }
    });

    return resultado;
}


let textoEspanol = "Hola";
let textoIdiomaP = traducirAP(textoEspanol);
console.log(textoIdiomaP); 
