import { bottles as bottleNames } from "./bottles";
import { veggies as veggieNames } from "./veggies";
import { flour as flourNames } from "./flour";
import { spices as spicesName } from "./spices";

export const categories = {
  eggs: ["eier", "eggs"],
  cheese: ["käse", "cheese", "camembert", "mozzarella"],
  milk: ["milch", "milk", "sahne", "hafermilch", "oatmilk", "butter"],
  bottles: bottleNames,
  veggies: veggieNames,
  peanutButter: [
    "peanutbutter",
    "peanut butter",
    "erdnussbutter",
    "erdnuss butter",
  ],
  pasta: ["nudeln", "pasta", "ramen", "noodles"],
  flour: flourNames,
  spices: spicesName,
};
export const icons = {
  eggs: "/icons/eggs.png",
  cheese: "/icons/cheese.png",
  milk: "/icons/milk.png",
  bottles: "/icons/wineBottles.png",
  veggies: "/icons/vegetables.png",
  peanutButter: "/icons/peanutButter.png",
  pasta: "/icons/pasta.png",
  flour: "/icons/flour.png",
  spices: "/icons/spices.png",
};
export function getImageForProduct(name) {
  const images = Object.fromEntries(
    Object.keys(categories).map((key) => [key, icons[key]])
  );

  const productImages = Object.entries(categories).reduce(
    (acc, [category, items]) => {
      items.forEach((item) => {
        acc[item.toLowerCase()] = images[category];
      });
      return acc;
    },
    {}
  );

  const productName = name.trim().toLowerCase();
  if (!productImages[productName]) {
    console.warn(`No icon found for product: ${productName}`);
  }

  return productImages[productName] || "/icons/shoppingCart.png";
}
