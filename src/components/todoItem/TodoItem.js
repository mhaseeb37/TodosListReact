import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todoitem.css';

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <Col>
            <Card className='my-4' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>
                        {todo.desc}
                    </Card.Text>
                    <Button variant="danger" onClick={() => onDelete(todo)}>Delete</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
