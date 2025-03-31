require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("MySQL Connection Error:", err);
    return;
  }
  console.log("MySQL Connected...");
});

// Register endpoint
app.post("/api/auth/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send({ message: "All fields are required!" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 8);

    const sql =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    const values = [username, email, hashedPassword];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("MySQL Insert Error:", err);
        return res
          .status(500)
          .send({ message: "Error registering user", error: err });
      }
      res.status(201).send({ message: "User registered successfully" });
    });
  } catch (error) {
    console.error("Hashing Error:", error);
    res.status(500).send({ message: "Server error", error });
  }
});


// Login endpoint
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err)
      return res.status(500).send({ message: "Error logging in", error: err });

    if (results.length === 0)
      return res.status(404).send({ message: "User not found" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).send({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });
    res.status(200).send({ message: "Login successful", token });
  });
});

// Get User Info
app.get("/api/auth/user", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).send({ message: "No token provided" });

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(401).send({ message: "Invalid token" });

    const userId = decoded.id;
    const sql = "SELECT id, username, email FROM users WHERE id = ?";
    db.query(sql, [userId], (err, results) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error fetching user data", error: err });
      if (results.length === 0)
        return res.status(404).send({ message: "User not found" });

      res.status(200).send(results[0]);
    });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
