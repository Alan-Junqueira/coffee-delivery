import styled from 'styled-components';

export const HomeContainer = styled.main`
  h2 {
    margin-bottom: 2rem;
  }

  main {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
    padding: 110px 0 74px 0;

    @media(max-width: 1330px) {
      grid-template-columns: 1fr;
      justify-content: space-around;
    }

    &::before {
      position: absolute;

      content: '';
      background-image: url('/images/home-background.svg');
      background-size: cover;
      background-repeat: no-repeat;

      width: calc(100vw - 21px);
      height: 100%;
      top: 0;
      left: -170px;
      z-index: -1;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Branding = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;



  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;

    @media (min-width: 1325px) {
      gap: 1.25rem;
    }
  }

  @media(max-width: 1330px) {
      display: flex;
      flex-direction: column;
      align-items: center;
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

  max-width: 36.75rem;
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-wrap: wrap;
    gap: 2rem;

    justify-content: space-around;

    @media(max-width: 1530px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 1230px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 920px) {
      grid-template-columns: 1fr
    }
  }
`;
