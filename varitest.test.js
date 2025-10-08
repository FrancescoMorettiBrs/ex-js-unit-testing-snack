const { getInitials, createSlug, average } = require("./variefunzioni");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  const result = getInitials("Francesco Moretti");
  expect(result).toBe("FM");
});

test("La funzione createSlug restituisce una stringa in lowercase", () => {
  const result = createSlug("SONO UNA STRINGA IN MINUSCOLO");
  expect(result).toBe("sono una stringa in minuscolo");
});

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  const array = average([2, 5, 8, 10, 15]);
  expect(array).toBe(8);
});
