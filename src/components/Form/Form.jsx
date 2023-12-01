import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  StyledButten,
  StyledFormIput,
  StyledFormLabel,
  StyledForm,
} from 'components/Form/FormStyle';
const initState = {
  name: '',
  number: '',
};
export class Form extends Component {
  state = { ...initState };

  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ ...initState });
  };
  handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  render() {
    return (
      <StyledForm onSubmit={this.handelSubmit}>
        <StyledFormLabel
          htmlFor={this.nameInputId}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          Name
          <StyledFormIput
            type="text"
            name="name"
            id={this.nameInputId}
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.handelChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </StyledFormLabel>
        <StyledFormLabel
          htmlFor={this.numberInputId}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          Number
          <StyledFormIput
            type="tel"
            name="number"
            id={this.numberInputId}
            value={this.state.number}
            placeholder="Enter 7-digit number"
            onChange={this.handelChange}
            pattern="[0-9]{7}"
          />
        </StyledFormLabel>
        <StyledButten type="submit">Add contact</StyledButten>
      </StyledForm>
    );
  }
}
