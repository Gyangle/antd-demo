import React from 'react';
import { Button } from 'antd';
import './App.css';
import QuestionBoard from './questionnaire/elderQuestionBoard';


const App = () => {

  return (
    <div className="App">
      <QuestionBoard></QuestionBoard>
      <Button type="primary">Button</Button>
    </div>
  )

};

export default App;