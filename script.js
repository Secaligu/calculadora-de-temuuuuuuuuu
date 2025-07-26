function agregar(valor) {
    document.getElementById('resultado').value += valor;
}

function calcular() {
    try {
        const resultado = eval(document.getElementById('resultado').value);
        document.getElementById('resultado').value = resultado;
    } catch (e) {
        document.getElementById('resultado').value = "Error";
    }
}

function borrar() {
    document.getElementById('resultado').value = "";
}                                                
