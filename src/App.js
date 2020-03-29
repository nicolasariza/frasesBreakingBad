import React, {useState, useEffect} from "react";
import Frase from './components/Frase';

function App() {

  const [frase, setFrase] = useState({});

  const consultarAPI = () =>{
    
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    console.log(api);
    const frase = api.then(respuesta=>respuesta.json());
    frase.then(resultado=>setFrase(resultado[0]));
  }

  useEffect(()=>{
    consultarAPI();
  },[]);

  return (
    <div className='container'>
    <div class="text-center mb-4">
      <Frase frase={frase}/>
      <button type="button" className="btn btn-success" onClick={consultarAPI}>
        Obtener frase
      </button>
    </div>
    </div>
  );
}

export default App;
