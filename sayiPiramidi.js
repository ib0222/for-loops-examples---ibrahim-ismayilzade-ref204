function generateCenteredPyramid() {
  let rows = 4;
  let num = 1;

  for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= rows - i; j++) {
      row += " ";
    }

    for (let k = 1; k <= i; k++) {
      row += num + " ";
      num++;
    }

    console.log(row);
  }
}

generateCenteredPyramid();
