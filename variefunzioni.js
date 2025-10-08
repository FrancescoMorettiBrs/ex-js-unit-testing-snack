// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

function getInitials(fullname) {
  const parts = fullname.trim().split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

function createSlug(str) {
  return str.toLowerCase();
}

// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

function average(arr) {
  const total = arr.reduce((acc, num) => {
    return acc + num;
  });
  return total / arr.length;
}

// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug2 sostituisce gli spazi con -."

function createSlug2(str) {
  return str.replaceAll(" ", "-");
}

// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug3 lancia un errore se il titolo è vuoto o non valido."

function createSlug3(title) {
  if (!title || title.length < 4) throw new Error("Titolo mancante o non valido");
  return;
}

// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

function findPostById(arr, id) {
  return arr.find((post) => post.id === id);
}

module.exports = { getInitials, createSlug, average, createSlug2, isPalindrome, createSlug3, findPostById };
