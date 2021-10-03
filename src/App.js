import React from 'react';
import { Button } from 'antd';
import './App.css';
import QuestionBoard from './questionnaire/elderQuestionBoard';

// function QuestionBoard() {
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.submitElderInfo = this.submitElderInfo.bind(this)
      this.state = {questDisplay: true}
    }

    submitElderInfo() { // hide the part, pass down to component's btns
      this.setState({questDisplay: false})
      console.log(this.state)
    }

    render() {
      return (
        <div className="App">
          {this.state.questDisplay &&
          <QuestionBoard submitBtn={this.submitElderInfo}></QuestionBoard>
}
          <Button type="primary" onClick={this.submitElderInfo}>Button</Button>
        </div>
      )
    }


  }


export default App;