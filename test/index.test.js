const hash = require('./testindex');

test('Verificar Hash', () => {
    const message = "contraseña";
    const hashtest = hash(message);
    expect(hashtest).toEqual("edf9cf90718610ee7de53c0dcc250739239044de9ba115bb0ca6026c3e4958a5");
});

test('El mismo texto debe generar el mismo hash', () => {
    const message = "repetido";
    const hash1 = hash(message);
    const hash2 = hash(message);
    expect(hash1).toBe(hash2);
});