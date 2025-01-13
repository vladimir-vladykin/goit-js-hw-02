function getShippingCost(country) {
  let allowedCountry;
  let cost;

  switch (country) {
    case "Australia":
      allowedCountry = country;
      cost = 170;
      break;
    case "China":
      allowedCountry = country;
      cost = 100;
      break;
    case "Chile":
      allowedCountry = country;
      cost = 250;
      break;
    case "Jamaica":
      allowedCountry = country;
      cost = 120;
      break;
    default:
      allowedCountry = null;
  }

  return allowedCountry
    ? `Shipping to ${allowedCountry} will cost ${cost} credits`
    : "Sorry, there is no delivery to your country";
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
console.log("----------------"); // to have nice padding between tasks output in console
