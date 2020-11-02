import React from 'react'
import { Card } from 'react-bootstrap'

export default function Stat(props) {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <i className={props.icon} style={`color: ${props.color};`}></i>
                        </Col>
                        <Col>
                            <span> {props.title} </span>
                            <span> </span>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}