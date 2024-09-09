function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const totalChairWood = perChairWood * chairQuantity;
  const totalTableWood = perTableWood * tableQuantity;
  const totalBedWood = perBedWood * bedQuantity;

  const totalWood = totalChairWood + totalTableWood + totalBedWood;
  return totalWood;
}

const wood = woodQuantity(1, 1, 4);
console.log("wood needed:", wood);
