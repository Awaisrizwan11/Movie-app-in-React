import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Addmovie from './Addmovie';
import Movielist from './Movielist';
import Moviecontext from './Moviecontext';

function App() {
  return (
    <div className="App">
      
<h1>Movie App</h1>

<Moviecontext>
  
<Navbar/>
<Addmovie/>
<Movielist/>

</Moviecontext>





    </div>
  );
}

export default App;
