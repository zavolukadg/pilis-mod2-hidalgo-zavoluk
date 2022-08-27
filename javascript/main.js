let contador = 1;

function onClick(event) {
    event.preventDefault();

    const mensaje = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        tipo: document.getElementById('tipo').value
    }
    console.log(mensaje);


    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(mensaje),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((response) => response.json())
        .then((json) => {
            let resultado = parseInt(json.id) + contador;
            contador++;
            console.log(json);
            Swal.fire({
                title:'Bienvenido ' + json.name,
                text:'Eres el participante n° ' + resultado,
                item:'success',
                timer: 4000
                }
            );
            cleanForm();
            /* redirectUrl(); */
        })
        .catch((err) => console.log(err));

}

function cleanForm() {
    let formulario = document.getElementById('formulario');
    formulario.reset();
}
function redirectUrl() {
    window.location.href = "https://google.com";
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

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

