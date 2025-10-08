const { getInitials, createSlug, average, createSlug2, isPalindrome, createSlug3, findPostById } = require("./variefunzioni");

describe("Manipolazione di stringhe", () => {
  test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    const result = getInitials("Francesco Moretti");
    expect(result).toBe("FM");
  });

  test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    const result = isPalindrome("anna");
    expect(result).toBeTruthy();
  });
});

describe("Operazioni su array", () => {
  test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    const array = average([2, 5, 8, 10, 15]);
    expect(array).toBe(8);
  });

  test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    const posts = [
      { id: 1, title: "Introduzione a JavaScript", slug: "introduzione-a-javascript" },
      { id: 2, title: "Guida a React", slug: "guida-a-react" },
      { id: 3, title: "Unit test con Jest", slug: "unit-test-con-jest" },
      { id: 4, title: "Pattern in TypeScript", slug: "pattern-in-typescript" },
      { id: 5, title: "Come creare uno slug", slug: "come-creare-uno-slug" },
    ];
    expect(findPostById(posts, 1)).toEqual({ id: 1, title: "Introduzione a JavaScript", slug: "introduzione-a-javascript" });
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Guida a React", slug: "guida-a-react" });
  });
});

describe("Generazione di slug", () => {
  test("La funzione createSlug restituisce una stringa in lowercase", () => {
    const result = createSlug("SONO UNA STRINGA IN MINUSCOLO");
    expect(result).toBe("sono una stringa in minuscolo");
  });

  test("La funzione createSlug2 sostituisce gli spazi con -.", () => {
    const result = createSlug2("Adesso sostituirò gli spazi");
    expect(result).toBe("Adesso-sostituirò-gli-spazi");
  });

  test("La funzione createSlug3 lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug3("")).toThrow("Titolo mancante o non valido");
  });
});
