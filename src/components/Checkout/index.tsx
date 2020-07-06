import React from 'react';

import * as S from './styled';

export type Props = {
  active: boolean,
  newBuy(): void,
}

const Checkout: React.FC<Props> = ({ active, newBuy }) => {
  return (
    <S.Popover className={active ? 'active' : ''}>
      <S.Content>
        <S.CheckoutTitle>Parabéns!</S.CheckoutTitle>
        <S.CheckoutText>Compra finalizada com sucesso.</S.CheckoutText>
        <S.NewBuyButton onClick={newBuy}>Nova Compra</S.NewBuyButton>
      </S.Content>
    </S.Popover>
  );
}

export default Checkout;