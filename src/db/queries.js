const pool = require('./pool')

async function getMessages() {
  const { rows } = await pool.query('SELECT * FROM messages ORDER BY added DESC')
  return rows
}

async function addMessage(text, username) {
  const { rows } = await pool.query('INSERT INTO messages (text, username, added) VALUES ($1, $2, NOW()) RETURNING *', [text, username])
  return rows[0]
}

module.exports = {
  getMessages,
  addMessage,
}
