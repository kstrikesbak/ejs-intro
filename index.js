const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const users = require('./models/Users')
require('dotenv').config();
const port = process.env.PORT || 3000;
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.urlencoded({extended: true})) // in order to get the data from the client
// .render =
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.get('/first', (req,res) => {
    res.render('main/home', {name:'Bill'});
});
app.get('/location/:color/:car', (req , res) => {
    const firstName = 'Kejal';
    const lastName = 'Bhuva';
    
    let places =
    [
    {city:'kadikoy', state: 'istanbul'},
    {city:'rockville', state: 'maryland'},
    {city:'barnard', state: 'Arizona'}]
    const {color,car} = req.params;
    res.render('main/location', {color , car, places, firstName, lastName})
});

app.get('/users', (req , res) => {
    
    res.render('main/users', {users})
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

console.log(users)