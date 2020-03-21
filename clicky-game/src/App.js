import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import images from "./images.json";

class App extends Component {
  // states
  state = {
    allCharacters: images,
    pickedArray: [],
    highScore: 0,
    currentScore: 0,
    message: ""
  };

  // function to shuffleCards images array (Using Fisher–Yates shuffle) https://www.jstips.co/en/javascript/shuffle-an-array/ 
  shuffleCards = () => {
    const ShuffArr = images => {
      var i,
          j,
          temp;
      for (i = images.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));

          temp = images[i];
          images[i] = images[j];
          images[j] = temp;
      }

      return images;
    };
    this.setState({
      allCharacters: ShuffArr(this.state.allCharacters)
    });
  };

  gameStatus = () => {
    if (this.state.currentScore === 12) {
      this.setState({
        message: 'Congratulations! You did it!',
        currentScore: 0,
        pickedArray: []
      });
      this.shuffleCards();
    }
  };

  score = () => {
    this.setState(
      {
        currentScore: this.state.currentScore + 1
      },
      () => {
        this.gameStatus();
      }
    );

    if (this.state.currentScore === this.state.highScore) {
      this.setState({
        highScore: this.state.highScore + 1
      });
    }
  };

  isSelected = id => () => {
    if (!this.state.pickedArray.includes(id)) {
      const newArr = [...this.state.pickedArray, id];

      this.setState({
        pickedArray: newArr
      });

      this.score();
      this.shuffleCards();
    } else {
      this.setState({
        message: "You already picked that character!",
        currentScore: 0
      });
      this.setState({
        pickedArray: []
      });
      this.shuffleCards();
    }
  };

  render() {
    return (
      <div className="container">
        <Header
          highScore={this.state.highScore}
          currentScore={this.state.currentScore}
        />

        <div className="imageDiv text-center">
          {this.state.allCharacters.map(image => (
            <Image
              src={image.src}
              key={image.id}
              id={image.id}
              isSelected={this.isSelected}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
