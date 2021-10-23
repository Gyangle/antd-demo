import React from 'react';
import { Card, Typography } from 'antd';
// import { MailOutlined, PhoneOutlined, HomeOutlined, SendOutlined } from '@ant-design/icons';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class MenuView extends React.Component {
  constructor(props) {
    super(props); // always call the base constructor with props
    this.state = {view: true}
  }

  render() {
    const { Title } = Typography;

    return (
      <Card title={<Title level={1}>What would you like to do today?</Title>} className="grid">
        <Card.Grid className={"grid-item"} onClick={this.props.submitPurpose}>
          <FontAwesomeIcon icon="hospital" className="icon" size='4x' />
          Medical Appointment
        </Card.Grid>
        <Card.Grid className={"grid-item"} onClick={this.props.submitPurpose}>
          <FontAwesomeIcon icon="shopping-basket" className="icon" size='4x' />
          Groceries
        </Card.Grid>
        <Card.Grid className={"grid-item"} onClick={this.props.submitPurpose}>
          <FontAwesomeIcon icon="prescription-bottle" className="icon" size='4x' />
          Pharmacy
        </Card.Grid>
        <Card.Grid className={"grid-item"} onClick={this.props.submitPurpose}>
          <FontAwesomeIcon icon="tasks" className="icon" size='4x' />
          Errand
        </Card.Grid>
      </Card>
    )
  }
}

export default MenuView;