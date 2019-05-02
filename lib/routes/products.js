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
    if (!req.body.name) {
        return res.status(400).send("Not all mandatory values are sent!");
    }
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
//NEED TO FIX
router.post('/:id',async (req,res)=>{
    let movie = movie.find(m => m.id === parseInt(req.params.id))
if(!movie){
    res.status(404).send("data is not found");
}
else
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

//DELETE


module.exports = router;