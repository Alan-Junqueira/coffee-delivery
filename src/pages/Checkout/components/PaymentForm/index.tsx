import { Icon } from '../../../../components/Icon';
import { CheckoutLabelForm } from '../CheckoutLabelForm';
import { PaymentButton, PaymentFormContainer } from './styled';

export const PaymentForm = () => {
  return (
    <PaymentFormContainer>
      <CheckoutLabelForm
        icon="currencyDolar"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        title="Pagamento"
      />

      <div>
        <PaymentButton>
          <Icon icon="creditCard" iconColor="#8047F8" size={16} />{' '}
          <span>Cartão de Crédito</span>
        </PaymentButton>
        <PaymentButton>
          <Icon icon="bank" iconColor="#8047F8" size={16} />
          Cartão de Débito
        </PaymentButton>
        <PaymentButton>
          <Icon icon="money" size={16} />
          Dinheiro
        </PaymentButton>
      </div>
    </PaymentFormContainer>
  );
};
