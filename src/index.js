const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));



const express = require("express");
const app = express()
const port = 4000;

const userRoute = require('./routes/users')
app.use(express.json())
app.use(userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
