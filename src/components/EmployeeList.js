import React from 'react';
import Row from 'react-bootstrap/Row';
import EmployeeItem from './EmployeeItem';
import PropTypes from "prop-types";


const EmployeeList = (props) => {

    const getEmployees = () => {
        return props.employees.map((employee, i) => {
            return <EmployeeItem
                key={`id-${i}`}
                name={employee.name}
                description={employee.description}
                position={employee.position}
                image={employee.image}
            />
        });
    }

    return (
        <Row>
            {getEmployees()}
        </Row>

    )
}

EmployeeList.propTypes = {
    employees: PropTypes.array.isRequired,
}

export default EmployeeList;