import React from 'react';
import Container from 'react-bootstrap/Container';

import { ProductsSelect } from './ProductsSelect';
import { ProductsList } from './ProductsList';


export const Products = () => {
    return (
        <Container>
            <ProductsSelect />
            <ProductsList />
        </Container>
    )
}