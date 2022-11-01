import { NavLink } from 'react-router-dom';
import { Icon } from '../Icon';
import { HeaderContainer, LocaleTitle, NavContainer } from './styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Icon icon="logo" />
      <NavContainer cartQuantity={5}>
        <div>
          <Icon icon="mapFill" iconColor="#8047F8" size={22} />
          <LocaleTitle>Porto Alegre, RS</LocaleTitle>
        </div>
        <NavLink end to="/checkout" title="checkout" >
          <Icon icon="cart" iconColor="#C47F17" size={22} />
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};
