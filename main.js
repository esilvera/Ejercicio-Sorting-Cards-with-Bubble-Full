/* window.onload = function() {
    

};
*/

let numeros = ["2","3","4","5","6","7","8","9","J","Q","K","A"];
let pintas = ["♦", "♥", "♠", "♣"];

function generarnumero(array){
    let x = Math.floor(Math.random() * array.length);
    return x;
}
let indexnumobtenido = generarnumero(numeros);
let indexpintaobtenida = generarnumero(pintas);

let numeroobtenido = numeros[indexnumobtenido];
let pintaobtenida = pintas[indexpintaobtenida];

if (pintaobtenida === "♦" || pintaobtenida === "♥") {
    color = "red"; 
}else {
    color = "black"
} 