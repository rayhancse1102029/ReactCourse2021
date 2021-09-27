import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Tab, Row, Col, ListGroup, Button, Card, Container } from 'react-bootstrap'
import { Employee } from '../../Models/Employee/Employee'

export default function GetAllEmployee() {

    const [EmployeeList, setEmployeeList] = useState<Employee[]>([])

    useEffect(() => {
        axios.get<Employee[]>("https://localhost:44321/api/Employees")
        .then(res=>{
            setEmployeeList(res.data)
            console.log(res.data)
        })
    }, [])


    function employeeDetailsFun(){

    }
    function employeeUpdateFun(){
        
    }


    return (
        <Container>
             <Row>
                 {EmployeeList.map((employee)=>{
                     return <Col md={4} key={employee.id} style={{marginTop: '10px'}}>                    
                                 <Card style={{ width: '100%' }} > {/* style={{ width: '18rem' }} */}
                                    <Card.Img style={{height: '164px'}} variant="top" src={'https://localhost:44321' + employee.imgUrl} />
                                    <Card.Body>
                                        <Card.Title>{employee.fullName}</Card.Title>
                                        <Card.Text>{employee.deptName}</Card.Text>
                                        <Card.Text>{employee.designationName}</Card.Text>
                                        <Button variant="info" onClick={employeeDetailsFun}>Details</Button>
                                        <Button variant="danger" onClick={employeeUpdateFun} style={{marginLeft: '10px'}}>Update</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                 })}
                
            </Row>
        </Container>
       
    )
}

