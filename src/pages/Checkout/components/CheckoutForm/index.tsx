import { useFormContext } from 'react-hook-form';

import { CheckoutLabelForm } from '../CheckoutLabelForm';
import {
  CheckoutFormContainer,
  ContainerOpcional,
  InputDefault
} from './styled';

export const CheckoutForm = () => {
  const { register } = useFormContext();
  return (
    <CheckoutFormContainer>
      <div style={{ marginBottom: '2rem' }}>
        <CheckoutLabelForm
          icon="mapPinLine"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          title="Endereço de Entrega"
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <InputDefault
          width={200}
          type="text"
          placeholder="CEP"
          id="cep"
          {...register('cep')}
        />
        <InputDefault
          type="text"
          placeholder="Rua"
          id="street"
          {...register('street')}
        />
        <div style={{ display: 'flex', gap: '.75rem' }}>
          <InputDefault
            type="text"
            placeholder="Número"
            width={200}
            id="number"
            {...register('number')}
          />
          <ContainerOpcional htmlFor="complement">
            <InputDefault
              type="text"
              placeholder="Complemento"
              id="complement"
              {...register('complement')}
            />
          </ContainerOpcional>
        </div>
        <div style={{ display: 'flex', gap: '.75rem' }}>
          <InputDefault
            type="text"
            placeholder="Bairro"
            width={200}
            id="district"
            {...register('district')}
          />
          <InputDefault
            type="text"
            placeholder="Cidade"
            id="city"
            {...register('city')}
          />
          <InputDefault
            type="text"
            placeholder="UF"
            width={60}
            id="uf"
            {...register('uf')}
          />
        </div>
      </div>
    </CheckoutFormContainer>
  );
};
