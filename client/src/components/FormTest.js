import React from 'react';

class FormTest extends React.Component {

  getGifs(){
    fetch('http://localhost:3000/api/logs/')
      .then(response => {
        console.log(response);
        response.json()})
      .then(json => json)
  }

  render() {
    return(
      <div>
    <button onClick={this.getGifs}>Get JSON</button>
    </div>
    )}
}
export default FormTest;