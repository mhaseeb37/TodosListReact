import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddTodo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be empty!");
        }else{
            addTodo(title,desc);
            setTitle('');
        setDesc('');
        }
        
    }

    return (
        <Container className='my-4'>
            <Row>
                <Col>
                    <h3>Add a Todo</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={submit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} placeholder="Todo Title" onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={desc} placeholder="Todo Description" onChange={(e) => setDesc(e.target.value)} />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Add Todo
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
