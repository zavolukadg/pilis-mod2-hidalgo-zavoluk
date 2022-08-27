let contador = 1;

function onClick(event) {
    event.preventDefault();

    const mensaje = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

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
                icon:'success',
                timer: 4000
                }
            );
            cleanForm();
        })
        .catch((err) => console.log(err));
}

function cleanForm() {
    let formulario = document.getElementById('formulario');
    formulario.reset();
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

