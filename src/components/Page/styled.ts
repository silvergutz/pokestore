import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-gap: 1rem 2rem;
  grid-template-rows: 5rem auto 1rem;
  width: 100%;
`

export const Header = styled.header`
  background: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme.colors.black};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
`

export const Content = styled.section`
  display: grid;
  grid-template-columns: auto 20rem;
  grid-gap: 0 2rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 640px) {
    grid-template-columns: auto auto;
  }
`

export const Footer = styled.footer`
  background: #f5f5f5;
  text-align: center;
`