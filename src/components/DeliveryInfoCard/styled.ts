import styled from 'styled-components';

export const DeliveryInfoCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const DeliveryIconMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.purple};
  border-radius: 50%;

  width: 2rem;
  height: 2rem;
`;

export const DeliveryDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  span,
  strong {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  strong {
    font-weight: 700;
  }
`;

export const DeliveryIconForecast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.yellow};
  border-radius: 50%;

  width: 2rem;
  height: 2rem;
`;

export const DeliveryIconCurrencyDollar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;

  width: 2rem;
  height: 2rem;
`;
