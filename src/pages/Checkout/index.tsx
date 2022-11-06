import { CheckoutCart } from './components/CheckoutCart';
import { CheckoutForm } from './components/CheckoutForm';
import { PaymentForm } from './components/PaymentForm';
import {
  CartPageContainer,
  CheckoutPageContainer,
  FormPageContainer
} from './styled';

export const Checkout = () => {
  return (
    <CheckoutPageContainer>
      <FormPageContainer>
        <h2>Complete seu pedido</h2>
        <form>
          <CheckoutForm />
          <PaymentForm />
        </form>
      </FormPageContainer>

      <CartPageContainer>
        <h2>Cafés selecionados</h2>
        <CheckoutCart />
      </CartPageContainer>
    </CheckoutPageContainer>
  );
};
