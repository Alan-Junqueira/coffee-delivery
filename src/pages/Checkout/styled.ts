import styled from 'styled-components';
interface IInputDefault {
  width?: number;
}

export const CheckoutPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    margin-bottom: 1rem;
  }
`;
export const FormPageContainer = styled.section`
  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;
export const CartPageContainer = styled.section``;
