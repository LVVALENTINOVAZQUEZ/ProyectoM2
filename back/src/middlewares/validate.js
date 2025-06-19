
function validateMovie(req, res, next) {
  const { title, director, year, genre, duration, rate } = req.body;
  if (!title || !director || !year || !genre || !duration || !rate) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }
  if (!/^\d{4}$/.test(String(year))) {
    return res.status(400).json({ error: "El año debe tener 4 dígitos" });
  }
  next();
}

module.exports = validateMovie;
