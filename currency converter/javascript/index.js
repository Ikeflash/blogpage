// Static conversion rates (example: 1 USD = X)
const exchangeRates = {
  USD: { USD: 1, EUR: 0.91, NGN: 1534, GBP: 0.78 },
  EUR: { USD: 1.1, EUR: 1, NGN: 1800, GBP: 0.86 },
  NGN: { USD: 0.00051, EUR: 0.00055, NGN: 1, GBP: 0.00046 },
  GBP: { USD: 1.28, EUR: 1.17, NGN: 1800, GBP: 1 },
};

document.getElementById("convert-btn").addEventListener("click", function () {
  const from = document.getElementById("from-currency").value;
  const to = document.getElementById("to-currency").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const resultBox = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    resultBox.textContent = "Please enter a valid amount.";
    return;
  }

  const rate = exchangeRates[from][to];
  const converted = (amount * rate).toFixed(2);

  resultBox.textContent = `${amount} ${from} = ${converted} ${to}`;
});
