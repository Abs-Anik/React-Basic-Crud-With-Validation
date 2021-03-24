import React, {useState} from 'react';
import './App.css';
import './Style.css';
import { FaEdit, FaTrashAlt  } from 'react-icons/fa';
import {Form, Button, Card, Table} from 'react-bootstrap';

function User(){
    const [state, setState] = useState({
        id: "",
        name:"",
        age:"",
        address:"",
        district:"",
        gender:"",
        check:false,
        list:[]

    });
    const [isEdit, setIsEdit] = useState(false);

    const handleChange = (value, name) => {
        const cloneState = {...state};
        cloneState[name] = value;
        setState(cloneState);
        console.log(`handleChange`, value);
    }

    console.log(`state`, state);

    const handleSubmit = (e) => {
        e.preventDefault();
        const cloneState = {...state};
        const userList = {
            name:cloneState.name,
            age:cloneState.age,
            address:cloneState.address,
            district:cloneState.district,
            gender:cloneState.gender,
            check:cloneState.check
        };

        cloneState.list.push(userList);
        setState(cloneState);

        const clearState = {...state};
        clearState.name = "";
        clearState.age = "";
        clearState.address = "";
        clearState.district = "";
        clearState.gender = "Male";
        clearState.check = false;

        setState(clearState);
    }

    const itemDelete = (index) => {
        const cloneState = {...state};
        cloneState.list.splice(index, 1);
        setState(cloneState);
    }

    const itemEdit = (index, item) => {
        const cloneState = {...state};
        cloneState.id = index;
        cloneState.name = item.name;
        cloneState.age = item.age;
        cloneState.address = item.address;
        cloneState.district = item.district;
        cloneState.gender = item.gender;
        cloneState.check = item.check;
        setState(cloneState);
        setIsEdit(true);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const cloneState = {...state};
        for (let i = 0; i < cloneState.list.length; i++) {
            const element = cloneState.list[i];
            if(i == state.id){
                element.name = state.name;
                element.age = state.age;
                element.address = state.address;
                element.district = state.district;
                element.gender = state.gender;
                element.check = state.check;
            }

            setState(cloneState);

            const clearState = {...state};
            clearState.name = "";
            clearState.age = "";
            clearState.address = "";
            clearState.district = "";
            clearState.gender = "Male";
            clearState.check = false;
            setState(clearState);
            setIsEdit(false);   
        }
    }
    return(
        <div className="App text-left">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Card>
                            <Card.Header className="card-header-bg text-light text-bold">Provide User Details</Card.Header>
                            <Card.Body className="card-body-bg">
                                <Form onSubmit={isEdit === true ? (e)=>handleUpdate(e) : (e)=>handleSubmit(e)}>
                                    <Form.Group controlId="formBasicName">
                                    <Form.Label className="text-light">User Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter user name" name="name" value={state.name} onChange={(e)=>handleChange(e.target.value, 'name')}/>
                                    </Form.Group>
                                
                                    <Form.Group controlId="formBasicAge">
                                    <Form.Label className="text-light">Age</Form.Label>
                                    <Form.Control type="number" name="age" value={state.age} placeholder="Age" onChange={(e)=>handleChange(e.target.value, 'age')}/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="text-light">Address</Form.Label>
                                    <Form.Control as="textarea" name="address" value={state.address} rows={3} onChange={(e)=>handleChange(e.target.value, 'address')}/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label className="text-light">Select District</Form.Label>
                                    <Form.Control as="select" name="district" value={state.district} onChange={(e)=>handleChange(e.target.value, 'district')}>
                                      <option value="">--Select District--</option>
                                      <option value="Dhaka">Dhaka</option>
                                      <option value="Meherpur">Meherpur</option>
                                      <option value="Khulna">Khulna</option>
                                      <option value="Comilla">Comilla</option>
                                      <option value="Shylet">Shylet</option>
                                      <option value="Dinajpur">Dinajpur</option>
                                    </Form.Control>
                                  </Form.Group>
                                    <Form.Group controlId="formBasicRadio">
                                    <input type="radio" value="Male" name="gender"  onChange={(e)=>handleChange(e.target.value, 'gender')}/> <span className="text-light">Male &nbsp; &nbsp;</span>
                                    <input type="radio" value="Female" name="gender"  onChange={(e)=>handleChange(e.target.value, 'gender')}/> <span className="text-light">Female &nbsp; &nbsp;</span>
                                    <input type="radio" value="Other" name="gender"  onChange={(e)=>handleChange(e.target.value, 'gender')}/> <span className="text-light">Other</span>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" value={state.check} name="check" checked={state.check} className="text-light" onChange={(e)=>handleChange(e.target.checked, 'check')}/>
                                    </Form.Group>
                                    {
                                        isEdit === true ? <Button variant="warning" type="submit" className="text-light">Update</Button> : <Button variant="primary" type="submit" className="text-light">Submit</Button>
                                    }
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-8">
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>District</th>
                            <th>Gender</th>
                            <th>Check</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                state.list.map((item, index) => 
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.address}</td>
                                    <td>{item.district}</td>
                                    <td>{item.gender == ""? "N/A" : item.gender}</td>
                                    <td>{item.check ? 'Yes' : 'No'}</td>
                                    <td>
                                        <Button variant="primary" onClick={()=>itemEdit(index, item)}><FaEdit /></Button>{' '}
                                        <Button variant="danger" onClick={()=>itemDelete(index)}><FaTrashAlt /></Button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;