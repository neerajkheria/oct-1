const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
	res.send("Welcome, your secret is: " + process.env.MY_SECRET);
});

app.listen(PORT,() => {
	console.log(`Server is running on port ${PORT}`)
})
