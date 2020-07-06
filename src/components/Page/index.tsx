import React, { useState } from 'react';

import { Pokemon, findPokemon } from '../../services/pokemon';
import Catalog from '../Catalog';
import Cart from '../Cart';
import Checkout from '../Checkout';
import * as S from './styled';

export interface CartItem {
  pokemon: Pokemon,
  quantity: number,
}

const Page: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [finished, setFinished] = useState<boolean>(false);

  async function addToCart(name: string, quantity: number = 1) {
    const index = cartItems.findIndex(item => item.pokemon.name === name);
    if (index > -1) {
      const cart = [...cartItems];
      cart[index].quantity += quantity;
      setCartItems(cart);
    } else {
      const pokemon = await findPokemon(name);
      if (pokemon) {
        const newItem: CartItem = {
          pokemon,
          quantity,
        };
        setCartItems([...cartItems, newItem]);
      }
    }
  }

  async function removeFromCart(name: string) {
    setCartItems(cartItems.filter(item => item.pokemon.name !== name));
  };

  function goToCheckout() {
    setFinished(true);
  }

  function newBuy() {
    setFinished(false);
    setCartItems([]);
  }

  return (
    <>
      <S.Container>
        <S.Header>
          <img src="logo-pokestore.png" alt="Pokestore" />
        </S.Header>

        <S.Content>
          <Catalog addToCart={addToCart} />
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} goToCheckout={goToCheckout} />
        </S.Content>

        <S.Footer>
          <div>Pokestore &copy; {(new Date()).getFullYear()}</div>
          <div>by <a href="https://github.com/silvergutz">Tiago Vergutz</a></div>
        </S.Footer>
      </S.Container>
      <Checkout active={finished} newBuy={newBuy} />
    </>
  )
}

export default Page;