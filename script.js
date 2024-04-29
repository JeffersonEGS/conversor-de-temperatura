function converterParaCelsius() {
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var celsius = (temperatura - 32) * 5 / 9;
    document.getElementById("resultado").innerHTML = temperatura + "°F é igual a " + celsius.toFixed(2) + "°C";
    mudarEstiloPagina(temperatura);
}

function converterParaFahrenheit() {
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var fahrenheit = (temperatura * 9 / 5) + 32;
    document.getElementById("resultado").innerHTML = temperatura + "°C é igual a " + fahrenheit.toFixed(2) + "°F";
    mudarEstiloPagina(temperatura);
}

function mudarEstiloPagina(temperatura) {
    if (temperatura >= 0 && temperatura <= 19) {
        document.body.style.backgroundImage = 'url("./imagem/nublado.jpg")';
    } else if (temperatura >= 20 && temperatura <= 30) {
        document.body.style.backgroundImage = 'url("./imagem/quente.jpg")';
    } else {
        document.body.style.backgroundImage = 'url("./imagem/muito_quente.jpg")';
    }
}