import React,{Component, createContext} from "react";
export const Movieprovider = createContext()
class Moviecontext extends React.Component{

constructor(){

    super()

    this.state= {
        movies:[],
        addmovie:this.addmovie
    }
}

addmovie=(movie)=>{
this.setState({movies:[...this.state.movies,movie]})

}

    render(){
       return <Movieprovider.Provider value={{...this.state}}>

        {this.props.children}

        </Movieprovider.Provider>

    }
}
export default Moviecontext