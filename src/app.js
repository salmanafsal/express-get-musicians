const express = require("express");
const app = express();
const musiciansRouter = require('../routes/musicians.js');
app.use(express.json());
app.use('/musicians', musiciansRouter);

/*app.use(express.urlencoded({extended: true}));

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get('/musicians', async (req, res) => {

    const getData = await Musician.findAll();

    res.json(getData); // Send back the array of musicians as JSON
  });


app.get('/musicians/:id', async (req, res) => {

    const getData = await Musician.findByPk(req.params.id);
   
    res.json(getData); // Send back the array of musicians as JSON
  });  


app.get('/Bands', async (req, res) => {

    const getData = await Band.findAll();
   
    res.json(getData); // Send back the array of musicians as JSON
  });

  app.post("/musicians", async (req, res) => {
    try {
        const newRestaurant = await Musician.create(req.body);
        res.status(201).json(newRestaurant); // 201 Created
    } catch (error) {
        console.error("Error creating restaurant:", error);
        res.status(400).json({ error: "Bad Request" });
    }
}); 

app.put("/musicians/:id", async (req, res) => {
    try {
        const [affectedRows] = await Musician.update(req.body, {
            where: { id: req.params.id }
        });

        if (affectedRows > 0) {
            const updatedRestaurant = await Musician.findByPk(req.params.id);
            res.status(200).json(updatedRestaurant); // 200 OK
        } else {
            res.status(404).json({ error: "Restaurant not found" });
        }
    } catch (error) {
        console.error("Error updating restaurant:", error);
        res.status(400).json({ error: "Bad Request" });
    }
});

app.delete("/musicians/:id", async (req, res) => {
    try {
        const deleted = await Musician.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            res.status(204).send('It is deleted'); // 204 No Content
        } else {
            res.status(404).json({ error: "Restaurant not found" });
        }
    } catch (error) {
        console.error("Error deleting restaurant:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

*/


module.exports = app;