const { getInitials, createSlug } = require("./variefunzioni");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  const result = getInitials("Francesco Moretti");
  expect(result).toBe("FM");
});

test("La funzione createSlug restituisce una stringa in lowercase", () => {
  const result = createSlug("SONO UNA STRINGA IN MINUSCOLO");
  expect(result).toBe("sono una stringa in minuscolo");
});
