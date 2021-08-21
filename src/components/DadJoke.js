import React from "react";
import axios from "axios";

class DadJoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: ""
    };
  }

  fetchJoke = async () => {
    const res = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    });
    this.setState({ joke: res.data.joke });
  };

  render() {
    const jokeDisplay = () => {
      return (
        <div>
          <p>{this.state.joke}</p>
        </div>
      );
    };

    return (
      <div className="dad-joke">
        <h2>Click here for a dad joke!</h2>
        <button onClick={this.fetchJoke}>Get Joke</button>
        {jokeDisplay()}
      </div>
    );
  }
}

export default DadJoke;
