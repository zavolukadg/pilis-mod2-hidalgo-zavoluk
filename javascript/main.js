function obtenerDatosClima() {
    /* fetch("//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5fcf4d95a836d3ef052d3a9dac50386c") */
    fetch("//api.openweathermap.org/data/2.5/weather?&lang=sp&units=metric&lat=-24.1834177&lon=-65.3334866&APPID=5fcf4d95a836d3ef052d3a9dac50386c")
        .then(respuesta => respuesta.json())
        .then(json => {
            console.log(json);
            document.getElementById("cielo").innerText = json.weather[0].description;
            document.getElementById("temperatura").innerText = json.main.temp + "°";
            document.getElementById("humedad").innerText = json.main.humidity + "%";

            document.getElementById("img-clima").src = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png";
        })
}
obtenerDatosClima();

