const express = require("express");
const app = express();
const { Musician } = require("../models/index")

const { Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get('/musicians', async (req, res) => {

    const getData = await Musician.findAll();

    res.json(getData); // Send back the array of musicians as JSON
  });


app.get('/musicians/1', async (req, res) => {

    const getData = await Musician.findOne();
   
    res.json(getData); // Send back the array of musicians as JSON
  });  


app.get('/Bands', async (req, res) => {

    const getData = await Band.findAll();
   
    res.json(getData); // Send back the array of musicians as JSON
  });

  app.get('/users/:id', async (req, res) => {

    const user = await User.findByPk(req.params.id);
    res.send(user);
  });



module.exports = app;