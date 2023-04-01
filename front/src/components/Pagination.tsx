
import React from 'react'

export default function Pagination({ moviesPerPage, totalMovies, paginate, currPage } : { moviesPerPage: any, totalMovies: any, paginate: any, currPage: any }) {
    let pageNumbers: any[] = []
    let nextLiClass = 'page-item'
    let prevLiClass = 'page-item'
    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) { pageNumbers.push(i) }
    switch (currPage) {
        case (pageNumbers.at(-1)):
            nextLiClass = nextLiClass + ' disabled'
            break
        case (pageNumbers.at(0)):
            prevLiClass = prevLiClass + ' disabled'
            break
    }
    return (
        <nav>
            <ul className='pagination'>
                <li className={prevLiClass}>
                    <a onClick={() => paginate(currPage - 1)} className='page-link' href='#'>
                        <i className="fa fa-solid fa-angle-left"></i>
                    </a>
                </li>
                {
                    pageNumbers.map((pageNum: Number) => {
                        let liClass = 'page-item'
                        if (currPage === pageNum) { liClass = liClass + ' active' }
                        return (
                            <li key={String(pageNum)} className={liClass}>
                                <a onClick={() => paginate(pageNum)} className='page-link' href='#'>{String(pageNum)}</a>
                            </li>
                        )
                    })
                }
                <li className={nextLiClass}>
                    <a onClick={() => paginate(currPage + 1)} className='page-link' href='#'>
                        <i className="fa fa-solid fa-angle-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
