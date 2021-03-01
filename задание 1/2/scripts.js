for (let i = 1; i <= 9; i++){
    let row = '';
    for (let t = 1; t <= 9; t++){
        row += (t * i) + ' ';
    }
    console.log(row)
}