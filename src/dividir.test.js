const dividir = require('./index')

test("div 40 por 5 to be equal to 8", () => {
  expect(dividir(40, 5)).toBe(8);
});
