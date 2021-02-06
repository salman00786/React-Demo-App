import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
import JeopardyDisplay from "../../pages/jeopardy/JeopardyDisplay";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      userAnswer: "",
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      userAnswer: event.target.value,
    });
  };

  handleAnswer = () => {
    let score = this.state.score;
    if (
      this.state.userAnswer.toLowerCase() ===
      this.state.data.answer.toLowerCase()
    ) {
      score += this.state.data.value;
    } else {
      score -= this.state.data.value;
    }

    this.setState({ score, userAnswer: "" });
    this.getNewQuestion();
  };
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  //display the results on the screen
  render() {
    console.log(this.state.data);
    let category = this.state.data.category && this.state.data.category.title;

    return (
      <JeopardyDisplay
        question={this.state.data.question}
        category={category}
        value={this.state.data.value}
        score={this.state.score}
        userAnswer={this.state.userAnswer}
        handleChange={this.handleChange}
        handleAnswer={this.handleAnswer}
      />
    );
  }
}
export default Jeopardy;
