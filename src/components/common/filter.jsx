import React from 'react';


const Filter = (props) => {
    return (<div className="list-group">
        {props.genres.map(genre => <a key={genre.name} href="#" onClick={() => props.filterMovies(genre)} className={props.currentGenre === genre ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} >{genre.name}</a>)}
    </div>);
}

export default Filter;