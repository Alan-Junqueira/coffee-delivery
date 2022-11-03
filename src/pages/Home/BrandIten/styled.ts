import styled from 'styled-components';

export const BrandItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }
`;

export const DefaultBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const CartBrand = styled(DefaultBrand)`
  background-color: ${(props) => props.theme['yellow-dark']};
`;

export const PackageBrand = styled(DefaultBrand)`
  background-color: ${(props) => props.theme['base-text']};
`;

export const CoffeeBrand = styled(DefaultBrand)`
  background-color: ${(props) => props.theme.yellow};
`;

export const TimerBrand = styled(DefaultBrand)`
  background-color: ${(props) => props.theme.purple};
`;
