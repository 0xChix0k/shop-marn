import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-cnter py-3'>
            Copyright &copy; Shop-App 
          </Col>
        </Row>
      </Container>
    </footer>
  )
}