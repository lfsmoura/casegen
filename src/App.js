import React, { Component } from 'react';
import './App.css';
import { Editor } from './components/editor';
import { updateModelItem, generateCase } from './models/Case.js';

class App extends Component {
  constructor() {
      super();
      this.model = [
        { id: 0, type: 'name' },
        { id: 1, type: 'text', value: 'é' },
        { id: 2, type: 'job' },
      ];
      this.state = {
        parts: generateCase(this.model),
        model: this.model,
      };
      this.generate = this.generate.bind(this);
      this.handleValueChange = this.handleValueChange.bind(this);
      this.handleTypeChange = this.handleTypeChange.bind(this);
      this.addItem = this.addItem.bind(this);
  }

  generate() {
    this.setState({ parts: generateCase(this.state.model) });
  }

  handleValueChange(id, value) {
    const model = updateModelItem(this.state.model, id, { value });
    this.setState({
      model
    }, this.generate);
  }

  handleTypeChange(id, type) {
    const model = updateModelItem(this.state.model, id, { type, value: null });
    this.setState({
      model
    }, this.generate);
  }

  addItem() {
    this.setState({
      model: [...this.state.model, { id: this.state.model.length, type: 'text'}],
    }, this.generate)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Gerador de Casos</h2>
        </div>
        <p className="App-intro">
          Crie seu caso
        </p>
        <p className="case">
          {this.state.parts.map(part => (<span key={part.id} className={part.type}> {part.value} </span>))}
        </p>
        <button className="generate-button" onClick={this.generate}>
          Gerar outro
        </button>

        <Editor
          handleValueChange={this.handleValueChange}
          handleTypeChange={this.handleTypeChange}
          handleAdd={this.addItem}
          model={this.state.model} />
      </div>
    );
  }
}

export default App;
