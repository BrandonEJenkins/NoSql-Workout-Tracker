require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// });

let uri = "mongodb://localhost/workoutdb";
if (process.env.NODE_ENV === 'production') {
    uri = process.env.MONGODB_URI;
}
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// routes
app.use(require('./routes/html.js'));
app.use(require('./routes/api.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});