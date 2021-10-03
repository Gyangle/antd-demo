import React from 'react';
import { Button, Input, Select, Col, Row } from 'antd';
import { MailOutlined, PhoneOutlined, HomeOutlined, SendOutlined } from '@ant-design/icons';
import './index.css'

const { TextArea } = Input;
const { Option } = Select;

// function QuestionBoard() {
class QuestionBoard extends React.Component {
  constructor(props) {
    super(props); // always call the base constructor with props
    this.state = {view: true}
  }

  render() {
    // process default for tag selector
    const children = [];

    // console.log(this.state)

    let skillOptions = ["Fishing", "Dancing", "Musical", "Puzzles", "Crafts", "Bird-watching", "Gardening", "Writing", "Baking"]
    for (let i = 0; i < skillOptions.length; i++) {
      children.push(<Option key={skillOptions[i]}>{skillOptions[i]}</Option>);
    }

    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    return (
      <div className="board">
        <Row>
          <Col span={12} className="greeting">
            <h1>We need some information about you ...</h1>
          </Col>

          <Col span={12}>
            <div className="prompt">
              <p>What's your Email information:</p>
              <Input size="large" placeholder="Enter Email here" prefix={<MailOutlined />}/>
            </div>

            <div className="prompt">
              <p>What's your phone number:</p>
              <Input size="large" placeholder="Enter number here" prefix={<PhoneOutlined />} />
            </div>
            <div className="prompt">
              <p>What's your home address:</p>
              <Input size="large" placeholder="Eneter address here" prefix={<HomeOutlined />} />
            </div>

            <div className="prompt">
              <p>Skills to offer:</p>
              <Select size="large" mode="tags" style={{ width: '100%' }} placeholder="Select or type your skills" onChange={handleChange}>
                {children}
              </Select>
            </div>

            <div className="prompt">
              <p>Stories to share:</p>
              <TextArea size="large" placeholder="Tell us a prompt of a cool story.." />
            </div>

            <Button className="questionNextBtn" type="primary" icon={<SendOutlined />} onClick={this.props.submitBtn} >Start!</Button>
            </Col>
          </Row>
      </div>
    )
  }
}

export default QuestionBoard;