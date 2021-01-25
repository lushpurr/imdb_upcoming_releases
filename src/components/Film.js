import React from 'react';

const Film = ({name, children}) => {
    return(
        <a href={children}>{name}</a>
    )
}

export default Film;