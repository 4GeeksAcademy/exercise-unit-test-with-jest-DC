// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))



// esta parte es el ejercicio del Dolar

const fromEuroToDollar = (valueInEuro) => {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// esta parte es el ejercicio del Yen

const fromDollarToYen = (valueInDollar) => {
    // Convertimos el valor a yenes
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en yenes
    return valueInYen;
}

// esta parte es el ejercicio del british pound

const fromYenToPound = (valueInYen) => {
    // Convertimos el valor a la moneda britanica
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en la moneda britanica
    return valueInPound;
}


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };