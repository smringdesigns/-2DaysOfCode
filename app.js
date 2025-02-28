let nombre = prompt("¿Cuál es tu nombre?");
let edad = parseInt(prompt("¿Cuántos años tienes?"));
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

let mensaje = alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

let pregunta = parseInt(prompt(`¿Te gusta estudiar ${lenguaje}? Responde con 1 para SÍ o 2 para NO.`));

if (pregunta === 1) {
    alert(`¡Muy bien, ${nombre}! Sigue estudiando ${lenguaje} y tendrás mucho éxito.`);
} else if (pregunta === 2) {
    alert(`Oh, ${nombre}, qué pena... ¿Ya intentaste aprender otros lenguajes?`);
} else {
    alert(`Oops, ${nombre}, responde con 1 para SÍ o 2 para NO. Vuelve a intentarlo.`);
};

console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);