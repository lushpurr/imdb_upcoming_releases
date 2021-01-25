import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {

    const filmArray = films.map(film => {
        return(
            <li><Film name= {film.name} key={film.id}>{film.url}</Film></li>
        )
    })

    return(
        <>
        <ul>
        {filmArray}
        </ul>
        </>

    );
}

export default FilmList;