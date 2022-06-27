
import React from 'react'
import s from './pagination.module.scss'
import ReactPaginate from 'react-paginate';


const Pagination = ({curentPage, onChangePage}) => {

    return (
        <div className={s.wrap}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=" >"
                onPageChange={event => onChangePage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}
                forcePage = {curentPage - 1}
            />
        </div>

    )
}

export default Pagination