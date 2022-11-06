import styled from 'styled-components';

export const InputAmountButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 32px;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      width: 14px;
      height: 14px;
    }
  }

  span {
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
  }
`;
