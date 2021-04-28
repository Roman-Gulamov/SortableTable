import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';


export const SelectWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.5em;
`

export const MyDropdownToggle = styled(Dropdown.Toggle)`
    font-size: 0.8em;

    @media screen and (max-width: 1024px) {
        font-size: 0.6em;
    }
`

export const MyDropdownItem = styled(Dropdown.Item)`
    font-size: 0.8em;

    @media screen and (max-width: 1024px) {
        font-size: 0.6em;
    }
`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
    
    & .pagination {
        user-select: none;
    }
`

export const MyTable = styled(Table)`
    margin-bottom: 2em;

    & tr th, & tr td {
        @media screen and (max-width: 1024px) {
            font-size: 0.7em;
        }

        @media screen and (max-width: 500px) {
            font-size: 0.45em;
        }

        @media screen and (max-width: 300px) {
            font-size: 0.3em;
        }
    }
`