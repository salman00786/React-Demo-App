import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: {
        answer: "",
      },
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
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit");
    if (this.state.formData.answer === this.state.data.answer) {
      console.log("matched");
      this.setState((state, props) => ({
        score: state.score + state.data.value,
      }));
    } else {
      console.log("unmatched");
      this.setState((state, props) => ({
        score: state.score - state.data.value,
      }));
    }
    this.getNewQuestion();
  };

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  //display the results on the screen
  render() {
    console.log(this.state.data);
    if (!this.state.data) {
      return <div>Loading!!!</div>;
    }

    return (
      <div>
        <div>
          <label>Question: </label>
          <br />
          <p>{this.state.data.question}</p>
        </div>
        {/* <div>
          <label>Category: </label>
          <br />
          <p>{this.state.data.category.title}</p>
        </div> */}
        <div>
          <label>Value: </label>
          <br />
          <p>{this.state.data.value}</p>
        </div>
        <div>
          <label>Score: </label>
          <br />
          <p>{this.state.score}</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="answer">Answer</label>
            <input
              type="text"
              name="answer"
              value={this.state.formData.answer}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit Form</button>
        </form>
      </div>
    );
  }
}
export default Jeopardy;
