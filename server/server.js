const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));