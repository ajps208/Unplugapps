const db = require('../Database/dbconfig');

exports.formadddetailes = async (req, res) => {
    console.log("inside formcontroll");
    console.log(req.body);

    const { vr_no, vr_date, ac_name, ac_amt, status } = req.body;

    // Construct the SQL query
    const sql = `INSERT INTO header_table (vr_no, vr_date, ac_name, ac_amt, status) 
                 VALUES (?, ?, ?, ?, ?)`;

    // Execute the query
    db.query(sql, [vr_no, vr_date, ac_name, ac_amt, status], (err, result) => {
        if (err) {
            console.error("Error inserting data: ", err);
            res.status(500).json({ error: "Error inserting data" });
        } else {
            console.log("Data inserted successfully");
            res.status(200).json({ message: "Data inserted successfully" });
        }
    });
};
