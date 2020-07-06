import React, { useEffect, useState, useMemo } from 'react';

import { Pokemon, loadPokemon } from '../../services/pokemon';
import CatalogItem from '../CatalogItem';

import * as S from './styled';

export type Props = {
  addToCart(name: string, quantity: number): void,
}

const Catalog: React.FC<Props> = ({ addToCart }) => {
  const limit = 9;
  const [loading, setLoading] = useState<boolean>(false);
  const [countResults, setCountResults] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const visiblePages = useMemo(() => {
    return pages.filter(page =>
      (page === currentPage) ||
      ((currentPage - 2 <= 0) && (page < currentPage + 5 && page >= currentPage)) ||
      ((currentPage + 2 >= pages.length) && (page > currentPage - 5 && page <= currentPage)) ||
      (page >= currentPage - 2 && page <= currentPage) ||
      (page <= currentPage + 2 && page >= currentPage)
    );
  }, [pages, currentPage]);

  useEffect(() => {
    changePage(1);
  }, []);

  useEffect(() => {
    const pagesList = [];
    const totalPages = Math.ceil(countResults / limit);
    for (let i = 1; i <= totalPages; i++) {
      pagesList.push(i);
    }
    setPages(pagesList);
  }, [countResults]);

  async function changePage(page: number = 1) {
    if (page === currentPage) return;

    if (!loading) {
      setLoading(true);

      try {
        const offset = limit * (page - 1);
        const response = await loadPokemon(offset, limit);
        setPokemon(response.results);
        setCountResults(response.count);
        setCurrentPage(page);
      } catch(e) {
        console.error(e);
      }

      setLoading(false);
    }
  }

  return (
    <div>
      <S.GridContainer>
        {pokemon.map(value => (
          <S.GridItem key={value.id}>
            <CatalogItem pokemon={value} addToCart={addToCart} />
          </S.GridItem>
        ))}
      </S.GridContainer>

      <S.Paginator>
        <S.PagesList>
          {currentPage > 1 &&
            <S.PageItem onClick={e => changePage(1)}> &laquo; </S.PageItem>
          }
          {currentPage > 1 &&
            <S.PageItem onClick={e => changePage(currentPage - 1)}> &lsaquo; </S.PageItem>
          }
          {visiblePages.map(page => (
            <S.PageItem key={page} onClick={e => changePage(page)} className={page === currentPage ? 'active' : ''}>{page < 10 ? '0' + page : page}</S.PageItem>
          ))}
          {currentPage < pages.length &&
            <S.PageItem onClick={e => changePage(currentPage + 1)}> &rsaquo; </S.PageItem>
          }
          {currentPage < pages.length &&
            <S.PageItem onClick={e => changePage(pages.length)}> &raquo; </S.PageItem>
          }
        </S.PagesList>
      </S.Paginator>
    </div>
  );
}

export default Catalog;