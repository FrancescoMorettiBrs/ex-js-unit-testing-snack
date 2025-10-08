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

module.exports = { getInitials, createSlug, average, createSlug2, isPalindrome };
