import './App.css';
import SearchBar from './components/SearcBar';
import fotoList from './components/FotoList';
import fotoAmpli from './components/FotoAmpli';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const[query, setQuery] = useState('')
  const [categoria, setCategoria] = useState('')
  const [fotos, setFotos] = useState([])


    const fetchData = async ({query, categoria}) =>{
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY
    const response = await axios.get('http://api.unsplash.com/photos/random', {
      params:{
        client_Id: apiKey,
        count: 10
      }
    });
  }
setFotos(response.data)

console.log(response.data);

  useEffect(() =>{
    fetchData(query, categoria)
  }, [])

  return (
    <>
     <div className='conteiner'>
       <SearchBar />
       <fotoList fotos={fotos} />
       <fotoAmpli />
     </div>
    </>
  );
}

export default App;
