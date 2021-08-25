let numerocarta = 0;

function dibujacartas() {
    nrocartas = document.getElementById("nrocartas").value;

    let numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
    let pintas = ["♦", "♥", "♠", "♣"];

    let divcartas = document.querySelector('div.cartas');

    divcartas.innerHTML = " ";  //  Limpio el HTML al pulsar Dibujar para los ciclos

    for (let index = 0; index < nrocartas; index++) {

        let divcarta = document.createElement("div");
        divcarta.classList.add("carta");
        
        function generarnumero(array) {
            let x = Math.floor(Math.random() * array.length);
            return x;
        }
        let indexnumobtenido = generarnumero(numeros);
        let indexpintaobtenida = generarnumero(pintas);
        let numeroobtenido = numeros[indexnumobtenido];
        let pintaobtenida = pintas[indexpintaobtenida];

        if (pintaobtenida === "♦" || pintaobtenida === "♥") {
            color = "red";
        } else {
            color = "black"
        }

        let a1 = document.createElement("a");
        a1.classList.add("superior");
        a1.style.color = color;
        let figura = document.createTextNode(pintaobtenida);
        a1.appendChild(figura);
        divcarta.appendChild(a1);

        let a2 = document.createElement("a");
        a2.classList.add("numero");
        a2.style.color = color;
        let numeroena = document.createTextNode(numeroobtenido);
        a2.appendChild(numeroena);
        divcarta.appendChild(a2);

        let a3 = document.createElement("a");
        a3.classList.add("inferior");
        a3.style.color = color;
        figura = document.createTextNode(pintaobtenida);
        a3.appendChild(figura);
        divcarta.appendChild(a3);

        divcartas.appendChild(divcarta);
    }
};




