function getInitials(fullname) {
  const parts = fullname.trim().split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

module.exports = { getInitials };
