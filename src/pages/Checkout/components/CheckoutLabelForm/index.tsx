import { Icon } from '../../../../components/Icon';
import {
  CheckoutLabelContainer,
  CheckoutLabelIconContainer,
  CheckoutLabelSubtitle,
  CheckoutLabelTitle
} from './styled';

interface ICheckoutLabelForm {
  icon: 'mapPinLine' | 'currencyDolar';
  title: string;
  subtitle: string;
}

export const CheckoutLabelForm = ({
  icon,
  subtitle,
  title
}: ICheckoutLabelForm) => {
  return (
    <CheckoutLabelContainer>
      <CheckoutLabelIconContainer>
        {icon === 'mapPinLine' && (
          <Icon icon="mapPinLine" iconColor="#C47F17" size={22} />
        )}
        {icon === 'currencyDolar' && (
          <Icon icon="currencyDolar" iconColor="#8047F8" size={22} />
        )}
      </CheckoutLabelIconContainer>

      <CheckoutLabelTitle>{title}</CheckoutLabelTitle>

      <CheckoutLabelSubtitle>{subtitle}</CheckoutLabelSubtitle>
    </CheckoutLabelContainer>
  );
};
