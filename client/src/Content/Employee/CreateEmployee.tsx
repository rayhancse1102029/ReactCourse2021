import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

function createFun(){
    console.log('function called')
    alert("hi how are you")
}

export default function CreateEmployee() {
    return (
        <div style={{marginRight: '20px', marginTop:'10px'}}>
            <Card>
                <Card.Header>
                    <h5 className="font-weight:bold">Create New Employee</h5>
                </Card.Header>
                <Card.Body>
                    <Form id="myForm">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="fullName" id="fullName" placeholder="enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Department</Form.Label>
                            <Form.Control type="text" name="deptName" id="deptName" placeholder="enter your department" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="email" name="designationName" id="designationName" placeholder="enter your designation" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" name="description" id="description" rows={3} />
                        </Form.Group>
                        <Button variant="success" onClick={createFun} style={{marginLeft: '10px'}}>Update</Button>
                    </Form>
                </Card.Body>
            </Card>
           
        </div>
    )
}
