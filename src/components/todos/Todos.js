import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { TodoItem } from '../todoItem/TodoItem';
import './Todos.css';

export const Todos = ({ todoList, onDelete }) => {
    return (
        <Container>
            <Row>
                <h3>Todos List</h3>
                {todoList.length === 0 ? "No Todos to display" :
                    todoList.map((todo) => {
                        return <TodoItem key={todo.sno} todo={todo} onDelete={onDelete}/>
                    }) 
                }
                

            </Row>
        </Container>
    )
}
