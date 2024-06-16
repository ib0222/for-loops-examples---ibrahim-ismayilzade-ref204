function generatePattern(rows) {
  for (let i = rows; i >= 1; i--) {
    let line = "";

    for (let j = 1; j <= i; j++) {
      line += "* ";
    }

    console.log(line);
  }
}

generatePattern(9);
