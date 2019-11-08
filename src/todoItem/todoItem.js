import React from 'react';
import './style.css';

class TodoItem extends React.Component {
    render() {
        const {todo} = this.props;
        if(todo.completed === this.props.completed ){
            return (
                <a href="/#" className={"list-item" + (todo.completed ? ' completed' : '') } onClick={this.toggleTodo}>{todo.text}</a >
                )
        }else {
            return null;
        }
    }

    toggleTodo = () =>{
        this.props.updateTodoFn(this.props.todo)
    }
}

export default TodoItem;