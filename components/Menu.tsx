import React from "react";
import Separator from "./Separator";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Expresso",
    description: "Rich and bold shot of coffee",
    price: 3.3,
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Cappuccino",
    description: "Expresso with steamed milk and foam",
    price: 4.5,
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Latte",
    description: "Expresso with steamed milk and foam",
    price: 4.3,
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Americano",
    description: "Expresso with steamed milk and foam",
    price: 4.0,
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Mocha",
    description: "Expresso with steamed milk and foam",
    price: 5.5,
  },
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Macchiato",
    description: "Expresso with steamed milk and foam",
    price: 5.5,
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Flat white",
    description: "Expresso with steamed milk and foam",
    price: 5.5,
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Iced coffee",
    description: "Expresso with steamed milk and foam",
    price: 5.5,
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Affogato",
    description: "Expresso with steamed milk and foam",
    price: 5.5,
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Irish Coffee",
    description: "Expresso with steamed milk and foam",
    price: 5.5,
  },
];
function Menu() {
  return (
    <section className="pt-12 pb-16 xl:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Nuestro Menú</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          <p className="text-center max-w-[620px] mx-auto">
            Disfrute de una amplia variedad de bebidas de café y té, así como
            deliciosos bocadillos y postres.
          </p>
        </div>
        <div className="flex flex-col items-center gap-12 xl:gap-24">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                imgSrc={item.imgSrc}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
          <button className="btn">Ver todo el menú</button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
