import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Tab, Row, Col, ListGroup, Button, Card, Container } from 'react-bootstrap'
import { Employee } from './Employee'

export default function GetAllEmployee() {

    const [EmployeeList, setEmployeeList] = useState<Employee[]>([])

    useEffect(() => {
        axios.get<Employee[]>("https://localhost:44321")
        .then(res=>{
            setEmployeeList(res.data)
        })
    }, [])

    return (
        <Container>
             <Row>
                <Col md={4}>
                    
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
       
    )
}

