const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('', async (req, res, next) => {
  try {
    const results = await db.query('SELECT * FROM strings');
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

router.post('', async (req, res, next) => {
  try {
    const result = await db.query(
      'INSERT INTO strings (string) VALUES ($1) RETURNING *',
      [req.body.string],
    );
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
