import React, { Component} from 'react'
import CreateTask from './CreateTask';
import {connect} from "react-redux";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Tasks from './Tasks';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'



class TaskParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
      flag: true
    }
    this.handleSubmitUpcoming = this.handleSubmitUpcoming.bind(this);
    this.handleSubmitAll = this.handleSubmitAll.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.flag) {
      return {
        todos: [...nextProps.todos],
      }
    } else return {
      flag: true
    };
  }

  handleSubmitUpcoming = () => {
    let temp = [...this.state.todos];
    let todosd = temp.filter((a) => (a.startDate.getTime() > new Date().getTime()));
    console.log(todosd);
    todosd = todosd.sort(function(a, b){
      var keyA = new Date(a.startDate),
          keyB = new Date(b.startDate);
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
  });
    todosd = todosd.slice(0,3);
    this.setState({
      todos: [...todosd],
      flag: false
    })
  }
  handleSubmitAll = () => {
    this.setState({
      todos: this.props.todos
    })
  }
 
  render() {
    const {todos} = this.state;
    console.log("todos-->",todos);
    console.log(this.props)
    return (
      <div>
        <Container>
        <Row>
            <Col xs={12} md={8} >
            <Card style={{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s"}}>
              <Card.Body><CreateTask /></Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={4} style={{overflowX:"auto"}}>
            <Card style={{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s"}}>
              <Card.Body>
                <div>
                <Row style={{paddingBottom:"30px"}}> 
            <Col xs={6}>
            <Button variant="primary"  onClick={this.handleSubmitUpcoming}>
              Upcoming
            </Button>
            </Col>
            <Col xs={6}>
            <Button variant="primary"  onClick={this.handleSubmitAll}>
              All
            </Button>
            </Col>
            </Row>
            
                </div>
                <Col xs={12} md={12} className="left-panel">
              {todos.map((todo, index) => 
              <ListGroup>
              <ListGroup.Item key={index} style={{marginBottom:"20px"}} action variant="secondary"> <Tasks todo={todo} /></ListGroup.Item>
              </ListGroup>)}
              </Col>
              </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.tasks.todos
})
export default  connect(mapStateToProps)(TaskParent);
