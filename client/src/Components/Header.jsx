import React from 'react';

import Container from 'react-bootstrap/Container';
import { 
    HeaderWrapper, 
    HeaderInner, 
    InnerLogo, 
    InnerSearch } from '../styles/Header';


export const Header = ({ filterList }) => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderInner>
                    <InnerLogo>
                        Colors
                    </InnerLogo>
                    <InnerSearch 
                        type="text" 
                        placeholder="Поиск.."
                        onInput={(event) => filterList(event)} 
                    />
                </HeaderInner>
            </Container>
        </HeaderWrapper>
    )
}
