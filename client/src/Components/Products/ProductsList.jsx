import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import moment from 'moment';
import Context from '../../services/context';

import { LIST_DATA } from './data/productsData';
import { ListWrapper, MyTable } from '../../styles/Products';


export const ProductsList = () => {
    const listProps = useContext(Context);

    const productsPerPage = 13;
    const pagesVisited = listProps.pageNumber * productsPerPage;
    const pageCount = Math.ceil(listProps.productsList.length / productsPerPage);
    const productsMap = listProps.productsList.slice(pagesVisited, pagesVisited + productsPerPage);
    
    return (
        <ListWrapper>
            <MyTable striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                    {LIST_DATA.map(({ id, title }) =>
                        <th key={id}>{title}</th>
                    )}
                    </tr>
                </thead>
                <tbody>
                {productsMap.map(({ id, productsName, productsNumber, productsDate, productsDistance }) =>
                    <tr key={id}>
                        <td>{moment(productsDate).format('LL')}</td>
                        <td>{productsName}</td>
                        <td>{productsNumber}</td>
                        <td>{productsDistance}</td>
                    </tr>
                )}
                </tbody>
            </MyTable>
            <ReactPaginate 
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={listProps.changePageNumber}
                containerClassName={"pagination pagination-sm flex-sm-wrap"}
                previousClassName={"page-link"}
                nextClassName={"page-link"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </ListWrapper>
    )
}
