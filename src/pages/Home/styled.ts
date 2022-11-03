import styled from 'styled-components';

export const HomeContainer = styled.main`
  h2 {
    margin-bottom: 2rem;
  }

  main {
    position: relative;
    display: flex;
    align-items: center;
    gap: 3.5rem;
    padding: 110px 0 74px 0;

    &::before {
      position: absolute;

      content: '';
      background-image: url('/images/home-background.svg');
      background-size: cover;
      background-repeat: no-repeat;
      /* background-color: red; */
      width: calc(100vw - 21px);
      height: 100%;
      top: 0;
      left: -170px;
      z-index: -1;
    }
  }
`;

export const Branding = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    
    @media(min-width: 1325px){
      gap: 1.25rem
    }
  }
`;

export const BrandItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;



export const HomeTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`;

export const CoffeesSection = styled.section`
  margin-top: 2rem;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    justify-content: space-around;
  }
`;
