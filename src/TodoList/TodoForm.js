import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api_url: props.api_url,
      task: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.formSubmit(e.target);
  }

  async formSubmit(formData) {
    let data = new FormData(formData);
    await fetch(this.state.api_url, {
      method: 'POST',
      mode: 'cors',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => this.props.updateTodoList(data));
  }
  handleTaskChange(e) {
    this.setState({
      task: e.target.value,
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} id='todo-form' autoComplete='off'>
          <TextField
            id='task-input'
            label='Task Description'
            variant='outlined'
            type='text'
            name='todo[task]'
            onChange={this.handleTaskChange}
          />
          <br />
          <Button variant='contained' color='primary' type='submit'>
            Add Task
          </Button>
        </form>
      </>
    );
  }
}

export default TodoForm;
