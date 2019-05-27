import { connect } from 'react-redux'
import React, { Component } from 'react'
import ToDoList from './ToDoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}

export default connect()(App);
