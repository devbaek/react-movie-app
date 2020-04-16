import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    return <div>Hello</div>;
  }
}

export default App;
