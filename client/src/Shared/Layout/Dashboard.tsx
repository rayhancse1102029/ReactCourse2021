import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Col, Row } from 'react-bootstrap'
import GetAllEmployee from '../../Content/Employee/GetAllEmployee'
import CreateEmployee from '../../Content/Employee/CreateEmployee'

export default function Dashboard() {
    return (
        <div style={{marginTop:20}}>
            <Row>
                <Col md={8}>
                    <GetAllEmployee></GetAllEmployee>
                </Col>
                <Col md={4}>
                    <CreateEmployee></CreateEmployee>
                </Col>
            </Row>
        </div>
    )
}
