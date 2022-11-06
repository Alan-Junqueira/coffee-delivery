import styled from 'styled-components';

export const CheckoutFormContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 2.5rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`;
interface IInputDefault {
  width?: number;
}

export const InputDefault = styled.input<IInputDefault>`
  position: relative;

  height: 2.625rem;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  padding: 0.75rem;

  display: flex;
  justify-content: center;
  text-align: left;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
    z-index: 2
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`;

export const ContainerOpcional = styled.label`
  position: relative;
  flex: 1;

  &::before {
    position: absolute;

    content: 'Opcional';
    right: 0.75rem;
    top: 0.813rem;

    background-color: transparent;
    z-index: 1;

    font-style: italic;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }
`;
