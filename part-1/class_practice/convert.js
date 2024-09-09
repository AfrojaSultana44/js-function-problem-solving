// 12 feet 1 inch

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

// 75 inch

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch ";
  return result;
}

const myHeight = inchToFeet(66);
// console.log("myHeight:", myHeight);

const myHeight2 = inchToFeet2(75);
// console.log("myHeight2:", myHeight2);

function milesToKiloMeter(miles) {
  const kilo = miles * 1.60934;
  return kilo;
}

const kilometer = milesToKiloMeter(265);
// console.log("kilometer:",kilometer)

function kilometerToMiles(kilo) {
  const miles = kilo * 0.621371;
  return miles;
}

const mile = kilometerToMiles(426);
console.log("mile:", mile);
