
import React, {Component} from 'react';
import './App.css';
import { sampleText } from './sampleText';
import marked from 'marked';

class App extends Component {
  state = {
    text: sampleText
  }
  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }
  renderText = text => marked(text, { sanitize: true })
  render () {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-sm-6'>
          <textarea
            onChange={this.handleChange}
            value={this.state.text}
            className='form-control'
            rows='35'/>
        </div>
        <div className='col-sm-6'>
          <div dangerouslySetInnerHTML={{ __html: this.renderText
          (this.state.text) }} />
        </div>
      </div>     
    </div>
  );
}
}

export default App;
