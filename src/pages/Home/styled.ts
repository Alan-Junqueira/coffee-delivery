import styled from 'styled-components';

export const HomeContainer = styled.main`
  h2 {
    margin-bottom: 2rem;
  }
`;

export const CoffeesSection = styled.section`
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
  }
`;
