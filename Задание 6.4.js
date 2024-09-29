const field = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
  ];
  
  for (let i = 0; i < field.length; i++) {
    let row = '';
    for (let j = 0; j < field[i].length; j++) {
      row += field[i][j] + ' ';
    }
    console.log(row.trim());
  }