function converterTemperatura() {
    var temperaturaFahrenheit = parseFloat(document.getElementById("inputFahrenheit").value);
    
    if (isNaN(temperaturaFahrenheit)) {
        alert("Por favor, insira um valor numérico válido para a temperatura.");
        return;
    }
    
    if (temperaturaFahrenheit < -459.67) {
        alert("A temperatura inserida está abaixo do zero absoluto (-459.67°F).");
        return;
    }
    
    var temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;
    document.getElementById("resultadoCelsius").innerHTML = "A temperatura em Celsius é: " + temperaturaCelsius.toFixed(2);

    var body = document.getElementsByTagName("body")[0];

    if (temperaturaCelsius > 30) {
        body.classList.remove("lightblue");
        body.classList.add("orange");
    } else {
        body.classList.remove("orange");
        body.classList.add("lightblue");
    }
}
