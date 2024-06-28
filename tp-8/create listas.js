<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>TP-7: Funciones en JavaScript</title>
</head>
<body>
<script type="text/javascript">
// Numeros

// Implementar una función "suma" que retorne la suma de 2 numeros
// ejemplo: suma(2,3) retorna 5

function suma(num1, num2) {
    return num1 + num2;
}

console.log("suma(2,3): ", suma(2,3))

// Implementar una función "elevarAlCubo" que eleve al cubo un numero
// ejemplo: elevarAlCubo(3) retorna 27

let elevarAlCubo = num => {
    return num**3;
}

console.log("elevarAlCubo(3): ", elevarAlCubo(3))

// Implementar una función "restoDivisionEntera" para devolver el resto de una división entera entre un dividendo y un divisor
// ejemplo: restoDivisionEntera(3,2) retorna 1

let funcionRestoDivisionEntera = function(dividendo,divisor){
    return dividendo % divisor
}

console.log("restoDivisionEntera(3,2): ", funcionRestoDivisionEntera(3,2))

// Implementar una función "numeroPi" para devolver el numero PI
// ejemplo: numeroPi() retorna 3,14...

function numeroPi(){
    return Math.PI
}

console.log("numeroPi(): ", numeroPi())

// Implementar una función "numeroRandom" para devolver un número random / aleatorio
// ejemplo: numeroRandom() retorna 0,123...

function numeroRandom() {
    return Math.random();
}

console.log("numeroRandom(): ", numeroRandom())

// Implementar una función "mejorNumeroRandom" para devolver un número random entre 2 valores recibidos como parámetros
// ejemplo: mejorNumeroRandom(1,6) retorna 3

function mejorNumeroRandom(min, max) {
    return Math.random() * (max - min) + min;
}

console.log("mejorNumeroRandom(1,6): ", mejorNumeroRandom(1,6))

// Cadenas de Caracteres

// Implementar una función "transformarMayuscula" que transforme a mayúscula la palabra recibida como parámetro
// ejemplo: transformarMayuscula("Plataformas Móviles") retorna "PLATAFORMAS MÓVILES"

function transformarMayuscula(text) {
    return text.toUpperCase();
}

console.log("transformarMayuscula(\"Plataformas Móviles\"): ", transformarMayuscula("Plataformas Móviles"))

// Implementar una función "primeraLetra" que nos devuelva la inicial de la palabra recibida como parámetro
// ejemplo: primeraLetra("Plataformas") retorna "P"

function primeraLetra(text) {
    return text.charAt(0);
}

console.log("primeraLetra(\"Plataformas\"): ", primeraLetra("Plataformas"))

// Implementar una función "ultimaLetra" que nos devuelva la letra final la palabra recibida como parámetro
// ejemplo: ultimaLetra("Plataformas") retorna "s"

function ultimaLetra(text) {
    return text.charAt(text.length - 1);
}

console.log("ultimaLetra(\"Plataformas\"): ", ultimaLetra("Plataformas"))

// Implementar una función "primeraLetraMayuscula" que devuelve la palabra original con su primera letra en mayúscula
// ejemplo: primeraLetraMayuscula("plataformas") retorna "Plataformas"

function primeraLetraMayuscula(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

console.log("primeraLetraMayuscula(\"plataformas\"): ", primeraLetraMayuscula("plataformas"))

// Implementar una función "palabraAListaDeLetras" que dada una palabra me retorne un listado de sus letras
// ejemplo: palabraAListaDeLetras("hola") retorna ['h', 'o', 'l', 'a'];

function palabraAListaDeLetras(text) {
    return text.split('');
}

console.log("palabraAListaDeLetras(\"hola\"): ", palabraAListaDeLetras("hola"))

// Implementar una función "listaDeLetrasAPalabra" que dado un listado de letras, devuelva una palabra
// ejemplo: listadoDeLetrasAPalabra(["h", "o", "l", "a"]) retorna "hola";

function listadoDeLetrasAPalabra(lista) {
    return lista.join('');
}

console.log("listadoDeLetrasAPalabra([\"h\", \"o\", \"l\", \"a\"]): ", listadoDeLetrasAPalabra(["h", "o", "l", "a"]))

// Implementar una función "palabraInvertida" que devuelva la palabra invertida
// ejemplo: palabraInvertida("hola") retorna "aloh";

function palabraInvertida(palabra) {
    return palabra.split('').reverse().join('');
}

console.log("palabraInvertida(\"hola\"): ", palabraInvertida("hola"))

</script>
</body>
</html>