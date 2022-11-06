import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components/Icon';
import { InputAmountButton } from '../../../../components/InputAmoutButton';
import {
  CartItem,
  CartProductDescription,
  CheckoutCartContainer,
  CartButtonRemove,
  DescriptionCartValues
} from './styled';

export const CheckoutCart = () => {
  const navigate = useNavigate();

  const handleButtonSubmit = () => {
    navigate('/checkout-success');
  };

  return (
    <CheckoutCartContainer>
      <CartItem>
        <div>
          <img src="/images/Type=Americano.png" alt="" />
        </div>
        <CartProductDescription>
          <span>Expresso Tradicional</span>
          <div>
            <InputAmountButton />
            <CartButtonRemove>
              <Icon icon="trash" iconColor="#8047F8" size={16} />
              <span>Remover</span>
            </CartButtonRemove>
          </div>
        </CartProductDescription>
        <strong>R$: 9,90</strong>
      </CartItem>
      <CartItem>
        <div>
          <img src="/images/Type=Americano.png" alt="" />
        </div>
        <CartProductDescription>
          <span>Expresso Tradicional</span>
          <div>
            <InputAmountButton />
            <CartButtonRemove>
              <Icon icon="trash" iconColor="#8047F8" size={16} />
              <span>Remover</span>
            </CartButtonRemove>
          </div>
        </CartProductDescription>
        <strong>R$: 9,90</strong>
      </CartItem>
      <DescriptionCartValues>
        <div>
          <span>Total de Itens</span>
          <span>R$ 29,70</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </div>
      </DescriptionCartValues>

      <button type="submit" onClick={handleButtonSubmit}>
        Confirmar Pedido
      </button>
    </CheckoutCartContainer>
  );
};
