import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends Component {

    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
    };

    createTodoItem(label) {
        return{
            label,
            impotrant: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
      this.setState(({todoData}) => {
        const idx = todoData.findIndex((el) => el.id === id);

        const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

        return{
            todoData: newArray
        }
      })
    };

    addItem = (text) => {

        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];

            return {
                todoData: newArray
            }
        })
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    toggleProperty(arr, id, propsName){
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propsName]: !oldItem[propsName]};
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    render() {
        const { todoData } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;

        const toDoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={ toDoCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                    <ItemAddForm onItemAdd={this.addItem}/>
            </div>
        );
    }

};