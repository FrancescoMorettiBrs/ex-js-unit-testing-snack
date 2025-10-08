const { getInitials, createSlug, average, createSlug2, isPalindrome, createSlug3, findPostById, addPost, removePost } = require("./variefunzioni");

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

  let posts;

  beforeEach(() => {
    posts = [
      { id: 1, title: "Introduzione a JavaScript", slug: "introduzione-a-javascript" },
      { id: 2, title: "Guida a React", slug: "guida-a-react" },
      { id: 3, title: "Unit test con Jest", slug: "unit-test-con-jest" },
      { id: 4, title: "Pattern in TypeScript", slug: "pattern-in-typescript" },
      { id: 5, title: "Come creare uno slug", slug: "come-creare-uno-slug" },
    ];
  });

  afterEach(() => {
    posts = [];
  });

  test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 1)).toEqual({ id: 1, title: "Introduzione a JavaScript", slug: "introduzione-a-javascript" });
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Guida a React", slug: "guida-a-react" });
  });

  test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
    addPost(posts, { id: 6, title: "Introduzione a Tailwind", slug: "introduzione-a-tailwind" });
    expect(posts).toHaveLength(6);
  });

  test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
    removePost(posts, 2);
    expect(posts).toHaveLength(4);
  });

  test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.", () => {
    expect(() => addPost(posts, { id: 2, title: "Guida a React", slug: "guida-a-react" })).toThrow("Id già esistente");
    expect(() => addPost(posts, { id: 7, title: "Unit test con Jest", slug: "unit-test-con-jest" })).toThrow("Slug già esistente");
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
