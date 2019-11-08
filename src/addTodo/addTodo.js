import React from 'react';

class AddTodo extends React.Component {

    constructor(){
        super();
        this.state = {
            todo: ''
        };

    }
    render() {
        return (
        <div className="addTodoContainer">
            <section class="section">
                <form onSubmit={ (e) => this.submitTodo(e) }>
                <div class="field has-addons">
                    <div class="control  is-expanded">
                        <input id="addTodoInput" className="input" onChange={ (e) => this.updateInput(e) } type="text"></input>
                    </div>
                    <div class="control"> 
                        <button className="button is-primary" type="submit">Add Todo</button>
                    </div>
                    </div>
                </form>
                <div className="list is-hoverable">
                </div>
                
            </section>
        </div>
        )
    }

    updateInput(e) {
        this.setState({
            todo: e.target.value
        })
    }

    submitTodo(e){
        e.preventDefault();
        this.props.addTodoFn(this.state.todo)
        document.getElementById('addTodoInput').value="";
    }
}

export default AddTodo;