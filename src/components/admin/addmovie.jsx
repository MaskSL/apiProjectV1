import React, { Component } from "react";
import axios from 'axios';

class AddMovie extends Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Movie</h3>
        <form onSubmit="">
          <div className="form-group">
            <label>Name: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Story: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Genre: </label>
            <select name="genres" className="form-control">
              <option value="volvo">Action</option>
              <option value="saab">Comedy</option>
              <option value="mercedes">Documentary</option>
              <option value="audi">Drama</option>
              <option value="audi">Fantasy</option>
              <option value="audi">Hindi</option>
              <option value="audi">Horror</option>
              <option value="audi">Kids</option>
              <option value="audi">Romance</option>
              <option value="audi">Sci-fi</option>
              <option value="audi">Tamil</option>
              <option value="audi">Thriller</option>
              <option value="audi">Others</option>
            </select>
          </div>
          <div className="form-group">
            <label>Year: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Run Time: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Directed By: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Starring: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Subtitles: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Trailer URL: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Rating: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Cast: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Audio: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Format: </label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }

  /* Default Constructor */
  constructor(props) {
    super(props);

    this.onChangeName= this.onChangeName.bind(this);
    this.onChangeStory = this.onChangeStory.bind(this);
    this.onChangeGenre= this.onChangeGenre.bind(this);
    this.onChangeRunTime= this.onChangeRunTime.bind(this);
    this.onChangeDirectedBy= this.onChangeDirectedBy.bind(this);
    this.onChangeStarring= this.onChangeStarring.bind(this);
    this.onChangeSubtitles= this.onChangeSubtitles.bind(this);
    this.onChangeTrailerURL= this.onChangeTrailerURL.bind(this);
    this.onChangeRating= this.onChangeRating.bind(this);
    this.onChangeCast= this.onChangeCast.bind(this);
    this.onChangeAudio= this.onChangeAudio.bind(this);
    this.onChangeFormat= this.onChangeFormat.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name: '',
        genre: '',
        year: '',
        running_time: '',
        story: '',
        subtitles: '',
        starring: '',
        director: '',
        trailer_url: '',
        rating: '',
        cast: '',
        audio: '',
        format: ''
    }
}

//When name changed
onChangeName(e) {
  this.setState({
    name: e.target.value
  });
}

//When Story changed
onChangeStory(e) {
  this.setState({
    story: e.target.value
  });
}
//When Genre changed
onChangeGenre(e) {
  this.setState({
    genre: e.target.value
  });
}
//When Year changed
onChangeYear(e) {
  this.setState({
    year: e.target.value
  });
}
//When Run Time changed
onChangeRunTime(e) {
  this.setState({
    running_time: e.target.value
  });
}
//When Directed by changed
onChangeDirectedBy(e) {
  this.setState({
    director: e.target.value
  });
}
//When Starring changed
onChangeStarring(e) {
  this.setState({
    starring: e.target.value
  });
}
//When Subtitles change changed
onChangeSubtitles(e) {
  this.setState({
    subtitles: e.target.value
  });
}
//When Trailer URL changed
onChangeTrailerURL(e) {
  this.setState({
    trailer_url: e.target.value
  });
}
//When Rating changed
onChangeRating(e) {
  this.setState({
    rating: e.target.value
  });
}
//When Cast changed
onChangeCast(e) {
  this.setState({
    cast: e.target.value
  });
}
//When Audio changed
onChangeAudio(e) {
  this.setState({
    audio: e.target.value
  });
}
//When Format changed
onChangeFormat(e) {
  this.setState({
    format: e.target.value
  });
}




//When Submit is clicked
onSubmit(e) {
  e.preventDefault();
  
  const movie = {
    name: this.state.name,
    genre: this.state.genre,
    year: this.state.year,
    running_time: this.state.running_time,
    story: this.state.story,
    subtitles: this.state.subtitles,
    starring: this.state.starring,
    director: this.state.director,
    trailer_url: this.state.trailer_url,
    rating: this.state.rating,
    cast: this.state.cast,
    audio: this.state.audio,
    format: this.state.format
  };

  axios.post('http://localhost:4000//Movie/v1.0/Add', movie)
      .then(res => console.log(res.data));

  this.setState({
    name: '',
    genre: '',
    year: '',
    running_time: '',
    story: '',
    subtitles: '',
    starring: '',
    director: '',
    trailer_url: '',
    rating: '',
    cast: '',
    audio: '',
    format: ''
  })
}


}

export default AddMovie;
