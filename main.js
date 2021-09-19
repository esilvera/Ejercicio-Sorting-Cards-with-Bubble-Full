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
function obtenerValor(numero) {
    if (numero === 11) return "J";
    if (numero === 12) return "Q";
    if (numero === 13) return "K";
    if (numero === 1) return "A";
    return numero;
};

function ordenaCartas() {
    /*     console.log(bubbleSort(arraycartas));  */
    bubbleSort(arraycartas)
};

let divcartasorden = document.querySelector('div.cartasorden');

const bubbleSort = (arr = []) => {
    let wall = arr.length - 1;
    let change = 0;

    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            if (arr[index].numeroobtenido > arr[index + 1].numeroobtenido) {
                change = 1;
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
            }
            console.log(index);
            console.log(wall);
            if (change == 1) {
                change = 0;
                for (let i = 0; i < arr.length; i++) {
                    // ***
                    let divcarta = document.createElement("div");
                    divcarta.classList.add("carta");

                    numeroobtenido = arr[i].numeroobtenido;
                    pintaobtenida = arr[i].pintaobtenida;

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

                    divcartasorden.appendChild(divcarta);
                    // ***
                    if (i == arr.length - 1) {
                        let saltoLinea = document.createElement("div");
                        divcartasorden.appendChild(saltoLinea);
                    }
                }
            }
            index++;
        };
        wall--;
    };
    return arr;
};






