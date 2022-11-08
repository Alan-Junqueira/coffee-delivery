import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { Icon } from '../Icon';
import { HeaderContainer, LocaleTitle, NavContainer } from './styled';

export const Header = () => {
  const { cartItens } = useContext(CartContext);

  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <Icon icon="logo" />
      </NavLink>
      <NavContainer cartQuantity={cartItens.length}>
        <div>
          <Icon icon="mapFill" iconColor="#8047F8" size={22} />
          <LocaleTitle>Porto Alegre, RS</LocaleTitle>
        </div>
        <NavLink end to="/checkout" title="checkout">
          <Icon icon="cart" iconColor="#C47F17" size={22} />
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};
