require('dotenv').config()
const { Client } = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT NOT NULL,
  username TEXT NOT NULL,
  added DATE NOT NULL
);

INSERT INTO messages (text, username, added) 
VALUES
  ('Hello World!', 'Alice', NOW()),
  ('This is a test message.', 'Bob', NOW()),
  ('How are you doing?', 'Charlie', NOW());
`

async function main() {
  console.log('seeding...')
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log('done')
}

main()
