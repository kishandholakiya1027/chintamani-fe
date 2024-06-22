export function convertUSD(
  usdAmount: number,
  targetCurrency: string,
  rate: any
) {
  let conversionRate;
  let currencySign;

  const currencySigns: { [key: string]: string } = {
    GBP: "£",
    Euro: "€",
    INR: "₹",
    USD: "$",
  };

  switch (targetCurrency) {
    case "GBP":
      conversionRate = rate;
      currencySign = currencySigns["GBP"];
      break;
    case "EUR":
      conversionRate = rate;
      currencySign = currencySigns["Euro"];
      break;
    case "INR":
      conversionRate = rate;
      currencySign = currencySigns["INR"];
      break;
    default:
      conversionRate = 1;
      currencySign = currencySigns["USD"];
      break;
  }

  const convertedAmount = usdAmount * conversionRate;

  const formattedResult = `${currencySign}${convertedAmount.toFixed(2)}`;

  return formattedResult;
}
