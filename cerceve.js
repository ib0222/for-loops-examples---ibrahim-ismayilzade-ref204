let size = 8;

for (let row = 0; row < size; row++) {
  let line = "";
  for (let col = 0; col < size; col++) {
    if (row === 0 || row === size - 1 || col === 0 || col === size - 1) {
      line += "* ";
    } else {
      line += "  ";
    }
  }
  console.log(line);
}
