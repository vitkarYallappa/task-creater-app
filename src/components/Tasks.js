import React, {
  Component
} from 'react'

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  handchange = (date) => {
    var today = date;
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+today.getHours()+":"+today.getMinutes();
    return today;
  }
  render() {
    const {
      todo
    } = this.props;
    return ( <div>
      <h5>{todo.taskName} <span style={{float:"right",fontSize:"12px",color:"#68a6e8"}}>{
        this.handchange(todo.startDate)
      }</span></h5>
      <p style={{float:"left",fontSize:"14px"}}>{todo.description}</p>
        </div>
    )
  }
}