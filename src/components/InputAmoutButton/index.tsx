import React, { useState } from 'react';
import { InputAmountButtonContainer } from './styled';
import minus from './minus.svg';
import plus from './plus.svg';
import { useFormatter } from '../../hooks/useFormatter';

export const InputAmountButton = () => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const formatter = useFormatter();

  return (
    <InputAmountButtonContainer>
      <button onClick={() => setCartQuantity(cartQuantity - 1)}>
        <img src={minus} alt="" />
      </button>
      <span>{formatter.formatQuantity(cartQuantity, 2)}</span>
      <button onClick={() => setCartQuantity(cartQuantity + 1)}>
        <img src={plus} alt="" />
      </button>
    </InputAmountButtonContainer>
  );
};
