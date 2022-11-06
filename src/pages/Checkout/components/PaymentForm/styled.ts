import styled from 'styled-components';

export const PaymentFormContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  > div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const PaymentButton = styled.button`
  width: 100%;
  height: 51px;
  padding: 1rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;
`;
