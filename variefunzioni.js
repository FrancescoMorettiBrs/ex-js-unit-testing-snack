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

module.exports = { getInitials, createSlug };
