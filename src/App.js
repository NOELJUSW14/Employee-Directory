import React from 'react'
import {
  Col,
  Row,
  Button,
  Navbar,
  Footer,
  SearchForm,
  Wrapper,
  Container,
} from 'react-bootstrap'
import employeeList from './utils/employeeList.json'
import HomePage from './components/HomePage/HomePage'
import EmployeePage from './components/EmployeePage/EmployeePage'
import './App.css'

const filterEmployee = (searchText, maxResults) => {
  return employeeList
    .filter((employee) => {
      if (employee.data.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true
      }
      return false
    })
    .slice(0, maxResults)
}
let maxResults = 5
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedEmployee: employeeList[0].data,
      filteredEmployee: filterEmployee('', maxResults),
    }
  }
  onSearch = event => {
    this.setState({
      filteredEmployee: filterEmployee(event.target.value, maxResults),
    })
  }
  onEmployeeClick = employee => {
    this.setState({
      selectedEmployee: {
        name: employee.name,
        contact: employee.contact,
        info: employee.data,
      },
    })
  }
  render() {
    return (
      <Col lg={8} md={7} sm={4} lgOffset={2}>
        <Col lg={6}>
          <HomePage
            onSearch={this.onLookup}
            employeeData={this.state.filteredEmployee}
            onEmployeeClick={this.onEmployeeClick}
          />
        </Col>
        <Col lg={6}>
          <EmployeePage selectedEmployee={this.state.selectedEmployee} />
        </Col>
      </Col>
    );
  }
}
