import styled from 'styled-components';

export const CheckoutLabelContainer = styled.label`
  display: grid;
  grid-template-areas:
    'icon title'
    'icon subtitle';
  grid-template-columns: 1.875rem 1fr;
`;

export const CheckoutLabelIconContainer = styled.div`
  grid-area: icon;

  margin-right: 0.5rem;
`;

export const CheckoutLabelTitle = styled.h3`
  grid-area: title;

  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const CheckoutLabelSubtitle = styled.p`
  grid-area: subtitle;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
`;
