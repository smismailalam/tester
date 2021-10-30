import {useParams } from "react-router-dom";
import { Container , Form , Button } from 'react-bootstrap';
import { useState } from "react";
const Edit = () => {
    let { id } = useParams();
    const [ userId , setUserId ] = useState("");
    const [ title , setTitle ] = useState("");
    const [ body , setBody ] = useState("");
    const submit = () => {
        console.log(userId , title , body)
    }
    return (
        <Container fluid>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>userId</Form.Label>
                    <Form.Control onChange={(e)=>{ setUserId(e.target.value) }} type="number" placeholder="Enter userId" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={(e)=>{ setTitle(e.target.value) }}  type="text" placeholder="Enter Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Body</Form.Label>
                    <Form.Control onChange={(e)=>{ setBody(e.target.value) }} type="text" placeholder="Enter Body" />
                </Form.Group>

               
                <Button onClick={()=>{ submit() }} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Edit;
