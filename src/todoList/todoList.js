import React from 'react';
import TodoItem from '../todoItem/todoItem';

class TodoList extends React.Component {
    render() {
        const { todos } = this.props;
        return (
            <div className="todoListContainer list is-hoverable">
            {
                todos.map((_todo, _index) => {
                    return (
                        <TodoItem updateTodoFn={this.updateTodo} key={_index} todo={_todo}></TodoItem>
                    )
                    
                })
            }
            </div>
        )
    }

    updateTodo = (todo) =>{
        this.props.updateTodoFn(todo)
    }
}

export default TodoList;