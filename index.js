//Inicializamos creando usuarios // 

const usuario = {}
const arrayUsuarios = []


let decision = parseInt(prompt("Quiere añadir un usuario? 1-Si 2-No"))
while (decision != 1 && decision != 2) {
decision = parseInt(prompt("Ingrese un numero existente. 1-Si 2-No"))
}
while (decision == 1) {

usuario.nombre = prompt("Ingrese su nombre")
usuario.apellido = prompt("Ingrese su apellido")
usuario.edad = parseInt(prompt("Ingrese su edad"))
usuario.email = parseInt(prompt("Ingrese su e-mail"))
while (typeof (usuario.edad) !== 'number' || usuario.edad <= 0) {
    usuario.edad = parseInt(prompt("Ingrese un numero mayor a 0 para su edad"))
}
usuario.ci = parseInt(prompt("Ingrese su C.P"))
while (typeof (usuario.ci) !== 'number' || usuario.ci < 10000000 || usuario.ci > 99999999) {
    usuario.ci = parseInt(prompt("Ingrese un numero con 8 digitos para su dni"))
}

arrayUsuarios.push(usuario)

decision = parseInt(prompt("Quiere seguir añadiendo usuarios? 1-Si 2-No"))
while (decision != 1 && decision != 2) {
    decision = parseInt(prompt("Ingrese un numero existente. 1-Si 2-No"))
}
}

alert("Gracias por realizar el registro")

// Variables //

let facturaTotal = 0
let servicioSeleccionado = parseInt(prompt('Ingresa el servicio a contratar: 1.Desarrollo Web - 2.Desarrollo de Aplicaciones - 3.Diseño UI/UX - 4.Diseño Gráfico'))
let continuarComprando = true
let resolucion
let servicios = []
let carrito = []

// Funciones // 

const servicio1 = {
    nombre: 'Desarrollo Web',
    precio: 2500
}
servicios.push(servicio1)

const servicio2 = {
    nombre: 'Desarrollo Aplicaciones',
    precio: 4000,
}
servicios.push(servicio2)

const servicio3 = {
    nombre: 'Desarrollo UI/UX',
    precio: 1400
}
servicios.push(servicio3)

const servicio4 = {
    nombre: 'Diseño Gráfico',
    precio: 1600
}
servicios.push(servicio4)

console.log(servicios)

while (continuarComprando === true) {
    if (servicioSeleccionado === 1) {
    carrito.push(servicios[0])
    } else if (servicioSeleccionado === 2) {
    carrito.push(servicios[1])
    } else if (servicioSeleccionado === 3) {
    carrito.push(servicios[2])
    } else if (servicioSeleccionado === 4) {
    carrito.push(servicios[3])
    } else {
    servicioSeleccionado = parseInt(prompt('Ingresa un servicio disponible: 1.Desarrollo Web - 2.Desarrollo de Aplicaciones - 3.Diseño UI/UX - 4.Diseño Gráfico'))
    continue
}

resolucion = parseInt(prompt('Quieres seguir agregando servicios? 1.Si - 2.No'))
    if (resolucion === 1) {
    servicioSeleccionado = parseInt(
    prompt(
        'Ingresa el numero del producto que quieres comprar: 1.Desarrollo Web - 2.Desarrollo de Aplicaciones - 3.Diseño UI/UX - 4.Diseño Gráfico'))
    } else if (resolucion === 2) {
    continuarComprando = false
}
}

console.log(carrito)

for (let i = 0; i < carrito.length; i++) {
    facturaTotal = facturaTotal + carrito[i].precio
}

for (const prod of carrito) {
    facturaTotal = facturaTotal + prod.precio
}

alert('El valor total sin descuento ni impuestos es: ' + facturaTotal)

function PrecioConDescuento(valor) {
let descuento = 0
    if (valor <= 1400) {
    descuento = 10
    } else if (valor > 1400 && valor <= 1600) {
    descuento = 15
    } else if (valor > 1600 && valor <= 2500) {
    descuento = 20
    } else {
    descuento = 25
}
  let valorDescuento = valor * (descuento / 100)
    valor = valor - valorDescuento
return valor
}
let valorDescuento = PrecioConDescuento(facturaTotal)
alert('El total con descuento, sin impuestos es: ' + valorDescuento)

function PrecioConImpuesto(valor) {
  const impuestos = valor * (21 / 100)
    return valor + impuestos
}
let PrecioFinalConRecargo = PrecioConImpuesto(valorDescuento)
alert('El valor final con impuestos es: ' + PrecioFinalConRecargo)


let decisionFinal = prompt('¿Deseas recibir esta cotización por mail? 1. Sí - 2. No')

while ((decisionFinal !== '1') && (decisionFinal !== '2')) {
    alert('No has ingresado una opción correcta. Por favor ingresa 1 o 2 según sea tu decisión');
decisionFinal = prompt('¿Deseas recibir esta cotización por mail? 1. Sí - 2. No')
} if (decisionFinal === '1') {
    ingresoCorreo = prompt('Por favor, ingresa tu dirección de correo electrónico')
    alert('¡Muchas gracias por cotizar conmigo! Tu cotización será enviada a ' + ingresoCorreo)
} else {
alert('Muchas gracias por cotizar conmigo ' + nombreCliente)
} alert('¡Cuídate!')