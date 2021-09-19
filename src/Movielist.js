import React ,{ useContext }from 'react'
import {Movieprovider} from './Moviecontext'

function Movielist() {

    const obj =useContext(Movieprovider)

    const Movielist = obj.movies.map((movie)=>{

        return <div style={{backgroundColor:'yellow'}}>

            <h1>{movie.Moviename}</h1>
            <p>{movie.MovieType}</p>
        </div>

    })
    return <div style={{backgroundColor:'green'}}>

<h1>Movielist</h1>

    {Movielist}
    </div>
}

export default Movielist