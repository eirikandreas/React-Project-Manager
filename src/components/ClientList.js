import React from 'react';
import Row from 'react-bootstrap/Row';
import ClientItem from "./ClientItem";
import PropTypes from "prop-types";


const ClientList = (props) => {


    const getClients = () => {
        return props.clients.map((client, i) => {
            return <ClientItem
                key={`id-${i}`}
                name={client.name}
                image={client.image}
            />
        });
    }

    return (
        <Row>
            {getClients()}
        </Row>
    )
}

ClientList.propTypes = {
    clients: PropTypes.array.isRequired,
}

export default ClientList;