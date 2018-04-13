import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    notes: ['Note1','Note2','Note3'],
    noteInput: ''
  }

  // lifecycle of React 
  componentDidMount() {
    this.noteInput.focus()
  }

  changeValue = (e) => {
    this.setState({noteInput: e.target.value})
  }

  addNote = (e) => {
    console.log(1231312131,e)
    if(e.key === 'Enter') {
      this.setState({
        notes: [...this.state.notes, e.target.value],
        noteInput: ''
      })
    }
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.notes.map( (note,index) => (<li key={index}>{note}</li>))}
        </ul>
        <input  type="text"
                value={this.state.noteInput}
                onChange={this.changeValue}
                onKeyUp={this.addNote}
                ref={input => this.noteInput = input}/>
      </div>
    )
  }
}

export default App;
