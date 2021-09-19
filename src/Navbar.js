import React, { useContext } from 'react'
import {Movieprovider} from './Moviecontext'


function Navbar() {

    const obj =useContext(Movieprovider)

    return <div style={{backgroundColor:'teal'}}>

<h1>The Total Movies Count is : {obj.movies.lenght}</h1>

    </div>
}

export default Navbar