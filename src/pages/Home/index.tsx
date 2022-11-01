import { CoffeesSection, HomeContainer } from './styled';
import { CoffeeCard } from '../../components/CoffeeCard';

export const Home = () => {
  return (
    <HomeContainer>
      <main>Main</main>
      <hr />
      <CoffeesSection>
        <h2>Nossos Cafés</h2>
        <ul>
          <CoffeeCard
            banner="/images/Type=Americano.png"
            price={9.9}
            subtitle="O tradicional café feito com água quente e grãos moídos"
            tags={['tradicional']}
            title="Expresso Tradicional"
          />

          <CoffeeCard
            banner="/images/Type=Americano.png"
            price={9.9}
            subtitle="Expresso diluído, menos intenso que o tradicional"
            tags={['tradicional']}
            title="Expresso Americano"
          />

          <CoffeeCard
            banner="/images/Type=Americano.png"
            price={9.9}
            subtitle="Café expresso tradicional com espuma cremosa"
            tags={['especial', 'alcoólico', 'gelado']}
            title="Expresso Cremoso"
          />
        </ul>
      </CoffeesSection>
    </HomeContainer>
  );
};
