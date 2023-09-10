const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect()
  .then(() => {
    // eslint-disabled-next-line no-console
    console.log('🔥 Connected to database');
  })
  .catch(() => {
    // eslint-disabled-next-line no-console
    console.log('❌ Cannot connect to database');
  });

exports.query = async (query, values) => {
  const result = await client.query(query, values);
  return result.rows;
};
