// userController.js
const db = require('../Database/dbconfig');

exports.vrtabledetailes = async (req, res) => {
  console.log("Inside the register controller function");
  const vrNo = req.query.vrno;
  try {
      const query = `SELECT * FROM detail_table WHERE vr_no = ?`;
      
      // Using parameterized query to prevent SQL injection
      db.query(query, [vrNo], (err, results) => {
          if (err) {
              console.error('Error executing query:', err);
              res.status(500).send('Internal Server Error');
          } else {
              res.status(200).json(results)
            
          }
      });
  } catch (error) {
      console.error('Error in register controller:', error);
      res.status(500).send('Internal Server Error');
  }
};

