import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useFormatter } from '../../hooks/useFormatter';
import { Icon } from '../Icon';
import { InputAmountButton } from '../InputAmoutButton';
import {
  Cart,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeePrice,
  CoffeeTitle,
  CoffeeType,
  CoffeeTypeContainer,
  PriceQuantityCartContainer
} from './styled';

interface ICoffeeCard {
  id: number;
  banner: string;
  tags: string[];
  title: string;
  subtitle: string;
  price: number;
}

export const CoffeeCard = ({
  id,
  banner,
  price,
  subtitle,
  tags,
  title
}: ICoffeeCard) => {
  const formatter = useFormatter();
  const [amountQuantity, setAmountQuantity] = useState(1);

  const { addItenToCart } = useContext(CartContext);

  function handleCartItenAdd() {
    addItenToCart(
      id,
      String(amountQuantity),
      banner,
      price,
      subtitle,
      tags,
      title
    );
  }

  return (
    <CoffeeCardContainer>
      <img src={banner} alt="" />
      <CoffeeTypeContainer>
        {tags.map((tag, index) => (
          <CoffeeType key={index}>{tag}</CoffeeType>
        ))}
      </CoffeeTypeContainer>
      <CoffeeTitle>{title}</CoffeeTitle>
      <CoffeeDescription>{subtitle}</CoffeeDescription>
      <PriceQuantityCartContainer>
        <CoffeePrice>R$</CoffeePrice>
        <strong>{formatter.formatPrice(+price)}</strong>
        <InputAmountButton
          small={false}
          setAmountQuantity={setAmountQuantity}
          amountQuantity={amountQuantity}
        />
        <Cart onClick={handleCartItenAdd}>
          <Icon icon="cart" iconColor="#F3F2F2" size={20} />
        </Cart>
      </PriceQuantityCartContainer>
    </CoffeeCardContainer>
  );
};
