import styled from 'styled-components';

export const CheckoutCartContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 2.5rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  > button {
    width: 100%;
    height: 46px;
    background-color: ${(props) => props.theme.yellow};
    padding: 12px 8px;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;

    text-transform: uppercase;
    color: ${(props) => props.theme.white};
  }
`;

export const CartItem = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  > div {
    margin-right: 20px;

    > img {
      width: 64px;
      height: 64px;
    }
  }

  strong {
    font-size: 1rem;
    line-height: 130%;
  }
`;

export const CartProductDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    gap: 0.5rem;
  }

  > span {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const CartButtonRemove = styled.button`
  height: 32px;
  display: flex;
  align-items: center;

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  background-color: ${(props) => props.theme['base-button']};
`;

export const DescriptionCartValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:nth-child(1) {
      font-weight: 400;
      font-size: 0.875;
      line-height: 130%;
    }

    span:nth-child(2) {
      font-size: 1rem;
    }

    strong {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`;
