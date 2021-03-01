let days = prompt("Введите количество прошедших дней: ");
let remain_days = 100 - days;

if (remain_days % 10 >= 5 || remain_days % 10 === 0 || (remain_days >= 11 && remain_days < 20)){
    console.log("Осталось " + remain_days + " дней");
} else if (remain_days % 10 === 1){
    console.log("Остался " + remain_days + " день");
} else {
    console.log("Осталось " + remain_days + " дня");
}