import React, { Component } from "react";
import { Q } from "../shared/question";

class QuestionsAN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: Q,
      answer: "",
      idan: "",
      count: 0,
      score: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  handleChange(event) {
    this.setState({
      answer: event.target.value,
      idan: event.target.id,
    });
  }

  checkAnswer(event) {
    event.preventDefault();
    this.state.count++;

    {
      this.state.questions
        .filter((question) => question.correct === this.state.answer)
        .map(
          (an) => (
            this.state.score++,
            alert(`You answered  ${this.state.answer} `),
            alert("the correct answer is " + JSON.stringify(an.correct))
          )
        );
    }
  }

  render() {
    const quest = this.state.questions.map((question) => {
      return (
        <form className="ml-5 mt-5">
          <div key={question.id}>
            Question: {question.question}
            <br />
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                //ref={question.id}
                name={question.correct}
                id={question.correct}
                value={question.correct}
                checked={this.state.answer === question.correct}
                onChange={this.handleChange}
              ></input>

              <label className="form-check-label" htmlFor={question.correct}>
                {question.correct}
              </label>
            </div>
            {question.incorrect.map((incor) => (
              <div key={question.id} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  //ref={question.id}
                  name={incor}
                  id={incor}
                  value={incor}
                  checked={this.state.answer === incor}
                  onChange={this.handleChange}
                ></input>

                <label className="form-check-label" htmlFor={incor}>
                  {incor}
                </label>
              </div>
            ))}
            <button
              className="btn-primary"
              type="submit"
              onClick={this.checkAnswer}
            >
              {" "}
              Submit
            </button>
            <br />
            <br />
            <br />
          </div>
        </form>
      );
    });

    return (
      <div>
        <h1 className="text-center">Trivia</h1>
        {quest[this.state.count]}
        <div clasName="ml-5 ">Question number {this.state.count + 1} of 21</div>
        <br />
        Your Score: {this.state.score}
      </div>
    );
  }
}
export default QuestionsAN;
