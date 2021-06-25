"use strict";

function solveEquation(a, b, c) {
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant === 0) {
    return [-b / (2 * a)]
  } else if (discriminant > 0) {
    return [
      (-b + Math.sqrt(discriminant)) / (2 * a),
      (-b - Math.sqrt(discriminant)) / (2 * a)
    ]
  } else if (discriminant < 0) return [];
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  const percentClean = Number(percent);
  const contributionClean = Number(contribution);
  const amountClean = Number(amount);
  const dateNow = new Date()
  if (isNaN(percentClean)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  }

  if (isNaN(contributionClean)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  }

  if (isNaN(amountClean)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }

  const loanBody = amountClean - contributionClean;

  const loanTermInMonths = date.getMonth() - dateNow.getMonth() +
    (12 * (date.getFullYear() - dateNow.getFullYear()));
  const P = percentClean / 100 / 12;
  const payment = loanBody * (P + P / ((Math.pow(1 + P, loanTermInMonths)) - 1));
  totalAmount = payment * loanTermInMonths;
  return Number(totalAmount.toFixed(2));
}
