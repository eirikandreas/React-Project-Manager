import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";


const NewProjectModal = (props) => {


    const [newProject, setNewProject] = useState({
        title: "",
        client: "",
        employees: "",
        description: "",
        image: "default.png",
        complete: false
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewProject({...newProject, [name]: value});
    }

    const addToArray = () => {
        props.setProject([...props.projects, newProject]);
        props.handleClose();
    }

    const getEmployees = () => {
        return props.employees.map((employee, i) => {
            return (
                <option key={`id-${i}`}>{employee.name}</option>
            )
        });
    }

    const getClients = () => {
        return props.clients.map((client, i) => {
            return (
                <option key={`id-${i}`}>{client.name}</option>
            )
        });
    }

    const getProjectType = () => {
        return props.projectTypes.map((projectType, i) => {
            return (
                <option key={`id-${i}`}>{projectType.name}</option>
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
                <Modal.Title>Create New ProjectSingle</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name="title"
                            onChange={handleChange}
                            type="text"
                            placeholder="Project title"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            name="employees"
                            onChange={handleChange}
                            as="select">
                            <option>-</option>
                            {getProjectType()}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Client</Form.Label>
                        <Form.Control
                            name="client"
                            onChange={handleChange}
                            as="select">
                            <option>-</option>
                            {getClients()}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Assign to</Form.Label>
                        <Form.Control
                            name="employees"
                            onChange={handleChange}
                            as="select">
                            <option>-</option>
                            {getEmployees()}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control
                            name="description"
                            onChange={handleChange}
                            as="textarea"
                            placeholder="Project description"
                            rows={3}
                        />
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                <Button onClick={addToArray} variant="primary">Create</Button>
            </Modal.Footer>
        </Modal>
    )
}

NewProjectModal.propTypes = {
    projects: PropTypes.array.isRequired,
    employees: PropTypes.array.isRequired,
    clients: PropTypes.array.isRequired,
    projectTypes: PropTypes.array.isRequired,
    showModal: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    setProject: PropTypes.func.isRequired
}


export default NewProjectModal;