import { NavLink } from 'react-router-dom';
import { Icon } from '../Icon';
import { HeaderContainer, NavContainer } from './styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Icon icon="logo" />
      <NavContainer cartQuantity={3}>
        <div>
          <Icon icon="mapFill" iconColor="#8047F8" size={22} />
          <span>Porto Alegre, RS</span>
        </div>
        <NavLink end to="/checkout" title="checkout" >
          <Icon icon="cart" iconColor="#C47F17" size={22} />
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};
