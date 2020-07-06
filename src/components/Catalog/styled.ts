import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto;

  @media (max-width: 767px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 640px) {
    grid-template-columns: auto;
  }
`

export const GridItem = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 1rem;
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,.2);
  text-align: center;
`
export const Paginator = styled.nav`
  margin: 1rem 0;
`;

export const PagesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  list-style: none;
`;

export const PageItem = styled.li`
  padding: .5em;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
  &.active {
    font-weight: bold;
    color: ${props => props.theme.colors.primary}
  }
`;
