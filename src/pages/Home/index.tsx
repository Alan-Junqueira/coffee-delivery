import {
  Branding,
  BrandItens,
  CoffeesSection,
  HomeContainer,
  HomeTitle
} from './styled';
import { CoffeeCard } from '../../components/CoffeeCard';
import { BrandIten } from './BrandIten';
import { coffeList } from '../../libs/coffeeList';

export const Home = () => {
  return (
    <HomeContainer>
      <main>
        <Branding>
          <HomeTitle>
            Encontre o café perfeito para qualquer hora do dia
          </HomeTitle>
          <div>
            <BrandItens>
              <BrandIten icon="cart" description="Compra simples e segura" />
              <BrandIten
                icon="timer"
                description="Entrega rápida e rastreada"
              />
            </BrandItens>
            <BrandItens>
              <BrandIten
                icon="package"
                description="Embalagem mantém o café intacto"
              />

              <BrandIten
                icon="coffee"
                description="O café chega fresquinho até você"
              />
            </BrandItens>
          </div>
        </Branding>
        <img src="images/home-coffee-brand.png" alt="" />
      </main>
      <CoffeesSection>
        <h2>Nossos Cafés</h2>
        <ul>
          {coffeList.map((coffee, index) => (
            <CoffeeCard
              banner={coffee.banner}
              price={coffee.price}
              subtitle={coffee.subtitle}
              tags={coffee.tags}
              title={coffee.title}
              key={index}
            />
          ))}
        </ul>
      </CoffeesSection>
    </HomeContainer>
  );
};
