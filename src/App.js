import React from 'react';
import TodoList from './todoList/todoList';
import AddTodo from './addTodo/addTodo';
import './App.sass';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            todos: []
        };
    }

    render(){
        return (
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <AddTodo addTodoFn={this.addTodo} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-header">
                                <p className="card-header-title">To Do List</p>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                <TodoList todos={this.state.todos}  updateTodoFn={this.updateTodo} completed={false}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-header">
                                <p className="card-header-title">Done List</p>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    <TodoList todos={this.state.todos}  updateTodoFn={this.updateTodo} completed={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    componentDidMount(){
        const todos = localStorage.getItem('todos');
        if(todos){
            const savedTodos = JSON.parse(todos);
            this.setState({todos: savedTodos})
        }else {
            console.log('No todos')
        }
        
    }

    addTodo = async (todo) => {
       await this.setState({
            todos: [...this.state.todos, {
                text: todo,
                completed: false
            }]
        });

        localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }

    updateTodo = async (todo) =>{
        const newTodos = this.state.todos.map(_todo =>{
            if(todo ===_todo){
                return {
                    text: todo.text,
                    completed: !todo.completed
                }
            }
            else return _todo
        })
        await this.setState({todos: newTodos})
        localStorage.setItem('todos', JSON.stringify(this.state.todos) )
    }

}

export default App;
