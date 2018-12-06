import React, { Component } from 'react';

class InputText extends Component {
  render() {
    return(
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input className="input is-rounded" name={this.props.fieldName} type="text" value={this.props.value} onChange={e => this.props.handleChange(e)} placeholder={this.props.placeHolder} />
        </div>
      </div>
    )
  }
}

 export default InputText;
