import React, { Component } from "react";
import "./App.css";
import QuestionsAN from './components/questions';

class App extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
   
    return (
      <div >
          <QuestionsAN/>
          
      </div>
    );
  }
}

export default App;