import styled from 'styled-components';

export const CheckoutSuccessContainer = styled.div`
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const Delivery = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2.5rem;

  gap: 5rem;
`;

export const DeliveryInformations = styled.div`
  position: relative;
  width: 100%;
  max-width: 32.875rem;
  background-color: #FAFAFA;
  border-radius: 6px 36px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    position: absolute;
    top: -1px;
    left: -1px;
    content: '';
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border-radius: 6px 36px;
    background: linear-gradient(120deg, #dbac2c, #8047f8);
    z-index: -1;
  }
`;
