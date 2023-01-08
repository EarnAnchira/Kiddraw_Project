const express =require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const { userInfo } = require('os');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "kiddraw"

})