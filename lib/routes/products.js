const express = require("express");
const router = express.Router();
const MovieModel = require("../models/movie");

//Add a movie using localhost:{PORT}/Movie/v1.0/Add
router.post("/Add", async (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).send("Not all mandatory values are sent!");
    }
    try{
    let movie = new MovieModel({
        genre: req.body.genre,
        name: req.body.name,
        year: req.body.year,
        running_time: req.body.running_time,
        story: req.body.story,
        subtitles: req.body.subtitles,
        starring: req.body.starring,
        director: req.body.director,
        trailer_url: req.body.trailer_url,
        rating: req.body.rating,
        cast: req.body.cast,
        audio: req.body.audio,
        format: req.body.format
    });
    movie = await movie.save();
    res.send(movie);
} catch (err){
    next(`Error is ${err}`);
}
});


//Get all Movies using localhost:{PORT}/Movie/v1.0/
router.get("/", async (req, res, next) => {
    try{
        MovieModel.find(function(err, movie) {
            if (err) {
                console.log(err);
            } else {
                res.json(movie);
            }
        });
} catch (err){
    next(`Error is ${err}`);
}
});



//Update By ID

router.put('/Update/:id',async (req,res)=>{
    
const _id = req.params.id;


try{
    MovieModel.findOneAndUpdate({ _id },
        req.body,
        { new: true },
        (err, movie) => {
        if (err) {
          res.status(400).json(err);
        }
        res.json(movie);
    });
    
    movie = await movie.save();
    res.send(movie);
} catch (err){
    next(`Error is ${err}`);
}
});

//DELETE

router.delete("/Delete/:id", async (req, res, next) => {
    const _id = req.params.id;

    MovieModel.findOneAndDelete({_id}, (err,movie) => {
        if (err) {
            res.status(400).json(err);
          }
          if (!movie) {
            res.status(404).json({ message: 'Movie not found.' });
          }
          res.json({ message: `Movie ${movie._id} deleted.` });
    
    })
});

module.exports = router;
