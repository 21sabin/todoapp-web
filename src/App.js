import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from './app/components/Timer'
let id = 0;

const Todo = props => (
  <li>
    {console.log(props, "11")}
    <input type="checkbox" onChange={props.onCheck} />
    <span>{props.todo.text}</span>
    <button type="button" onClick={props.onDelete}>
      delete
    </button>
  </li>
);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: "",
      count:0
    };
    this.handleText.bind(this);
    this.handelAddTodo.bind(this);
  }
componentWillMount(){
  console.log("componentwillmount")
  setInterval( this.inc , 1000 )
}

getInitialSatete(){
  console.log("intial state")
}
componentDidMount( ){
  console.log("componentdidmount")
}
inc=()=>{
  this.setState(prevState=>({
    count:prevState.count+1
  }))
}
  handleText(event) {
    this.setState({ name: event.target.value });
    console.log(event.target.value, this.state);
  }

  handelAddTodo() {
    this.setState({
      todos: [...this.state.todos, { id: id++, text: this.state.name }]
    });
    this.state.name = "";
  }

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(x => {
        return x.id !== id;
      })
    });
  };

  markTodo = todo => {
    this.setState({
      todos: this.state.todos.map(x => {
        return todo.id == x.id ? { ...x, isSelected: true } : { ...x };
      })
    });
    console.log(this.state.todos, "isselected");
  };

  countCompletedTodo = () => {
    let count = 0;
    this.state.todos.forEach(x => {
      if (x.isSelected) {
        count = count + 1;
      }
    });
    return count;
  };
  render() {
    console.log("render")
    return (
      <div className="App">
      <Timer count={ this.state.count }/>
        {/* <h1>Todo App</h1>
        <h1>Totoal todo:{this.state.todos.length}</h1>
        <h1>Isslected{this.countCompletedTodo()}</h1>
        <input type="text" name="todo" onChange={val => this.handleText(val)} />
        <button type="button" onClick={this.handelAddTodo.bind(this)}>
          Add
        </button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              todo={todo}
              key={todo.id}
              onCheck={() => this.markTodo(todo)}
              onDelete={() => this.deleteTodo(todo.id)}
            />
          ))}
        </ul> */}
      </div>
    );
  }
}

export default App;
