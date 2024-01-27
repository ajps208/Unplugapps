const db = require('../Database/dbconfig');

exports.tabledatadetailes = async (req, res) => {
  console.log("Inside the tabledatadetailes controller function");

  // Extract data from req.body
  const { vrNo, srNo, itemCode, itemName, qty, rate, amount } = req.body;

  // SQL query to insert data into detail_table
  const sql = `INSERT INTO detail_table (vr_no, sr_no, item_code, item_name, qty, rate, amount) 
               VALUES (?, ?, ?, ?, ?, ?, ?)`;

  // Execute the SQL query
  db.query(sql, [vrNo, srNo, itemCode, itemName, qty, rate, amount], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ error: "Error inserting data into database" });
    } else {
      console.log("Data inserted successfully");
      res.status(200).json({ message: "Data inserted successfully" });
    }
  });
};
exports.deletetabledatadetailes = async (req, res) => {
    console.log("Inside the delete controller function");
    
    const { vrno, srno } = req.body;
  
    // SQL query to delete data from detail_table based on vr_no and sr_no
    const sql = `DELETE FROM detail_table WHERE vr_no = ? AND sr_no = ?`;
  
    // Execute the SQL query
    db.query(sql, [vrno, srno], (err, result) => {
      if (err) {
        console.error("Error deleting data:", err);
        res.status(500).json({ error: "Error deleting data from database" });
      } else {
        console.log("Data deleted successfully");
        res.status(200).json({ message: "Data deleted successfully" });
      }
    });
  };
  