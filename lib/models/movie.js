const mongoose = require("mongoose");
const genres = ['Action', 'Comedy', 'Documentary', 'Drama', 'Fantasy', 'Hindi', 'Horror', 'Kids', 'Romance', 'Sci-fi', 'Tamil', 'Thriller', 'Others'];
const movieSchema = new mongoose.Schema({
    genre: {
        required: true,
        type: String,
        enum: genres,
    },
    name: {
        type: String,
        required: [true, 'Movie Name Required']
    },
    year: {
        type: Number,
        required: [true, 'Movie Year Required'],
        validate: {
            validator: function (v) {
                return /\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid year!`
        }
    },
    running_time: {
        type: Number,
        required: [true, 'Movie Running time Required'],
        validate: {
            validator: function (v) {
                return /\d{2}/.test(v);
            },
            message: props => `${props.value} is not a valid minute!`
        }
    },
    story: {
        type: String,
        required: [true, 'Movie Story Required'],
    },
    subtitles: {
        type: [String],
    },
    starring: {
        type: [String],
    },
    director: {
        type: [String],
    },
    trailer_url: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    cast: {
        type: [String]
    },
    audio: {
        type: [String],
    },
    format: {
        type: [String],
    }
});

const movie = mongoose.model("movie", movieSchema);

module.exports = movie;