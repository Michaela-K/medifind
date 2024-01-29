const { Router } = require("express");
const router = Router();

module.exports = (pool) => {
  // GET api/jobs
  router.get("/", (req, res) => {
    return pool
      .query(
        `
        SELECT * FROM job_postings;
      `
      )
      .then((result) => {
        return res.json(result.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

   // GET api/jobs
   router.get("/:id", (req, res) => {
    const id = req.params.id;
    return pool
      .query(
        `
        SELECT * FROM jobs where id = $1;
      `, [id]
      )
      .then((result) => {
        return res.json(result.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // PUT api/jobs
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const is_filled = req.body.is_filled;
    return pool
    .query(
      "UPDATE job_postings SET is_filled = $1 where id = $2 returning *",
      [
        !is_filled, id
      ]
    )
      .then((result) => {
        return res.json(result.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
