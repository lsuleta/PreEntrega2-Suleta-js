// let hora1 = 1200
// let hora2 = 1500
// let hora3 = 1800
// let te = 200
// let cafe = 150
// let exprimido = 250

const bebidas = [
    { id: 1, nombre: 'cafe', precio: 150 },
    { id: 2, nombre: 'te', precio: 200 },
    { id: 3, nombre: 'exprimido', precio: 250 },
];

const comidas = [
    { id: 1, nombre: '2 medialunas', precio: 180 },
    { id: 2, nombre: 'chipa 100gr', precio: 220 },
    { id: 3, nombre: 'tostado', precio: 450 },
];

const hsReserva = [
    { id: 1, precio: 1200 },
    { id: 2, precio: 1500 },
    { id: 3, precio: 1800 },
];


let nombre = prompt("Ingrese su nombre")
console.log(nombre);
alert(`Bienvenido/a ${nombre}`)

let mensajeHs = "";

hsReserva.forEach((item) => {
    mensajeHs += `
    Id: ${item.id}
    Precio: $${item.precio}
    `;
});

alert(mensajeHs);

// alert (`Para ingresar al lugar solo con reserva y los montos son para 1 hora: ${hora1}, para 2 horas ${hora2} y para 3 horas ${hora3}`)
let horas = parseInt(prompt("¿Cuantas horas desea reservar?"))
console.log(horas);

while (horas < 1 || horas > 3) {
    alert("No ingreso una cantidad de horas válidas, vuelva a intentarlo")
    prompt("Ingrese una cantidad de horas válidas")
}

if (horas === 1) {
    alert(`Usted deberá abonar $${hsReserva[0].precio}`)
    horas = hsReserva[0].precio
} else if (horas === 2) {
    alert(`Usted deberá abonar $${hsReserva[1].precio}`)
    horas = hsReserva[1].precio
} else if (horas === 3) {
    alert(`Usted deberá abonar $${hsReserva[2].precio}`)
    horas = hsReserva[2].precio
}

let personas = parseInt(prompt("¿Para cuantos es la reserva?"))
console.log(personas);

alert("¿que bebida desea/an consumir?")

let mensajeBebida = "";

bebidas.forEach((item) => {
    mensajeBebida += `
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio: $${item.precio}
`;
});

alert(mensajeBebida);
for (let index = 0; index < personas; index++) {
    // const element = array[index];
    let infusion = parseInt(prompt("¿su eleccion es?"))
    console.log(infusion);

    while (infusion < 1 || infusion > 3) {
        alert("No ingreso una infusión válida, intente nuevamente")
        prompt("¿Desea?")
    }

    if (infusion === 1) {
        alert(`Usted deberá abonar $${bebidas[0].precio}`)
        infusion = bebidas[0].precio
    } else if (infusion === 2) {
        alert(`Usted deberá abonar $${bebidas[1].precio}`)
        infusion = bebidas[1].precio
    } else if (infusion === 3) {
        alert(`Usted deberá abonar $${bebidas[2].precio}`)
        infusion = bebidas[2].precio
    }
    let totalBebidas = 0
    totalBebidas = totalBebidas + infusion
    console.log(totalBebidas);

}

alert("¿que comida desea/an consumir?")

let mensajeComida = "";

comidas.forEach((item) => {
    mensajeComida += `
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio: $${item.precio}
`;
});

alert(mensajeComida);

for (let index = 0; index < personas; index++) {
    // const element = array[index];
    let comida = parseInt(prompt("¿su eleccion es?"))
    console.log(comida);

    while (comida < 1 || comida > 3) {
        alert("No ingreso una comida válida, intente nuevamente")
        prompt("¿Desea?")
    }

    if (comida === 1) {
        alert(`Usted deberá abonar $${comidas[0].precio}`)
        comida = comidas[0].precio
    } else if (comida === 2) {
        alert(`Usted deberá abonar $${comidas[1].precio}`)
        comida = comidas[1].precio
    } else if (comida === 3) {
        alert(`Usted deberá abonar $${comidas[2].precio}`)
        comida = comidas[2].precio
    }
    let totalComidas = 0
    totalComidas = totalComidas + comida
    console.log(totalComidas);

}
function sumarMonto(horas, totalBebidas, totalComidas) {
    return horas + totalComidas + totalBebidas;
}

if (personas < 4) {

    let resultado = sumarMonto(horas, totalBebidas, totalComidas)
    console.log(resultado);
    alert(`El total a pagar es: $${resultado}`)

} else if (personas >= 4) {

    let totalBebidas = bebidas.map((item) => item.precio);
    console.log(totalBebidas);

    let totalComidas = bebidas.map((item) => item.precio);
    console.log(totalComidas);

    let resultado = sumarMonto(horas, totalBebidas, totalComidas)
    console.log(resultado);
    alert(`El total a pagar es: $${resultado}`)
}


// let infusion = parseInt (prompt ("¿Que infusión desea consumir?, las opciones son 1) té, 2) café y 3) exprimido"))
// console.log(infusion);

// while (infusion < 1 || infusion > 3) {
//     alert ("No ingreso una infusión válida, intente nuevamente")
//     prompt ("¿Desea 1) té, 2) café o 3) exprimido?")
// }

// if (infusion === 1) {
//     alert(`Usted deberá abonar $${te}`)
//     infusion = te
// } else if (infusion === 2) {
//     alert(`Usted deberá abonar $${cafe}`)
//     infusion = cafe
// } else if (infusion === 3) {
//     alert(`Usted deberá abonar $${exprimido}`)
//     infusion = exprimido
// }

// function sumarMonto(horas, infusion) {
//     return horas + infusion;
// }

// let resultado = sumarMonto(horas, infusion)
// console.log(resultado);
// alert(`El total a pagar es: $${resultado}`)



// let mensaje = "";

// bebidas.forEach((item) => {
//     mensaje += `
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: $${item.precio}
//   `;
// });

// alert(mensaje);

// console.log(bebidas[0].precio)