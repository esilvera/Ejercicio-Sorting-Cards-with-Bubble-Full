let arraycartas = [];

function dibujacartas() {
    nrocartas = document.getElementById("nrocartas").value;

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
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
        let numero = document.createTextNode(obtenerValor(numeroobtenido));
        a2.appendChild(numero);
        divcarta.appendChild(a2);

        let a3 = document.createElement("a");
        a3.classList.add("inferior");
        a3.style.color = color;
        figura = document.createTextNode(pintaobtenida);
        a3.appendChild(figura);
        divcarta.appendChild(a3);

        divcartas.appendChild(divcarta);  // Agrego ya la carta diseñada al div Cartas

        arraycartas[index] = { numeroobtenido, pintaobtenida }; // Lleno el arraycartas con los datos para ordenar
    }

};
console.log(arraycartas);

function obtenerValor(numero) {
    if (numero === 11) return "J";
    if (numero === 12) return "Q";
    if (numero === 13) return "K";
    if (numero === 1) return "A";
    return numero;
};

function ordenaCartas() {
    console.log(bubbleSort(arraycartas));
};

let divcartasorden = document.querySelector('div.cartasorden');

const bubbleSort = (arr = []) => {
    console.log("antes de ordenar cartas");
    let wall = arr.length - 1;
    while (wall >= 0) {
        let index = 0;
        while (index < wall) {
            // Comparar
            console.log("voy a comparar cartas");
            console.log(arr[index].numeroobtenido + "contra" + arr[index + 1].numeroobtenido);
            if (arr[index].numeroobtenido > arr[index + 1].numeroobtenido) {
                console.log("es mayor");
                let aux = arr[index + 1];
                arr[index + 1] = arr[index];
                arr[index] = aux;
            }
            // codigo para generar e imprimir
            console.log("index: " + index);
            console.log("wall: " + wall);

            let divcarta = document.createElement("div");
            divcarta.classList.add("carta");
console.log("VOY A GUARDAR NUMERO Y PINTA");
            let numeroobtenido = arraycartas[index].numeroobtenido;
console.log("YA GUARDE NUMERO Y TIENE " + numeroobtenido);            
            let pintaobtenida = arraycartas[index].pintaobtenida;
console.log("YA GUARDE PINTA Y TIENE "+ pintaobtenida);

            if (pintaobtenida === "♦" || pintaobtenida === "♥") {
                color = "red";
            } else {
                color = "black"
            }

            let a1 = document.createElement("index");
            a1.classList.add("superior");
            a1.style.color = color;
            let figura = document.createTextNode(pintaobtenida);
            a1.appendChild(figura);
            divcarta.appendChild(a1);

            let a2 = document.createElement("index");
            a2.classList.add("numero");
            a2.style.color = color;
            let numero = document.createTextNode(obtenerValor(numeroobtenido));
            a2.appendChild(numero);
            divcarta.appendChild(a2);

            let a3 = document.createElement("index");
            a3.classList.add("inferior");
            a3.style.color = color;
            figura = document.createTextNode(pintaobtenida);
            a3.appendChild(figura);
            divcarta.appendChild(a3);

            // Dibujo la carta
            console.log("**** DIBUJO LA CARTA *****");
            divcartasorden.appendChild(divcarta);  // Agrego ya la carta diseñada al div Cartas

            index++;
            console.log("incremento index tiene " + index);
        };  // cierre del while index < wall
        wall--;
        console.log("disminuyo wall tiene " + wall);
    }; // cierre while wall >= 0
    return arr;
};






