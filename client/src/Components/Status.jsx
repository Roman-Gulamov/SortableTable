import React from 'react';
import Container from 'react-bootstrap/Container';
import { StatusMessage, Text } from '../styles/Status';


export const Status = ({ message }) => {
    return (
        <Container>
            <StatusMessage>
                <Text>{message}</Text>
            </StatusMessage>
        </Container>
    )
}
