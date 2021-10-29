import React, { Component, useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoItem from '../components/TodoItem';
const url = 'http://127.0.0.1:3001/api/v1/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.updateTodoList = this.updateTodoList.bind(this);
  }
  componentDidMount() {
    this.getTask();
  }

  getTask() {
    fetch(url)
      .then((res) => res.json())
      .then((response_items) => {
        this.setState({
          items: response_items.reverse(),
        });
      });
  }

  updateTodoList(item) {
    let _items = this.state.items;
    // unshift adds to the beginning of array
    _items.unshift(item);
    this.setState({
      items: _items,
    });
  }

  render() {
    console.log(this.state.items);
    return (
      <div>
        <TodoForm api_url={url} updateTodoList={this.updateTodoList} />
        <ul id='todo_list'>
          {this.state.items.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
