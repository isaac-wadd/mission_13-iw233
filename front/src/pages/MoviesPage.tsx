
import React, { useState, useEffect } from 'react'
import Movie from '../components/Movie'
import Pagination from '../components/Pagination'

export default function MoviesPage({ movies } : { movies: any }) {

// using 'useState' for list of movies, current page number (for movies list) and count of movies per page
    const [moviesList, setMoviesList] = useState([])
    const [currPageNum, setPageNum] = useState(1)
    const [moviesPerPage] = useState(20)

// 
    useEffect(() => {
        const getMovies = async () => {
            setMoviesList(movies)
        }
        getMovies()
    }, [movies])

    const firstMovieInd = (currPageNum - 1) * moviesPerPage
    const lastMovieInd = firstMovieInd + moviesPerPage
    const currMovies = moviesList.slice(firstMovieInd, lastMovieInd)

    const paginate = (pageNum: number) => setPageNum(pageNum)

    return (
        <>
            <h3 className='display-5 text-center'>All Movies</h3>
            <br />
            <table className='table table-striped table-bordered text-start'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Edited</th>
                    </tr>
                </thead>
                <tbody>
                {
                    currMovies.map((movie: any, index: Number) => {
                        return <Movie key={String(index)} title={movie.Title} year={movie.Year} director={movie.Director} category={movie.Category} rating={movie.Rating} edited={movie.Edited} />
                    })
                }
                </tbody>
            </table>
            <div style={{ height: '200px' }}>
                <div className='container'>
                    <Pagination moviesPerPage={moviesPerPage} totalMovies={moviesList.length} paginate={paginate} currPage={currPageNum} />
                </div>
            </div>
        </>
    )
}
