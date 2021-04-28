import React, { useState, useEffect, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Context from '../../services/context';

import { SELECT_DATA } from './data/productsData';
import {
    SelectWrapper,
    MyDropdownToggle,
    MyDropdownItem
} from '../../styles/Products';


export const ProductsSelect = () => {
    const [selectedOption, setSelectedOption] = useState('Сортировать по...');
    const selectProps = useContext(Context);

    useEffect(() => selectProps.sortProductsHandler(selectedOption), [selectedOption]);

    return (
        <>
        <SelectWrapper>
            <Dropdown>
                <MyDropdownToggle variant="light">
                    {selectedOption}
                </MyDropdownToggle>
                <Dropdown.Menu>
                {SELECT_DATA.map(({ id, title }) =>
                    <MyDropdownItem
                        key={id}
                        href="#" 
                        onClick={(e) => setSelectedOption(e.target.textContent)}
                    >{title}
                    </MyDropdownItem>
                )}
                </Dropdown.Menu>
            </Dropdown>
        </SelectWrapper>
        </>
    )
}