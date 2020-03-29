import React from "react";

const Frase = ({ frase }) => {
  return (
    <div class="d-flex justify-content-center divMensaje">
      <div class="alert alert-success" role="alert">
        <p><strong>Frase: </strong>{frase.quote}</p>
        <p><strong>Autor: </strong>{frase.author}</p>
      </div>
    </div>
  );
};

export default Frase;
