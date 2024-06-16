function generateFibonacciSeries(limit) {
  let num1 = 0,
    num2 = 1;
  let fibonacciSeries = [num1, num2];

  for (let i = 2; i < limit; i++) {
    let nextNum = num1 + num2;
    fibonacciSeries.push(nextNum);
    num1 = num2;
    num2 = nextNum;
  }

  console.log(fibonacciSeries.join(", "));
}

generateFibonacciSeries(10);
