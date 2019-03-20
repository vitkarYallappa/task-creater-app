import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from "react-redux";
import { addTask } from "../actions/taskActions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
        time:'', 
        todo: {
            taskName: "Task Name",
            description: "Task Description",
            status: 0,
            taskDate:"",
            taskTime:"",
            startDate:new Date(),    
        }
    }
    this.handleChange1 = this.handleChange1.bind(this);   
}
handleChange1=(date)=>{
  
  this.setState({
    todo: {
        ...this.state.todo,
        ['startDate']: date
    }
})
}
handleChange = (event) => {
  this.setState({
      todo: {
          ...this.state.todo,
          [event.target.name]: event.target.value
      }
  })
}

componentDidMount(){
  
}
handleSubmit = () => {
  let todo = this.state.todo;
  console.log(todo)
  this.props.addTask(todo);
}

  render() {
    const {todo} = this.state;  
    return (
      <div >
        <h1 style={{textAlign:"center",fontSize:"31px",color:"#818fff"}}>Task Creater</h1>
        <Form>
            <Form.Group controlId="formBasicEmail" style={{width:"60%"}}>
              <Form.Label>Task Name</Form.Label>
              <Form.Control type="text" placeholder="Task Name" id="taskName"
                                name="taskName"
                                label="Task Name"
                                value={todo.taskName}
                                onChange={this.handleChange}/>              
            </Form.Group>

            <Form.Group controlId="formBasicPassword" style={{width:"60%"}}>
              <Form.Label>Task Description</Form.Label>
              <Form.Control type="text" placeholder="Task Description"  id="description"
                                name="description"
                                label="Description"
                                value={todo.description}
                                onChange={this.handleChange}/>
            </Form.Group>

           
            
          </Form>
          <br/>
          <label style={{display:"block"}}>Select Task Date and Time</label>
              <DatePicker
                selected={todo.startDate}
                onChange={this.handleChange1}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
                style={{width:"190%"}}
                className="form-control 
       dateInput cssDate" 
            />
        <div style={{marginTop:"20px"}}>
          <Button  variant="primary"  onClick={this.handleSubmit}>
              Submit
            </Button>
            </div>
      </div>
    )
  }

}
const mapDispatchToProps = dispatch => ({
  addTask: (task) => dispatch(addTask(task)),
})
const mapStateToProps = state => ({
    todos: state.todos
})
export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
