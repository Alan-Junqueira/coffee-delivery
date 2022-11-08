import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { CheckoutCart } from './components/CheckoutCart';
import { CheckoutForm } from './components/CheckoutForm';
import { PaymentForm } from './components/PaymentForm';
import {
  CartPageContainer,
  CheckoutPageContainer,
  FormPageContainer
} from './styled';

const makeCheckoutValidationSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  uf: zod.string(),
  paymentMethod: zod.string()
});

type checkoutCartFormData = zod.infer<typeof makeCheckoutValidationSchema>;

interface IcreatecheckoutCart {
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
  paymentMethod: string;
}

export const Checkout = () => {
  const checkoutCartForm = useForm<checkoutCartFormData>({
    resolver: zodResolver(makeCheckoutValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
      paymentMethod: 'money'
    }
  });

  const { handleSubmit, watch, reset } = checkoutCartForm;

  const handleFormSubit = (data: IcreatecheckoutCart) => {
    console.log(data);
    // reset();
  };

  return (
    <CheckoutPageContainer action="" onSubmit={handleSubmit(handleFormSubit)}>
      <FormProvider {...checkoutCartForm}>
        <FormPageContainer>
          <h2>Complete seu pedido</h2>
          <div>
            <CheckoutForm />
            <PaymentForm />
          </div>
        </FormPageContainer>

        <CartPageContainer>
          <h2>Cafés selecionados</h2>
          <CheckoutCart />
        </CartPageContainer>
      </FormProvider>
    </CheckoutPageContainer>
  );
};
