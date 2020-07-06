import styled from 'styled-components';

export const CartWrapper = styled.div`

`;

export const CartContent = styled.div`
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.white};
  padding: 1rem;
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,.2);
`;

export const CartTitle = styled.h2`
  border-bottom: 1px solid #ddd;
  margin-bottom: .5rem;
  font-size: 20px;
  font-weight: bold;
  line-height: 2;
  text-align: center;
  text-transform: uppercase;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em 0;
  border-bottom: 1px solid #ddd;
`;

export const ItemImage = styled.img`
  flex: 1 1.5rem;
  max-width: 3em;
`;

export const ItemName = styled.span`
  flex: 1 auto;
  text-transform: capitalize;
`

export const ItemPrice = styled.span`
  flex: 0 1 auto;
`;

export const ItemQuantity = styled.span`
  flex: 0 1 auto;
  margin: 0 .25em;
`;
export const ItemTotal = styled.span`
  font-weight: bold;
`;

export const RemoveButton = styled.button`
  background: none;
  border: 0;
  padding: .5em;
  font-weight: bold;
  color: red;
  cursor: pointer;
`;

export const TotalCart = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 120%;
  font-weight: bold;
  margin-top: .7em;
`;

export const TotalLabel = styled.div`
  flex: 0 0 auto;
`;

export const TotalPrice = styled.div`
  flex: 0 0 auto;
  text-align: right;
`;

export const FinishButton = styled.button`
  display: block;
  text-align: center;
  width: 100%;
  border: 3px solid ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  padding: 1em;
  border-radius: 10px;
  margin-top: 1em;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;