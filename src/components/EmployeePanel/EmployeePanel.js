import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import EmployeePanelHeader from '../EmployeePanel/EmployeePanelHeader'

class EmployeePanel extends React.Component {
  render() {
    const employeePanelHeader = (
      <EmployeePanelHeader employee={this.props.employee} />
    )
    const { contact } = this.props.employee
    return (
      <Card bsclass="employee-card" header={employeePanelHeader}>
        <ListGroup>
          <ListGroupItem>{contact.office}</ListGroupItem>
          <ListGroupItem>{contact.mobile}</ListGroupItem>
          <ListGroupItem>{contact.sms}</ListGroupItem>
          <ListGroupItem>{contact.email}</ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
}

export default EmployeePanel
