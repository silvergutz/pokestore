import React, { useState, useEffect } from 'react';

import { Pokemon, findPokemon } from '../../services/pokemon'
import * as S from './styled';

export type Props = {
  pokemon: Pokemon,
  addToCart(name: string, quantity: number): void,
}

const CatalogItem: React.FC<Props> = (props) => {
  const [pokemon, setPokemon] = useState<Pokemon>(props.pokemon);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    async function loadPokemon() {
      const response = await findPokemon(pokemon.name);
      if (response) {
        setPokemon(response);
      }
    }
    loadPokemon();
  }, [props.pokemon]);

  function handleBuyButton() {
    props.addToCart(pokemon.name, quantity);
  }

  return (
    <>
      <S.ItemImage src={pokemon?.image || ''} />
      <S.ItemName>
        {pokemon.name}
      </S.ItemName>
      <S.ItemPrice>R$ {pokemon.price}</S.ItemPrice>
      <S.Form>
        <S.Quantity value={quantity} onChange={e => setQuantity(parseInt(e.target.value) || 1)} />
        <S.BuyButton onClick={handleBuyButton}>Add 🛒</S.BuyButton>
      </S.Form>
    </>
  );
}

export default CatalogItem;