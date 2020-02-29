import React from "react";
import {ListGroup} from 'react-bootstrap'
import {TransitionMotion, spring, presets} from 'react-motion'
import EmployeeListItem from './EmployeeList'

class EmployeeList extends React.Component{
  constructor (props){
    super(props)
    console.log(this.props)
  }
getDefaultStyles = () => {
  return this.props.employeeData.map(employee =>({...employee, style:{height: 0, opacity: 1}}));
}
getStyles = () => {
  const {employeeData} = this.props;
  return employeeData.map((employee, i) => {
    return {
      ...employee,
      style: {
        height: spring(125, presets.gentle),
        opacity: spring(1, presets.gentle),
      }
    }
  })
};
willEnter(){
  return{
    height: 1,
    opacity:.9,
  };
};
willLeave(){
  return{
    height: spring(1),
    opacity: spring(.9),
  }
};

render(){
  return(
    <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            styles={this.getStyles()}
            willLeave={this.willLeave}
            willEnter={this.willEnter}>
            {styles =>
               <ListGroup>
                {styles.map(({key, style, data}) =>
                  <EmployeeListItem key={key} style={style} employee={data} onEmployeeClick={this.props.onEmployeeClick}/>
                )}
                </ListGroup> 
            }
          </TransitionMotion>
  )
}
}

export default EmployeeList;
