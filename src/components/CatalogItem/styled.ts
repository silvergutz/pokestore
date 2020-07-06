import styled from 'styled-components';

export const ItemImage = styled.img`
  display: inline-block;
  margin: 0 auto;
  max-width: 100px;
`;

export const ItemName = styled.div`
  text-transform: capitalize;
`;

export const ItemPrice = styled.div`
  font-weight: bold;
`;

export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const Quantity = styled.input.attrs(props => ({
  type: 'number',
  min: '1',
  max: '1000',
  step: '1',
}))`
  flex: 0 1 auto;
  max-width: 4em;
  padding: .4em;
  margin-right: 2rem;
`;

export const BuyButton = styled.button`
  flex: 1 0 auto;
  background: ${props => props.theme.colors.primary};
  border: 0;
  border-radius: 5px;
  padding: .5em;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
`;

