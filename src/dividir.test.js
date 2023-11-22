const dividir = require('./index')

test("div 10 por 5 to be equal to 2", () => {
  expect(dividir(10, 5)).toBe(2);
});
