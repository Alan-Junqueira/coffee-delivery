import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
`;

type NavContainerProps = {
  cartQuantity?: number;
};

export const NavContainer = styled.nav<NavContainerProps>`
  display: flex;
  gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    border-radius: 6px;
    padding: 8px;

    background-color: ${(props) => props.theme['purple-light']};
  }

  a {
    position: relative;

    width: 2.375rem;
    height: 2.375rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 6px;

    &::after {
      position: absolute;

      content: '${(props) => props.cartQuantity && props.cartQuantity}';
      width: 20px;
      height: 20px;
      background-color: ${(props) => props.theme['yellow-dark']};
      top: -10px;
      right: -10px;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      color: ${(props) => props.theme.white};
    }
  }
`;

export const LocaleTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: ${(props) => props.theme['purple-dark']};
`;
