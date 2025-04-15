// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//test de aplicacion de conversion de moneda

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

//      test de conversion de moneda Yen

test("1.07 dolares son 167.455 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(1.07);

    // dolares x yenes
    const expected = 1.07 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1.07)).toBe(167.455); 
})

//              test de conversion de moneda pound

test("156.5 yenes son 136.155 british pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(156.5);

    // yenes x british pound
    const expected = 156.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(156.5)).toBe(136.155); 
})