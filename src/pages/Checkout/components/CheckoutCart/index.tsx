import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components/Icon';
import { InputAmountButton } from '../../../../components/InputAmoutButton';
import { CartContext } from '../../../../contexts/CartContext';
import { useFormatter } from '../../../../hooks/useFormatter';
import { coffeeList } from '../../../../libs/coffeeList';
import {
  CartItem,
  CartProductDescription,
  CheckoutCartContainer,
  CartButtonRemove,
  DescriptionCartValues
} from './styled';

export const CheckoutCart = () => {
  const [amountQuantity, setAmountQuantity] = useState(1);
  const navigate = useNavigate();

  const { formatPriceWithCurrency } = useFormatter();

  const { cartItens } = useContext(CartContext);

  console.log(cartItens);

  const handleButtonSubmit = () => {
    // navigate('/checkout-success');
  };

  //* Price Calculation
  const totalPrice = cartItens.reduce((acc, iten) => {
    return iten.price * +iten.amountQuantity + acc;
  }, 0);

  let delivery = 3.5;

  return (
    <CheckoutCartContainer>
      {cartItens.map((iten, index) => (
        <CartItem key={index}>
          <div>
            <img src={iten.banner} alt="" />
          </div>
          <CartProductDescription>
            <span>{iten.title}</span>
            <div>
              <InputAmountButton
                small
                amountQuantity={+iten.amountQuantity}
                setAmountQuantity={setAmountQuantity}
              />
              <CartButtonRemove>
                <Icon icon="trash" iconColor="#8047F8" size={16} />
                <span>Remover</span>
              </CartButtonRemove>
            </div>
          </CartProductDescription>
          <strong>
            {formatPriceWithCurrency(+iten.amountQuantity * iten.price)}
          </strong>
        </CartItem>
      ))}

      <DescriptionCartValues>
        <div>
          <span>Total de Itens</span>
          <span>{formatPriceWithCurrency(totalPrice)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>{formatPriceWithCurrency(delivery)}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>{formatPriceWithCurrency(delivery + totalPrice)}</strong>
        </div>
      </DescriptionCartValues>

      <button type="submit">Confirmar Pedido</button>
    </CheckoutCartContainer>
  );
};
