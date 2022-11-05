import { CheckoutForm } from './components/CheckoutForm';

export const Checkout = () => {
  return (
    <div>
      <main>
        <h2>Complete seu pedido</h2>
        <CheckoutForm />
      </main>
      <section>
        <h2>Cafés selecionados</h2>
      </section>
    </div>
  );
};
