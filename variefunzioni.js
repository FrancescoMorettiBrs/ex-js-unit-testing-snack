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

// Creare due test che verifichino le seguenti descrizioni:
// 👉 "Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più."

function addPost(posts, post) {
  const ids = posts.map((p) => p.id);
  if (ids.includes(post.id)) {
    throw new Error("Id già esistente");
  }
  const slugs = posts.map((p) => p.slug);
  if (slugs.includes(post.slug)) {
    throw new Error("Slug già esistente");
  }
  posts.push(post);
}

// 👉 "Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno."

function removePost(posts, id) {
  const index = posts.findIndex((p) => p.id === id);
  posts.splice(index, 1);
}

// Creare un test che verifichi la seguente descrizione:
// 👉 "Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore."

// Creare un test che verifichi la seguente descrizione:
// 👉 "Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già."

module.exports = { getInitials, createSlug, average, createSlug2, isPalindrome, createSlug3, findPostById, addPost, removePost };
