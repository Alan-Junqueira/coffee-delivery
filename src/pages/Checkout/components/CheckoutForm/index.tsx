import { CheckoutLabelForm } from '../CheckoutLabelForm';
import {
  CheckoutFormContainer,
  ContainerOpcional,
  InputDefault
} from './styled';

export const CheckoutForm = () => {
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
        <InputDefault width={200} type="text" placeholder="CEP" />
        <InputDefault type="text" placeholder="Rua" />
        <div style={{ display: 'flex', gap: '.75rem' }}>
          <InputDefault type="number" placeholder="Número" width={200} />
          <ContainerOpcional htmlFor="complemento">
            <InputDefault
              type="text"
              placeholder="Complemento"
              id="complemento"
            />
          </ContainerOpcional>
        </div>
        <div style={{ display: 'flex', gap: '.75rem' }}>
          <InputDefault type="text" placeholder="Bairro" width={200} />
          <InputDefault type="text" placeholder="Cidade" />
          <InputDefault type="text" placeholder="UF" width={60} />
        </div>
      </div>
    </CheckoutFormContainer>
  );
};
