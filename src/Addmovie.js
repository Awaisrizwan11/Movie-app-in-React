import React, { useContext, useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Movieprovider} from './Moviecontext'

function Addmovie() {

const[Moviename,setMoviename] = useState('');
const[MovieType,setMovieType] = useState('');

const obj =useContext(Movieprovider)

function add() {
    let movie ={
    Moviename:Moviename,
    MovieType:MovieType
    }
    obj.addmovie(movie)
}


        return <div style={{padding:"20px"}}>
                <h1>Addmovie</h1>

                <input  type='text' placeholder='Moviename' value={Moviename} 
                onChange={(e)=>{setMoviename(e.target.value)}} /> 
<br/>

                <input type='text' placeholder='MovieType' value={MovieType} 
                onChange={(e)=>{setMovieType(e.target.value)}} /> 
<br/>
                <button  onClick={add} className='btn btn-danger'>Add Movie</button>

        </div>
}

export default Addmovie