import React, { Component } from 'react'
import Todos from '../testData.js'
import TodoComponent from './TodoComponent'

class TodoList extends Component {
    render() {
        const styles = {
            margin: '0 auto',
            textAlign: 'center',
            fontFamily: 'Arial'
        }

        const TodoDisplay = Todos.map(t => <TodoComponent key={t.id} todo={t} />)

        return (
            <div style={styles}>
                <h1>Todos</h1>
                {TodoDisplay}
            </div>
        )
    }
}

export default TodoList