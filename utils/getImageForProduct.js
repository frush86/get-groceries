export function getImageForProduct(name) {
  const veggies = "/icons/vegetables.png";
  const bottles = "/icons/wineBottles.png";
  const cheese = "/icons/cheese.png";

  const categories = {
    veggies: [
      "apple",
      "apfel",
      "orange",
      "orangen",
      "banana",
      "carrot",
      "potato",
      "obst",
      "birnen",
    ],
    bottles: ["wein", "wasser", "bier", "saft", "juice"],
    cheese: ["käse", "cheese", "camembert"],
  };

  const images = Object.fromEntries(
    Object.entries(categories).flatMap(([icon, keys]) =>
      keys.map((key) => [key, eval(icon)])
    )
  );

  return images[name.toLowerCase()] || "/icons/unknown.png";
}
