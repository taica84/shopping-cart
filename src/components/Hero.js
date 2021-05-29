import React ,{useState} from 'react';
import { uuid } from 'uuidv4';
import Nav from './Nav';
import Container from './reusableComponents/Container';
import CardContainer from './CardContainer';
import ShoppingCartContainer from './ShoppingCartContainer';

const Hero = () => {

   const [totalPrice , setTotalPrice] = useState(0);
   const [itemCount , setItemCount] = useState(0);
   const [cartItems , setCartItems] = useState([]);
   const [hiddenMenu , setHiddenMenu] = useState(false);

   const updateCart = (shoeImg , shoePrice) => {
      setItemCount(prevCount => prevCount + 1);
      setTotalPrice(prevPrice => prevPrice + shoePrice) ;

      if(cartItems.find((item) => item.img === shoeImg)) {
          const result = cartItems.find((item) => item.img === shoeImg);
          result.cartCount++;
          return;
      }

       setCartItems([...cartItems , 
      {
          img:shoeImg ,
          price:shoePrice,
          cartCount:1,
          id:uuid()
      }
    ])
   };


   const removeItem = (id) => {
        const newItems = cartItems.filter((cartItem) =>  cartItem.id !== id );
        setCartItems(newItems);

        const itemCountResult = newItems.reduce((acc , val ) => (acc +=  val.cartCount ), 0 );

        setItemCount(itemCountResult);

        const priceResult = newItems.reduce((acc , val ) => (acc += val.price * val.cartCount) , 0);
        setTotalPrice(priceResult)
   }


    return (
        <section className='hero' >
           <Nav
             hiddenMenu={hiddenMenu}
             setHiddenMenu={setHiddenMenu}
             itemCount={itemCount}
           />
           <Container>
              <CardContainer updateCart={updateCart} />
              <ShoppingCartContainer 
               hiddenMenu={hiddenMenu}
               cartItems={cartItems}
               totalPrice={totalPrice}
               itemCount={itemCount}
               removeItem={removeItem}
              />
           </Container>
        </section>
    )
}

export default Hero;
