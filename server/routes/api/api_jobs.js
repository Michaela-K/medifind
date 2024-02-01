const { Router } = require("express");
const router = Router();

module.exports = (pool) => {

//SEARCH - api/jobs/search
router.get('/search', (req, res) => {
  const {facility_name, date } = req.query;
  //This is a common SQL technique used when building SQL queries dynamically 
  let baseQuery = `SELECT * FROM job_postings WHERE 1=1`; 
  let queryParams = [];
  let queryIndex = 1;

  if (facility_name) {
      baseQuery += ` AND facility_name ILIKE $${queryIndex++}`;
      queryParams.push(`%${facility_name}%`);
  }
  if (date) {
      baseQuery += ` AND date = $${queryIndex++}`;
      queryParams.push(date);
  }

  pool.query(baseQuery, queryParams)
      .then(result => {
        return res.json(result.rows);
      })
      .catch(err => {
          console.error(err);
          res.status(500).send('Server error');
      });
});


  // PUT api/jobs
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body
    const is_filled = req.body.is_filled;
    console.log("***************************This is the is_filled value from the server", is_filled)
    console.log("***************************This is the body", body)
    return pool
    .query(
      "UPDATE job_postings SET is_filled = $1 where id = $2 returning *",
      [
        is_filled, id
      ]
      )
      .then((result) => {
        return res.json(result.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

   // GET ONE JOB api/jobs/:id
   router.get("/:id", (req, res) => {
    const id = req.params.id;
    return pool
      .query(
        `
        SELECT * FROM job_postings where id = $1;
      `, [id]
      )
      .then((result) => {
        return res.json(result.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

    // GET ALL JOBS api/jobs
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

  return router;
};
