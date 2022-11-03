import React from 'react';
import { Icon } from '../../../components/Icon';
import {
  BrandItemContainer,
  CartBrand,
  CoffeeBrand,
  PackageBrand,
  TimerBrand
} from './styled';

interface IBrandiItenProps {
  icon: 'cart' | 'package' | 'coffee' | 'timer';
  description: string;
}

export const BrandIten = ({ icon, description }: IBrandiItenProps) => {
  return (
    <BrandItemContainer>
      {icon === 'cart' && (
        <CartBrand>
          <Icon icon={icon} iconColor="#FAFAFA" />
        </CartBrand>
      )}
      {icon === 'package' && (
        <PackageBrand>
          <Icon icon={icon} iconColor="#FAFAFA" />
        </PackageBrand>
      )}
      {icon === 'coffee' && (
        <CoffeeBrand>
          <Icon icon={icon} iconColor="#FAFAFA" />
        </CoffeeBrand>
      )}
      {icon === 'timer' && (
        <TimerBrand>
          <Icon icon={icon} iconColor="#FAFAFA" />
        </TimerBrand>
      )}
      <span>{description}</span>
    </BrandItemContainer>
  );
};
