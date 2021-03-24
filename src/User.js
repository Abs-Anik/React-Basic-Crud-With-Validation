import React from 'react';
import './App.css';
import './Style.css';

import {Form, Button, Card} from 'react-bootstrap';

function User(){
    return(
        <div className="App text-left">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Card>
                            <Card.Header className="card-header-bg text-light text-bold">Provide User Details</Card.Header>
                            <Card.Body className="card-body-bg">
                                <Form>
                                    <Form.Group controlId="formBasicName">
                                    <Form.Label className="text-light">User Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter user name" />
                                    </Form.Group>
                                
                                    <Form.Group controlId="formBasicAge">
                                    <Form.Label className="text-light">Age</Form.Label>
                                    <Form.Control type="number" placeholder="Age" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="text-light">Address</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label className="text-light">Select District</Form.Label>
                                    <Form.Control as="select">
                                      <option>--Select District--</option>
                                      <option>Dhaka</option>
                                      <option>Meherpur</option>
                                      <option>Khulna</option>
                                      <option>Comilla</option>
                                      <option>Shylet</option>
                                    </Form.Control>
                                  </Form.Group>
                                    <Form.Group controlId="formBasicRadio">
                                    <input type="radio" value="Male" name="gender" /> <span className="text-light">Male &nbsp; &nbsp;</span>
                                    <input type="radio" value="Female" name="gender" /> <span className="text-light">Female &nbsp; &nbsp;</span>
                                    <input type="radio" value="Other" name="gender" /> <span className="text-light">Other</span>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" className="text-light"/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="text-light">
                                    Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6">
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;