const { getInitials } = require("./variefunzioni");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  const result = getInitials("Francesco Moretti");
  expect(result).toBe("FM");
});
