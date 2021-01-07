import React, { Component } from 'react'

class TodoComponent extends Component {
    render() {
        const styles = {
            borderBottom: '1px solid grey',
            width: '300px',
            margin: '5px auto'
        }

        const componentStyles = {
            display: 'inline-block',
            padding: '5px'
        }

        return (
            <div style={styles}>
                <input style={componentStyles} type="checkbox" defaultChecked={this.props.todo.completed} />
                <p style={componentStyles}>{this.props.todo.text}</p>
            </div>
        )
    }
}

export default TodoComponent