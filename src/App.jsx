import { React, useState } from "react";
import { Nav } from "../navbar/Nav";
import { Card } from "../Components/Card";
import { Footer } from "../footer/Footer";
import { Section } from "../section/Section";
import "./App.css";
import data from "../Database/itemlist";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cartCount, setCartCount] = useState(null);  
  const [items, setItems] = useState(data);

  const addToCartCount = () => {
    setCartCount((cartCount) => cartCount + 1);
  };

  const modal = (e) => {
    e.preventDefault()
    alert('hello modal')
  }

  return (
    <main>
      <nav>
        <Nav cartCount={cartCount}/>
      </nav>
      <header></header>
      <Section />
      <section>
        {items.map((item) => {
          return (
            <Card
              key={uuidv4()}
              img={item.image}
              title={item.title}
              desc={item.description}
              beforePrice={item.beforePrice}
              price={item.price}
              ratings={item.rating}
              addToCart={addToCartCount}
              modal={modal}
            />
          );
        })}
      </section>

      <Footer />
    </main>
  );
}

export default App;
