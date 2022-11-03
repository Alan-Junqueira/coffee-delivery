import { DeliveryInfoCard } from '../../components/DeliveryInfoCard';
import {
  CheckoutSuccessContainer,
  Delivery,
  DeliveryInformations
} from './styled';

export const CheckoutSuccess = () => {
  return (
    <CheckoutSuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <Delivery>
        <DeliveryInformations>
          <DeliveryInfoCard
            cardType="delivery"
            deliveryStreet="João Daniel Martinelli"
            deliveryNumber={102}
            deliveryCity="Porto Alegre"
            deliveryDistrict="Farrapos"
            deliveryState="RS"
          />
          <DeliveryInfoCard
            cardType="forecast"
            deliveryForecastInit={20}
            deliveryForecastEnd={30}
          />
          <DeliveryInfoCard
            cardType="payment"
            paymentMethod="Cartão de Crédito"
          />
        </DeliveryInformations>
        <div>
          <img src="/images/delivery.png" alt="" />
        </div>
      </Delivery>
    </CheckoutSuccessContainer>
  );
};
