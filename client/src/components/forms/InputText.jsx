import React, { Component } from "react";

class InputText extends Component {
  render() {
    return (
      <div className="field is-grouped-center {this.props.}">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input
            className="input is-small is-rounded"
            name={this.props.fieldName}
            type="text"
            value={this.props.value}
            onChange={e => this.props.handleChange(e)}
            placeholder={this.props.placeHolder}
          />
        </div>
      </div>
    );
  }
}

export default InputText;
