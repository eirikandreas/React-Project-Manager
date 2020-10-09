import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";


const NewEmployeeModal = (props) => {


    const [newEmployee, setNewEmployee] = useState({
        name: "",
        positions: "",
        image: "default.png"
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewEmployee({...newEmployee, [name]: value});
    }

    const addToArray = () => {
        props.setEmployee([...props.employees, newEmployee]);
        props.handleClose();
    }

    const getPositions = () => {
        return props.positions.map((position, i) => {
            return (
                <option key={`id-${i}`}>{position.title}</option>
            )
        });
    }

    return (
        <Modal
            show={props.showModal}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            onChange={handleChange}
                            type="text"
                            placeholder="Employee Name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                            name="position"
                            onChange={handleChange}
                            as="select">
                            <option>-</option>
                            {getPositions()}
                        </Form.Control>
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                <Button onClick={addToArray} variant="primary">Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

NewEmployeeModal.propTypes = {
    employees: PropTypes.array.isRequired,
    positions: PropTypes.array.isRequired,
    showModal: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    setEmployee: PropTypes.func.isRequired
}


export default NewEmployeeModal;