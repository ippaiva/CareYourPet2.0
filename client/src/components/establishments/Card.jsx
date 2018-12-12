import React from 'react';

const Card = (props) => {
    return (
       <div className="host">
        <div>
           <h1>{props.establishmentName}</h1>
           <p>{props.type}</p>
           <p>{props.services}</p>
           <p>Horário de Funcionamento</p>
           <a href="https://www.kcsp.com.br">Visit Us</a>
        </div>
       </div>
    )
}

export default Card;
