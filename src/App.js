import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    notes: ['Note1','Note2','Note3']
  }

  addNote = (e) => {
    console.log(1231312131,e)
    if(e.key === 'Enter') {
      this.setState( {notes: [...this.state.notes, e.target.value]} , () => console.log(this.state.notes))
    }
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.notes.map( (note,index) => (<li key={index}>{note}</li>))}
        </ul>
        <input  type="text"
                onKeyUp={this.addNote}
                ref={input => }/>
      </div>
    )
  }
}

export default App;
