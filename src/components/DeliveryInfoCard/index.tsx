import { Icon } from '../Icon';
import {
  DeliveryIconMap,
  DeliveryInfoCardContainer,
  DeliveryDetails,
  DeliveryIconForecast,
  DeliveryIconCurrencyDollar
} from './styled';

interface IDeliveryInfoCard {
  cardType: 'delivery' | 'forecast' | 'payment';
  deliveryStreet?: string;
  deliveryNumber?: number;
  deliveryDistrict?: string;
  deliveryCity?: string;
  deliveryState?: string;
  deliveryForecastInit?: number;
  deliveryForecastEnd?: number;
  paymentMethod?: string;
}

export const DeliveryInfoCard = ({
  cardType,
  deliveryCity,
  deliveryDistrict,
  deliveryForecastEnd,
  deliveryForecastInit,
  deliveryNumber,
  deliveryState,
  deliveryStreet,
  paymentMethod
}: IDeliveryInfoCard) => {
  return (
    <DeliveryInfoCardContainer>
      {cardType === 'delivery' && (
        <>
          <DeliveryIconMap>
            <Icon icon="mapFill" iconColor="#FAFAFA" size={18} />
          </DeliveryIconMap>
          <DeliveryDetails>
            <span>
              Entrega em{' '}
              <strong>
                Rua {deliveryStreet}, {deliveryNumber}
              </strong>
            </span>
            <span>
              {deliveryDistrict} - {deliveryCity}, {deliveryState}
            </span>
          </DeliveryDetails>
        </>
      )}

      {cardType === 'forecast' && (
        <>
          <DeliveryIconForecast>
            <Icon icon="timer" iconColor="#FAFAFA" size={18} />
          </DeliveryIconForecast>
          <DeliveryDetails>
            <span>Previsão de entrega</span>
            <strong>
              {deliveryForecastInit} min - {deliveryForecastEnd} min
            </strong>
          </DeliveryDetails>
        </>
      )}
      {cardType === 'payment' && (
        <>
          <DeliveryIconCurrencyDollar>
            <Icon icon="currencyDolar" iconColor="#FAFAFA" size={18} />
          </DeliveryIconCurrencyDollar>
          <DeliveryDetails>
            <span>Pagamento na entrega</span>
            <strong>{paymentMethod}</strong>
          </DeliveryDetails>
        </>
      )}
    </DeliveryInfoCardContainer>
  );
};
