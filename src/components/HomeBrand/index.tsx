import React from 'react';
import { Icon } from '../Icon';
import { IconContainer } from './styled';

interface IHomeBrand {
  icon: 'cart' | 'coffee' | 'timer' | 'package';
}

export const HomeBrand = ({ icon }: IHomeBrand) => {
  return (
    <>
      <IconContainer>
        <Icon icon={icon} iconColor="#FAFAFA" />
      </IconContainer>
    </>
  );
};
