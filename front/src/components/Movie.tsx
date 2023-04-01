
import React from 'react'

export default function Movie(movie : { title: any, year: any, director: any, category: any, rating: any, edited: any }) {
    return (
        <>
            <tr>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.director}</td>
                <td>{movie.category}</td>
                <td>{movie.rating}</td>
                <td>{movie.edited}</td>
            </tr>
        </>
    )
}
