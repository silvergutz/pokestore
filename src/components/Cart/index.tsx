import React, { useMemo } from 'react';

import { CartItem } from '../Page';
import * as S from './styled';

export type Props = {
  cartItems: CartItem[],
  removeFromCart(name: string): void,
  goToCheckout(): void,
}

const Cart: React.FC<Props> = ({ cartItems, removeFromCart, goToCheckout }) => {
  const cartTotal = useMemo(() => {
    const values = cartItems.map(item => item.quantity * item.pokemon.price);
    return values.reduce((prev, curr) => prev + curr, 0);
  }, [cartItems]);

  return (
    <S.CartWrapper>
      <S.CartContent>
        <S.CartTitle>Carrinho</S.CartTitle>

        {cartItems.length === 0 &&
          <span>Carrinho Vazio</span>
        }
        {cartItems.length > 0 &&
          <S.List>
            {cartItems.map(item => (
              <S.ListItem key={item.pokemon.id}>
                <S.ItemImage src={item.pokemon?.image || ''}></S.ItemImage>
                <S.ItemName>{item.pokemon.name}</S.ItemName>
                <S.ItemPrice>R$ {item.pokemon.price}</S.ItemPrice>
                <S.ItemQuantity>x {item.quantity}</S.ItemQuantity>
                <S.ItemTotal>R$ {item.quantity * item.pokemon.price}</S.ItemTotal>
                <S.RemoveButton title="Remover item" onClick={e => removeFromCart(item.pokemon.name)}>x</S.RemoveButton>
              </S.ListItem>
            ))}
          </S.List>
        }
        <S.TotalCart>
          <S.TotalLabel>TOTAL</S.TotalLabel>
          <S.TotalPrice>R$ {cartTotal}</S.TotalPrice>
        </S.TotalCart>
        <S.FinishButton onClick={goToCheckout}>Finalizar Compra</S.FinishButton>
      </S.CartContent>
    </S.CartWrapper>
  );
}

export default Cart;