import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components/Icon';
import { InputAmountButton } from '../../../../components/InputAmoutButton';
import { CartContext } from '../../../../contexts/CartContext';
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

  const { cartItens } = useContext(CartContext);

  // const cartItensActives = cartItens.filter((iten) => {
  //   let newArr = [];
  //   for (let i = 0; i < coffeeList.length; i++) {
  //     if (iten.id === coffeeList[i].id) {
  //       return newArr.push(coffeeList[i], iten.amountQuantity);
  //     }
  //   }
  // });


  const handleButtonSubmit = () => {
    // navigate('/checkout-success');
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
            <InputAmountButton
              small
              amountQuantity={amountQuantity}
              setAmountQuantity={setAmountQuantity}
            />
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

      <button type="submit">Confirmar Pedido</button>
    </CheckoutCartContainer>
  );
};
