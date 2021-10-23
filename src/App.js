import React from 'react';
import { Button } from 'antd';
import './App.css';
import QuestionBoard from './questionnaire/elderQuestionBoard';
import MenuView from './menuView/menuView.js'
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.submitElderInfo = this.submitElderInfo.bind(this)
      this.submitPurpose = this.submitPurpose.bind(this)
      this.state = {
        questDisplay: true,
        menuDisplay: false,
      }

      // change to true as default
    }

    submitElderInfo() { // hide the part, pass down to component's btns
      this.setState({
        questDisplay: false,
        menuDisplay: true,
      })
      console.log(this.state)
    }

    submitPurpose() {
      this.setState({
        menuDisplay: false,
      })
      console.log(this.state)
    }

    render() {

      return (
        <div className="App">
          {this.state.questDisplay &&
          <QuestionBoard submitBtn={this.submitElderInfo}></QuestionBoard>
          }
          {this.state.menuDisplay &&
            <MenuView submitPurpose={this.submitPurpose}></MenuView>
          }
          <Button type="primary" onClick={this.submitElderInfo}>Button</Button>
        </div>
      )
    }


  }


export default App;