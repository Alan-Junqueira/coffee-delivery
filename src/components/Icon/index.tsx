import logo from '../../assets/logo.png';
import {
  ShoppingCart,
  MapPin,
  Timer,
  Package,
  Coffee,
  CurrencyDollar,
  CreditCard,
  Bank,
  Trash
} from 'phosphor-react';
import { Money } from './Money';

interface IIcon {
  icon: string;
  iconColor: string;
  size?: number;
}

export const Icon = ({ icon, iconColor, size }: IIcon) => {
  return (
    <>
      {icon === 'logo' && <img src={logo} alt="" />}
      {icon === 'cart' && (
        <ShoppingCart color={iconColor} weight="fill" size={size} />
      )}
      {icon === 'map' && <MapPin color={iconColor} size={size} />}
      {icon === 'mapFill' && (
        <MapPin color={iconColor} weight="fill" size={size} />
      )}
      {icon === 'timer' && (
        <Timer color={iconColor} weight="fill" size={size} />
      )}
      {icon === 'package' && (
        <Package color={iconColor} weight="fill" size={size} />
      )}
      {icon === 'coffee' && (
        <Coffee color={iconColor} weight="fill" size={size} />
      )}
      {icon === 'creditCard' && <CreditCard color={iconColor} size={size} />}
      {icon === 'trash' && <Trash color={iconColor} size={size} />}
      {icon === 'bank' && <Bank color={iconColor} size={size} />}
      {icon === 'money' && <Money size={15} />}
      {icon === 'currencyDolar' && (
        <CurrencyDollar color={iconColor} weight="fill" size={size} />
      )}
    </>
  );
};
