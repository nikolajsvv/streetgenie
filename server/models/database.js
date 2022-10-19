const { Pool } = require('pg');

const PG_URL = 'postgres://fiwflopr:l_6lLMuVI4F2GvxPp_MU-aG8v70pwZPo@batyr.db.elephantsql.com/fiwflopr';

const pool = new Pool({
  connectionString: PG_URL,
  max: 3,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
}