import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import Context from '../services/context';

import { Header } from '../Components/Header';
import { Products } from '../Components/Products/Products';
import { Status } from '../Components/Status';

import { GlobalStyle } from '../styles/GlobalStyle';

const Main = () => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [productsList, setProductsList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchValue, setSearchValue] = useState(null);
    const [pageNumber, setPageNumber] = useState(0);


    useEffect(() => {
        axios
        .get('http://localhost:3001/api/get')
        .then(response => {
            if (response.data.length !== 0) {
                setLoaded(true);
                setProductsList(response.data);
                setSearchList(response.data)
            } else {
                setError(true);
            }
        })
        .catch((err) => (err.response || err.request) && setError(true))
    }, []);


    const filterList = (event) => setSearchValue(event.target.value);

    useEffect(() => {
        if (searchList && searchValue) {
            const results = searchList.filter(item => item.productsName.toLowerCase().includes(searchValue.toLowerCase().trim()));
            setProductsList(results)
        }
    }, [searchValue]);
    
    
    const changePageNumber = ({ selected }) => setPageNumber(selected);

    const sortProductsHandler = (selectedOption) => {
        switch (selectedOption) {
            case 'Наименование':
                axios
                .get('http://localhost:3001/api/sort-name')
                .then(response => response.data.length !== 0 ? setProductsList(response.data) : setError(true))
                .catch((err) => (err.response || err.request) && setError(true));
            break;
            case 'Количество':
                axios
                .get('http://localhost:3001/api/sort-number')
                .then(response => response.data.length !== 0 ? setProductsList(response.data) : setError(true))
                .catch((err) => (err.response || err.request) && setError(true));
            break;
            case 'Расстояние':
                axios
                .get('http://localhost:3001/api/sort-distance')
                .then(response => response.data.length !== 0 ? setProductsList(response.data) : setError(true))
                .catch((err) => (err.response || err.request) && setError(true));
            break;
            default:
                break;
        }
    };


    if (error) {
        return (
            <>
            <GlobalStyle />
                <Header />
                <Status message="Не удалось подключиться к серверу" />
            </>
        )
    } else if (!loaded) {
        return (
            <>
            <GlobalStyle />
                <Header />
                <Status message="Загружаю..." />
            </>
        )
    } else {
        return (
            <Context.Provider value={{ productsList, sortProductsHandler, pageNumber, changePageNumber }}>
            <GlobalStyle />
                <Header filterList={filterList} />
                <Products />
            </Context.Provider>
        )
    }
}

export default Main;
