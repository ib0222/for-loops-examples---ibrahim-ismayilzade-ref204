function generatePyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let row = '';

        for (let j = 0; j < rows - i - 1; j++) {
            row += ' ';
        }

        for (let j = 0; j <= i; j++) {
            row += String.fromCharCode(65 + j); 
        }

        for (let j = i - 1; j >= 0; j--) {
            row += String.fromCharCode(65 + j);
        }

        console.log(row);
    }
}

generatePyramid(5); 