import React from 'react';
import Foto from './Foto';

const fotoList = ({fotos}) => {
  return (
    <div className='albun'>
      {fotos.map((foto) =>{
          <Foto key={foto.id} dados={foto}/> 
      })}
    </div>
  )
};

export default fotoList;
