import React from 'react'

class EmployeeListItem extends React.Component {
  onSelect = () => {
    this.props.onEmployeeSelect(this.props.employee)
  }
  render() {
    const { name, info } = this.props.employee
    const image = 'images/' + name + '.jpg'
    return (
      <div
        className="employee-item"
        style={this.props.style}
        onSelect={this.onSelect}
      >
        <img src={image} />
        <div className="employee-item-text">
          <h2>{name}</h2>
          <p>{info}</p>
        </div>
      </div>
    )
  }
}

export default EmployeeListItem
