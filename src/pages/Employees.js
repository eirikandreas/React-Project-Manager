import React, {useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import EmployeeList from "../components/EmployeeList";
import NewEmployeeModal from '../components/NewEmployeeModal';
import PropTypes from "prop-types";


const Employees = (props) => {


    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Row className="flex-row justify-content-between mt-3 mb-3">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>Employees</h3>
                        <Button
                            style={{minWidth: "150px"}}
                            variant="primary"
                            onClick={handleShow}>Add Employee</Button>
                    </div>
                </Col>
            </Row>

            <NewEmployeeModal
                setEmployee={props.setEmployee}
                employees={props.employees}
                positions={props.positions}
                showModal={show}
                handleClose={() => handleClose()}/>

            <EmployeeList employees={props.employees}/>
        </>

    )
}

Employees.propTypes = {
    employees: PropTypes.array.isRequired,
    setEmployee: PropTypes.func.isRequired,
    positions: PropTypes.array.isRequired,
}

export default Employees;