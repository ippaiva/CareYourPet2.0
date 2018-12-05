import React, { Component } from 'react';

class FormField extends Component {
  render(){
    return(
      <div class="field" onSubmit={this.handleFormSubmit}>
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" value={this.state.Username} onChange={e => this.handleChange(e)} placeholder="e.g Alex Smith" />
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
          </div>
          <input type="submit" value="Signup" />
        </div>
      </div>
    )
  }
}



 export default FormField;