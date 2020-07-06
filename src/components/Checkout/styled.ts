import styled from 'styled-components';

export const Popover = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);

  &.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Background = styled.div`
`;

export const Content = styled.div`
  flex: 0 1 auto;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
`;

export const CheckoutTitle = styled.h1`
  font-size: 30px;
  line-height: 1;
  margin-bottom: .5em;
`;

export const CheckoutText = styled.div`
  margin-bottom: 1rem;
`;

export const NewBuyButton = styled.button`
  background: ${props => props.theme.colors.primary};
  border: 0;
  border-radius: 10px;
  padding: .5em 1em;
  margin-top: .5rem;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
`;
