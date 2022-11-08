import { FormEvent, SyntheticEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Icon } from '../../../../components/Icon';
import { CheckoutLabelForm } from '../CheckoutLabelForm';
import { PaymentButton, PaymentFormContainer } from './styled';

type PaymentMethodType = string;

export const PaymentForm = () => {
  const { register } = useFormContext();
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodType>('money');


  function handleCreditPaymentOption(event: FormEvent) {
    console.log(typeof (event.target as HTMLInputElement).id);
    setPaymentMethod((event.target as HTMLInputElement).id);
    register((event.target as HTMLInputElement).id);
  }

  return (
    <PaymentFormContainer>
      <CheckoutLabelForm
        icon="currencyDolar"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        title="Pagamento"
      />
      <div>
        <PaymentButton
          type="button"
          id="creditCard"
          onClick={handleCreditPaymentOption}
        >
          <div style={{ pointerEvents: 'none' }}>
            <Icon icon="creditCard" iconColor="#8047F8" size={16} />{' '}
          </div>
          <span style={{ pointerEvents: 'none' }}>Cartão de Crédito</span>
        </PaymentButton>

        <PaymentButton type="button">
          <div style={{ pointerEvents: 'none' }}>
            <Icon icon="bank" iconColor="#8047F8" size={16} />
          </div>
          <span style={{ pointerEvents: 'none' }}>Cartão de Débito</span>
        </PaymentButton>

        <PaymentButton type="button">
          <div style={{ pointerEvents: 'none' }}>
            <Icon icon="money" size={16} />
          </div>
          <span style={{ pointerEvents: 'none' }}>Dinheiro</span>
        </PaymentButton>
      </div>
    </PaymentFormContainer>
  );
};
