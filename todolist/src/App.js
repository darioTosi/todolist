import React, { Component } from 'react';
import './App.css'
class App extends React.Component {
    constructor() {
        super();
      this.state = {
        currentTodo: '',
        todos: []
      };
      
      this.onChangeText = this.onChangeText.bind(this);
      this.onSubmitText = this.onSubmitText.bind(this);

    }
    onChangeText(event) {
      this.setState({ currentTodo: event.target.value });
    }
    
    onSubmitText(event) {
      //The preventDefault() method stops the default action of an element from happening.
      event.preventDefault()
      this.setState({
        currentTodo: '', //We clean the input text
        todos: [...this.state.todos, this.state.currentTodo]
      });
    }
    
    render() {
      return (
        <div id="i">
          <form onSubmit={this.onSubmitText}>
            <input value={this.state.currentTodo} onChange={this.onChangeText} />
            <button>Submit</button>
          </form>
          <ul>
          {
            this.state.todos.map((todo, index) => <li key={index} >{todo}</li>)
          }
          </ul>
        </div>
      )
    }
  }

export default App; 
 