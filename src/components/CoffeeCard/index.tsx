import { useFormatter } from '../../hooks/useFormatter';
import { Icon } from '../Icon';
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
  banner: string;
  tags: string[];
  title: string;
  subtitle: string;
  price: number | string;
}

export const CoffeeCard = ({
  banner,
  price,
  subtitle,
  tags,
  title
}: ICoffeeCard) => {
  const formatter = useFormatter();

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
        <input type="number" min={1} />
        <Cart>
          <Icon icon="cart" iconColor="#F3F2F2" size={20} />
        </Cart>
      </PriceQuantityCartContainer>
    </CoffeeCardContainer>
  );
};
