import styled from 'styled-components';

export const CoffeeCardContainer = styled.li`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  width: 16rem;
  padding: 0 1.5rem 1.25rem 1.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;

    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const CoffeeTypeContainer = styled.span`
  display: flex;
  gap: 0.25rem;
`;

export const CoffeeType = styled.label`
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;

  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  color: ${(props) => props.theme['yellow-dark']};

  text-transform: uppercase;
`;

export const CoffeeTitle = styled.h3`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};

  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

export const CoffeeDescription = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;

  margin-bottom: 2rem;

  color: ${(props) => props.theme['base-label']};
`;

export const PriceQuantityCartContainer = styled.div`
  display: flex;

  strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    margin-right: 1.5rem;
  }

  input {
    width: 4.5rem;
    height: 2.375rem;

    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(prosp) => prosp.theme['base-button']};
    border-radius: 6px;

    margin-right: 0.5rem;
  }
`;

export const CoffeePrice = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  align-self: center;
  padding-top: 0.375rem;
  margin-right: 0.25rem;

  color: ${(props) => props.theme['base-text']};

  flex: 1;
  flex-wrap: nowrap;
`;

export const Cart = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
