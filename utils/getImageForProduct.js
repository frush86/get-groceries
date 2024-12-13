import { bottles as bootleNames } from "./bottles";
import { veggies as veggieNames } from "./veggies";

export function getImageForProduct(name) {
  const categories = {
    eggs: ["eier", "eggs", "eggs"],
    cheese: ["käse", "cheese", "camembert", "mozzarella"],
    milk: ["milch", "milk", "sahne", "hafermilch", "oatmilk", "butter"],
    bottles: bootleNames,
    veggies: veggieNames,
  };

  const veggiesIcon = "/icons/vegetables.png";
  const bottlesIcon = "/icons/wineBottles.png";
  const cheeseIcon = "/icons/cheese.png";
  const eggsIcon = "/icons/eggs.png";
  const milkIcon = "/icons/milk.png";

  const images = {
    veggies: veggiesIcon,
    bottles: bottlesIcon,
    cheese: cheeseIcon,
    eggs: eggsIcon,
    milk: milkIcon,
  };

  const productImages = Object.entries(categories).reduce(
    (acc, [category, items]) => {
      items.forEach((item) => {
        acc[item.toLowerCase()] = images[category];
      });
      return acc;
    },
    {}
  );

  return productImages[name.toLowerCase()] || "/icons/unknown.png";
}
