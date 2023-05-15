function converterTemperatura() {
    var temperaturaFahrenheit = parseFloat(document.getElementById("inputFahrenheit").value);
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