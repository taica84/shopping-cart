import React from 'react';
import CardBg from './CardBg';
import CardInfo from './CardInfo';
import ShoeData from './ShoeData';

const Card = ({updateCart}) => {
    return (
        <>
          {ShoeData.map((shoe , index) => (
          
          <div key={index} className='card' >
            <CardBg shoeImg={shoe.cardImg}/>
            <CardInfo 
            updateCart={() => updateCart(shoe.cardImg ,shoe.cardPrice)}
            shoePrice={shoe.cardPrice} />
          </div>

              
          ))}
        </>
    )
}

export default Card;
