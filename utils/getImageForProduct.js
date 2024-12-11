export function getImageForProduct(name) {
  const obstGemüse = "/icons/vegetables.png";
  const bottles = "/icons/wineBottles.png";
  const images = {
    apple: obstGemüse,
    apfel: obstGemüse,
    orange: obstGemüse,
    banana: obstGemüse,
    carrot: obstGemüse,
    potato: obstGemüse,
    obst: obstGemüse,
    //
    wein: bottles,
    wasser: bottles,
    bier: bottles,
  };

  return images[name.toLowerCase()] || "/icons/unknown.png";
}
