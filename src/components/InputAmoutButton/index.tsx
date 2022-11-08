import { InputAmountButtonContainer } from './styled';
import { useFormatter } from '../../hooks/useFormatter';
import { Icon } from '../Icon';

interface IInputAmountButton {
  small: boolean;
  setAmountQuantity: (quantity: number) => void;
  amountQuantity: number;
}

export const InputAmountButton = ({
  amountQuantity,
  setAmountQuantity,
  small
}: IInputAmountButton) => {
  const formatter = useFormatter();

  function handleMinusClick() {
    if (amountQuantity > 0) {
      setAmountQuantity(amountQuantity - 1);
    } else {
      return;
    }
  }

  function handlePlusClick() {
    setAmountQuantity(amountQuantity + 1);
  }

  return (
    <InputAmountButtonContainer small={small}>
      <button onClick={handleMinusClick}>
        <Icon icon="minus" iconColor="#8047F8" />
      </button>
      <span>{formatter.formatQuantity(amountQuantity, 2)}</span>
      <button onClick={handlePlusClick}>
        <Icon icon="plus" iconColor="#8047F8" />
      </button>
    </InputAmountButtonContainer>
  );
};
