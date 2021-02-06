import React, { Component } from "react";
//import JeopardyService from "../../jeopardyService";

function JeopardyDisplay(props) {
  return (
    <div>
      <div>
        <b>Question: </b>
        <span>{props.question}</span>
      </div>
      <br />
      <div>
        <b>Category: </b>
        <span>{props.category}</span>
      </div>
      <br />
      <div>
        <b>Value: </b>
        <span>{props.value}</span>
      </div>
      <br />
      <div>
        <b>Score: </b>
        <span>{props.score}</span>
      </div>
      <br />
      <div>
        <label htmlFor="answer">
          <b>Enter Answer:</b>{" "}
        </label>
        <input
          type="text"
          name="answer"
          value={props.answer}
          onChange={props.handleChange}
        />
      </div>
      <br />
      <button onClick={props.handleAnswer}>Submit Form</button>
    </div>
  );
}

export default JeopardyDisplay;
